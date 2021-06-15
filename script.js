const prgb = document.querySelector('.codewarna .codergb');
//merubah warna
const pil = document.querySelectorAll('input');
pil.forEach(function(p) {
    p.addEventListener('input', function() {
        const r = pil[0].value;
        const g = pil[1].value;
        const b = pil[2].value;
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
         prgb.innerHTML = ''+ r +', '+ g +', '+ b +'';
    });
});