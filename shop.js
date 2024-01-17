// Shop HAMBURGER MENU RESPONSIVENESS
const ham_burgs = document.querySelector('#hamburger');
const Agenda_section_one = document.querySelector('.Agenda-section-one');
const shop_section_one_main= document.querySelector('.shop-section-one-main');
const shop_section_one = document.querySelector('.shop-section-one');
const shop_section_two = document.querySelector('.shop-section-two');
const shop_section_three = document.querySelector('.shop-section-three');
const shop_section_four = document.querySelector('.shop-section-four');
const shop_section_five = document.querySelector('.shop-section-five');
const Section_four = document.querySelector('.sectionFour');
const shop_links = document.querySelector('#anchor')


ham_burgs.addEventListener('click' , ()=>{
    if(shop_links.style.display === "none"){
        shop_links.style.display = "block";
        Agenda_section_one.classList.add('hide');
        shop_section_one_main.classList.add('hide');
        shop_section_one.classList.add('hide');
        shop_section_two.classList.add('hide');
        shop_section_three.classList.add('hide');
        shop_section_four.classList.add('hide');
        shop_section_five.classList.add('hide');
        Section_four.classList.add('hide')

    }else{
        shop_links.style.display = "none";
        Agenda_section_one.classList.remove('hide');
        shop_section_one_main.classList.remove('hide');
        shop_section_one.classList.remove('hide');
        shop_section_two.classList.remove('hide');
        shop_section_three.classList.remove('hide');
        shop_section_four.classList.remove('hide');
        shop_section_five.classList.remove('hide');
        Section_four.classList.remove('hide')

    }
})