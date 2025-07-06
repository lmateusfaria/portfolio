import React from 'react';
import { Icon, Card, Step, Grid, Transition, Label, Divider, Container } from 'semantic-ui-react';

// Linha do tempo de formação e experiência
const timeline = [
  {
    year: '2025–Atual',
    title: 'Analista Desenvolvedor RPA',
    org: 'Yank! Solutions',
    desc: 'APIs RESTful em Java/Spring Boot, orquestração de RPAs, IA para health checks e monitoramento.',
    icon: 'rocket',
  },
  {
    year: '2023–2025',
    title: 'Desenvolvedor Backend (Python)',
    org: 'TAC Etiquetas',
    desc: 'Automação de workflows, relatórios, manutenção de website.',
    icon: 'code branch',
  },
  {
    year: '2022–2025',
    title: 'Analista de TI',
    org: 'TAC Etiquetas',
    desc: 'Dashboards Power BI, Active Directory, infraestrutura.',
    icon: 'server',
  },
  {
    year: '2021–2022',
    title: 'Designer Gráfico | Assistente Adm.',
    org: 'TAC Etiquetas',
    desc: 'Criação de artes, fichas técnicas, controle de NF-e.',
    icon: 'paint brush',
  },
];

// Linha do tempo acadêmica
const timelineAcademica = [
  {
    year: '2023–2026',
    title: 'Bacharel em Sistemas de Informação',
    org: 'FEF',
    desc: 'Formação superior focada em desenvolvimento de sistemas, análise de dados e gestão de TI.',
    icon: 'graduation cap',
  },
  {
    year: '2020–2021',
    title: 'Tecnólogo em Sistemas para Internet',
    org: 'FATEC',
    desc: 'Desenvolvimento web, mobile e integração de sistemas.',
    icon: 'laptop',
  },
  {
    year: '2018–2019',
    title: 'Técnico em Informática para Internet',
    org: 'ETEC',
    desc: 'Fundamentos de programação, banco de dados e web.',
    icon: 'code',
  },
];

// Certificações
const certs = [
  { name: 'Professional React', org: 'Udemy', icon: 'react' },
  { name: 'AWS Cloud Practitioner', org: 'Coursera', icon: 'cloud' },
  { name: 'Scrum Foundation', org: 'SCRUMstudy', icon: 'tasks' },
  { name: 'Acessibilidade Web', org: 'Alura', icon: 'universal access' },
];

// Cursos livres
const cursosLivres = [
  { nome: 'Professional React', org: 'Udemy', icon: 'react' },
  { nome: 'AWS Cloud Practitioner', org: 'Coursera', icon: 'cloud' },
  { nome: 'Scrum Foundation', org: 'SCRUMstudy', icon: 'tasks' },
  { nome: 'Acessibilidade Web', org: 'Alura', icon: 'universal access' },
];

// Idiomas
const idiomas = [
  { nome: 'Português', nivel: 'Nativo', icon: 'flag' },
  { nome: 'Inglês', nivel: 'Intermediário', icon: 'flag outline' },
];

// Valores e diferenciais
const valores = [
  { icon: 'lightbulb', label: 'Inovação' },
  { icon: 'users', label: 'Colaboração' },
  { icon: 'star', label: 'Excelência' },
  { icon: 'heartbeat', label: 'Paixão por tecnologia' },
];

const darkTheme = {
  background: '#181825',
  text: '#f3f4fa',
  card: '#232136',
  border: '#393552',
};
const lightTheme = {
  background: '#fafaff',
  text: '#181825',
  card: '#fff',
  border: '#e0d7fa',
};

