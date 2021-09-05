const dotenv = require("dotenv");
const fetch = require("node-fetch");
const algoliasearch = require("algoliasearch/lite");

async function getAllBlogPosts() {
  // write your code to fetch your data
}

(async function () {
  // initialize environment variables
  dotenv.config();

  try {
    // fetch your data
    const posts = await getAllBlogPosts();

    }
  } catch (error) {
    console.log(error);
  }
})();

// To be continued: https://www.contentful.com/blog/2021/07/02/add-algolia-instantsearch-to-nextjs-app/