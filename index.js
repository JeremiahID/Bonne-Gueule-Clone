// const section = document.querySelector('section');
// const element = document.querySelector('element');

// element.addEventListener('mouseover', () => {
//   section.style.display = 'block';
// });

const Media = document.querySelector('#media');
const LinkMedia = document.querySelector('#linkMedia');
const SectionOne = document.querySelector('.sectionOne');

LinkMedia.addEventListener('mouseover', () =>{
    if (Media.style.display === "none") {
        SectionOne.classList.toggle('index');
        Media.style.display = "block";

     } else {

        Media.style.display = "none";
        
    }
    
});



// if (Media.style.display === "none") {
//     Media.style.display = "block";
//   } else {
//     Media.style.display = "none";
    
//   }
