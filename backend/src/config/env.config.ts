import "dotenv/config";

const env = {
  PORT: process.env.PORT || 8000,
  DATABASE_URL: process.env.DATABASE_URL!,
};

export default env;
