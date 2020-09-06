module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-contexts/register',
    '@storybook/addon-backgrounds/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    }
  ]
}
