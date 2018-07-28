import {IotBbApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {IotBbApplication};

export async function main(options?: ApplicationConfig) {
  const app = new IotBbApplication(options);
  await app.boot();
  await app.start();
  return app;
}
