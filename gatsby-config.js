require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: "hyrule",
    siteTitleAlt:"hyrule - @hyliancoder",
    siteHeadline: "hyrule - @hyliancoder",
    author: "@hyliancoder",
    siteDescription: "alabama blood, texas heart. progressive. coder. gamer. music lover. foodie. 🖤zelda & penguins🖤",
    siteUrl: "https://hyliancoder.com/",
    siteImage: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/84269546_10162900818350481_6003901046110289920_o.jpg?_nc_cat=106&_nc_ohc=n3mH5TXp3YcAX-pqx9h&_nc_ht=scontent-dfw5-2.xx&oh=a98d5fec75539e2bc74f671407cf5a40&oe=5EC1A8BF",
    siteLanguage: "EN",
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
        name: `ΔNDRΞW @hyliancoder`,
        short_name: `ΔNDRΞW`,
        description: `site for hyliancoder.com`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#502F6D`,
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
