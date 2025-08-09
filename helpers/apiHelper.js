exports.createPost = async (request, postData) => {
    return await request.post('https://jsonplaceholder.typicode.com/posts', {
       postData
    });
  };
  
  exports.getAllPosts = async (request) => {
    return await request.get('https://jsonplaceholder.typicode.com/posts');
  };