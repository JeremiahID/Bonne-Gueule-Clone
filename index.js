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
const News =  document.querySelector('#LinkNews');
const Enews = document.querySelector('#LinkNewsSection');

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

News.addEventListener('mouseover', () =>{
    if (Enews.style.display === "none") {
        Enews.style.display = "block";

     } else {

        Enews.style.display = "none";
        
    }
    
});


const Search = document.querySelector('#search');
const SearchSection = document.querySelector('#searchSection');
const CloseSearch =  document.querySelector('#closeSearch')

Search.addEventListener("click" , () =>{
    if (SearchSection.style.display === "none") {
        SearchSection.style.display = "block";
        SearchSection.style.display = "flex";


     } else {

        SearchSection.style.display = "none";
        
    }

});

CloseSearch.addEventListener("click" , () =>{
    if (SearchSection.style.display === "block") {
        SearchSection.style.display = "none";

     } else {

        SearchSection.style.display = "none";
        
    }

});

const Login = document.querySelector('#login');
const LoginSection = document.querySelector('#loginSection');

Login.addEventListener('click' , () =>{
    if(LoginSection.style.display === "none"){
        LoginSection.style.display = "block";

    } else {

        LoginSection.style.display = "none";
    }
})













// if (Media.style.display === "none") {
//     Media.style.display = "block";
//   } else {
//     Media.style.display = "none";
    
//   }
