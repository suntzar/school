# Gerenciador de Alunos para Escola de Educação Infantil

## Visão Geral

Este projeto é um gerenciador de alunos simples e intuitivo, projetado para escolas de educação infantil. Ele permite adicionar, editar, remover, carregar e baixar informações de alunos, organizando-os pela combinação de turma e turno. O design é focado na usabilidade, com uma interface amigável e visualmente agradável, com temas claro e escuro.

## Funcionalidades Implementadas

*   **CRUD de Alunos:** Criação, leitura, atualização e exclusão de registros de alunos.
*   **Armazenamento Local:** Os dados dos alunos são persistidos no LocalStorage do navegador.
*   **Upload/Download de JSON:** Capacidade de carregar e exportar a lista de alunos.
*   **Organização por Turma e Turno:** Alunos são agrupados pela combinação de turma e turno.
*   **Pesquisa Avançada:** Um campo de busca permite filtrar alunos em tempo real por nome, CPF, nome da mãe ou nome do pai.
*   **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela.
*   **Ícones Visuais:** Utilização de Feather Icons para botões de ação e status.
*   **Modais Interativos:** Modais para adicionar/editar alunos e confirmar exclusão.
*   **Tema Claro/Escuro:** Um seletor de tema permite alternar entre um modo claro e um escuro, com a preferência salva no LocalStorage.

## Design e Estilo (Versão Atual)

*   **Temas:**
    *   **Claro:** Branco predominante com elementos coloridos em tons pastel.
    *   **Escuro:** Tons de cinza escuro com os mesmos toques coloridos, adaptados para o fundo escuro.
*   **Seletor de Tema:** Um botão no cabeçalho permite a troca de tema com ícones de sol/lua.
*   **Layout:** Limpo e estruturado, com cards para cada aluno e seções claras.
*   **Tipografia:** Fontes modernas e legíveis, com hierarquia clara.
*   **Cores:** Paleta pastel para elementos de destaque em ambos os temas.
*   **Elementos Visuais:**
    *   Botões com sombras sutis e bordas arredondadas.
    *   Cards de alunos com efeito de elevação ao passar o mouse.
    *   Cabeçalhos de turma destacados.
    *   Badges de status coloridos.
*   **Interatividade:** Transições suaves em botões e cards, incluindo a troca de tema.

## Plano para a Próxima Alteração (Atual)

O objetivo desta alteração foi adicionar um seletor de tema (claro/escuro).

1.  **Estrutura HTML:** Adicionar um botão no cabeçalho para servir como seletor de tema.
2.  **Estilos CSS:**
    *   Criar variáveis CSS para o tema escuro dentro de um seletor `[data-bs-theme="dark"]`.
    *   Estilizar o novo botão seletor de tema, incluindo ícones de sol e lua.
    *   Garantir que todos os componentes (inputs, modais, etc.) se adaptem corretamente ao tema escuro.
3.  **JavaScript:**
    *   Adicionar uma função para gerenciar a troca de tema.
    *   A função detecta a preferência do sistema (`prefers-color-scheme`) e a configuração salva no LocalStorage.
    *   Adicionar um event listener ao botão para alternar o atributo `data-bs-theme` no elemento `<html>`.
    *   Salvar a preferência do usuário no LocalStorage para persistência.
    *   Garantir que os ícones do seletor de tema (sol/lua) sejam atualizados corretamente.
