module.exports = ({ env }) => {
  if (process.env.NODE_ENV === "development") {
    return {
      host: env("HOST", "0.0.0.0"),
      port: env.int("PORT", 1337),
    };
  } else {
    return {
      url: env("MY_HEROKU_URL"),
    };
  }
};
