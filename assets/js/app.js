const cves = [
  ["Apache", "Log4j2", "CVE-2021-45046", "https://logging.apache.org/security.html#CVE-2021-45046", "RCE", "9.0 CRITICAL"],
  ["Spring", "Spring Framework", "CVE-2022-22950", "https://spring.io/security/cve-2022-22950", "拒绝服务", "6.5 MEDIUM"],
  ["Oracle", "WebLogic", "CVE-2022-21441", "https://www.oracle.com/security-alerts/cpuapr2022.html", "拒绝服务", "7.5 HIGH"],
  ["Apache", "Tomcat", "CVE-2022-29885", "https://lists.apache.org/thread/2b4qmhbcyqvc7dyfpjyx54c03x65vhcv", "拒绝服务", "7.5 HIGH"],
  ["Apache", "Shiro", "CVE-2022-32532", "https://lists.apache.org/thread/y8260dw8vbm99oq7zv6y3mzn5ovk90xh", "身份验证绕过", "9.8 CRITICAL"],
  ["Oracle", "WebLogic", "CVE-2022-21557", "https://www.oracle.com/security-alerts/cpujul2022.html", "RCE", "5.7 MEDIUM"],
  ["Oracle", "WebLogic", "CVE-2022-21560", "https://www.oracle.com/security-alerts/cpujul2022.html", "拒绝服务", "5.3 MEDIUM"],
  ["Oracle", "SOA Suite", "CVE-2022-21562", "https://www.oracle.com/security-alerts/cpujul2022.html", "RCE", "7.5 HIGH"],
  ["Oracle", "WebLogic", "CVE-2022-21564", "https://www.oracle.com/security-alerts/cpujul2022.html", "拒绝服务", "5.3 MEDIUM"],
  ["Oracle", "Siebel CRM", "CVE-2022-21598", "https://www.oracle.com/security-alerts/cpuoct2022.html", "RCE", "7.5 HIGH"],
  ["Oracle", "WebLogic", "CVE-2022-21616", "https://www.oracle.com/security-alerts/cpuoct2022.html", "拒绝服务", "5.2 MEDIUM"],
  ["Oracle", "SOA Suite", "CVE-2022-21622", "https://www.oracle.com/security-alerts/cpuoct2022.html", "RCE", "7.5 HIGH"],
  ["Oracle", "Enterprise Manager", "CVE-2022-21623", "https://www.oracle.com/security-alerts/cpuoct2022.html", "RCE", "7.5 HIGH"],
  ["Apache", "Causeway", "CVE-2022-42466", "https://lists.apache.org/thread/m3qvks78moblh7q2nbbhc5mzy9ckcrcn", "存储XSS", "6.1 MEDIUM"],
  ["Apache", "Batik", "CVE-2022-41704", "https://lists.apache.org/thread/4ybxj4vk0vqoj1hwjmvqdhf780cqzh8p", "RCE", "7.5 HIGH"],
  ["Apache", "Batik", "CVE-2022-42890", "https://lists.apache.org/thread/xrfth92gq7hz896l4fygjwq31yrn2xsz", "RCE", "7.5 HIGH"],
  ["Apache", "ManifoldCF", "CVE-2022-45910", "https://lists.apache.org/thread/ps32gd7y5cqtzz73kszsdxkk63oxqnso", "信息泄露", "5.3 MEDIUM"],
  ["Apache", "DolphinScheduler", "CVE-2022-45875", "https://lists.apache.org/thread/dj6xj1xv1x0sxm9mx1x7kvr2nb45n3w8", "RCE", "9.8 CRITICAL"],
  ["Apache", "DolphinScheduler", "CVE-2023-49109", "https://lists.apache.org/thread/llnghrd72gbfhwh4tn68zvl1hzl9gxn6", "RCE", "9.8 CRITICAL"],
  ["Oracle", "BI Publisher", "CVE-2023-21832", "https://www.oracle.com/security-alerts/cpujan2023.html", "RCE", "8.8 HIGH"],
  ["Oracle", "WebLogic", "CVE-2023-21839", "https://www.oracle.com/security-alerts/cpujan2023.html", "RCE", "7.5 HIGH"],
  ["Oracle", "BI Publisher", "CVE-2023-21846", "https://www.oracle.com/security-alerts/cpujan2023.html", "RCE", "8.8 HIGH"],
  ["Apache", "Kafka", "CVE-2023-25194", "https://lists.apache.org/thread/rn8vn4d9dbxc6817c5wz1dhhoshp1s25", "RCE", "8.8 HIGH"],
  ["Apache", "Airflow", "CVE-2023-28706", "https://lists.apache.org/thread/518bzfxql7zwnlpp7ktdjn9ndsfzpqk2", "RCE", "9.8 CRITICAL"],
  ["Oracle", "WebLogic", "CVE-2023-21931", "https://www.oracle.com/security-alerts/cpuapr2023.html", "RCE", "7.5 HIGH"],
  ["Oracle", "WebLogic", "CVE-2023-21960", "https://www.oracle.com/security-alerts/cpuapr2023.html", "拒绝服务", "5.6 MEDIUM"],
  ["Oracle", "WebLogic", "CVE-2023-21964", "https://www.oracle.com/security-alerts/cpuapr2023.html", "拒绝服务", "7.5 HIGH"],
  ["Oracle", "WebLogic", "CVE-2023-21979", "https://www.oracle.com/security-alerts/cpuapr2023.html", "RCE", "7.5 HIGH"],
  ["Oracle", "WebLogic", "CVE-2023-22031", "https://www.oracle.com/security-alerts/cpujul2023.html", "拒绝服务", "4.4 MEDIUM"],
  ["Apache", "Airflow", "CVE-2023-39553", "https://lists.apache.org/thread/tjlwk10odmgcd0t48qpsoprlgny6tbv0", "文件读取", "7.5 HIGH"],
  ["Oracle", "WebLogic", "CVE-2023-22069", "https://www.oracle.com/security-alerts/cpuoct2023.html", "RCE", "9.8 CRITICAL"],
  ["Oracle", "WebLogic", "CVE-2023-22086", "https://www.oracle.com/security-alerts/cpuoct2023.html", "RCE", "7.5 HIGH"],
  ["Oracle", "WebLogic", "CVE-2023-22089", "https://www.oracle.com/security-alerts/cpuoct2023.html", "RCE", "9.8 CRITICAL"],
  ["Apache", "Helix", "CVE-2023-38647", "https://lists.apache.org/thread/ozhkchy7ngy8zgjbbn6pfjjh0ppcqvb9", "RCE", "9.8 CRITICAL"],
  ["Apache", "Kerby", "CVE-2023-25613", "https://lists.apache.org/thread/ymptwbossopmvqhowjo7cm7j6o2hwr2t", "信息泄露", "9.8 CRITICAL"],
  ["Apache", "Linkis", "CVE-2023-27603", "https://lists.apache.org/thread/6ynotvjvvwyj6lsctfxt42x7wrtks1z2", "RCE", "9.8 CRITICAL"],
  ["Apache", "InLong", "CVE-2023-34434", "https://lists.apache.org/thread/390fwst87m9tpmpgx73n61ypcvvvxd9j", "文件读取", "7.5 HIGH"],
  ["Metabase", "Metabase", "CVE-2023-37470", "https://github.com/metabase/metabase/security/advisories/GHSA-p7w3-9m58-rq83", "RCE", "9.8 CRITICAL"],
  ["Apache", "Derby", "CVE-2022-46337", "https://lists.apache.org/thread/q23kvvtoohgzwybxpwozmvvk17rp0td3", "信息泄露", "9.8 CRITICAL"],
  ["Apache", "Solr", "CVE-2023-50298", "https://lists.apache.org/thread/lz0obpo1y4xh8xgnw2sylkpcqbs670vy", "信息泄露", "7.5 HIGH"],
  ["Oracle", "WebLogic", "CVE-2024-21006", "https://www.oracle.com/security-alerts/cpuapr2024.html", "RCE", "7.5 HIGH"],
  ["Apache", "OFBiz", "CVE-2024-38856", "https://lists.apache.org/thread/lmckgos5s5prfdqfctqskkqnpkcgdb06", "RCE", "9.8 CRITICAL"],
  ["Oracle", "FMW Installer", "CVE-2024-21190", "https://www.oracle.com/security-alerts/cpuoct2024.html", "RCE", "7.5 HIGH"],
  ["Apache", "ZooKeeper", "CVE-2024-51504", "https://lists.apache.org/thread/dgvx1vr8jy69d65lrsl357lqvmb4wfw6", "身份验证绕过", "9.1 CRITICAL"],
  ["Apache", "Ambari", "CVE-2024-51941", "https://lists.apache.org/thread/91p3h18mn6dwx93k9fw8tyy37lpwd1y2", "RCE", "8.8 HIGH"],
  ["Apache", "Zeppelin", "CVE-2024-31867", "https://lists.apache.org/thread/xfvzrm9btw2jmthfblx5qb2848f21gby", "信息泄露", "6.5 MEDIUM"],
  ["Apache", "Kafka", "CVE-2025-27817", "https://lists.apache.org/thread/ok29h7h0l5hwpoq9v4nlfngvzz71ndvs", "文件读取", "7.5 HIGH"],
  ["Apache", "Kafka", "CVE-2025-27818", "https://lists.apache.org/thread/zc9v12hb4kt2twzxqmhn5t1psp38vbsn", "RCE", "8.8 HIGH"],
  ["Apache", "Shiro", "CVE-2026-23901", "https://lists.apache.org/thread/mm1jct9b86jvnh3y44tj22xvjtx3xhhh", "时序侧信道", "2.5 LOW"],
  ["Apache", "OpenMeetings", "CVE-2026-34020", "https://lists.apache.org/thread/jn6qvcs8g0gv46oso0pb9fk3xvq9wz1h", "信息泄露", "7.5 HIGH"],
  ["Apache", "OpenMeetings", "CVE-2026-33266", "https://lists.apache.org/thread/vrjg6o9c1nnmhn64vr316voph303lt4c", "信息泄露", "7.5 HIGH"],
  ["Apache", "OpenMeetings", "CVE-2026-33005", "https://lists.apache.org/thread/d5mcsdvdm1yj62bk68rl5890lopf6w94", "逻辑漏洞", "4.3 MEDIUM"],
  ["Oracle", "MySQL", "CVE-2026-34317", "https://www.oracle.com/security-alerts/cpuapr2026.html", "拒绝服务", "5.0 MEDIUM"],
  ["Oracle", "MySQL", "CVE-2026-34318", "https://www.oracle.com/security-alerts/cpuapr2026.html", "信息泄露", "5.8 MEDIUM"],
  ["Oracle", "MySQL", "CVE-2026-34319", "https://www.oracle.com/security-alerts/cpuapr2026.html", "拒绝服务", "5.0 MEDIUM"],
  ["DataEase", "DataEase", "CVE-2026-45534", "https://github.com/dataease/dataease/security/advisories/GHSA-cv4c-8rpv-2x97", "RCE", "HIGH"],
  ["DataEase", "DataEase", "CVE-2026-45532", "https://github.com/dataease/dataease/security/advisories/GHSA-2mqc-w4hm-f3p9", "路径遍历", "HIGH"],
  ["DataEase", "DataEase", "CVE-2026-45419", "https://github.com/dataease/dataease/security/advisories/GHSA-83fh-fgh3-g9f9", "任意文件写入", "HIGH"],
  ["DataEase", "DataEase", "CVE-2026-45417", "https://github.com/dataease/dataease/security/advisories/GHSA-rg6c-r9mv-39fr", "SQL注入", "HIGH"],
  ["Apache", "ActiveMQ", "CVE-2026-42588", "https://lists.apache.org/thread/8dw2wyojfkxhk45sqnbbqpswcxvh7zf7", "RCE", "8.1 HIGH"],
  ["Apache", "ActiveMQ", "CVE-2026-42253", "https://lists.apache.org/thread/rh0nr6shwhgpyhg4xlrkslznc57m87xy", "存储XSS", "6.1 MEDIUM"],
  ["Apache", "Calcite", "CVE-2026-46718", "https://lists.apache.org/thread/qb3bdfd0n15tq73vz8y3x4bry0oswz3b", "RCE", "6.5 MEDIUM"],
  ["Oracle", "MySQL", "CVE-2026-46863", "https://www.oracle.com/security-alerts/cspujun2026.html", "拒绝服务", "7.5 HIGH"],
  ["Apache", "Kvrocks", "CVE-2026-46751", "https://lists.apache.org/thread/rwrb0sz8bdg665cx6jmgxzozwq8bppom", "拒绝服务", "/"],
  ["Apache", "Kvrocks", "CVE-2026-41566", "https://lists.apache.org/thread/njqjzkczgr17c9rdfbcfvxlqxtmpgxcg", "逻辑漏洞", "/"],
].map(([vendor, product, id, url, type, cvss]) => ({ vendor, product, id, url, type, cvss }));

