/* module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd5d288f742e5e320c9e9e5fcf721374b'),
  },
}); */

module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "f88234ff4236d88b5401b2f328027b02"),
  },
});
