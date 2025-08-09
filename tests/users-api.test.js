const { test, expect } = require('@playwright/test');

// ✅ Test 1: GET - Fetch list of posts
test('should fetch all posts', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts');

  expect(response.status()).toBe(200);

  const posts = await response.json();
  expect(posts.length).toBe(100);
  expect(posts[0].id).toBe(1);

  console.log(`Fetched ${posts.length} posts. First post:`, posts[0]);
});

// ✅ Test 2: POST - Create a new post
test('should create a new post', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'My First Automation Post',
      body: 'Learning API testing with Playwright',
      userId: 1
    }
  });

  expect(response.status()).toBe(201);

  const newPost = await response.json();

  expect(newPost.title).toBe('My First Automation Post');
  expect(newPost.body).toBe('Learning API testing with Playwright');
  expect(newPost.userId).toBe(1);
  expect(newPost.id).toBeTruthy();

  console.log('Created Post:', newPost);

  // ✅ Optional: Save response as proof
  const fs = require('fs');
  const path = require('path');
  const logDir = path.join(__dirname, 'logs');
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

  fs.writeFileSync(
    path.join(logDir, 'created-post.json'),
    JSON.stringify(newPost, null, 2)
  );
});