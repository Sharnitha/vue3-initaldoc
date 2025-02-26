const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    host: '0.0.0.0', // Allows access from any host (useful if you're accessing from an external network)
    disableHostCheck: true, // Disables host header check (useful for local dev, but not recommended for production)
          public: 'https://webappvu3deploy.azurewebsites.net', // Use this if you're accessing from a custom domain (if needed)
  },
});
