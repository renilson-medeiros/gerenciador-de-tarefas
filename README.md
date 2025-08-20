# Gerenciador de Tarefas (To-Do)

Este é um projeto de Gerenciador de Tarefas (To-Do) desenvolvido em React, utilizando Vite para build e Tailwind CSS para estilização. O objetivo é permitir que o usuário adicione, visualize, marque como concluída e exclua tarefas, com persistência local via `localStorage`.

## Funcionalidades

- Adicionar tarefas com título e descrição
- Listar tarefas cadastradas
- Marcar tarefas como concluídas
- Excluir tarefas
- Visualizar detalhes de cada tarefa em uma página separada
- Persistência das tarefas no navegador (localStorage)
- Interface responsiva e moderna com Tailwind CSS

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/icons/)

## Estrutura de Pastas

```
src/
  App.jsx
  main.jsx
  components/
    AddTask.jsx
    Tasks.jsx
    form/
      Input.jsx
  pages/
    TasksPage.jsx
  assets/
  App.css
  index.css
public/
index.html
```

## Como executar o projeto

### 1. Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado v18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente já vem com o Node)

### 2. Clonando o repositório

```sh
git clone git@github.com:renilson-medeiros/gerenciador-de-tarefas.git
cd to-do
```

### 3. Instalando as dependências

```sh
npm install
```

### 4. Rodando o projeto em modo desenvolvimento

```sh
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Scripts disponíveis

Veja todos os scripts em [`package.json`](package.json):

- `npm run dev` — inicia o servidor de desenvolvimento

## Principais arquivos e componentes

- [`src/App.jsx`](src/App.jsx): componente principal, gerencia o estado das tarefas e integra os componentes.
- [`src/components/AddTask.jsx`](src/components/AddTask.jsx): formulário para adicionar novas tarefas.
- [`src/components/Tasks.jsx`](src/components/Tasks.jsx): lista de tarefas, permite marcar como concluída, excluir e visualizar detalhes.
- [`src/pages/TasksPage.jsx`](src/pages/TasksPage.jsx): página de detalhes de uma tarefa.
- [`src/components/form/Input.jsx`](src/components/form/Input.jsx): componente de input reutilizável com validação.
- [`src/main.jsx`](src/main.jsx): ponto de entrada da aplicação e configuração das rotas.

## Configuração do Tailwind

A configuração do Tailwind está em [`tailwind.config.js`](tailwind.config.js) e os estilos globais em [`src/index.css`](src/index.css) e [`src/App.css`](src/App.css).

## Observações

- As tarefas são salvas no `localStorage` do navegador, não sendo compartilhadas entre dispositivos.
- IDs das tarefas são incrementais; para produção, recomenda-se usar UUIDs.
- O projeto já está pronto para deploy estático (ex: Vercel, Netlify).

## O que aprendi

- Gerenciamento de Estado: utilização do hook useState para controlar os dados da aplicação de forma reativa.
- Componentização: criação e reutilização de componentes para a UI, como AddTask e Input.
- Props: passagem de dados e funções entre componentes (pai → filho).
- Renderização Condicional: lógica para exibir diferentes partes da interface com base no estado da aplicação.
- Persistência Local: integração com localStorage para salvar dados no navegador.
- Rotas: utilização do React Router DOM para navegação entre páginas.
=======
---

Projeto desenvolvido para fins de estudo e demonstração de React + Vite
