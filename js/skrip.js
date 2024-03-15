function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobby = forms.hobby.value;
    let input = 'Nama : '+ nama + '<br> Pekerjaan : ' + pekerjaan + '<br> Hobby : ' + hobby;
    let no_input = 'Lengkapi seluruh bagian form';
    let hasil = (nama && pekerjaan && hobby !='') ? input : no_input;

    document.getElementById('hasil').innerHTML = hasil;


    // Tugasnya adalah Lengakapi kodeberikut dan tampilkan hasilnya ada pada HTML
    // 1. Isian Nama
    // 2. Isian Pekerjaan 
    // 3. Isian Hobby
}