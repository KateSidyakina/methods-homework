import Bowerman from '../Bowerman';

test('Bowerman test', () => {
  const result = new Bowerman('name');
  const expected = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'name',
    type: 'Bowerman',
  };
  expect(result).toEqual(expected);
});
