const build = require('../server/database/config/build');
const connection = require('../server/database/config/connection');
const { getpost, createpost } = require('../server/database/queries/index');

beforeAll(() => build());
afterAll(() => connection.end());

test('test jest', () => {
  expect(1).toBe(1);
});

test('test get data', () => getpost().then((data) => {
  const actual = data.rows[0].id;
  const expected = 1;
  expect(actual).toBe(expected);
}));


// test('insert data', () => {
//   const data = {};
//   return createpost(data).then((res) => {
//     const actual = res.rows[0];
//     const expected = { id: 2 };
//     expect(actual).toEqual(expected);
//   });
// });
