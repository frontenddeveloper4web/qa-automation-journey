// ✅ This line is REQUIRED
const { test, expect } = require('@playwright/test');

// ✅ Test 1: GET - Fetch all posts
test('should fetch all posts', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts');
  expect(response.status()).toBe(200);

  const posts = await response.json();
  expect(posts.length).toBe(100);
  expect(posts[0].id).toBe(1);

  console.log(`Fetched ${posts.length} posts`);
});

// ✅ Test 2: POST - Send data and get echo (using httpbin)
test('should send data and receive echo', async ({ request }) => {
  const newPost = {
    title: 'My First Automation Post',
    body: 'Learning API testing with Playwright',
    userId: 1
  };

  const response = await request.post('https://httpbin.org/post', {
     newPost
  });

  expect(response.status()).toBe(200);

  const responseData = await response.json();
  console.log('Echo Response:', responseData.json);

  // ✅ Now you can verify your data was sent
  expect(responseData.json.title).toBe(newPost.title);
  expect(responseData.json.body).toBe(newPost.body);
  expect(responseData.json.userId).toBe(newPost.userId);
});