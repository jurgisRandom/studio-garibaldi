// Only one item MUST have the "default: true" key

module.exports = {
    en: {
        default: true,
        path: `en`,
        locale: `en-US`,
        dateFormat: `DD/MM/YYYY`,
        siteLanguage: `en`,
        ogLanguage: `en_US`,
        defaultTitle: `Gatsby Starter with multi-language and CMS`,
        defaultDescription: `Gatsby example site using Markdown, i18n and CMS`,
    },
    nl: {
        path: `nl`,
        locale: `nl-NL`,
        dateFormat: `DD/MM/YYYY`,
        siteLanguage: `nl`,
        ogLanguage: `nl_NL`,
        defaultTitle: `Studio Garibaldi`,
        defaultDescription: `Studio Garibaldi`,
    },
}
