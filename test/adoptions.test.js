
const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../app');

let mongoServer;

before(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

after(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Adoptions API', () => {

  it('POST /api/adoptions should create adoption', async () => {
    const res = await request(app)
      .post('/api/adoptions')
      .send({ user: new mongoose.Types.ObjectId(), petName: "Firulais" });
    if (res.status !== 201) throw new Error("Failed POST");
  });

  it('GET /api/adoptions should return 200', async () => {
    const res = await request(app).get('/api/adoptions');
    if (res.status !== 200) throw new Error("Failed GET");
  });

});