// Display order: README order, bottom-to-top (last README row first).
cves.reverse();

// Credits: newest date first. Title on line 1, the specific date on line 2 — never truncated.
// dateLabel carries the human-readable date string shown on its own line.
const credits = [
  ["OpenJDK", "2023-01", "OpenJDK 安全公告致谢", "OpenJDK Vulnerability Advisory Acknowledgements", "2023年01月", "Jan 2023", "https://openjdk.org/groups/vulnerability/advisories/2023-01-17"],
  ["OpenJDK", "2023-07", "OpenJDK 安全公告致谢", "OpenJDK Vulnerability Advisory Acknowledgements", "2023年07月", "Jul 2023", "https://openjdk.org/groups/vulnerability/advisories/2023-07-18"],
  ["Oracle", "2022-10", "Oracle 深度安全贡献者", "Oracle Security-In-Depth Contributors", "2022年10月", "Oct 2022", "https://www.oracle.com/security-alerts/cpuoct2022.html"],
  ["Oracle", "2023-01", "Oracle 深度安全贡献者", "Oracle Security-In-Depth Contributors", "2023年01月", "Jan 2023", "https://www.oracle.com/security-alerts/cpujan2023.html"],
  ["Oracle", "2023-04", "Oracle 深度安全贡献者", "Oracle Security-In-Depth Contributors", "2023年04月", "Apr 2023", "https://www.oracle.com/security-alerts/cpuapr2023.html"],
  ["Oracle", "2023-07", "Oracle 深度安全贡献者", "Oracle Security-In-Depth Contributors", "2023年07月", "Jul 2023", "https://www.oracle.com/security-alerts/cpujul2023.html"],
  ["Oracle", "2023-10", "Oracle 深度安全贡献者", "Oracle Security-In-Depth Contributors", "2023年10月", "Oct 2023", "https://www.oracle.com/security-alerts/cpuoct2023.html"],
  ["Oracle", "2026-01", "Oracle 深度安全贡献者", "Oracle Security-In-Depth Contributors", "2026年01月", "Jan 2026", "https://www.oracle.com/security-alerts/cpujan2026.html"],
]
  .map(([vendor, date, zh, en, dateZh, dateEn, url]) => ({ vendor, date, zh, en, dateZh, dateEn, url }));

