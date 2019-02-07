// wait for DOM to load
document.addEventListener('DOMContentLoaded', function(){ 
    // get all the images
    const allImages = document.querySelectorAll('.project--img');
    
    // loop
    allImages.forEach((i) => {
        const imgPath = i.getAttribute('style-data');
        i.style = imgPath;
    });
}, false);