const About = ({ dark }) => {
  const theme = dark ? darkTheme : lightTheme;
        return (
    <main aria-labelledby="titulo-about" style={{ padding: '2rem 0', background: theme.background, color: theme.text, minHeight: '100vh', transition: 'background 0.4s, color 0.4s' }}>
      <Container style={{ maxWidth: 1100, padding: '0 2rem', transition: 'background 0.4s, color 0.4s' }}>
        <Grid centered stackable>
          <Grid.Row>
            <Grid.Column width={16} textAlign="center">
              <Icon name="question circle outline" size="huge" color="violet" aria-hidden="true" style={{ color: theme.text, transition: 'color 0.4s' }} />
              <h1 id="titulo-about" style={{ color: dark ? "#fff" : theme.text, transition: 'color 0.4s' }}>Sobre mim</h1>
              <p style={{ fontSize: '1.2rem', maxWidth: 700, margin: '0 auto', color: theme.text, transition: 'color 0.4s' }}>
                Sou apaixonado por tecnologia, automação e desenvolvimento web. Minha trajetória é marcada por desafios, aprendizado contínuo e busca por soluções inovadoras que geram impacto real.
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10} style={{ paddingLeft: 24, paddingRight: 24 }}>
              <h2 style={{ color: dark ? "#fff" : theme.text, transition: 'color 0.4s' }}><Icon name="history" /> Linha do Tempo Profissional</h2>
              <Step.Group vertical size="large">
                {timeline.map((item, idx) => (
                  <Transition key={item.title} animation="fade up" duration={600} transitionOnMount>
                    <Step
                      active={idx === 0}
                      completed={idx !== 0}
                      style={{
                        background: dark
                          ? "linear-gradient(135deg, #28204d 60%, #232136 100%)"
                          : theme.card,
                        color: dark ? "#fff" : theme.text,
                        border: `1.5px solid ${theme.border}`,
                        boxShadow: dark
                          ? "0 2px 16px 0 rgba(120, 80, 220, 0.10)"
                          : "0 2px 12px 0 rgba(80, 40, 120, 0.07)",
                        transition:
                          "background 0.4s, color 0.4s, border 0.4s, box-shadow 0.4s, transform 0.2s",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      tabIndex={0}
                      aria-label={`Experiência: ${item.title}, ${item.org}`}
                      onMouseOver={e => {
                        e.currentTarget.style.border = "2px solid #a277ff";
                        e.currentTarget.style.transform = "translateY(-2px) scale(1.01)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 24px 0 rgba(162, 119, 255, 0.13)";
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.border = `1.5px solid ${theme.border}`;
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = dark
                          ? "0 2px 16px 0 rgba(120, 80, 220, 0.10)"
                          : "0 2px 12px 0 rgba(80, 40, 120, 0.07)";
                      }}
                      onFocus={e => {
                        e.currentTarget.style.border = "2px solid #a277ff";
                        e.currentTarget.style.transform = "translateY(-2px) scale(1.01)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 24px 0 rgba(162, 119, 255, 0.13)";
                      }}
                      onBlur={e => {
                        e.currentTarget.style.border = `1.5px solid ${theme.border}`;
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = dark
                          ? "0 2px 16px 0 rgba(120, 80, 220, 0.10)"
                          : "0 2px 12px 0 rgba(80, 40, 120, 0.07)";
                      }}
                    >
                      <Icon name={item.icon} color="violet" style={{ filter: dark ? "drop-shadow(0 0 2px #a277ff)" : "none" }} />
                      <Step.Content>
                        <Step.Title style={{ color: dark ? "#fff" : theme.text, fontWeight: 700 }}>{item.title} <Label color="violet" basic size="tiny" style={{ background: dark ? "#232136" : "#f3f0ff", color: dark ? "#a277ff" : "#6c63a3", border: "none" }}>{item.year}</Label></Step.Title>
                        <Step.Description style={{ color: dark ? "#d1cfff" : "#6c63a3" }}><b>{item.org}</b> — {item.desc}</Step.Description>
                      </Step.Content>
                    </Step>
                  </Transition>
                ))}
              </Step.Group>
              <Divider section style={{ borderColor: dark ? "#393552" : "#e0d7fa", transition: "border-color 0.4s" }} />
              <h2 style={{ color: dark ? "#fff" : theme.text, transition: 'color 0.4s' }}><Icon name="student" /> Linha do Tempo Acadêmica</h2>
              <Step.Group vertical size="large">
                {timelineAcademica.map((item, idx) => (
                  <Transition key={item.title} animation="fade up" duration={600} transitionOnMount>
                    <Step
                      active={idx === 0}
                      completed={idx !== 0}
                      style={{
                        background: dark
                          ? "linear-gradient(135deg, #28204d 60%, #232136 100%)"
                          : theme.card,
                        color: dark ? "#fff" : theme.text,
                        border: `1.5px solid ${theme.border}`,
                        boxShadow: dark
                          ? "0 2px 16px 0 rgba(80, 120, 220, 0.10)"
                          : "0 2px 12px 0 rgba(40, 80, 120, 0.07)",
                        transition:
                          "background 0.4s, color 0.4s, border 0.4s, box-shadow 0.4s, transform 0.2s",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      tabIndex={0}
                      aria-label={`Formação: ${item.title}, ${item.org}`}
                      onMouseOver={e => {
                        e.currentTarget.style.border = "2px solid #6c63a3";
                        e.currentTarget.style.transform = "translateY(-2px) scale(1.01)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 24px 0 rgba(108, 99, 163, 0.13)";
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.border = `1.5px solid ${theme.border}`;
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = dark
                          ? "0 2px 16px 0 rgba(80, 120, 220, 0.10)"
                          : "0 2px 12px 0 rgba(40, 80, 120, 0.07)";
                      }}
                      onFocus={e => {
                        e.currentTarget.style.border = "2px solid #6c63a3";
                        e.currentTarget.style.transform = "translateY(-2px) scale(1.01)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 24px 0 rgba(108, 99, 163, 0.13)";
                      }}
                      onBlur={e => {
                        e.currentTarget.style.border = `1.5px solid ${theme.border}`;
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = dark
                          ? "0 2px 16px 0 rgba(80, 120, 220, 0.10)"
                          : "0 2px 12px 0 rgba(40, 80, 120, 0.07)";
                      }}
                    >
                      <Icon name={item.icon} color="blue" style={{ filter: dark ? "drop-shadow(0 0 2px #6c63a3)" : "none" }} />
                      <Step.Content>
                        <Step.Title style={{ color: dark ? "#fff" : theme.text, fontWeight: 700 }}>{item.title} <Label color="blue" basic size="tiny" style={{ background: dark ? "#232136" : "#e0e7ff", color: dark ? "#6c63a3" : "#3b3b5c", border: "none" }}>{item.year}</Label></Step.Title>
                        <Step.Description style={{ color: dark ? "#d1cfff" : "#6c63a3" }}><b>{item.org}</b> — {item.desc}</Step.Description>
                      </Step.Content>
                    </Step>
                  </Transition>
                ))}
              </Step.Group>
            </Grid.Column>
            <Grid.Column width={6} style={{ paddingLeft: 24, paddingRight: 24 }}>
              <h2 style={{ color: dark ? "#fff" : theme.text, transition: 'color 0.4s' }}><Icon name="certificate" /> Certificações</h2>
              <Card.Group itemsPerRow={1} stackable>
                {certs.map(cert => (
                  <Transition key={cert.name} animation="jiggle" duration={700} transitionOnMount>
                    <Card
                      raised
                      color="violet"
                      style={{
                        background: dark
                          ? "linear-gradient(135deg, #28204d 60%, #232136 100%)"
                          : theme.card,
                        color: dark ? "#fff" : theme.text,
                        border: `1.5px solid ${theme.border}`,
                        boxShadow: dark
                          ? "0 2px 16px 0 rgba(120, 80, 220, 0.10)"
                          : "0 2px 12px 0 rgba(80, 40, 120, 0.07)",
                        transition:
                          "background 0.4s, color 0.4s, border 0.4s, box-shadow 0.4s, transform 0.2s",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      tabIndex={0}
                      aria-label={`Certificação: ${cert.name}, ${cert.org}`}
                      onMouseOver={e => {
                        e.currentTarget.style.border = "2px solid #a277ff";
                        e.currentTarget.style.transform = "translateY(-3px) scale(1.025)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 24px 0 rgba(162, 119, 255, 0.18)";
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.border = `1.5px solid ${theme.border}`;
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = dark
                          ? "0 2px 16px 0 rgba(120, 80, 220, 0.10)"
                          : "0 2px 12px 0 rgba(80, 40, 120, 0.07)";
                      }}
                      onFocus={e => {
                        e.currentTarget.style.border = "2px solid #a277ff";
                        e.currentTarget.style.transform = "translateY(-3px) scale(1.025)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 24px 0 rgba(162, 119, 255, 0.18)";
                      }}
                      onBlur={e => {
                        e.currentTarget.style.border = `1.5px solid ${theme.border}`;
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = dark
                          ? "0 2px 16px 0 rgba(120, 80, 220, 0.10)"
                          : "0 2px 12px 0 rgba(80, 40, 120, 0.07)";
                      }}
                    >
                      <Card.Content>
                        <Icon name={cert.icon} size="big" color="violet" style={{ float: "right", filter: dark ? "drop-shadow(0 0 2px #a277ff)" : "none" }} />
                        <Card.Header style={{ color: dark ? "#fff" : theme.text, fontWeight: 700, fontSize: "1.18rem", letterSpacing: 0.2 }}>{cert.name}</Card.Header>
                        <Card.Meta style={{ color: dark ? "#d1cfff" : "#6c63a3", fontWeight: 500 }}>{cert.org}</Card.Meta>
                      </Card.Content>
                    </Card>
                  </Transition>
                ))}
              </Card.Group>
              <Divider hidden />
              <h2 style={{ color: dark ? "#fff" : theme.text, transition: 'color 0.4s' }}><Icon name="book" /> Cursos Livres</h2>
              <Card.Group itemsPerRow={1} stackable>
                {cursosLivres.map(curso => (
                  <Transition key={curso.nome} animation="pulse" duration={700} transitionOnMount>
                    <Card
                      raised
                      color="blue"
                      style={{
                        background: dark
                          ? "linear-gradient(135deg, #22305a 60%, #232136 100%)"
                          : theme.card,
                        color: dark ? "#fff" : theme.text,
                        border: `1.5px solid ${theme.border}`,
                        boxShadow: dark
                          ? "0 2px 16px 0 rgba(80, 120, 220, 0.10)"
                          : "0 2px 12px 0 rgba(40, 80, 120, 0.07)",
                        transition:
                          "background 0.4s, color 0.4s, border 0.4s, box-shadow 0.4s, transform 0.2s",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      tabIndex={0}
                      aria-label={`Curso: ${curso.nome}, ${curso.org}`}
                      onMouseOver={e => {
                        e.currentTarget.style.border = "2px solid #6c63a3";
                        e.currentTarget.style.transform = "translateY(-3px) scale(1.025)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 24px 0 rgba(108, 99, 163, 0.18)";
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.border = `1.5px solid ${theme.border}`;
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = dark
                          ? "0 2px 16px 0 rgba(80, 120, 220, 0.10)"
                          : "0 2px 12px 0 rgba(40, 80, 120, 0.07)";
                      }}
                      onFocus={e => {
                        e.currentTarget.style.border = "2px solid #6c63a3";
                        e.currentTarget.style.transform = "translateY(-3px) scale(1.025)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 24px 0 rgba(108, 99, 163, 0.18)";
                      }}
                      onBlur={e => {
                        e.currentTarget.style.border = `1.5px solid ${theme.border}`;
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = dark
                          ? "0 2px 16px 0 rgba(80, 120, 220, 0.10)"
                          : "0 2px 12px 0 rgba(40, 80, 120, 0.07)";
                      }}
                    >
                      <Card.Content>
                        <Icon name={curso.icon} size="big" color="blue" style={{ float: "right", filter: dark ? "drop-shadow(0 0 2px #6c63a3)" : "none" }} />
                        <Card.Header style={{ color: dark ? "#fff" : theme.text, fontWeight: 700, fontSize: "1.18rem", letterSpacing: 0.2 }}>{curso.nome}</Card.Header>
                        <Card.Meta style={{ color: dark ? "#d1cfff" : "#6c63a3", fontWeight: 500 }}>{curso.org}</Card.Meta>
                      </Card.Content>
                    </Card>
                  </Transition>
                ))}
              </Card.Group>
              <Divider hidden />
              <h2 style={{ color: dark ? "#fff" : theme.text, transition: 'color 0.4s' }}><Icon name="language" /> Idiomas</h2>
              <Card.Group itemsPerRow={1} stackable>
                {idiomas.map(idioma => (
                  <Transition key={idioma.nome} animation="fade" duration={700} transitionOnMount>
                    <Card
                      raised
                      color="grey"
                      style={{
                        background: dark
                          ? "linear-gradient(135deg, #232136 60%, #393552 100%)"
                          : theme.card,
                        color: dark ? "#fff" : theme.text,
                        border: `1.5px solid ${theme.border}`,
                        boxShadow: dark
                          ? "0 2px 16px 0 rgba(120, 120, 120, 0.10)"
                          : "0 2px 12px 0 rgba(80, 80, 80, 0.07)",
                        transition:
                          "background 0.4s, color 0.4s, border 0.4s, box-shadow 0.4s, transform 0.2s",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      tabIndex={0}
                      aria-label={`Idioma: ${idioma.nome}, ${idioma.nivel}`}
                      onMouseOver={e => {
                        e.currentTarget.style.border = "2px solid #a277ff";
                        e.currentTarget.style.transform = "translateY(-3px) scale(1.025)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 24px 0 rgba(162, 119, 255, 0.13)";
                      }}
                      onMouseOut={e => {
                        e.currentTarget.style.border = `1.5px solid ${theme.border}`;
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = dark
                          ? "0 2px 16px 0 rgba(120, 120, 120, 0.10)"
                          : "0 2px 12px 0 rgba(80, 80, 80, 0.07)";
                      }}
                      onFocus={e => {
                        e.currentTarget.style.border = "2px solid #a277ff";
                        e.currentTarget.style.transform = "translateY(-3px) scale(1.025)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 24px 0 rgba(162, 119, 255, 0.13)";
                      }}
                      onBlur={e => {
                        e.currentTarget.style.border = `1.5px solid ${theme.border}`;
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow = dark
                          ? "0 2px 16px 0 rgba(120, 120, 120, 0.10)"
                          : "0 2px 12px 0 rgba(80, 80, 80, 0.07)";
                      }}
                    >
                      <Card.Content>
                        <Icon name={idioma.icon} size="big" color="grey" style={{ float: "right", filter: dark ? "drop-shadow(0 0 2px #a277ff)" : "none" }} />
                        <Card.Header style={{ color: dark ? "#fff" : theme.text, fontWeight: 700, fontSize: "1.18rem", letterSpacing: 0.2 }}>{idioma.nome}</Card.Header>
                        <Card.Meta style={{ color: dark ? "#d1cfff" : "#6c63a3", fontWeight: 500 }}>{idioma.nivel}</Card.Meta>
                      </Card.Content>
                    </Card>
                  </Transition>
                ))}
              </Card.Group>
              <Divider hidden />
              <h2 style={{ color: dark ? "#fff" : theme.text, transition: 'color 0.4s' }}><Icon name="gem" /> Valores</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
                {valores.map(v => (
                  <Label
                    key={v.label}
                    size="large"
                    color="violet"
                    basic
                    style={{
                      fontWeight: 500,
                      color: dark ? "#fff" : theme.text,
                      background: dark ? "#232136" : theme.card,
                      border: `1.5px solid ${theme.border}`,
                      boxShadow: dark
                        ? "0 2px 8px 0 rgba(120, 80, 220, 0.10)"
                        : "0 2px 6px 0 rgba(80, 40, 120, 0.07)",
                      transition: "background 0.4s, color 0.4s, border 0.4s, box-shadow 0.4s, transform 0.2s",
                    }}
                    tabIndex={0}
                    aria-label={`Valor: ${v.label}`}
                    onMouseOver={e => {
                      e.currentTarget.style.border = "2px solid #a277ff";
                      e.currentTarget.style.transform = "scale(1.04)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px 0 rgba(162, 119, 255, 0.13)";
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.border = `1.5px solid ${theme.border}`;
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = dark
                        ? "0 2px 8px 0 rgba(120, 80, 220, 0.10)"
                        : "0 2px 6px 0 rgba(80, 40, 120, 0.07)";
                    }}
                    onFocus={e => {
                      e.currentTarget.style.border = "2px solid #a277ff";
                      e.currentTarget.style.transform = "scale(1.04)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px 0 rgba(162, 119, 255, 0.13)";
                    }}
                    onBlur={e => {
                      e.currentTarget.style.border = `1.5px solid ${theme.border}`;
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = dark
                        ? "0 2px 8px 0 rgba(120, 80, 220, 0.10)"
                        : "0 2px 6px 0 rgba(80, 40, 120, 0.07)";
                    }}
                  >
                    <Icon name={v.icon} /> {v.label}
                  </Label>
                ))}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
                </main>
  );
};

export default About;