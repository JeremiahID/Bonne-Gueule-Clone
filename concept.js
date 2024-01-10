const Hamburges = document.querySelector('#hamburger');
const concept_section_one =  document.querySelector('.concept-section-one');
const concept_section_two = document.querySelector('.concept-section-two');
const concept_section_three =  document.querySelector('.concept-section-three');
const concept_section_eight = document.querySelector('.concept-section-eight');
const Agenda_section_one =  document.querySelector('.Agenda-section-one');
const LinksConcept = document.querySelector('#anchor');

Hamburges.addEventListener('click' , () =>{
    if(LinksConcept.style.display === "none"){
        LinksConcept.style.display = 'block';
        Agenda_section_one.classList.add('hide');
        concept_section_one.classList.add('hide');
        concept_section_two.classList.add('hide');
        concept_section_three.classList.add('hide');
        concept_section_eight.classList.add('hide');
        
    } else{
        LinksConcept.style.display = 'none';
        Agenda_section_one.classList.remove('hide');
        concept_section_one.classList.remove('hide');
        concept_section_two.classList.remove('hide');
        concept_section_three.classList.remove('hide');
        concept_section_eight.classList.remove('hide');
    }
})