import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { fetchQuery } from './fetchQuery';

export function createServerNetwork() {
  return Network.create(fetchQuery);
}

export function createServerEnvironment() {
  return new Environment({
    network: createServerNetwork(),
    store: new Store(new RecordSource()),
    isServer: true,
  });
}
