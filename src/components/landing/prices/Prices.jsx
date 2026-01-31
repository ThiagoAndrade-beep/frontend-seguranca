import React from 'react'
import "./price.css"
import { HiOutlineSparkles } from "react-icons/hi";
import SectionBadge from '../../ui/section-badge/SectionBadge';
import CardPrices from '../../ui/card-prices/CardPrices';

const Prices = () => {
    return (
        <section className='prices-container'>
            <SectionBadge icon={HiOutlineSparkles} text="Preços" />
            <div className='prices-texts'>
                <h2>Planos para todos os tamanhos de negócios</h2>
                <p>Escolha o plano ideal para sua empresa. Todos incluem suporte técnico e atualizações gratuitas.</p>
            </div>

            <div className='cards-prices'>
                <CardPrices
                    title="Free"
                    price="0" description="Perfeito para começar e testar a plataforma"
                    infos={[
                        { text: "Até 10 assets" },
                        { text: "Varreduras manuais" },
                        { text: "Relatórios básicos" },
                        { text: "Suporte por email" },
                        { text: "1 usuário" }
                    ]}
                    textBtn="Começar grátis"
                    isPopular={false}
                />
                <CardPrices
                    title="Starter"
                    price="99" description="Ideal para pequenas equipes e startups"
                    infos={[
                        { text: "Até 50 assets" },
                        { text: "Varreduras automáticas" },
                        { text: "Relatórios avançados" },
                        { text: "Integrações básicas" },
                        { text: "Até 5 usuários" },
                        { text: "Suporte prioritário"}
                    ]}
                    textBtn="Assinar Starter"
                    isPopular={true}
                />
                <CardPrices
                    title="Pro"
                    price="299" description="Para empresas em crescimento"
                    infos={[
                        { text: "Até 200 assets" },
                        { text: "Varreduras em tempo real" },
                        { text: "API completa" },
                        { text: "Todas as integrações" },
                        { text: "Até 20 usuários" },
                        { text: "SLA garantido" },
                        { text: "Dashboards customizados" }
                    ]}
                    textBtn="Assinar Pro"
                    isPopular={false}
                />
            </div>
        </section>
    )
}

export default Prices