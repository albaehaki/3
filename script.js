const prgb = document.querySelector('.codewarna .codergb');
const phex = document.querySelector('.codewarna .codehex');
//merubah warna
const pil = document.querySelectorAll('input');
pil.forEach(function(p) {
    p.addEventListener('input', function() {
        const r = pil[0].value;
        const g = pil[1].value;
        const b = pil[2].value;
        const h = gethexa(r);
        const e = gethexa(g);
        const x = gethexa(b);
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
         prgb.innerHTML = ''+ r +', '+ g +', '+ b +'';
         phex.innerHTML = ''+ h +', '+ e +', '+ x +'';
    });
});

function gethexa(value) {
    const hexa = parseInt(value).toString(16);
    return hexa.length == 1 ? "0" + hexa : hexa;
}

