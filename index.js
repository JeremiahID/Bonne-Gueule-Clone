// Mouse Over RESPONSIVENESS
const Media = document.querySelector('#media');
const LinkMedia = document.querySelector('#linkMedia');
const SectionOne = document.querySelector('.sectionOne');
const LinkEshop = document.querySelector('#linkEshop');
const Eshop = document.querySelector('#eShop');
const News =  document.querySelector('#LinkNews');
const Enews = document.querySelector('#LinkNewsSection');
const Style = document.querySelector('#StyleTips');
const StyleSection = document.querySelector('#StyleTipsSection');
const Guides = document.querySelector('#allGuides');
const GuidesSection = document.querySelector('#allGuidesSection');
const Trends = document.querySelector('#trends');
const TrendsSection = document.querySelector('#trendsSection');
const Fashion = document.querySelector('#fashions');
const FashionsSection = document.querySelector('#fashionSection')


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

Style.addEventListener('mouseover', () =>{
    if (StyleSection.style.display === "none") {
        StyleSection.style.display = "block";

     } else {

        StyleSection.style.display = "none";     
    }
    
});

Guides.addEventListener('mouseover' , () =>{
    if (GuidesSection.style.display === "none") {
        GuidesSection.style.display = "block";

     } else {

        GuidesSection.style.display = "none";     
    }    
})


Trends.addEventListener('mouseover' , () =>{
    if (TrendsSection.style.display === "none") {
        TrendsSection.style.display = "block";

     } else {

        TrendsSection.style.display = "none";     
    }    
})


Fashion.addEventListener('mouseover' , () =>{
    if (FashionsSection.style.display === "none") {
        FashionsSection.style.display = "block";

     } else {

        FashionsSection.style.display = "none";     
    }    
})

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
const SectionTwo = document.querySelector('.sectionTwo');
const SectionThree = document.querySelector('.sectionThree');
const SectionFour = document.querySelector('.sectionFour');
const SectionFive = document.querySelector('.sectionFive');
const CloseLogin = document.querySelector('#closeLogin');




Login.addEventListener('click' , () =>{
    if(LoginSection.style.display === "none"){
        LoginSection.style.display = "block";
        LoginSection.style.display = "flex";
        SectionTwo.classList.add('hide');
        SectionFour.classList.add('hide');
        SectionOne.classList.add('hide');
        

    } else {

        LoginSection.style.display = "none";


    }
});

CloseLogin.addEventListener("click" , () =>{
    if (LoginSection.style.display === "block"){
        LoginSection.style.display = "none";

     } else {

        LoginSection.style.display = "none";
        SectionTwo.classList.remove('hide');
        SectionFour.classList.remove('hide');
        SectionOne.classList.remove('hide');
        
    }
});

const Cart = document.querySelector('#cart');
const CartSection = document.querySelector('#cartSection');
const CloseCart = document.querySelector('#closeCart')

Cart.addEventListener('click' , () =>{
    if(CartSection.style.display === "none"){
        CartSection.style.display = "block";
        SectionTwo.classList.add('hide');
        SectionFour.classList.add('hide');
        SectionOne.classList.add('hide');

    } else {
        CartSection.style.display = "none"
    }

});

CloseCart.addEventListener('click' , () =>{
    if (CartSection.style.display === "block"){
        CartSection.style.display = "none";
        SectionTwo.classList.remove('hide');
        SectionFour.classList.remove('hide');
        SectionOne.classList.remove('hide');

     } else {
        CartSection.style.display = "none";

        
    }

})


const Hamburger = document.querySelector('#hamburger');
const Links = document.querySelector('#anchor');

Hamburger.addEventListener('click' , () =>{
    if(Links.style.display === 'none'){
        Links.style.display = 'block';
        SectionTwo.classList.add('hide');
        SectionFour.classList.add('hide');
        SectionOne.classList.add('hide');

    } else {
        Links.style.display = 'none';
        SectionTwo.classList.remove('hide');
        SectionFour.classList.remove('hide');
        SectionOne.classList.remove('hide');

    }

});





// SectionOne.classList.toggle('hide');
// SectionTwo.classList.remove('hide');
// SectionThree.classList.remove('hide');
// SectionFour.classList.remove('hide');
// SectionOne.classList.remove('hide');
// const SectionTwo = document.querySelector('.sectionTwo');
// const SectionThree = document.querySelector('.sectionThree');
// const SectionFour = document.querySelector('.sectionFour');
// const SectionFive = document.querySelector('.sectionFive');
// SectionTwo.style.display = "none";
// SectionThree.style.display = "none";
// SectionFour.style.display = "none";
// SectionFive.style.display = "none";



// if (Media.style.display === "none") {
//     Media.style.display = "block";
//   } else {
//     Media.style.display = "none";
    
//   }
