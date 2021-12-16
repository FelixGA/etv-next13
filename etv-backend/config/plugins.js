module.exports = {
  graphql: {
    config: {
      defaultLimit: 1000,
      maxLimit: 1000,
    },
    apolloServer: {
      tracing: false,
    },
  },
  upload: {
    provider: "do",
    providerOptions: {
      key: process.env.DO_SPACE_ACCESS_KEY,
      secret: process.env.DO_SPACE_SECRET_KEY,
      endpoint: process.env.DO_SPACE_ENDPOINT,
      space: process.env.DO_SPACE_BUCKET,
      directory: process.env.DO_SPACE_DIRECTORY,
      cdn: process.env.DO_SPACE_CDN,
    },
  },
};
