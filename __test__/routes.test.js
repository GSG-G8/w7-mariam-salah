const request = require('supertest');
const app = require('../server/app');

test('test /getpost end point', (done) => {
  request(app)
    .get('/posts')
    .expect(200)
    .end((err) => {
      if (err);
      done();
    });
});

test('test creste post route', (done) => {
  request(app)
    .post('/createpost')
    .send({})
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err) => {
      if (err) done(err);
      done();
    });
});
