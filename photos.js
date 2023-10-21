for(let i=0;i<50;i++){


const min = 1;
const max = 5000;
const randomIntInRange = Math.floor(Math.random() * (max - min + 1)) + min; 
console.log("random number="+ randomIntInRange);

const baseUrl = 'https://jsonplaceholder.typicode.com/photos/'

fullUrl = baseUrl+randomIntInRange;


const outPut = document.getElementById("outPut");


fetch(fullUrl)
      .then(response => response.json())
      .then(json => { 



  const jsonString = JSON.stringify(json);


//outPut.innerHTML += jsonString;

const jsonObject = JSON.parse(jsonString);

// Access the 'url' property
const url = jsonObject.url;

const title = jsonObject.title;

const imgElement = document.createElement("img");

const container =
document.createElement("div");

imgElement.src= url ;
container.innerHTML = title ;

const photoContainer = getElementById("photoContainer");

photoContainer.appendChild(imgElement);
photoContainer.appendChild(container);

});

}

