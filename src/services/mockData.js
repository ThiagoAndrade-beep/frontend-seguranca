// services/mockData.js
export const vulnerabilities = [
  {
    id: "VULN-001",
    title: "SQL Injection",
    severity: "critical",
    project: "Auth Service",
    description: "Possível SQL Injection no endpoint /login",
    cve: "CVE-2023-1234",
    createdAt: "2024-12-01",
    status: "open"
  },
  {
    id: "VULN-002",
    title: "XSS Reflected",
    severity: "medium",
    project: "Frontend App",
    description: "Entrada de usuário sem sanitização",
    createdAt: "2024-12-03",
    status: "fixed"
  }
];
