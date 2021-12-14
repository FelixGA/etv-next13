module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd5d288f742e5e320c9e9e5fcf721374b'),
  },
});
