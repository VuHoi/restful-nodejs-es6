import config from "../config.json";
const WHITELIST = {
  posts: {
    create: ['title', 'text'],
    update: ['title', 'text'],
  },
  users: {
    create: ['email', 'username', 'password'],
  },
};
const devConfig = {
  JWT_SECRET: config.JWT_SECRET_DEV,
  MONGO_URL: config.MONGO_URL
};



const defaultConfig = {
  PORT: process.env.PORT || 4000,
  RAVEN_ID: config.RAVEN_ID,
  WHITELIST,
};



export default {
  ...defaultConfig,
  ...devConfig,
};
