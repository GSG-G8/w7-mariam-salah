const build = require('../server/database/config/build');
const connection = require('../server/database/config/connection');
const { getData, createpost } = require('../server/database/queries/index');

beforeAll(() => build());
afterAll(() => connection.end());

test('test jest', () => {
  expect(1).toBe(1);
});

test('test get data', () => getData.then((data) => {
  const actual = data.rows[0];
  const expected = { id: 1 };
  expect(actual).toEqual(expected);
}));

test('insert data', () => {
  const data = {};
  return createpost(data).then((res) => {
    const actual = res.rows[0];
    const expected = { id: 2 };
    expect(actual).toEqual(expected);
  });
});
