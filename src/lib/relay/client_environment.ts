import { hydrateRelayEnvironment } from 'relay-nextjs';
import { Environment, Network, Store, RecordSource } from 'relay-runtime';
import { fetchQuery } from './fetchQuery';

export function createClientNetwork() {
  return Network.create(fetchQuery);
}

let clientEnv: Environment | undefined;
export function getClientEnvironment() {
  if (typeof window === 'undefined') return null;

  if (clientEnv == null) {
    clientEnv = new Environment({
      network: createClientNetwork(),
      store: new Store(new RecordSource()),
      isServer: false,
    });

    hydrateRelayEnvironment(clientEnv);
  }

  return clientEnv;
}
