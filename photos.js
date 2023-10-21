/* const min = 1;
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


outPut.innerHTML += jsonString;

const jsonObject = JSON.parse(jsonString);

// Access the 'url' property
const url = jsonObject.url;

const thumbNail= jsonObject.thumbnailUrl;

console.log(url);

const thumbnail = document.querySelectorAll(".thumbnail");

const image = document.querySelectorAll(".normal");

const newImage = image.setAttribute("src",url);

const thumbImage =
thumbnail.setAttribute("src",thumbNail);
})

.catch(error => {
    console.error('Error:', error);
});
*/
for(let i=0;i< 100;i++) {
const photoContainer = document.getElementById("photoContainer");
const url = "https://picsum.photos/200";

const image = document.querySelectorAll(".normal");

const newImage = image.setAttribute("src",url);

// Create an img element
const img = document.createElement("img");

// Set the src and alt attributes
img.src = url; // Replace with the actual image URL
img.alt = "Image Description"; // Replace with the alt text

// Append the img element to the document or another container
photoContainer.appendChild(img); // This appends it to the body of the document
}
        

