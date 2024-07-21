const prettierPluginAstro = await import("prettier-plugin-astro");

export default {
    semi: false,
    singleQuote: false,
    tabWidth: 2,
    useTabs: true,
    plugins: [
        prettierPluginAstro,
    ],
    overrides: [
        {
            files: "**/*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};