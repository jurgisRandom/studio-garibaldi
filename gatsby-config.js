module.exports = {
    siteMetadata: {
        title: `Studio Garibaldi`,
        description: `Studio Garibaldi`,
        author: `@diogorodrigues`,
        siteUrl: `https://studio-garibaldi.netlify.com/`,
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-json`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // It needs to be the first one to work with gatsby-remark-images
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static/assets/img`,
                name: `uploads`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/config/translations`,
                name: `translations`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/config/menu`,
                name: `menu`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
                name: `images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/pages`,
                name: `pages`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            name: `uploads`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1040,
                            linkImagesToOriginal: false,
                        },
                    },
                    `gatsby-remark-lazy-load`,
                    `gatsby-remark-prismjs`, // It needs to be the last one
                ],
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Open Sans`,
                        variants: [`400`, `600`],
                    },
                ],
            },
        },

        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Studio Garibaldi`,
                short_name: `Studio Garibaldi`,
                start_url: `/`,
                background_color: `#16202c`,
                theme_color: `#16202c`,
                display: `minimal-ui`,
                icon: `src/images/studio-garibaldi.svg`,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
}
