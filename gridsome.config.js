// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'GridWind',
  siteDescription: 'YNTKTS!',
  icon: './src/assets/images/website/icon.png',

  templates: {
    Post: '/:slug',
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/*.md',
        typeName: 'Post',
        remark: {}
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  }
}