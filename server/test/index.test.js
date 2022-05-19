const request = require('supertest');
const {server} = require('../app');
const {syncModels} = require('../models');

const mockUserData = {
  username: 'jest_user',
  email: 'user.jest@test.com',
  password: 'password',
  type: 'Doctor',
  fullname: 'User Jest',
  education: 'Name, University, City',
  specialization: 'Testing',
  address: 'State, Country',
  bio: 'Hi I am a test user',
};

let mockProfile = {};
let mockPost = {};

beforeAll(async () => {
  await syncModels();
  // Start the server on port 9999 for testing
  server.listen(9999);
});

afterAll(() => {
  server.close();
});

describe('Server should respond to http request', () => {
  test('Should respond OK for /', (done) => {
    request(server).get('/api/v1').expect(200, done);
  });
});

// Login tests
describe('Sign up and login', () => {
  describe('Given that the users info is correct', () => {
    test('POST /auth/signup will create user and their profile', async () => {
      try {
        const res = await request(server)
          .post('/api/v1/auth/signup')
          .send(mockUserData);

        expect(res.body.success).toBeTruthy();
        expect(res.body.data).toBeTruthy();
        mockProfile = res.body.data;
      } catch (err) {
        expect(err).toBeFalsy();
      }
    });
  });

  describe('Given that the credentials are correct', () => {
    test('POST /auth/login will login the user', async () => {
      try {
        const res = await request(server).post('/api/v1/auth/login').send({
          username: mockUserData.username,
          password: mockUserData.password,
        });

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.data).toBeTruthy();
      } catch (err) {
        expect(err).toBeFalsy();
      }
    });
  });
});

// Post tests
describe('Create Posts', () => {
  const mockPostData = {
    body: 'A post from the Jest User for testing',
  };

  describe('Given that the data is correct', () => {
    const url = `/api/v1/profiles/${mockUserData.username}/post`;

    test('POST /:username/post will create a post', async () => {
      try {
        const res = await request(server).post(url).send(mockPostData);
        mockPost = res.body.data;

        expect(res.status).toBe(201);
        expect(res.body.success).toBe(true);
        expect(res.body.data).toBeTruthy();
      } catch (err) {
        expect(err).toBeFalsy();
      }
    });
  });
});

// Like, Share, Comments
describe('Add like, write comments, share post', () => {
  describe('Given that the post id and user id is correct', () => {
    test('POST /likes will add like on the post', async () => {
      try {
        const res = await request(server).post('/api/v1/likes/').send({
          postId: mockPost.id,
          profileId: mockProfile.id,
        });

        expect(res.status).toBe(201);
        expect(res.body.success).toBe(true);
        expect(res.body.data).toBeTruthy();
      } catch (err) {
        expect(err).toBeFalsy();
        console.error(err);
      }
    });

    test('POST /shares will create a share of the post', async () => {
      try {
        const res = await request(server).post('/api/v1/shares/').send({
          postId: mockPost.id,
          profileId: mockProfile.id,
        });

        expect(res.status).toBe(201);
        expect(res.body.success).toBe(true);
        expect(res.body.data).toBeTruthy();
      } catch (err) {
        expect(err).toBeFalsy();
        console.error(err);
      }
    });

    test('POST /comments will create a comment for the post', async () => {
      try {
        const res = await request(server).post('/api/v1/comments/').send({
          postId: mockPost.id,
          profileId: mockProfile.id,
          body: 'Test comment',
        });

        expect(res.status).toBe(201);
        expect(res.body.success).toBe(true);
        expect(res.body.data).toBeTruthy();
      } catch (err) {
        expect(err).toBeFalsy();
        console.error(err);
      }
    });
  });
});

// Connections
describe('Connections', () => {
  describe('Given that both of the users exists', () => {
    // eslint-disable-next-line max-len
    test('POST /:username/connections will create a connection between two users', async () => {
      try {
        const createAnotherUser = await request(server)
          .post('/api/v1/auth/signup/')
          .send({
            ...mockUserData,
          });

        const data = createAnotherUser.body.data;
        expect(data).toBeTruthy();

        const res = await request(server)
          .post(`/api/v1/profiles/${mockProfile.username}/connections`)
          .send({connectedWith: data.id});

        expect(res.status).toBe(201);
        expect(res.body.success).toBe(true);
      } catch (err) {
        expect(err).toBeFalsy();
      }
    });
  });
});
