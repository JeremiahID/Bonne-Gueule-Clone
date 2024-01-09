const Hamburgs = document.querySelector('#hamburger');
const Agenda_section_one =  document.querySelector('.Agenda-section-one');
const Agenda_section_two = document.querySelector('.Agenda-section-two');
const LinksAgenda = document.querySelector('#anchor');

Hamburgs.addEventListener('click' , () =>{
    if(LinksAgenda.style.display === "none"){
        LinksAgenda.style.display = 'block';
        Agenda_section_one.classList.add('hide');
        Agenda_section_two.classList.add('hide');
    } else{
        LinksAgenda.style.display = 'none';
        Agenda_section_one.classList.remove('hide');
        Agenda_section_two.classList.remove('hide');
    }
})