const images = [
    "images/project5.png",
    "images/project6.png",
    "images/project2.png",
    "images/project4.png",
    "images/project1.png",
    "images/project3.png",
];

let currentIndex = 0;
const imageElement = document.getElementById('dynamicImage');

function updateImage() {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image in the array
    imageElement.src = images[currentIndex]; // Update the image source
}

setInterval(updateImage, 8000);

document.getElementById('mail-box-div').addEventListener('click', function () {
    console.log('occured')
    const email = "yogeshramya475@gmail.com"
    window.location.href = `mailto:${email}`
})