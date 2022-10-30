import { withHydrateDatetime } from 'relay-nextjs/date';
import { FetchFunction } from 'relay-runtime';

const relayEndpoint =
  process.env.NEXT_PUBLIC_RELAY_ENDPOINT ?? 'http://localhost:8888/graphql';

export const fetchQuery: FetchFunction = async (params, variables) => {
  const response = await fetch(relayEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  const json = await response.text();
  return JSON.parse(json, withHydrateDatetime);
};
