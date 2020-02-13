require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: "hyrule",
    author: "ΔNDRΞW",
    description: "alabama blood, texas heart. progressive. coder. gamer. music lover. foodie. 🖤zelda & penguins🖤",
    siteUrl: "https://hyliancoder.com/",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/hyliancoder",
      },
      {
        name: "linkedin",
        url: "https://linkedin.com/in/hyliancoder",
      },
      {
        name: "github",
        url: "https://github.com/hyliancoder",
      },
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