const typeMap = {
  RCE: "RCE",
  拒绝服务: "Denial of Service",
  身份验证绕过: "Auth Bypass",
  存储XSS: "Stored XSS",
  信息泄露: "Information Disclosure",
  文件读取: "File Read",
  时序侧信道: "Timing Side Channel",
  逻辑漏洞: "Logic Bug",
  路径遍历: "Path Traversal",
  任意文件写入: "Arbitrary File Write",
  SQL注入: "SQL Injection",
};

const i18n = {
  zh: {
    "nav.cves": "CVE",
    "nav.credits": "致谢",
    "hero.eyebrow": "A code security AI agent",
    "hero.text": "AI 代码审计 Agent\n— by 4ra1n",
    "metrics.total": "CVE 记录",
    "metrics.rce": "RCE / 代码执行",
    "metrics.critical": "Critical 漏洞",
    "cves.eyebrow": "Exploit Intelligence",
    "cves.title": "CVE",
    "cves.search": "搜索",
    "cves.vendor": "厂商",
    "cves.severity": "级别",
    "table.vendor": "Vendor",
    "table.product": "Product",
    "table.cve": "CVE-ID",
    "table.type": "Type",
    "table.cvss": "CVSS",
    "credits.eyebrow": "Advisory Credits",
    "credits.title": "安全公告致谢",
    "footer.back": "返回顶部",
    all: "全部",
    noResults: "没有匹配的 CVE",
  },
  en: {
    "nav.cves": "CVEs",
    "nav.credits": "Credits",
    "hero.eyebrow": "A code security AI agent",
    "hero.text": "AI Code Audit Agent\n— by 4ra1n",
    "metrics.total": "CVE records",
    "metrics.rce": "RCE / code execution",
    "metrics.critical": "Critical findings",
    "cves.eyebrow": "Exploit Intelligence",
    "cves.title": "CVEs",
    "cves.search": "Search",
    "cves.vendor": "Vendor",
    "cves.severity": "Severity",
    "table.vendor": "Vendor",
    "table.product": "Product",
    "table.cve": "CVE-ID",
    "table.type": "Type",
    "table.cvss": "CVSS",
    "credits.eyebrow": "Advisory Credits",
    "credits.title": "Security Advisory Credits",
    "footer.back": "Back to top",
    all: "All",
    noResults: "No matching CVEs",
  },
};

