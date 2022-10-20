/* eslint-disable quotes */
/* eslint-disable no-template-curly-in-string */
const CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev',
  BASE_IMAGE_URL: `https://restaurant-api.dicoding.dev/images/medium/`,
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'restaurant-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
  WEB_SOCKET_SERVER: 'wss://restaurants-feed.dicoding.dev',
};

export default CONFIG;
