var dobizImage = document.getElementById("mainImage");

var imageArray = ["../imgs/2000px-H1N1_Africa_Map.svg.png",
                 "../imgs/africa.png", "../imgs/AFRICAS-NATURAL-RESOURCES.jpg", "../imgs/afriqueMove.png"];

var imageIndex = 0;

function changeImage() {
    dobizImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

setInterval(changeImage, 5000);