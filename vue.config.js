const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    host: '0.0.0.0', // Allows access from any host (useful if you're accessing from an external network)
  // Disables host header check (useful for local dev, but not recommended for production)
    allowedHosts: 'all', // Use this if you're accessing from a custom domain (if needed)
  },
});
