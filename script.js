// const merah = document.getElementsByTagName('input')[0];
// const hijau = document.getElementsByTagName('input')[1];
// const biru = document.getElementsByTagName('input')[2];


// function ubahwarna(r, g, b) {
//     document.body.style.backgroundColor = "rgb('+ r +','+ g +','+ b +')"
// }

// merah.addEventListener('input',function () {
// const r = merah.value;
// const g = hijau.value;
// const b = biru.value;

//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// })
// hijau.addEventListener('input',function () {
// const r = merah.value;
// const g = hijau.value;
// const b = biru.value;

//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// })
// biru.addEventListener('input',function () {
// const r = merah.value;
// const g = hijau.value;
// const b = biru.value;

//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// })

const pil = document.querySelectorAll('input');
pil.forEach(function(p) {
    p.addEventListener('input', function() {
       const a = {p.className;,p.value}
       console.log(a);
       document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    });
});