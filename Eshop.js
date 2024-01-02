// ESHOP HAMBURGER MENU RESPONSIVENESS
const Hams = document.querySelector('#hamburger');
const SectionFourEshop = document.querySelector('.sectionFour');
const EshopSectionOne = document.querySelector('.Eshop-section-one');
const EshopSectionTwo = document.querySelector('.Eshop-section-two');
const EshopSectionThree = document.querySelector('.Eshop-section-three');
const EshopSectionFour = document.querySelector('.Eshop-section-four');
const LinksEshop = document.querySelector('#anchor');


Hams.addEventListener('click' , () =>{
    if(LinksEshop.style.display === 'none'){
        LinksEshop.style.display = 'block';
        EshopSectionOne.classList.add('hide');
        EshopSectionTwo.classList.add('hide');
        EshopSectionThree.classList.add('hide');
        EshopSectionFour.classList.add('hide');
        SectionFourEshop.classList.add('hide');
       
    } else {
        LinksEshop.style.display = 'none';
        EshopSectionOne.classList.remove('hide');
        EshopSectionTwo.classList.remove('hide');
        EshopSectionThree.classList.remove('hide');
        EshopSectionFour.classList.remove('hide');
        SectionFourEshop.classList.remove('hide');
    }
})