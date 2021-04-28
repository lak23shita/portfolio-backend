module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-54-166-167-192.compute-1.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'dd55v85a375bdu'),
        username: env('DATABASE_USERNAME', 'vmbldnujyxgejr'),
        password: env('DATABASE_PASSWORD', 'fa608a0119ec9916738c1971e465444a1c7d04e2e726f4f82215b442cbc8e764'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not Required
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      options: {
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});

// Host: 
// Database: 
// User: 
// Port: 5432
// Password: 