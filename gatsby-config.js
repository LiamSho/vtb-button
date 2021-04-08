const conf = {
    //网站的标题，这将显示在：浏览器标签栏，搜索引擎搜索结果，PWA安装应用显示的标题
    title: `vtb-button`,
    //网站介绍，这将显示在： 
    description: `Quickly build a voice button site for vtbs`,
    language: `zh`,
    background_color: `#BFEBFF`,
    theme_color: `#BFEBFF`,
}

module.exports = {
    siteMetadata: {
        title: conf.title,
        description: conf.description,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: conf.title,
                short_name: conf.title,
                start_url: `/`,
                background_color: conf.background_color,
                theme_color: conf.theme_color,
                display: `standalone`,
                icon: `static/images/icon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-next-seo`,
            options: {
                title: conf.title,
                description: conf.description,
                language: conf.language,
                openGraph: {
                    type: `website`,
                    title: conf.title,
                    description: conf.description,
                }
            }
        },
        'gatsby-plugin-offline',
    ],
};
