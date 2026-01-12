import CardVulnerabilities from "../../components/ui/card-vulnerabilities/cardVulnerabilities";
import "./vulnerabilities.css"
import { FiAlertCircle } from "react-icons/fi";

function Vulnerabilities() {
  return (
    <main className="vulnerabilities-container">
        <header className="vulnerabilities-header">
            <h2>Vulnerabilities</h2>
            <p>Track and manage security vulnerabilities across your projects</p>
        </header>

        <div className="cards-vulnerabilities">
            <CardVulnerabilities icon={FiAlertCircle} title="Total" number="12" variant="neutro"/>
            <CardVulnerabilities icon={FiAlertCircle} title="Critical" number="12" variant="critical"/>
            <CardVulnerabilities icon={FiAlertCircle} title="High" number="12" variant="high"/>
            <CardVulnerabilities icon={FiAlertCircle} title="Medium" number="12" variant="medium"/>
            <CardVulnerabilities icon={FiAlertCircle} title="Low" number="12" variant="low"/>
        </div>
    </main>
  );
}

export default Vulnerabilities;
