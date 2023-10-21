for( i=0;i<10;i++) {

const min = 1;
const max = 10;
const randomIntInRange = Math.floor(Math.random() * (max - min + 1)) + min; 
console.log("random number="+ randomIntInRange);

const baseUrl = 'https://jsonplaceholder.typicode.com/users/'

fullUrl = baseUrl+randomIntInRange;


const outPut = document.getElementById("outPut");


fetch(fullUrl)
      .then(response => response.json())
      .then(json => { 



  const jsonString = JSON.stringify(json);

//outPut.innerHTML += jsonString;

const jsonObject = JSON.parse(jsonString);

// Access the 'url' property
const friend = jsonObject.name;

const id = jsonObject.id;

const freinds = document.getElementById("friends");

freinds.innerHTML +="<br>Name:<br>"+ friend +"<br>Id:<br>"+id;

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
