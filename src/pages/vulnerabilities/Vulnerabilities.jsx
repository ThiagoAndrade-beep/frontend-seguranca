import { useState } from "react";
import CardVulnerabilities from "../../components/ui/card-vulnerabilities/cardVulnerabilities";
import "./vulnerabilities.css"
import { FiAlertCircle } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";
import { BsFillCircleFill } from "react-icons/bs";
import FilterSelect from "../../components/ui/filterselect/FilterSelect";
import { useVulnerabilities } from "../../hooks/UseVulnerabilities";

function Vulnerabilities() {
  const { data, loading } = useVulnerabilities()
  const [severity, setSeverity] = useState("")
  const [status, setStatus] = useState("")
  const [project, setProject] = useState("")

  const criticalFilter = data.filter((item) => item.severity === "critical")
  const highFilter = data.filter((item) => item.severity === "high")
  const mediumFilter = data.filter((item) => item.severity === "medium")
  const lowFilter = data.filter((item) => item.severity === "low")

  const projects = [...new Set(data.map(item => item.project))].map((item) => ({
    value: item,
    label: item
  }))  

  return (
    <main className="vulnerabilities-container">
      <header className="vulnerabilities-header">
        <h2>Vulnerabilities</h2>
        <p>Track and manage security vulnerabilities across your projects</p>
      </header>

      {data ? (
        <div className="cards-vulnerabilities">
          <CardVulnerabilities icon={FiAlertCircle} title="Total" number={data.length} variant="neutro" />
          <CardVulnerabilities icon={FiAlertCircle} title="Critical" number={criticalFilter.length} variant="critical" />
          <CardVulnerabilities icon={FiAlertCircle} title="High" number={highFilter.length} variant="high" />
          <CardVulnerabilities icon={FiAlertCircle} title="Medium" number={mediumFilter.length} variant="medium" />
          <CardVulnerabilities icon={FiAlertCircle} title="Low" number={lowFilter.length} variant="low" />
        </div>
      ) : "carregando..."}

      <div className="filters-bar">
        <div className="filters-label">
          <FiFilter />
          <span>Filters</span>
        </div>

        <div className="filters-actions">
          <FilterSelect label="Severity" state={severity} setState={setSeverity}
            options={[
              { value: "critical", label: "Critical" },
              { value: "high", label: "High" },
              { value: "medium", label: "Medium" },
              { value: "low", label: "Low" }
            ]}
          />
          <FilterSelect label="Status" state={status} setState={setStatus}
            options={[
              { value: "open", label: "Open" },
              { value: "inProgress", label: "InProgress" },
              { value: "fixed", label: "Fixed" }
            ]}
          />
          <FilterSelect label="Project" state={project} setState={setProject}
            options={projects}
          />
        </div>
      </div>

      <table className="vuln-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Vulnerability</th>
            <th>Severity</th>
            <th>Status</th>
            <th>Project</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data.map(vuln => (
            <tr key={vuln.id}>
              <td className="vuln-id">{vuln.id}</td>
              <td className="vuln-title">{vuln.title}</td>
              <td>
                <span className={`badge ${vuln.severity}`}>
                  {vuln.severity}
                </span>
              </td>
              <td>
                <span className={`badge-status ${vuln.status}`}>
                  <BsFillCircleFill size={6}/>
                  {vuln.status}
                </span>
              </td>
              <td className="vuln-project">{vuln.project}</td>
              <td className="vuln-createdAt">{vuln.createdAt}</td>
              <td>›</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Vulnerabilities;
