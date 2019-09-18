import {StarterApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {StarterApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new StarterApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
