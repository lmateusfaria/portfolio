import React, { useState, useEffect } from 'react';
import { Icon, Card, Loader, Button, Container } from 'semantic-ui-react';

// Exemplo de dados de projetos (pode ser substituído por fetch de API futuramente)
const projetosExemplo = [
  {
    id: 1,
    titulo: 'API de Orquestração RPA',
    descricao: 'Desenvolvimento de API RESTful em Java/Spring Boot para orquestração de robôs RPA.',
    tecnologias: ['Java', 'Spring Boot', 'REST'],
    link: 'https://github.com/lmateusfaria',
  },
  {
    id: 2,
    titulo: 'Dashboard Power BI',
    descricao: 'Criação de dashboards interativos para análise de dados operacionais.',
    tecnologias: ['Power BI', 'Excel'],
    link: '',
  },
  {
    id: 3,
    titulo: 'Automação de Workflows',
    descricao: 'Automação de processos com Python para TAC Etiquetas.',
    tecnologias: ['Python', 'Pandas', 'Tkinter'],
    link: '',
  },
];

const darkTheme = {
  background: '#181825',
  text: '#f3f4fa',
  card: '#232136',
  border: '#393552',
};
const lightTheme = {
  background: '#fff',
  text: '#181825',
  card: '#fff',
  border: '#e0d7fa',
};

/**
 * ProjectsPage (Organism)
 * - Lista projetos em cards acessíveis e responsivos.
 * - Usa feedback visual de carregamento.
 * - Estrutura semântica e navegação por teclado.
 */
const Projects = ({ dark }) => {
  const [loading, setLoading] = useState(true);
  const [projetos, setProjetos] = useState([]);
  const theme = dark ? darkTheme : lightTheme;

  useEffect(() => {
    // Simula carregamento de dados
    setTimeout(() => {
      setProjetos(projetosExemplo);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <main aria-labelledby="titulo-projetos" className="projects-section" style={{ padding: '2rem 0', background: theme.background, color: theme.text, minHeight: '100vh', transition: 'background 0.4s, color 0.4s' }}>
      <Container style={{ maxWidth: 1100, padding: '0 2rem', transition: 'background 0.4s, color 0.4s' }}>
        <header style={{ textAlign: 'center', marginBottom: '2rem', transition: 'color 0.4s' }}>
          <Icon name='lightbulb outline' size='huge' aria-hidden="true" style={{ color: theme.text, transition: 'color 0.4s' }} />
          <h1 id="titulo-projetos" style={{ color: theme.text, transition: 'color 0.4s' }}>Projetos em Destaque</h1>
          <p style={{ color: theme.text, transition: 'color 0.4s' }}>Confira alguns projetos de automação, APIs e dashboards desenvolvidos recentemente.</p>
        </header>
        <main>
          {loading ? (
            <Loader active inline='centered' size='large' content='Carregando projetos...' />
          ) : (
            <Card.Group itemsPerRow={3} stackable style={{ paddingLeft: 12, paddingRight: 12 }}>
              {projetos.map(proj => (
                <Card key={proj.id} as="article" aria-label={proj.titulo} tabIndex={0} style={{ background: theme.card, color: theme.text, border: `1px solid ${theme.border}`, transition: 'background 0.4s, color 0.4s, border 0.4s' }}>
                  <Card.Content>
                    <Card.Header as="h2" style={{ fontSize: '1.3rem', color: theme.text, transition: 'color 0.4s' }}>{proj.titulo}</Card.Header>
                    <Card.Meta style={{ color: dark ? '#f3f4fa' : '#181825', fontWeight: 500, marginBottom: 8 }}>
                      {proj.tecnologias.map(tec => (
                        <span key={tec} style={{ marginRight: 8 }}>{tec}</span>
                      ))}
                    </Card.Meta>
                    <Card.Description style={{ color: dark ? '#f3f4fa' : '#181825', transition: 'color 0.4s' }}>{proj.descricao}</Card.Description>
                  </Card.Content>
                  {proj.link && (
                    <Card.Content extra>
                      <Button as="a" href={proj.link} target="_blank" rel="noopener noreferrer" primary aria-label={`Ver mais sobre ${proj.titulo}`}
                        style={{ background: dark ? '#7c3aed' : undefined, color: dark ? '#fff' : undefined, border: 'none', transition: 'background 0.4s, color 0.4s', fontWeight: 600 }}>
                        Ver no GitHub
                      </Button>
                    </Card.Content>
                  )}
                </Card>
              ))}
            </Card.Group>
          )}
        </main>
      </Container>
    </main>
  );
};

export default Projects;