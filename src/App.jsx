import React, { useState } from 'react';
import { Menu, X, Network, Database, Code2, Workflow, GraduationCap, ArrowUpRight, Github } from 'lucide-react';

const professionalStacks = [
  {
    icon: Network,
    code: 'UCA',
    title: 'Software Básico, Redes e Segurança',
    description: 'Infraestrutura de redes, sistemas operacionais e segurança da informação.'
  },
  {
    icon: Database,
    code: 'UCA / UCP',
    title: 'Banco de Dados',
    description: 'Modelagem, banco de dados relacional e banco de dados avançado.'
  },
  {
    icon: Code2,
    code: 'UCP',
    title: 'Programação e Desenvolvimento',
    description: 'Lógica computacional, algoritmos, técnicas de programação, programação orientada a objetos (paradigma de OO), estruturas lineares, programação para internet e aplicativos web.'
  },
  {
    icon: Workflow,
    code: 'UCP',
    title: 'Engenharia de Software e Gestão',
    description: 'Engenharia de software, administração de sistemas de informação, gestão de projetos e inteligência de negócios (Business Intelligence).'
  },
  {
    icon: GraduationCap,
    code: 'UCF / PFC',
    title: 'Formação Geral e Projetos',
    description: 'Unidades de formação geral, atividades complementares, extensão universitária e o Projeto Final de Curso.'
  }
];

const skills = [
  { icon: 'HTML', title: 'HTML', description: 'Estruturação semântica de páginas web.' },
  { icon: 'CSS', title: 'CSS', description: 'Estilização, layouts e páginas responsivas.' },
  { icon: 'JS', title: 'JavaScript', description: 'Interatividade e funcionalidades para páginas web.' },
  { icon: 'BD', title: 'Banco de Dados', description: 'Design e implementação de estruturas de dados.' }
];

function SectionTitle({ eyebrow, title }) {
  return <div className="section-title"><p>{eyebrow}</p><h2>{title}</h2></div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [
    ['Início', '#inicio'], ['Sobre', '#sobre'], ['Dados profissionais', '#dados-profissionais'],
    ['Habilidades', '#habilidades'], ['Projetos', '#projetos'], ['Contato', '#contato']
  ];

  return (
    <>
      <header className="header">
        <div className="container nav-container">
          <a href="#inicio" className="logo" onClick={closeMenu}>Paola Santos<span>.</span></a>
          <button className="menu-button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Navegação principal">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-content">
            <div className="hero-text">
              <p className="subtitle">Bem-vindo, eu sou a</p>
              <h1>Paola <span>Santos</span></h1>
              <p className="hero-description">
                Estudante de Sistemas de Informação do 8º período da UMC.
                Atualmente Supervisora dos Analistas de Negócios em empresa especialista em Sistema para Gestão Pública.
              </p>
              <div className="hero-buttons">
                <a className="button primary" href="#sobre">Conheça minha trajetória</a>
                <a className="button secondary" href="#contato">Entre em contato</a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="profile-circle">PS</div>
              <span className="hero-orbit orbit-one"></span><span className="hero-orbit orbit-two"></span>
              <div className="hero-note">Tecnologia · Gestão · Desenvolvimento</div>
            </div>
          </div>
        </section>

        <section className="section" id="sobre">
          <div className="container">
            <SectionTitle eyebrow="Conheça um pouco" title="Sobre mim" />
            <div className="about-content">
              <div className="about-text">
                <p>Meu nome é <strong>Paola Santos</strong> e estou construindo minha trajetória na área de tecnologia e desenvolvimento web.</p>
                <p>Sou estudante de Sistemas de Informação do 8º período da UMC e formada como Técnica em Administração. Trabalho atualmente como Supervisora dos Analistas de Negócios em empresa especialista em Sistema para Gestão Pública.</p>
                <p>Tenho interesse em Banco de Dados e desenvolvimento web, buscando sempre aprender e aplicar novas tecnologias.</p>
                <p>Atualmente, venho desenvolvendo meus conhecimentos em HTML, CSS, JavaScript e ferramentas de apoio para o desenvolvimento de projetos web, como o Figma.</p>
                <p>Meus projetos atuais são acadêmicos e os profissionais são estruturados de acordo com as regras da empresa, portanto não podem ser divulgados publicamente.</p>
              </div>
              <div className="photo-frame"><img src="/imagemprofissional.png" className="sobre-image" alt="Foto de Paola Santos" /></div>
            </div>
          </div>
        </section>

        <section className="section professional-section" id="dados-profissionais">
          <div className="container">
            <SectionTitle eyebrow="Minha formação acadêmica" title="Dados profissionais" />
            <p className="section-intro">Conhecimentos e competências desenvolvidos ao longo da formação em Sistemas de Informação, organizados por áreas de estudo.</p>
            <div className="professional-grid">
              {professionalStacks.map(({ icon: Icon, code, title, description }, index) => (
                <article className={`professional-card ${index === 2 ? 'featured-card' : ''}`} key={title}>
                  <div className="professional-card-top">
                    <span className="professional-icon"><Icon size={23} strokeWidth={1.8} /></span>
                    <span className="stack-code">{code}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills-section" id="habilidades">
          <div className="container">
            <SectionTitle eyebrow="O que estou aprendendo" title="Minhas habilidades" />
            <div className="skills-grid">
              {skills.map(skill => (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-icon">{skill.icon}</div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projetos">
          <div className="container">
            <SectionTitle eyebrow="Meu trabalho" title="Projetos" />
            <div className="projects-grid">
              <article className="project-card">
                <div className="project-label">Projeto acadêmico</div>
                <h3>Adaptando uma IA de previsão</h3>
                <p>IA desenvolvida para calcular o gasto de calorias por exercício no padrão MET.</p>
                <div className="project-links">
                  <a href="https://github.com/paaolasanttos/estruturaslineares" target="_blank" rel="noreferrer">Repositório do GitHub <ArrowUpRight size={16} /></a>
                  <a href="https://paaolasanttos.github.io/estruturaslineares/" target="_blank" rel="noreferrer">Calculadora de Calorias (IA) <ArrowUpRight size={16} /></a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="container">
            <SectionTitle eyebrow="Vamos conversar" title="Entre em contato" />
            <div className="contact-card">
              <span className="contact-icon"><Github size={28} /></span>
              <h3>GitHub</h3>
              <p>Confira meus projetos, códigos e trabalhos acadêmicos disponíveis no meu GitHub.</p>
              <a href="https://github.com/paaolasanttos" target="_blank" rel="noreferrer" className="github-button">Acessar meu GitHub <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>Desenvolvido por <strong>Paola Santos</strong></p>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>
    </>
  );
}