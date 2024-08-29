interface Thing {
  id: number;
  name: string;
}

export function getSomethings(): Thing[] {
  return [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' },
  ];
}
