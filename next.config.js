const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
module.exports = {
  target: 'serverless',
  withMDX: withMDX({
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  }),
}
