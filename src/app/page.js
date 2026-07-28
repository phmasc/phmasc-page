'use client';

import React from 'react';
import Logo from '@/components/Logo';
import NetworkBackground from '@/components/NetworkBackground';
import QrCodeCard from '@/components/QrCodeCard';
import {
  Bot,
  BarChart3,
  Lightbulb,
  Linkedin,
  Github,
  Mail,
  Phone,
  ArrowRight,
  Building2,
  Users,
  BrainCircuit,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-ph-bg text-ph-text flex flex-col relative overflow-hidden selection:bg-ph-blue/30 selection:text-white">

      {/* 1. HERO SECTION (Acima da Dobra - Full Bleed Width) */}
      <section className="relative min-h-[92vh] w-full flex flex-col justify-between pt-6 pb-16">
        {/* Canvas de Nós & Conexões Animado (100% da tela) */}
        <NetworkBackground />

        {/* Gradiente sutil de iluminação de fundo (135deg - 100% da tela) */}
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none opacity-60 w-full" />

        {/* Container interno de conteúdo centralizado */}
        <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-8 flex flex-col justify-between min-h-[85vh]">
          {/* Header / Navbar */}
          <header className="flex items-center justify-between py-4 border-b border-ph-border/50 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Logo size={42} />
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-white">PH Masc</span>
                <span className="text-xs text-ph-muted font-medium">Soluções em Dados</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/phmasc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-lg bg-ph-surface border border-ph-border text-ph-text hover:border-ph-purple hover:text-ph-purple transition-all"
              >
                <Github size={15} />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/phelipe-mascarenhas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-lg bg-ph-surface border border-ph-border text-ph-text hover:border-ph-blue hover:text-ph-blue transition-all"
              >
                <Linkedin size={15} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </header>

          {/* Conteúdo Central do Hero */}
          <div className="my-auto py-12 flex flex-col items-start max-w-3xl">
            {/* Tagline / Subtítulo da Marca */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ph-surface/80 border border-ph-purple/40 text-ph-blue text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
              <Sparkles size={14} className="text-ph-magenta" />
              <span>Consultor de IA & Cientista de Dados</span>
            </div>

            {/* Nome */}
            <h2 className="text-ph-muted text-lg sm:text-xl font-medium mb-2 tracking-wide">
              Phelipe Mascarenhas
            </h2>

            {/* Headline Principal */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-6 text-balance">
              Dados que viram decisão. <br className="hidden sm:inline" />
              Agentes que viram resultado.
            </h1>

            {/* Subtítulo explicativo */}
            <p className="text-base sm:text-xl text-ph-muted leading-relaxed mb-8 max-w-2xl font-normal">
              13 anos de Qualicorp. Hoje Consultor de IA na <a href="https://www.jedicrm.com.br/" target="_blank" rel="noopener noreferrer" className="text-ph-blue font-semibold hover:underline inline-flex items-center gap-1">JediCRM <ExternalLink size={16} className="inline opacity-80" /></a> e à frente da PH Masc. Construindo agentes de IA com n8n, Azure OpenAI e Python.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={scrollToContact}
                className="glow-cta w-full sm:w-auto px-8 py-4 rounded-full bg-btn-gradient text-white font-semibold text-base flex items-center justify-center gap-3 shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                <MessageSquare size={18} />
                <span>Vamos conversar</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="https://www.linkedin.com/in/phelipe-mascarenhas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-ph-surface/90 hover:bg-ph-surface-hover border border-ph-border hover:border-ph-blue/50 text-ph-text text-base font-medium flex items-center justify-center gap-2 transition-all"
              >
                <Linkedin size={18} className="text-ph-blue" />
                <span>Ver LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Indicador de rolagem */}
          <div className="flex items-center gap-2 text-xs text-ph-muted/60 pt-4">
            <span className="w-2 h-2 rounded-full bg-ph-blue animate-pulse" />
            <span>Role para explorar a trajetória e soluções</span>
          </div>
        </div>
      </section>

      {/* 2. SOBRE MIM */}
      <section className="py-20 px-4 sm:px-8 border-t border-ph-border/40 bg-ph-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Texto principal da Bio */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Sobre mim
              </h2>

              <p className="text-ph-muted text-base sm:text-lg leading-relaxed">
                Passei mais de 13 anos na <strong className="text-white font-semibold">Qualicorp</strong> — a maior do Brasil em planos de saúde coletivos — mergulhado em dados. Criei scores de qualificação de proponentes, classifiquei grupos de clientes por perfil de sinistralidade e transformei bases desorganizadas em inteligência de negócio pura. Aprendi na prática que <span className="text-ph-blue font-medium">dado sem ação é apenas custo</span>.
              </p>

              <p className="text-ph-muted text-base sm:text-lg leading-relaxed">
                Em 2023 fundei a <strong className="text-white font-semibold">PH Masc</strong> para levar essa visão para mais empresas. Em 2025 assumi como Consultor de IA na <a href="https://www.jedicrm.com.br/" target="_blank" rel="noopener noreferrer" className="text-ph-blue font-semibold hover:underline inline-flex items-center gap-1">JediCRM <ExternalLink size={16} className="inline opacity-80" /></a>, onde desenvolvo agentes inteligentes com <span className="text-white font-medium">n8n, Redis e Azure OpenAI</span> integrados a CRM, que automatizam fluxos conversacionais e de decisão.
              </p>

              <p className="text-ph-text text-base sm:text-lg font-medium border-l-2 border-ph-magenta pl-4 py-1 italic bg-ph-surface/50 rounded-r-lg">
                &ldquo;Transito entre negócio e TI com a mesma fluência. Meu valor não está só no código — está em entender o problema antes de automatizá-lo.&rdquo;
              </p>
            </div>

            {/* Destaque / Card Conceitual */}
            <div className="lg:col-span-5">
              <div className="bg-ph-surface border border-ph-border rounded-xl p-8 shadow-xl flex flex-col space-y-6 relative overflow-hidden group hover:border-ph-purple/60 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-ph-blue/10 rounded-full blur-2xl pointer-events-none" />

                <div className="w-12 h-12 rounded-lg bg-ph-blue/10 border border-ph-blue/30 flex items-center justify-center text-ph-blue">
                  <BrainCircuit size={26} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Análise Estratégica + Execução Autônoma
                  </h3>
                  <p className="text-sm text-ph-muted leading-relaxed">
                    A experiência de mais de uma década analisando dados reais de saúde e mercado combinada à velocidade dos agentes inteligentes de IA.
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-ph-border/60">
                  <div className="flex items-center gap-3 text-sm text-ph-text">
                    <CheckCircle2 size={16} className="text-ph-blue shrink-0" />
                    <span>Entendimento profundo do modelo de negócio</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-ph-text">
                    <CheckCircle2 size={16} className="text-ph-purple shrink-0" />
                    <span>Desenho de arquitetura de automação segura</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-ph-text">
                    <CheckCircle2 size={16} className="text-ph-magenta shrink-0" />
                    <span>Agentes autônomos integrados a CRM e ERP</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. O QUE FAÇO */}
      <section className="py-20 px-4 sm:px-8 max-w-6xl mx-auto w-full">
        <div className="flex flex-col space-y-4 mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            O que faço
          </h2>
          <p className="text-ph-muted text-base max-w-2xl">
            Soluções completas que vão da estratégia de inteligência de dados à implementação de agentes de IA em produção.
          </p>
        </div>

        {/* Grid de 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 — Agentes de IA */}
          <div className="card-hover-subtle bg-ph-surface border border-ph-border rounded-xl p-8 flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-ph-blue/10 border border-ph-blue/30 flex items-center justify-center text-ph-blue">
                <Bot size={26} />
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                Agentes de IA
              </h3>

              <p className="text-ph-muted text-sm leading-relaxed">
                Agentes conversacionais e de decisão construídos com <strong className="text-white font-medium">n8n, Azure OpenAI e Redis</strong>. Integração direta com CRM e sistemas legados para automação de fluxos inteligentes e autônomos.
              </p>
            </div>

            <div className="pt-4 border-t border-ph-border/50 flex flex-wrap gap-2">
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-ph-blue/10 text-ph-blue border border-ph-blue/20">n8n</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-ph-blue/10 text-ph-blue border border-ph-blue/20">Azure OpenAI</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-ph-blue/10 text-ph-blue border border-ph-blue/20">Redis</span>
            </div>
          </div>

          {/* Card 2 — Ciência de Dados */}
          <div className="card-hover-subtle bg-ph-surface border border-ph-border rounded-xl p-8 flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-ph-purple/10 border border-ph-purple/30 flex items-center justify-center text-ph-purple">
                <BarChart3 size={26} />
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                Ciência de Dados
              </h3>

              <p className="text-ph-muted text-sm leading-relaxed">
                Modelagem preditiva, análise estatística com <strong className="text-white font-medium">Python, Power BI e SQL</strong>. Transformação de bases de dados brutas e desorganizadas em dashboards e insights estratégicos para o negócio.
              </p>
            </div>

            <div className="pt-4 border-t border-ph-border/50 flex flex-wrap gap-2">
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-ph-purple/10 text-ph-purple border border-ph-purple/20">Python</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-ph-purple/10 text-ph-purple border border-ph-purple/20">Power BI</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-ph-purple/10 text-ph-purple border border-ph-purple/20">SQL</span>
            </div>
          </div>

          {/* Card 3 — Consultoria */}
          <div className="card-hover-subtle bg-ph-surface border border-ph-border rounded-xl p-8 flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-ph-magenta/10 border border-ph-magenta/30 flex items-center justify-center text-ph-magenta">
                <Lightbulb size={26} />
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                Consultoria
              </h3>

              <p className="text-ph-muted text-sm leading-relaxed">
                Diagnóstico minucioso de processos, desenho da arquitetura de solução e implementação ponta a ponta. Da estratégia inicial até o código rodando em produção de forma sustentável.
              </p>
            </div>

            <div className="pt-4 border-t border-ph-border/50 flex flex-wrap gap-2">
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-ph-magenta/10 text-ph-magenta border border-ph-magenta/20">Diagnóstico</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-ph-magenta/10 text-ph-magenta border border-ph-magenta/20">Arquitetura</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-ph-magenta/10 text-ph-magenta border border-ph-magenta/20">Execução</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. PROVAS SOCIAIS */}
      <section className="py-20 px-4 sm:px-8 border-t border-b border-ph-border/40 bg-ph-surface/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Provas Sociais & Resultados
            </h2>
            <p className="text-ph-muted text-base">
              Histórico comprovado em grandes operações corporativas e autoridade na comunidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Prova 1 */}
            <div className="bg-ph-surface border border-ph-border rounded-xl p-6 text-center flex flex-col items-center justify-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-ph-blue/10 flex items-center justify-center text-ph-blue">
                <Building2 size={22} />
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                13+ Anos
              </span>
              <span className="text-ph-muted text-sm font-medium">
                De mercado na Qualicorp (líder nacional em saúde coletiva)
              </span>
            </div>

            {/* Prova 2 */}
            <div className="bg-ph-surface border border-ph-border rounded-xl p-6 text-center flex flex-col items-center justify-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-ph-purple/10 flex items-center justify-center text-ph-purple">
                <Users size={22} />
              </div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                760+ / 770+
              </span>
              <span className="text-ph-muted text-sm font-medium">
                Conexões e seguidores ativos no LinkedIn
              </span>
            </div>

            {/* Prova 3 */}
            <div className="bg-ph-surface border border-ph-border rounded-xl p-6 text-center flex flex-col items-center justify-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-ph-magenta/10 flex items-center justify-center text-ph-magenta">
                <Sparkles size={22} />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Projetos Críticos
              </span>
              <span className="text-ph-muted text-xs sm:text-sm font-medium leading-normal">
                Scores de qualificação de proponentes, análise de sinistralidade e agentes de IA com CRM na <a href="https://www.jedicrm.com.br/" target="_blank" rel="noopener noreferrer" className="text-ph-blue font-semibold hover:underline inline-flex items-center gap-0.5">JediCRM <ExternalLink size={13} className="inline" /></a>
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CANAIS DE CONTATO */}
      <section id="contato" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto w-full scroll-mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Informações de Contato */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-ph-blue text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 block">
                Contato Direto
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Vamos conversar?
              </h2>
              <p className="text-ph-muted text-base sm:text-lg mt-3">
                Disponível para projetos de automação com agentes de IA, consultoria em ciência de dados e parcerias estratégicas.
              </p>
            </div>

            <div className="space-y-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/phelipe-mascarenhas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-xl bg-ph-surface border border-ph-border hover:border-ph-blue/60 hover:bg-ph-surface-hover transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-ph-blue/10 text-ph-blue flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <span className="text-xs text-ph-muted font-medium block">LinkedIn</span>
                    <span className="text-white text-base font-semibold">/in/phelipe-mascarenhas</span>
                  </div>
                </div>
                <ArrowRight size={20} className="text-ph-muted group-hover:text-ph-blue group-hover:translate-x-1 transition-all" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/phmasc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-xl bg-ph-surface border border-ph-border hover:border-ph-purple/60 hover:bg-ph-surface-hover transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-ph-purple/10 text-ph-purple flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Github size={24} />
                  </div>
                  <div>
                    <span className="text-xs text-ph-muted font-medium block">GitHub</span>
                    <span className="text-white text-base font-semibold">github.com/phmasc</span>
                  </div>
                </div>
                <ArrowRight size={20} className="text-ph-muted group-hover:text-ph-purple group-hover:translate-x-1 transition-all" />
              </a>

              {/* E-mail */}
              <a
                href="mailto:mascarenhas@phmasc.com.br"
                className="flex items-center justify-between p-5 rounded-xl bg-ph-surface border border-ph-border hover:border-ph-magenta/60 hover:bg-ph-surface-hover transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-ph-magenta/10 text-ph-magenta flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="text-xs text-ph-muted font-medium block">E-mail Direto</span>
                    <span className="text-white text-base font-semibold">mascarenhas@phmasc.com.br</span>
                  </div>
                </div>
                <ArrowRight size={20} className="text-ph-muted group-hover:text-ph-magenta group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Componente de QR Code Dinâmico */}
          <div className="lg:col-span-5">
            <QrCodeCard />
          </div>

        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="mt-auto border-t border-ph-border/60 py-8 px-4 sm:px-8 bg-ph-surface/50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Logo size={32} />
            <span className="text-sm font-semibold text-white">PH Masc — Soluções em Dados</span>
          </div>
          <p className="text-xs text-ph-muted">
            PH Masc — Soluções em Dados © 2023. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </main>
  );
}
