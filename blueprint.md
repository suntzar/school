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

O objetivo desta alteração é implementar um sistema de pesquisa avançado e bem planejado.

1.  **Estrutura HTML:** Adicionar um campo de input para a busca acima da lista de alunos.
2.  **Estilos CSS:** Estilizar o novo campo de busca para se integrar ao design existente.
3.  **JavaScript:**
    *   Criar uma nova variável global para armazenar o termo da busca.
    *   Adicionar um event listener ao campo de busca para disparar a filtragem em tempo real (evento `input`).
    *   Modificar a função `renderStudentList` para que ela possa receber uma lista de alunos filtrada.
    *   A lógica de filtragem irá considerar os campos: `nome`, `cpf`, `mae` e `pai`.
    *   Implementar o destaque do termo pesquisado nos resultados.
    *   Exibir uma mensagem amigável quando a busca não retornar resultados.
