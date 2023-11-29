// const section = document.querySelector('section');
// const element = document.querySelector('element');

// element.addEventListener('mouseover', () => {
//   section.style.display = 'block';
// });

const Media = document.querySelector('#media');
const LinkMedia = document.querySelector('#linkMedia');
const SectionOne = document.querySelector('.sectionOne');
const LinkEshop = document.querySelector('#linkEshop');
const Eshop = document.querySelector('#eShop');

LinkMedia.addEventListener('mouseover', () =>{
    if (Media.style.display === "none") {
        Media.style.display = "block";
        Media.style.display = "flex";
        Media.style.transition = 'all 1s ease-in-out';

     } else {

        Media.style.display = "none";
        
    }

    
});


LinkEshop.addEventListener('mouseover', () =>{
    if (Eshop.style.display === "none") {
        Eshop.style.display = "block";

     } else {

        Eshop.style.display = "none";
        
    }
    
    
});





// if (Media.style.display === "none") {
//     Media.style.display = "block";
//   } else {
//     Media.style.display = "none";
    
//   }
