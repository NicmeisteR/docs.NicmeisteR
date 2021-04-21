/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'docs/NicmeisteR',
  tagline: 'Just documenting my life/experiences.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nicmeister', // Usually your GitHub org/user name.
  projectName: 'docs.nicmeister', // Usually your repo name.
  themeConfig: {
    // announcementBar: {
    //   id: 'support_us', // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    //   isCloseable: false, // Defaults to `true`.
    // },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
            // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'docs/NicmeisteR',
      logo: {
        alt: 'docs/NicmeisteR Logo',
        src: 'img/logo.webp',
      },
      // style: "dark",
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/nicmeister',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'search',
          // position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/NicmeistaR',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/nicolaasdev',
            },
            {
              label: 'Dev.to',
              href: 'https://dev.to/nicmeister/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} docs/Nicmeister, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
