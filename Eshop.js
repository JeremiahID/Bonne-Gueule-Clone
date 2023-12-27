// ESHOP HAMBURGER MENU RESPONSIVENESS
const Hams = document.querySelector('#hamburger');
const SectionFourEshop = document.querySelector('.sectionFour');
const EshopSectionOne = document.querySelector('.Eshop-section-one');
const EshopSectionTwo = document.querySelector('.Eshop-section-two');
const EshopSectionThree = document.querySelector('.Eshop-section-three');
const EshopSectionFour = document.querySelector('.Eshop-section-four');
const SectionTwoTest = document.querySelector('.sectionTwo');

Hams.addEventListener('click' , () =>{
    if(Links.style.display === 'none'){
        Links.style.display = 'block';
        EshopSectionOne.classList.add('hide');
        EshopSectionTwo.classList.add('hide');
        EshopSectionThree.classList.add('hide');
        EshopSectionFour.classList.add('hide');
        SectionFourEshop.classList.add('hide');
    } else {
        Links.style.display = 'none';
        EshopSectionOne.classList.remove('hide');
        EshopSectionTwo.classList.remremove('hide');
        EshopSectionThree.classList.remove('hide');
        EshopSectionFour.classList.remove('hide');
        SectionFourEshop.classList.remove('hide');
    }
})