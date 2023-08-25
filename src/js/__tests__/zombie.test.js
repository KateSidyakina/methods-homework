import Zombie from '../Zombie';

test('Zombie test', () => {
  const result = new Zombie('name');
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'name',
    type: 'Zombie',
  };
  expect(result).toEqual(expected);
});
