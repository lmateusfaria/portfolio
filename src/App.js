import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';

// Lazy loading das páginas para otimizar o bundle e melhorar a performance
const Home = lazy(() => import('./pages/Home/Home'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const About = lazy(() => import('./pages/About/About'));

// Hook global de modo escuro
const useDarkMode = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(dark));
  }, [dark]);
  return [dark, setDark];
};

/**
 * Componente principal da aplicação.
 * - Utiliza Suspense para exibir fallback durante o carregamento das páginas.
 * - Inclui NavBar fixa para navegação.
 * - Estrutura semântica com <main> para acessibilidade.
 */
const App = () => {
  const [dark, setDark] = useDarkMode();
  return (
    <div className="App">
      <NavBar dark={dark} setDark={setDark} />
      {/*
        <main> melhora a acessibilidade, indicando a área principal do conteúdo.
        O fallback pode ser customizado para um spinner ou skeleton loader.
      */}
      <main>
        <Suspense fallback={<div>Carregando página...</div>}>
          <Routes>
            {/*
              Home: Página inicial, pode conter resumo do portfólio, call-to-action e destaques.
              Sugestão: Adicionar meta tags e título dinâmico para SEO.
            */}
            <Route path="/" element={<Home dark={dark} setDark={setDark} />} />
            {/*
              Projects: Lista de projetos, pode ser filtrável e responsiva.
              Sugestão: Usar cards acessíveis, aria-labels e feedback visual ao filtrar/carregar.
            */}
            <Route path="/projects" element={<Projects dark={dark} setDark={setDark} />} />
            {/*
              About: Informações sobre o autor, trajetória e skills.
              Sugestão: Estruturar com headings semânticas e links acessíveis.
            */}
            <Route path="/about" element={<About dark={dark} setDark={setDark} />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;