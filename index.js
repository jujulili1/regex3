let button = document.querySelector('.button');
let input = document.querySelector('.input');

button.addEventListener('click', function() {
    let regex1 = /^Bagaimana cara memulai usaha bisnis$/
    let regex2 = /^Bootcamp impact byte$/
    let regex3 = /^Status covid hari ini$/

    if (regex1.test(input.value)) {
        alert('Bagaimana cara memulai usaha bisnis')
    } else if (regex2.test(input.value)) {
        alert('Bootcamp impact byte')
    } else if (regex3.test(input.value)) {
        alert('Status covid hari ini')
    } else {
        alert('Tidak ada yang anda cari')
    }
})