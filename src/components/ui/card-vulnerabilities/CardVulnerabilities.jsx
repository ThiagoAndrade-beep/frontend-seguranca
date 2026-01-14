import { severityTheme } from "../../../utils/severityTheme"
import "./cardVulnerabilities.css"

const CardVulnerabilities = ({ icon: Icon, number, title, variant }) => {
    const theme = severityTheme[variant]
    return (
        <div className='card-vulnerabilities' style=
            {{
                border: `1px solid ${theme.border}`,
                background: theme.background
            }}>
            <div className='icons-vulnerabilities'
                style={{
                    background: theme.iconBackground,
                    color: theme.iconColor
                }}>
                <Icon size={20} />

            </div>

            <div className='card-vulnerabilities-texts'>
                <p>{title}</p>
                <h3 style={{ color: theme.color }}>{number}</h3>
            </div>
        </div>
    )
}

export default CardVulnerabilities