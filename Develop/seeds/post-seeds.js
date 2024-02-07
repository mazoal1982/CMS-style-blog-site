const { Post } = require('../models');

// Use async and await to handle promises
const createPosts = async () => {
  try {
    // Use spread operator to insert post data into an array
    const postData = [
      {
        title: 'I love Bootstrap!',
        post_text:
          'Bootstrap makes it easy to build pretty pages. Bootswatch is built on top of Bootstrap and adds some fun to webpages.',
        user_id: 1,
      },
      {
        title: 'What is React?',
        post_text:
          'React is a JavaScript library for building user interfaces. It lets you create components that can be reused and composed together.',
        user_id: 2,
      },
      {
        title: 'How to use Node.js',
        post_text:
          'Node.js is a runtime environment that allows you to run JavaScript code outside the browser. You can use it to create web servers, APIs, and more.',
        user_id: 3,
      },
    ];

    // Use object destructuring to get the created posts
    const [post1, post2, post3] = await Post.bulkCreate(postData);

    // Log the created posts
    console.log(post1, post2, post3);
  } catch (err) {
    // Handle errors
    console.error(err);
  }
};

// Call the function
createPosts();
