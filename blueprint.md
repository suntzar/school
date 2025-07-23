# Gerenciador de Alunos para Escola de Educação Infantil

## Visão Geral

Este projeto é um gerenciador de alunos simples e intuitivo, projetado para escolas de educação infantil. Ele permite adicionar, editar, remover, carregar e baixar informações de alunos, organizando-os pela combinação de turma e turno. O design é focado na usabilidade, com uma interface amigável e visualmente agradável, utilizando um tema branco com toques coloridos.

## Funcionalidades Implementadas

*   **CRUD de Alunos:** Criação, leitura, atualização e exclusão de registros de alunos.
*   **Armazenamento Local:** Os dados dos alunos são persistidos no LocalStorage do navegador, garantindo que as informações não sejam perdidas ao fechar a página.
*   **Upload/Download de JSON:** Capacidade de carregar dados de alunos a partir de um arquivo JSON e exportar a lista atual para um arquivo JSON.
*   **Organização por Turma e Turno:** Alunos são agrupados e exibidos pela combinação de turma e turno para facilitar a visualização e gestão.
*   **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela (desktop, tablet, celular).
*   **Ícones Visuais:** Utilização de Feather Icons para botões de ação e status, melhorando a compreensão.
*   **Modais Interativos:** Modais para adicionar/editar alunos e confirmar exclusão, com campos de formulário bem organizados.

## Design e Estilo (Versão Atual)

*   **Tema:** Branco predominante com elementos coloridos em tons pastel.
*   **Layout:** Limpo e estruturado, com cards para cada aluno e seções claras.
*   **Tipografia:** Fontes modernas e legíveis, com hierarquia clara.
*   **Cores:** Paleta pastel para elementos de destaque (botões, cabeçalhos de turma, badges de status).
*   **Elementos Visuais:**
    *   Botões com sombras sutis e bordas arredondadas.
    *   Cards de alunos com efeito de elevação ao passar o mouse.
    *   Cabeçalhos de turma destacados com cor e borda inferior.
    *   Badges de status com cores correspondentes (Ativo - verde, Transferido - laranja, Inativo - cinza).
*   **Interatividade:** Pequenas transições suaves em botões e cards ao interagir.

## Plano para a Próxima Alteração (Atual)

O objetivo desta alteração é refinar a organização dos alunos, agrupando-os pela combinação de "Turma - Turno", para uma visualização mais granular e organizada.

1.  **Estrutura HTML:** Manter a estrutura atual.
2.  **Estilos CSS:** Manter os estilos existentes, pois a alteração é na lógica de agrupamento.
3.  **JavaScript (`renderStudentList`):**
    *   Modificar a lógica de `groupedByTurma` para usar uma chave `turma - turno`.
    *   Ajustar o texto do `turmaTitle` para exibir a nova combinação.
