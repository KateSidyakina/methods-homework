import Daemon from '../Daemon';

test('Daemon test', () => {
  const result = new Daemon('name');
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'name',
    type: 'Daemon',
  };
  expect(result).toEqual(expected);
});
