import React from 'react';
import { Icon, Grid, Segment, Label, Button, List, Divider, Container } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', icon: 'python' },
  { name: 'Java', icon: 'coffee' },
  { name: 'JavaScript', icon: 'js' },
  { name: 'React.js', icon: 'react' },
  { name: 'Spring Boot', icon: 'leaf' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Power BI', icon: 'chart bar' },
  { name: 'Linux', icon: 'linux' },
];

const softSkills = [
  'Comunicação clara e objetiva',
  'Trabalho em equipe',
  'Resolução de problemas',
  'Adaptabilidade',
  'Organização e gerenciamento de tempo',
];

const contatos = [
  { label: 'E-mail', value: 'devlmateusfaria@gmail.com', icon: 'mail', link: 'mailto:devlmateusfaria@gmail.com' },
  { label: 'Telefone', value: '+55 17 98832-6219', icon: 'phone', link: 'tel:+5517988326219' },
  { label: 'GitHub', value: 'github.com/lmateusfaria', icon: 'github', link: 'https://github.com/lmateusfaria' },
  { label: 'LinkedIn', value: 'linkedin.com/in/luis-mateus-dos-reis-faria', icon: 'linkedin', link: 'https://linkedin.com/in/luis-mateus-dos-reis-faria' },
];

// Avatar SVG ilustrativo
const Avatar = () => (
  <motion.svg
    width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block', margin: '0 auto 16px' }}
    aria-label="Avatar ilustrativo"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.1 }}
  >
    <circle cx="60" cy="60" r="58" fill="#f3f4fa" stroke="#7c3aed" strokeWidth="4" />
    <circle cx="60" cy="52" r="28" fill="#a78bfa" />
    <ellipse cx="60" cy="95" rx="36" ry="22" fill="#a78bfa" />
    <circle cx="60" cy="55" r="18" fill="#fff" />
    <ellipse cx="60" cy="90" rx="24" ry="14" fill="#fff" />
    <circle cx="60" cy="60" r="10" fill="#a78bfa" />
  </motion.svg>
);

const destaque = {
  titulo: 'API de Orquestração RPA',
  descricao: 'Projeto destaque: API RESTful em Java/Spring Boot para orquestração de robôs RPA, integrando automação e inteligência artificial.',
  link: 'https://github.com/lmateusfaria',
  cta: 'Ver no GitHub',
  icone: 'rocket',
};

const skipLinkStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  background: '#7c3aed',
  color: '#fff',
  padding: '8px 16px',
  zIndex: 1000,
  transform: 'translateY(-120%)',
  transition: 'transform 0.2s',
};
const skipLinkFocusStyle = {
  ...skipLinkStyle,
  transform: 'translateY(0)',
};

const darkTheme = {
  background: '#181825',
  text: '#f3f4fa',
  segment: '#232136',
  border: '#393552',
  highlight: '#a78bfa',
  label: '#7c3aed',
};
const lightTheme = {
  background: '#fff',
  text: '#181825',
  segment: '#f6f3ff',
  border: '#e0d7fa',
  highlight: '#a78bfa',
  label: '#3b82f6',
};

