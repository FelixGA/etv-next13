const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  if (process.env.NODE_ENV === "development") {
    return {
      connection: {
        client: "postgres",
        connection: {
          host: "postgres",
          port: 5432,
          database: "strapi",
          user: "strapi",
          password: "strapi",
          ssl: false,
        },
      },
    };
  } else {
    const { host, port, database, user, password } = parse(
      process.env.DATABASE_URL
    );

    return {
      connection: {
        client: "postgres",
        connection: {
          host,
          port,
          database,
          user,
          password,
          ssl: {
            rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
          },
        },
      },
    };
  }
};
