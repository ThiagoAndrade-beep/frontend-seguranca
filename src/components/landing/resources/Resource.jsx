import React from 'react'
import "./resource.css"
import { FiSearch, FiBarChart2, FiBell, FiLock, FiZap, FiUsers, FiFileText, FiFile,FiShield } from "react-icons/fi";
import SectionBadge from '../../ui/section-badge/SectionBadge';
import CardResource from '../../ui/card-resource/CardResource';

const Resource = () => {
    return (
        <section className='resource-container'>
            <SectionBadge icon={FiShield} text="Recursos" />
            <div className='resource-texts'>
                <h2>Tudo que você precisa para proteger seu negócio</h2>
                <p>Uma plataforma completa com ferramentas poderosas para gerenciar vulnerabilidades de ponta a ponta</p>
            </div>
            <div className='cards-resource'>
                <CardResource icon={FiSearch} title="Detecção Inteligente" text="Identificação automática de vulnerabilidades com análise profunda e precisa do seu ambiente."/>
                <CardResource icon={FiBarChart2} title="Dashboard Analítico" text="Visualize métricas e tendências em tempo real com relatórios personalizáveis."/>
                <CardResource icon={FiBell} title="Alertas em Tempo Real" text="Notificações instantâneas sobre novas ameaças e vulnerabilidades críticas."/>
                <CardResource icon={FiLock} title="Gestão de Riscos" text="Priorize correções baseado em impacto e criticidade para máxima eficiência."/>
                <CardResource icon={FiZap} title="Resposta Rápida" text="Workflows automatizados para acelerar a correção de vulnerabilidades."/>
                <CardResource icon={FiUsers} title="Colaboração em Equipe" text="Atribua tarefas, acompanhe progresso e colabore em tempo real."/>
                <CardResource icon={FiFileText} title="Compliance" text="Garanta conformidade com frameworks de segurança como ISO 27001 e SOC 2."/>
                <CardResource icon={FiShield} title="Proteção Contínua" text="Monitoramento 24/7 com varreduras programadas e automáticas."/>
            </div>
        </section>
    )
}

export default Resource