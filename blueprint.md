# Gerenciador de Alunos para Escola de Educação Infantil

## Visão Geral

Este projeto é um gerenciador de alunos simples e intuitivo, projetado para escolas de educação infantil. Ele permite adicionar, editar, remover, carregar e baixar informações de alunos, organizando-os pela combinação de turma e turno. O design é focado na usabilidade, com uma interface amigável e visualmente agradável, utilizando um tema branco com toques coloridos.

## Funcionalidades Implementadas

*   **CRUD de Alunos:** Criação, leitura, atualização e exclusão de registros de alunos.
*   **Armazenamento Local:** Os dados dos alunos são persistidos no LocalStorage do navegador.
*   **Upload/Download de JSON:** Capacidade de carregar e exportar la lista de alunos.
*   **Organização por Turma e Turno:** Alunos são agrupados pela combinação de turma e turno.
*   **Pesquisa Avançada:** Um campo de busca permite filtrar alunos em tempo real por nome, CPF, nome da mãe ou nome do pai.
*   **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela.
*   **Ícones Visuais:** Utilização de Feather Icons para botões de ação e status.
*   **Modais Interativos:** Modais para adicionar/editar alunos e confirmar exclusão.

## Design e Estilo (Versão Atual)

*   **Tema:** Branco predominante com elementos coloridos em tons pastel.
*   **Layout:** Limpo e estruturado, com cards para cada aluno e seções claras.
*   **Tipografia:** Fontes modernas e legíveis, com hierarquia clara.
*   **Cores:** Paleta pastel para elementos de destaque.
*   **Elementos Visuais:**
    *   Botões com sombras sutis e bordas arredondadas.
    *   Cards de alunos com efeito de elevação ao passar o mouse.
    *   Cabeçalhos de turma destacados.
    *   Badges de status coloridos.
*   **Interatividade:** Transições suaves em botões e cards.

## Plano para a Próxima Alteração (Atual)

O objetivo desta alteração é organizar o projeto de forma mais modular e limpa.

1.  **Estrutura de Pastas:** Criar as pastas `scripts`, `styles` e `assets/data`.
2.  **Mover Arquivos:** Mover o arquivo `database_atualizado.json` para a nova pasta `scripts/data`.
3.  **Separar CSS:** Extrair todo o código CSS inline do `index.html` para um novo arquivo `styles/style.css`.
4.  **Separar JavaScript:** Mover todo o código JavaScript do `index.html` para um novo arquivo `scripts/main.js`.
5.  **Atualizar HTML:** Modificar o `index.html` para referenciar os novos arquivos CSS e JavaScript externos.
