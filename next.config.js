const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  target: 'serverless',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})
