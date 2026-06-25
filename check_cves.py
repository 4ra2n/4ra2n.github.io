#!/usr/bin/env python3
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
README = ROOT / "README.md"
APP_JS = ROOT / "assets" / "js" / "app.js"


def parse_readme():
    text = README.read_text(encoding="utf-8")
    rows = []
    in_table = False
    for line in text.splitlines():
        stripped = line.strip()
        if stripped.startswith("|") and stripped.endswith("|"):
            if re.match(r"^\|[\s:|-]+\|$", stripped):
                in_table = True
                continue
            if not in_table:
                if "CVE-ID" in stripped:
                    continue
            cells = [c.strip() for c in stripped.strip("|").split("|")]
            if len(cells) < 5:
                continue
            vendor, product, cve_cell, vtype, cvss = cells[0], cells[1], cells[2], cells[3], cells[4]
            m = re.search(r"\[([^\]]+)\]\(([^)]+)\)", cve_cell)
            if not m:
                continue
            cve_id, url = m.group(1).strip(), m.group(2).strip()
            rows.append((vendor, product, cve_id, url, vtype, cvss))
        else:
            if in_table:
                in_table = False
    return rows


def parse_app_js():
    text = APP_JS.read_text(encoding="utf-8")
    m = re.search(r"const cves = \[(.*?)\]\.map", text, re.DOTALL)
    if not m:
        raise RuntimeError("无法在 app.js 中定位 cves 数组")
    body = m.group(1)
    rows = []
    for row_match in re.finditer(r"\[([^\]]+)\]", body):
        raw = row_match.group(1)
        fields = re.findall(r'"((?:[^"\\]|\\.)*)"', raw)
        if len(fields) < 6:
            continue
        vendor, product, cve_id, url, vtype, cvss = [f.strip() for f in fields[:6]]
        rows.append((vendor, product, cve_id, url, vtype, cvss))
    return rows


def norm(s):
    return re.sub(r"\s+", " ", s.strip())


def main():
    if not README.exists():
        print(f"错误: 找不到 {README}")
        return 1
    if not APP_JS.exists():
        print(f"错误: 找不到 {APP_JS}")
        return 1

    readme_rows = parse_readme()
    js_rows = parse_app_js()

    print(f"README  CVE 条目数: {len(readme_rows)}")
    print(f"app.js  CVE 条目数: {len(js_rows)}")
    print("-" * 60)

    diffs = []

    if len(readme_rows) != len(js_rows):
        diffs.append(f"数量不一致: README={len(readme_rows)} app.js={len(js_rows)}")

    n = max(len(readme_rows), len(js_rows))
    for i in range(n):
        r = readme_rows[i] if i < len(readme_rows) else None
        j = js_rows[i] if i < len(js_rows) else None
        if r is None:
            diffs.append(f"第 {i+1} 行: app.js 多出 {j[2]} ({j[0]} / {j[1]})")
            continue
        if j is None:
            diffs.append(f"第 {i+1} 行: README 多出 {r[2]} ({r[0]} / {r[1]})")
            continue

        if r[2] != j[2]:
            diffs.append(f"第 {i+1} 行 CVE-ID 不一致: README={r[2]} app.js={j[2]}")
        if r[3] != j[3]:
            diffs.append(f"第 {i+1} 行 {r[2]} URL 不一致:\n    README={r[3]}\n    app.js={j[3]}")
        for idx, name in ((0, "Vendor"), (1, "Product"), (4, "Type"), (5, "CVSS")):
            if norm(r[idx]) != norm(j[idx]):
                diffs.append(
                    f"第 {i+1} 行 {r[2]} {name} 不一致: README={r[idx]!r} app.js={j[idx]!r}"
                )

    readme_ids = [r[2] for r in readme_rows]
    js_ids = [j[2] for j in js_rows]
    if readme_ids != js_ids:
        diffs.append("CVE 顺序与 README 不一致（详见上方各行 CVE-ID 比对）")

    print("-" * 60)
    if not diffs:
        print("✅ 完全匹配: app.js 的 CVE 列表与 README 表格一致（顺序、字段、URL 全部核对通过）")
        return 0
    else:
        print(f"❌ 发现 {len(diffs)} 处差异:")
        for d in diffs:
            print(f"  - {d}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
