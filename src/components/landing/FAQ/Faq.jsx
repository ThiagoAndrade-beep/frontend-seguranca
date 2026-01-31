import React from 'react'
import { FiHelpCircle } from "react-icons/fi";
import "./faq.css"
import SectionBadge from '../../ui/section-badge/SectionBadge';
import CardFaq from '../../ui/card-faq/CardFaq';

const Faq = () => {
  return (
    <section className='faq-container'>
        <SectionBadge icon={FiHelpCircle} text="FAQ"/>
        <div className='faq-texts'>
            <h2>Perguntas frequentes</h2>
            <p>Encontre respostas para as dúvidas mais comuns sobre nossa plataforma.</p>
        </div>

        <div className='cards-faq'>
            <CardFaq question="Como funciona o período de teste gratuito?" response="Oferecemos um plano Free permanente para que você possa testar a plataforma sem compromisso. Não é necessário cartão de crédito para começar. Você pode fazer upgrade a qualquer momento."/>
            <CardFaq question="Quais tipo de vulnerabilidades a plataforma detecta?" response="Nossa plataforma detecta uma ampla gama de vulnerabilidades, incluindo CVEs conhecidos, configurações inseguras, falhas de autenticação, exposição de dados sensíveis, e muito mais. Utilizamos múltiplos scanners e bases de dados atualizadas."/>
            <CardFaq question="É possível integrar com outras ferramentas?" response="Sim! Oferecemos integrações com Jira, Slack, Microsoft Teams, GitHub, GitLab, AWS, Azure, GCP, e muitas outras ferramentas. Também disponibilizamos uma API REST completa para integrações customizadas."/>
            <CardFaq question="Como funciona o suporte técnico?" response="O suporte varia conforme o plano: Email para Free, prioritário para Starter e Pro, e 24/7 com gerente dedicado para Enterprise. Nossa equipe é especializada em segurança e responde rapidamente."/>
            <CardFaq question="Como é feita a pirorização das vulnerabilidades?" response="Utilizamos um sistema de scoring baseado em CVSS, contexto do asset, exploitabilidade conhecida e impacto no negócio. Isso permite que sua equipe foque nas ameaças mais críticas primeiro."/>
            <CardFaq question="Posso cancelar minha assinatura a qualquer momento?" response="Sim, você pode cancelar sua assinatura a qualquer momento sem multas ou taxas adicionais. Seus dados ficam disponíveis por 30 dias após o cancelamento para exportação."/>
        </div>
    </section>
  )
}

export default Faq