let currentLang = localStorage.getItem("lang") || "zh";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function severityOf(cvss) {
  if (cvss.includes("CRITICAL")) return "critical";
  if (cvss.includes("HIGH")) return "high";
  if (cvss.includes("MEDIUM")) return "medium";
  if (cvss.includes("LOW")) return "low";
  return "unknown";
}

function labelType(type) {
  return currentLang === "en" ? typeMap[type] || type : type;
}

function applyI18n() {
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  $$("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = i18n[currentLang][key] || node.textContent;
  });
  $$(".language-switch button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });
  $("#cve-search").placeholder = currentLang === "zh" ? "CVE / 厂商 / 产品" : "CVE / Vendor / Product";
  renderFilters();
  renderCves();
  renderCredits();
}

function renderMetrics() {
  $("#metric-total").textContent = cves.length;
  $("#metric-rce").textContent = cves.filter((item) => item.type === "RCE").length;
  $("#metric-critical").textContent = cves.filter((item) => item.cvss.includes("CRITICAL")).length;
}

function renderFilters() {
  const vendorFilter = $("#vendor-filter");
  const severityFilter = $("#severity-filter");
  const selectedVendor = vendorFilter.value;
  const selectedSeverity = severityFilter.value;
  const vendors = [...new Set(cves.map((item) => item.vendor))].sort();
  const severities = ["critical", "high", "medium", "low", "unknown"];

  vendorFilter.innerHTML = `<option value="">${i18n[currentLang].all}</option>${vendors
    .map((vendor) => `<option value="${vendor}">${vendor}</option>`)
    .join("")}`;
  severityFilter.innerHTML = `<option value="">${i18n[currentLang].all}</option>${severities
    .map((severity) => `<option value="${severity}">${severity.toUpperCase()}</option>`)
    .join("")}`;

  vendorFilter.value = selectedVendor;
  severityFilter.value = selectedSeverity;
}

