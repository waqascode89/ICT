// get the elements from the document
const leftArrow = document.querySelector(".icon1");
const rightArrow = document.querySelector(".icon2");
const mainImage = document.querySelector(".main-body-images img");
const imageBox = document.querySelector(".image-over-box");

// create an array of images
const images = [
  "images/dsffdsfds.avif",
  "images/41556.jpg",
  "images/7454.jpg"
];

// create an array of texts
const texts = [
  {
    heading: "Skills that drive you forward",
    paragraph: "Technology and the world of work change fast — with us, you're faster. Get the skills to achieve goals and stay competitive."
  },
  {
    heading: "Learn from the best instructors",
    paragraph: "Our instructors are experts in their fields and passionate about sharing their knowledge. Learn from their experience and insights."
  },
  {
    heading: "Join a community of learners",
    paragraph: "Connect with other learners and get feedback on your projects. Share your ideas and learn from each other's perspectives."
  }
];

// create a variable to store the current index of the image
let currentIndex = 0;

// create a function to change the image and text
function changeImage() {
  // set the src attribute of the main image to the current image in the array
  mainImage.src = images[currentIndex];
  // set the innerHTML of the image box to the current text in the array
  imageBox.innerHTML = `
    <h1>${texts[currentIndex].heading}</h1><br>
    <p>${texts[currentIndex].paragraph}</p>
    <br>
    <button>JOIN US</button>
  `;
}

// call the function to initialize the image and text
changeImage();

// add an event listener to the left arrow
leftArrow.addEventListener("click", function () {
  // decrement the current index by 1
  currentIndex--;
  // if the current index is less than 0, set it to the last index in the array
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  // call the function to change the image and text
  changeImage();
});

// add an event listener to the right arrow
rightArrow.addEventListener("click", function () {
  // increment the current index by 1
  currentIndex++;
  // if the current index is greater than the last index in the array, set it to 0
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  // call the function to change the image and text
  changeImage();
});
