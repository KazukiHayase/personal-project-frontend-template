module.exports = {
  compiler: {
    relay: {
      src: './src',
      schema: './schema.graphql',
      exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
      language: 'typescript',
      customScalars: {}
    },
  },
  transpilePackages: ['@mui/material'],
  experimental: {
    appDir: true,
  },
}
