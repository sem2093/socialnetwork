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


outPut.innerHTML += jsonString;

const jsonObject = JSON.parse(jsonString);

// Access the 'url' property
const url = jsonObject.url;

const thumbNail= jsonObject.thumbnailUrl;

console.log(url);

const thumbnail = document.querySelector(".thumbnail");

const image = document.querySelector("img");

const newImage = image.setAttribute("src",url);

const thumbImage =
thumbnail.setAttribute("src",thumbNail);
})

.catch(error => {
    console.error('Error:', error);
});








/* 

/posts (100)
/users (10)
/comments (500)
/albums (100)
/photos (5000)
/todos (200) 

*/ 
