module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "portfolio-ly81fs1ej6vcnmqt-svc.qovery.io"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "portfolio"),
        username: env("DATABASE_USERNAME", "superuser"),
        password: env("DATABASE_PASSWORD", "tb8PNyObhI27HhwQ"),
      },
      options: {},
    },
  },
});
