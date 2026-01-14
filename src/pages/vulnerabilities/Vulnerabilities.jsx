import { useState } from "react";
import CardVulnerabilities from "../../components/ui/card-vulnerabilities/cardVulnerabilities";
import "./vulnerabilities.css"
import { FiAlertCircle } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";
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
            options={[
              { value: "commerce", label: "Commerce" },
              { value: "internal", label: "Internal" },
              { value: "customer", label: "Customer" },
              { value: "mobile", label: "Mobile" }
            ]}
          />
        </div>
      </div>
    </main>
  );
}

export default Vulnerabilities;
