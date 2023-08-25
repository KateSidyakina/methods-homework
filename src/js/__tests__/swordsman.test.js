import Swordsman from '../Swordsman';

test('Swordsman test', () => {
  const result = new Swordsman('name');
  const expected = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'name',
    type: 'Swordsman',
  };
  expect(result).toEqual(expected);
});
