/* eslint-disable max-len */
const {app} = require('../app.js');
const {watches} = require('../data.js');
const supertest = require('supertest');
const request = supertest(app);

// define our expectation
it('should respond with all pokemon', async (done) => {
  // expected response
  const expectation = {results: watches};

  // supertest client makes request
  const response = await request.get('/watches');

  // check response status & response.boy
  expect(response.status).toBe(200);
  expect(response.body).toEqual(expectation);
  done();
});

// define our expectation
it('should respond with the selected watch', async (done) => {
  const expectation = {
    results: {
      'id': '3',
      'brand': 'omega',
      'name': 'seamaster bullhead 930',
      'limited': false,
      'diameter_mm': 27,
      'price': 9000,
      'image': 'https://cdn.watchbase.com/watch/lg/origin:jpg/omega/seamaster-bullhead/st-146-011-f.webp',
      'description': 'The Omega Seamaster Bullhead was introduced in 1969. Together with the Flightmaster, it is one of the most notable examples of Omega\'s late sixties creativity in design.',
    },
  };

  const response = await request.get('/watches/3');
  expect(response.status).toBe(200);
  expect(response.body).toEqual(expectation);
  done();
});
