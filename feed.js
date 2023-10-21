for(let i=0;i<50;i++){


const min = 1;
const max = 100;
const randomIntInRange = Math.floor(Math.random() * (max - min + 1)) + min; 
console.log("random number="+ randomIntInRange);

const baseUrl = 'https://jsonplaceholder.typicode.com/posts/'

const fullUrl = baseUrl+randomIntInRange;


const feedContainer = document.getElementById("feedContainer");


fetch(fullUrl)
      .then(response => response.json())
      .then(json => { 


   const jsonString = JSON.stringify(json);


//outPut.innerHTML += jsonString;

const jsonObject = JSON.parse(jsonString);

// Access the 'url' property
const userId = jsonObject.userId;
const title = jsonObject.title;
const post = jsonObject.body;

const container = document.createElement("div");

const card = container.setAttribute("class","card");

// Combine and set the content
container.innerHTML = `<br>Title: ${title}<br>User ID: ${userId} <br>Post: ${post}<br>`;

// Append the container to the document
feedContainer.appendChild(container); // You can choose where to append it


      })
.catch(error => {
    console.error('Error:', error);
});
}


/* 

/posts (100)
/users (10)
/comments (500)
/albums (100)
/photos (5000)
/todos (200) 

*/ 
