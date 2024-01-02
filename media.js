// Media HAMBURGER MENU RESPONSIVENESS
const Hamburg = document.querySelector('#hamburger');
const MediaSectionOne = document.querySelector('.Media-section-one');
const MediaSectionTwo = document.querySelector('.Media-section-two');
const MediaSectionThree = document.querySelector('.Media-section-three');
const MediaSectionFour = document.querySelector('.Media-section-four');
const MediaSectionFive = document.querySelector('.Media-section-five');
const MediaSectionSix = document.querySelector('.Media-section-six');
const MediaSectionSeven = document.querySelector('.Media-section-seven');
const MediaSectionEight = document.querySelector('.Media-section-eight');
const MediaSectionNine = document.querySelector('.Media-section-nine');
const mediaSectionFour = document.querySelector('.sectionFour');
const LinksMedia = document.querySelector('#anchor');



Hamburg.addEventListener('click' , () =>{
    if(LinksMedia.style.display === 'none'){
        LinksMedia.style.display = 'block';
        MediaSectionOne.classList.add('hide');
        MediaSectionTwo.classList.add('hide');
        MediaSectionThree.classList.add('hide');
        MediaSectionFour.classList.add('hide');
        MediaSectionFive.classList.add('hide');
        MediaSectionSix.classList.add('hide');
        MediaSectionSeven.classList.add('hide');
        MediaSectionEight.classList.add('hide');
        MediaSectionNine.classList.add('hide');
        mediaSectionFour.classList.add('hide');
    } else {
        LinksMedia.style.display = 'none';
        MediaSectionOne.classList.remove('hide');
        MediaSectionTwo.classList.remove('hide');
        MediaSectionThree.classList.remove('hide');
        MediaSectionFour.classList.remove('hide');
        MediaSectionFive.classList.remove('hide');
        MediaSectionSix.classList.remove('hide');
        MediaSectionSeven.classList.remove('hide');
        MediaSectionEight.classList.remove('hide');
        MediaSectionNine.classList.remove('hide');
        mediaSectionFour.classList.remove('hide');
    }
})