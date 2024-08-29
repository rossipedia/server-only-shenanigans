import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getSomethings } from '~/lib/stuff.server';

export function loader() {
  return json({
    things: getSomethings(),
  });
}

export default function Index() {
  const { things } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Things</h1>
      <ul>
        {things.map((thing) => (
          <li key={thing.id}>{thing.name}</li>
        ))}
      </ul>
    </div>
  );
}
