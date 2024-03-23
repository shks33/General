let x = document.querySelector('#toggle');
let monthly = document.getElementsByClassName('number-monthly')[0];
let monthly2 = document.getElementsByClassName('number-monthly')[1];
let monthly3 = document.getElementsByClassName('number-monthly')[2];
let monthly4 = document.getElementsByClassName('number-monthly')[3];
let annually = document.getElementsByClassName('number-annually')[0];
let annually2 = document.getElementsByClassName('number-annually')[1];
let annually3 = document.getElementsByClassName('number-annually')[2];
let annually4 = document.getElementsByClassName('number-annually')[3];


function switchPrice() {
    if (monthly.hasAttribute('style')) {
        monthly.removeAttribute('style');
        annually.setAttribute('style', 'display: none;')
    } else {
        annually.removeAttribute('style');
        monthly.setAttribute('style', 'display: none;')
    }
    if (monthly2.hasAttribute('style')) {
        monthly2.removeAttribute('style');
        annually2.setAttribute('style', 'display: none;')
    } else {
        annually2.removeAttribute('style');
        monthly2.setAttribute('style', 'display: none;')
    }
    if (monthly3.hasAttribute('style')) {
        monthly3.removeAttribute('style');
        annually3.setAttribute('style', 'display: none;')
    } else {
        annually3.removeAttribute('style');
        monthly3.setAttribute('style', 'display: none;')
    }
    if (monthly4.hasAttribute('style')) {
        monthly4.removeAttribute('style');
        annually4.setAttribute('style', 'display:none;')
    } else {
        annually4.removeAttribute('style');
        monthly4.setAttribute('style', 'display: none;')
    }
}

// Side bar start
let wrapper = document.querySelector('.side-bar');
let button = document.querySelector('.ri-arrow-left-line');


button.addEventListener('click', () => {
    wrapper.classList.toggle('hide');
    button.classList.toggle('button');
});

// Details show
let mostafa = document.querySelector('.wrapper2');
let standaradbutton = document.getElementById('standard');
let profbutton = document.getElementById('profbutton');
let bussbutton = document.getElementById('bussbutton');
let enterbutton = document.getElementById('enterbutton');

let right = document.getElementById('right');
let right2 = document.getElementById('right2');
let right3 = document.getElementById('right3');
let right4 = document.getElementById('right4');

let no = document.getElementById('no');

function tableshow() {
    if (mostafa.hasAttribute('style')) {
        mostafa.removeAttribute('style');
        scroll({ top: 1037, right: 0, behavior: 'smooth' });
    } else {
        scroll({ top: 1037, right: 0, behavior: 'smooth' });
    }
};

standaradbutton.addEventListener('click', () => {

    if (right.hasAttribute('style')) {
        no.innerHTML = 'Standard bundle';
        right.removeAttribute('style');
        right2.setAttribute('style', 'display: none;');
        right3.setAttribute('style', 'display: none;');
        right4.setAttribute('style', 'display: none;');
    }

});
profbutton.addEventListener('click', () => {

    if (right2.hasAttribute('style')) {
        no.innerHTML = 'Professional bundle';
        right2.removeAttribute('style');
        right.setAttribute('style', 'display: none;');
        right3.setAttribute('style', 'display: none;');
        right4.setAttribute('style', 'display: none;');
    }

});
bussbutton.addEventListener('click', () => {

    if (right3.hasAttribute('style')) {
        no.innerHTML = 'Business bundle';
        right3.removeAttribute('style');
        right.setAttribute('style', 'display: none;');
        right2.setAttribute('style', 'display: none;');
        right4.setAttribute('style', 'display: none;');
    }

});
enterbutton.addEventListener('click', () => {

    if (right4.hasAttribute('style')) {
        no.innerHTML = 'Enterprise bundle';
        right4.removeAttribute('style');
        right.setAttribute('style', 'display: none;');
        right2.setAttribute('style', 'display: none;');
        right3.setAttribute('style', 'display: none;');
    }

});