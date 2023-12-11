# Tailwind CSS official forms plugin.

was designed to provide an opinionated reset for form elements and make things like checkbox, radio buttons, select elements, 
super easy to style with utility classes.

## SETUP

1. Install : 

```cmd
npm install @tailwindcss/forms
```

2. Add in the tailwind.config.ts in plugins 

```typescript
 const config: Config = {
  content: [],
  theme: {
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
```

3. Use the attribute "type" on inputs:

```html
      <input
        type="text"
        className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />

      <input
        type="password"
        className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />

      <input
        type="checkbox"
        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
```

**NOTE:**

**ADD default inputs styles**

Go to node_modules>@tailwindcss>forms>src and copy the base selectors inputs.
To have the same styles for the inputs around all the app with have to add it to our base layer:

```css
    @layer base {
    [type="text"],
    [type="email"],
    [type="url"],
    [type="password"],
    [type="number"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="search"],
    [type="tel"],
    [type="time"],
    [type="week"],
    [multiple],
    textarea,
    select {
        @apply w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500;
    }
    [type="checkbox"],
    [type="radio"] {
        @apply border-gray-300 rounded text-indigo-600 focus:ring-indigo-500;
    }
    }
```