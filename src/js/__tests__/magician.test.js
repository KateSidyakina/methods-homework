import Magician from '../Magician';

test('Magician test', () => {
  const result = new Magician('name');
  const expected = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'name',
    type: 'Magician',
  };
  expect(result).toEqual(expected);
});