const Home = ({ dark, setDark }) => {
  const [skipLinkFocused, setSkipLinkFocused] = React.useState(false);
  const theme = dark ? darkTheme : lightTheme;

        return (
    <main aria-labelledby="titulo-home" style={{ padding: '2rem 0', background: theme.background, color: theme.text, minHeight: '100vh', transition: 'background 0.3s, color 0.3s' }}>
      <a
        href="#conteudo-principal"
        style={skipLinkFocused ? skipLinkFocusStyle : skipLinkStyle}
        onFocus={() => setSkipLinkFocused(true)}
        onBlur={() => setSkipLinkFocused(false)}
        onMouseDown={() => setSkipLinkFocused(false)}
        tabIndex={0}
      >
        Pular para o conteúdo principal
      </a>
      <Helmet>
        <title>Portfólio | Luis Mateus Faria</title>
        <meta name="description" content="Analista Desenvolvedor RPA com experiência em automação, integração de sistemas e desenvolvimento web." />
        <meta property="og:title" content="Portfólio | Luis Mateus Faria" />
        <meta property="og:description" content="Conheça meus projetos, habilidades e trajetória profissional." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Container style={{ maxWidth: 1100, padding: '0 2rem' }}>
        <Grid stackable columns={2} verticalAlign="middle" style={{ minHeight: 500 }}>
          <Grid.Row>
            <Grid.Column width={7} textAlign="center" verticalAlign="middle" style={{ paddingLeft: 24, paddingRight: 24, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Avatar />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                style={{ width: '100%' }}
              >
                <h1 id="titulo-home" style={{ color: theme.text, marginBottom: 8 }}>Luis Mateus dos Reis Faria</h1>
                <Label color={dark ? undefined : 'blue'} style={{ background: dark ? darkTheme.label : undefined, color: '#fff', marginBottom: 16 }}>Analista Desenvolvedor RPA & Web</Label>
                <Segment color="violet" raised style={{ margin: '1.5rem 0', background: theme.segment, border: `1px solid ${theme.border}`, fontSize: '1.1rem', fontWeight: 500, boxShadow: '0 2px 12px #a78bfa22', color: theme.text }} aria-label="Resumo profissional">
                  <Icon name="quote left" color="violet" style={{ float: 'left', marginRight: 8 }} />
                  Analista Desenvolvedor RPA com sólida experiência em automação de processos, integração de sistemas e desenvolvimento web. Focado em soluções front-end modernas com React.js e Semantic UI, com forte orientação a performance, qualidade de código e experiência do usuário.
                </Segment>
                <Segment color="purple" raised style={{ margin: '1.5rem 0', background: dark ? '#232136' : '#f3e8ff', border: `1px solid ${dark ? '#393552' : '#e9d5ff'}`, boxShadow: '0 2px 12px #a78bfa22', color: theme.text }} aria-label="Em destaque">
                  <Icon name={destaque.icone} color="purple" size="large" style={{ float: 'left', marginRight: 12 }} />
                  <div style={{ textAlign: 'left' }}>
                    <strong style={{ fontSize: '1.1rem' }}>{destaque.titulo}</strong>
                    <p style={{ margin: '0.5rem 0 1rem 0' }}>{destaque.descricao}</p>
                    <Button as="a" href={destaque.link} target="_blank" rel="noopener noreferrer" color="purple" size="small" icon labelPosition="left" aria-label="Ver projeto em destaque no GitHub">
                      <Icon name="github" />{destaque.cta}
                    </Button>
                  </div>
                </Segment>
              </motion.div>
            </Grid.Column>
            <Grid.Column width={9} verticalAlign="middle" style={{ paddingLeft: 24, paddingRight: 24 }}>
              {contatos && contatos.length > 0 ? (
                <Segment raised style={{ width: '100%', maxWidth: 500, margin: '0 auto 2rem auto', background: theme.segment, border: `1px solid ${theme.border}`, boxShadow: '0 2px 12px #a78bfa22', color: theme.text, display: 'flex', flexDirection: 'column', alignItems: 'stretch', padding: 24 }}>
                  <h3 style={{ margin: 0, marginBottom: 12, color: theme.text, fontWeight: 700, letterSpacing: 1 }}>Contato</h3>
                  {contatos.map(c => (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      key={c.label}
                      style={{ width: '100%' }}
                    >
                      <Button
                        fluid
                        as="a"
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        icon
                        labelPosition="left"
                        color={c.icon === 'linkedin' && !dark ? 'linkedin' : undefined}
                        aria-label={c.label + ': ' + c.value}
                        style={{
                          outline: 'none',
                          background: dark ? '#181825' : (c.icon === 'linkedin' ? '#3b82f6' : '#e5e7eb'),
                          color: dark ? '#fff' : (c.icon === 'linkedin' ? '#fff' : '#181825'),
                          fontWeight: 600,
                          fontSize: '1.1em',
                          border: 'none',
                          width: '100%',
                          marginBottom: 8,
                          display: 'block',
                          transition: 'background 0.3s, color 0.3s',
                        }}
                      >
                        <Icon name={c.icon} style={{ color: dark ? '#fff' : (c.icon === 'linkedin' ? '#fff' : '#181825') }} />{c.value}
                      </Button>
                    </motion.div>
                  ))}
                </Segment>
              ) : (
                <Segment raised style={{ width: '100%', maxWidth: 500, margin: '0 auto 2rem auto', background: theme.segment, border: `1px solid ${theme.border}`, boxShadow: '0 2px 12px #a78bfa22', color: theme.text, textAlign: 'center', padding: 24 }}>
                  Nenhuma informação de contato disponível.
                </Segment>
              )}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <Segment raised aria-labelledby="skills-heading" style={{ background: theme.segment, border: `1px solid ${theme.border}`, color: theme.text }}>
                  <h2 id="skills-heading" style={{ color: theme.text }}><Icon name="code" /> Habilidades Técnicas</h2>
                  <List horizontal relaxed size="large" aria-label="Habilidades técnicas">
                    {skills.map(s => (
                      <List.Item key={s.name} style={{ minWidth: 100 }}>
                        <Icon name={s.icon} size="big" title={s.name} aria-label={s.name} style={{ color: dark ? theme.highlight : undefined }} />
                        <div>{s.name}</div>
                      </List.Item>
                    ))}
                  </List>
                </Segment>
                <Segment aria-labelledby="softskills-heading" style={{ background: theme.segment, border: `1px solid ${theme.border}`, color: theme.text }}>
                  <h2 id="softskills-heading" style={{ color: theme.text }}><Icon name="users" /> Soft Skills</h2>
                  <List bulleted aria-label="Soft skills">
                    {softSkills.map(s => (
                      <List.Item key={s}>{s}</List.Item>
                    ))}
                  </List>
                </Segment>
              </motion.div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
                </main>
        );
}

export default Home;