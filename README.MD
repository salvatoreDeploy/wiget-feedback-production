## Projeto: feedback-widget

# Camada: Front-end

# Tecnologia: React

# Ferramenta:

    Node.Js, Estrutura Vite(React + Typescript)

# Biblioteca:

    tailwindcss
    phosphor icon
    headless-ui

# Comandos:

    `yarn create vite`
    `yarn dev`
    `yarn add -D tailwindcss postcss autoprefixer`
    `yarn tailwindcss init -p`
    `yarn add phosphor-react`
    `yarn add @headlessui/react`

# Conceitos:

    - Object.entries(feedbackTypes) => [
        ['BUG', {...}],
        [IDEA, {...}],
        [THOUGHT,{...]
    ]

    - Ao passar uma função como propriedade dessa forma, function(), se esta passando a execução de uma função como parametro, ao passar apenas "function" se passa uma função como parametro;

    - Ha possibilidade no React de cria uma comunicação entre componentes, de forma de passar uma função de um componente filho, para avisar o componente pai;
