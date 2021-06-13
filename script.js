const pil = document.querySelectorAll('input');
pil.forEach(function(p) {
    p.addEventListener('input', function() {
        const r = pil[0].value;
        const g = pil[1].value;
        const b = pil[2].value;
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    });
});

const bagiancode = document.querySelector('.codewarna');
const trgb = document.querySelector('.codewarna .rgb');
const prgb = document.querySelector('.codewarna .codergb');

trgb.addEventListener('click', function () {
        const r = pil[0].value;
        const g = pil[1].value;
        const b = pil[2].value;
    const pbaru = document.createElement('p');
    const textbaru = document.createTextNode(''+ r +','+ g +','+ b +'');
    pbaru.appendChild(textbaru);
    bagiancode.replaceChild(pbaru, prgb);
})
