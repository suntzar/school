# Blueprint do Projeto: Escola de Educação Infantil

## Visão Geral do Projeto
Este projeto é um site para uma escola de educação infantil, projetado com um tema predominantemente branco, mas com toques vibrantes de cores para criar um ambiente alegre e convidativo. O design visa ser bem organizado, estruturado e profissional, ao mesmo tempo em que é acessível e intuitivo para pais e educadores.

## Detalhes do Design e Estilo

### Cores
*   **Fundo Principal:** Branco (`#FFFFFF`) para um visual limpo e arejado.
*   **Cores de Destaque (Vibrantes e Amigáveis):**
    *   Azul Céu (`#87CEEB`)
    *   Verde Menta (`#98FB98`)
    *   Amarelo Brilhante (`#FFD700`)
    *   Rosa Claro (`#FFB6C1`)
    *   Laranja Pêssego (`#FFCC99`)
*   **Texto Principal:** Preto Suave (`#333333`) para boa legibilidade.
*   **Cores de Sombra/Detalhe:** Tons pastel das cores de destaque para profundidade sutil.

### Tipografia
*   **Fontes:** Escolha de fontes amigáveis e legíveis.
    *   **Títulos (H1, H2):** Uma fonte mais arredondada e divertida, mas ainda profissional (ex: "Quicksand" ou "Nunito").
    *   **Corpo do Texto (P, Li):** Uma fonte limpa e fácil de ler (ex: "Open Sans" ou "Lato").
*   **Tamanhos:**
    *   `H1`: Grande e impactante (e.g., 2.5em - 3em)
    *   `H2`: Tamanho para seções (e.g., 2em)
    *   `H3`: Subtítulos (e.g., 1.5em)
    *   `P`: Tamanho de leitura confortável (e.g., 1em - 1.1em)
    *   Ajuste de tamanhos para responsividade.

### Layout e Estrutura
*   **Responsividade:** Design fluido que se adapta a diferentes tamanhos de tela (desktop, tablet, mobile) usando `flexbox` e `grid`.
*   **Espaçamento:** Uso generoso de `padding` e `margin` para criar "espaço em branco" e melhorar a legibilidade e a organização.
*   **Seções Claras:** O conteúdo será dividido em seções distintas com títulos claros.
*   **Navegação:** Um menu de navegação intuitivo no cabeçalho.
*   **Ícones:** Uso de ícones relevantes para complementar o texto e melhorar a compreensão visual (e.g., Font Awesome via CDN).

### Elementos Visuais e Interatividade
*   **Botões:** Botões com cantos ligeiramente arredondados, fundo colorido e texto branco (ou preto suave) com um efeito `hover` sutil (e.g., mudança de cor de fundo ou leve sombra).
*   **Cards:** Seções de conteúdo apresentadas como "cards" com um fundo branco e uma sombra suave para dar profundidade. Cada card pode ter uma borda colorida sutil na cor de destaque correspondente.
*   **Imagens:** Imagens relevantes e de alta qualidade de crianças e atividades escolares. Se necessário, serão usados placeholders ou imagens de bancos de imagens gratuitos. As imagens terão cantos arredondados e sombras suaves.
*   **Animações/Efeitos:** Transições suaves em elementos interativos (e.g., botões, links) para uma experiência de usuário agradável.
*   **Formulários:** Campos de formulário limpos e organizados com bordas coloridas no foco.

## Funcionalidades Implementadas

*   **Página Única (Single Page Application):** Todo o conteúdo será apresentado em um único arquivo `index.html`.
*   **Navegação Interna:** Links de navegação que levam a seções específicas da mesma página.
*   **Seções de Conteúdo:**
    *   **Cabeçalho (Header):** Título da escola, logotipo (placeholder) e menu de navegação.
    *   **Hero Section:** Uma grande imagem ou carrossel com uma mensagem de boas-vindas.
    *   **Sobre Nós:** Descrição da filosofia e missão da escola.
    *   **Nossos Cursos/Atividades:** Lista de programas oferecidos (placeholder).
    *   **Galeria/Eventos:** Seção para fotos ou avisos de eventos (placeholder).
    *   **Depoimentos:** Placeholder para depoimentos de pais.
    *   **Contato:** Formulário de contato simples (placeholder) e informações de contato.
    *   **Rodapé (Footer):** Informações de direitos autorais e links para redes sociais (placeholders).

## Plano de Ação Atual (Refatorar para um único HTML)

1.  **Ler `index.html` e `style.css` (se existirem):** Obter o conteúdo atual desses arquivos.
2.  **Gerar Novo `index.html`:**
    *   Criar a estrutura HTML básica (`doctype`, `html`, `head`, `body`).
    *   Inserir o CSS diretamente no `<head>` usando a tag `<style>`.
    *   Adicionar metatags para responsividade e charset.
    *   Incluir um link para uma CDN de ícones (Font Awesome).
    *   Construir as seções do site (Header, Hero, Sobre Nós, Cursos, Galeria, Contato, Footer).
    *   Aplicar os estilos definidos acima usando CSS moderno (variáveis CSS, flexbox, grid, media queries).
    *   Adicionar conteúdo placeholder.
    *   Garantir a acessibilidade.
3.  **Remover `style.css`:** Excluir o arquivo de estilos externo.
4.  **Escrever o novo `index.html`.**