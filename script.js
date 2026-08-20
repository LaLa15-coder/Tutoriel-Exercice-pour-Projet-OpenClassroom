const titles = document.querySelectorAll('.title-definition');

titles.forEach(title => {
    title.addEventListener('click', event => {
        const definition = event.target.closest('.definition');
        definition.classList.toggle('open');

        const img = definition.querySelector('img');
        if(img.getAttribute('src') === 'img/ferme.png')
            img.setAttribute('src', 'img/ouvert.png');
        else
            img.setAttribute('src', 'img/ferme.png');
    });
});

const left = document.querySelector('#left');
const right = document.querySelector('#right');
const slider = document.querySelector('.languages-content');
const nbLanguages = slider.childElementCount;
let i = 0;

right.addEventListener('click', () => {
    if(i < nbLanguages - 4)
        i++;
    else
        i = 0;
    console.log(i);
   updateSlider(i);
});

left.addEventListener('click', () => {
    if(i > 0)
        i--;
    else
        i = nbLanguages - 4;
    console.log(i);
    updateSlider(i);
});

setInterval(() => {
    if(i < nbLanguages - 4)
        i++;
    else 
        i = 0;
    updateSlider(i);
}, 2000);


function updateSlider(i)  {
    slider.style.transform = 'translateX(-${(i* 244)}px)';
 }