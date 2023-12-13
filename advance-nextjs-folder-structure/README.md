#  NextJS Folder Structures | Advanced

```markdonw
.
├── app
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ui
│   │   ├── alert-dialog.tsx
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── ...
│   ├── main-nav.tsx
│   ├── page-header.tsx
│   └── ...
├── lib
│   └── utils.ts
├── styles
│   └── globals.css
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
``````

* vendor: everything related with third party apis that you might be using in your app
* server-actions: NextJS 13 to make API requests. Separate those functinos by functionality or differents parts of my website.
* Hooks: all of the React custom hooks.
* db: for any database configurations.
* config: configuration of the project.
* context: app context, providers etc.
* components: components that are going to be used across all the app(global components).

-> App folder structure: (group diferents parts of routes by using the **route grouping sintaxt**)
    Example:
    * (admin)
    * (content)
    * (products)
    ...
 
## Agrupado de Rutas en NextJS

Al crear una carpeta envuelta en (parentesis), no solo podemos organizar mejor nuestros archivos, sino que también podríamos definir diferentes layout / loading / error para grupos de rutas que están al mismo nivel (o incluso tener layouts anidados). Ahora, nuestra carpeta components está colocada lo más cerca de donde es relevante posible. Las carpetas con la sintaxis en parentesis () NextJS no las toma como una ruta en la app

**Private folders(With the prefix underscore):** folder that is not specifically a new route but its just some components related with the login page, NextJS will be know that is not a route so it will ignore that and it wont be treated as a route.ex: _components

- This allows us o separate the UI logic from routing logic.
- Consistently organizinginternal files across a project
- Avoiding potentialnaming conflictswith future NextJS file conventions.