function renderCves() {
  const query = $("#cve-search").value.trim().toLowerCase();
  const vendor = $("#vendor-filter").value;
  const severity = $("#severity-filter").value;
  const rows = cves.filter((item) => {
    const matchesQuery = [item.vendor, item.product, item.id, item.type, item.cvss]
      .join(" ")
      .toLowerCase()
      .includes(query);
    const matchesVendor = !vendor || item.vendor === vendor;
    const matchesSeverity = !severity || severityOf(item.cvss) === severity;
    return matchesQuery && matchesVendor && matchesSeverity;
  });

  $("#cve-table").innerHTML =
    rows
      .map((item) => {
        const severity = severityOf(item.cvss);
        return `<tr>
          <td>${item.vendor}</td>
          <td>${item.product}</td>
          <td><a href="${item.url}" target="_blank" rel="noreferrer">${item.id}</a></td>
          <td>${labelType(item.type)}</td>
          <td><span class="severity ${severity}">${item.cvss}</span></td>
        </tr>`;
      })
      .join("") ||
    `<tr><td colspan="5">${i18n[currentLang].noResults}</td></tr>`;
}

function renderCredits() {
  // Line 1: credit information (link). Line 2: the specific date. Never truncated.
  $("#credit-grid").innerHTML = credits
    .map((credit) => {
      const title = currentLang === "zh" ? credit.zh : credit.en;
      const dateLabel = currentLang === "zh" ? credit.dateZh : credit.dateEn;
      return `<article class="credit-card">
        <a class="credit-title" href="${credit.url}" target="_blank" rel="noreferrer">${title}</a>
        <span class="credit-date">${dateLabel}</span>
      </article>`;
    })
    .join("");
}

