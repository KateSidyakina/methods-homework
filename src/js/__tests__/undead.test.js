import Undead from '../Undead';

test('Undead test', () => {
  const result = new Undead('name');
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'name',
    type: 'Undead',
  };
  expect(result).toEqual(expected);
});
