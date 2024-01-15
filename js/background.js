const images = ["feathe.jpg", "heaven.jpg", "flowers.jpg"];

const outputImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${outputImage}`;

document.body.appendChild(bgImage);