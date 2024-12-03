module.exports = {
  apps: [
    {
      name: 'toletpro-server',
      script: './dist/server.js',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
