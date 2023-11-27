# Sistema de Geração de Provas

Este projeto no GitHub representa uma aplicação completa para a criação e geração de provas direcionada a professores. A solução é dividida em um backend desenvolvido em TypeScript, utilizando a arquitetura Clean Architecture, e um frontend construído com Next.js, também seguindo os princípios da Clean Architecture, e fazendo uso da biblioteca de componentes Chakra UI.

## Backend (Clean Architecture em TypeScript com Prisma ORM)

O backend foi desenvolvido em TypeScript e adota os princípios da Clean Architecture para garantir uma estrutura modular, escalável e de fácil manutenção. A principal mudança foi a substituição do TypeORM pelo Prisma ORM para operações de persistência de dados, aproveitando os benefícios e a eficiência oferecidos por essa ferramenta.

### Tecnologias Utilizadas no Backend:
- TypeScript
- Node.js
- Express.js
- Prisma ORM para persistência de dados
- Jest para testes unitários
- Swagger para documentação da API

## Frontend (Next.js com Chakra UI)

O frontend foi desenvolvido em Next.js, uma framework React, para garantir uma experiência de usuário eficiente e responsiva. O design e a estilização foram implementados utilizando Chakra UI, uma biblioteca de componentes que facilita a criação de interfaces modernas e esteticamente agradáveis.

### Tecnologias Utilizadas no Frontend:
- Next.js
- React
- Chakra UI
- TypeScript
- Axios para comunicação com o backend
- Jest e React Testing Library para testes de componente

## Funcionalidades do Projeto:

1. **Autenticação de Professores:** Sistema de autenticação seguro para professores acessarem a plataforma.

2. **Criação de Provas:** Professores podem criar novas provas, adicionando questões de diferentes tipos.

3. **Geração de PDF:** Após a criação da prova, os professores têm a opção de gerar um arquivo PDF contendo a prova completa.

4. **Versionamento:** Este repositório mantém a versão 1.0 do projeto. Existe uma versão 2.0 em desenvolvimento, utilizando Golang no backend, que não foi tornada pública.
