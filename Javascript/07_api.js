// api provides an interface for fetching resources

// api = application programming interface

// it uses Request and Response Objects

// fetch() method is used to fetch a resource 

// let promise = fetch(url, [options])

// AJAX - Asynchronous JS & XML

// JSON - JS Object Notation (AJAJ)

// json() method - return a second promise that resolves with the result of parsing the response body text as JSON (input is JSON, output is JS object)




// Syntax
// fetch(url, options)
//     .then(response => response.json()) // Convert response to JSON
//     .then(data => {
//         // Use the data
//     })
//     .catch(error => {
//         // Handle errors
//     });


// Example 1  GET Request

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
        console.log("Fetched Data:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    })


// With Async/Await

async function getPost() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const data = await response.json();
      console.log("Post:", data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  
  getPost();
  