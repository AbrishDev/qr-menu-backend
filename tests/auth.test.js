const request = require('supertest');
const app = require('.././src/app'); // Adjust based on your app entry file

describe('Auth API Tests', () => {
  let token = '';

  test('Admin Login', async () => {
    const res = await request(app).post('/api/auth/login').send({
      username: 'admin',
      password: 'admin123'
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
    token = res.body.token;
  });
});

  