// Media HAMBURGER MENU RESPONSIVENESS
const Hamburg = document.querySelector('#hamburger');
const MediaSectionOne = document.querySelector('.Media-section-one');
const MediaSectionTwo = document.querySelector('.Media-section-two');
const MediaSectionThree = document.querySelector('.Media-section-three');
const MediaSectionFour = document.querySelector('.Media-section-four');
const MediaSectioFive = document.querySelector('.Media-section-five');
const MediaSectioSix = document.querySelector('.Media-section-six');
const MediaSectioSeven = document.querySelector('.Media-section-seven');
const MediaSectioEight = document.querySelector('.Media-section-eight');
const MediaSectioNine = document.querySelector('.Media-section-nine');
const mediaSectionFour = document.querySelector('.sectionFour');
const LinksMedia = document.querySelector('#anchor');



Hamburg.addEventListener('click' , () =>{
    if(LinksMedia.style.display === 'none'){
        LinksMedia.style.display = 'block';
        MediaSectionOne.classList.add('hide');
        MediaSectionTwo.classList.add('hide');
        MediaSectionThree.classList.add('hide');
        MediaSectionFour.classList.add('hide');
        MediaSectioFive.classList.add('hide');
        MediaSectioSix.classList.add('hide');
        MediaSectioSeven.classList.add('hide');
        MediaSectioEight.classList.add('hide');
        MediaSectioNine.classList.add('hide');
        mediaSectionFour.classList.add('hide');
    } else {
        LinksMedia.style.display = 'none';
        MediaSectionOne.classList.remove('hide');
        MediaSectionTwo.classList.remove('hide');
        MediaSectionThree.classList.remove('hide');
        MediaSectionFour.classList.remove('hide');
        MediaSectioFive.classList.remove('hide');
        MediaSectioSix.classList.remove('hide');
        MediaSectioSeven.classList.remove('hide');
        MediaSectioEight.classList.remove('hide');
        MediaSectioNine.classList.remove('hide');
        mediaSectionFour.classList.remove('hide');
    }
})