// Subtle animated grid background — clean hacker aesthetic, no meteor streaks.
function initGridBg() {
  const canvas = $("#grid-bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const state = { width: 0, height: 0, t: 0 };

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    state.width = window.innerWidth;
    state.height = window.innerHeight;
    canvas.width = Math.floor(state.width * ratio);
    canvas.height = Math.floor(state.height * ratio);
    canvas.style.width = `${state.width}px`;
    canvas.style.height = `${state.height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function draw() {
    state.t += 0.004;
    ctx.clearRect(0, 0, state.width, state.height);
    const step = 46;
    const offsetX = (Math.sin(state.t) * 8) % step;
    const offsetY = (Math.cos(state.t * 0.8) * 8) % step;

    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(93, 255, 157, 0.06)";
    ctx.beginPath();
    for (let x = offsetX; x < state.width; x += step) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, state.height);
    }
    for (let y = offsetY; y < state.height; y += step) {
      ctx.moveTo(0, y);
      ctx.lineTo(state.width, y);
    }
    ctx.stroke();

    // Glowing intersection nodes that drift with time.
    for (let x = offsetX, i = 0; x < state.width; x += step, i++) {
      for (let y = offsetY, j = 0; y < state.height; y += step, j++) {
        const pulse = 0.5 + 0.5 * Math.sin(state.t * 1.6 + i * 0.4 + j * 0.5);
        if (pulse > 0.86) {
          ctx.fillStyle = `rgba(62, 231, 255, ${(pulse - 0.86) * 2.5})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
}

$$(".language-switch button").forEach((button) => {
  button.addEventListener("click", () => {
    currentLang = button.dataset.lang;
    localStorage.setItem("lang", currentLang);
    applyI18n();
  });
});

["#cve-search", "#vendor-filter", "#severity-filter"].forEach((selector) => {
  $(selector).addEventListener("input", renderCves);
});

renderMetrics();
applyI18n();
initGridBg();
