let frm = document.getElementById("online");
let jabatan = ["Manager", "Asisten Manager", "Staff"];
let pilihjabatan = `<option value="">--- Pilihan Jabatan ----</option>`;
for (let j in jabatan) {
  pilihjabatan += `<option value="${jabatan[j]}">${jabatan[j]}</option>`;
}
frm.jabatan.innerHTML = pilihjabatan;

let status = ["Menikah", "Belum Menikah"];
let pilihstatus = `<option value="">--- Pilihan Status ----</option>`;
for (let s in status) {
  pilihstatus += `<option value="${status[s]}">${status[s]}</option>`;
}
frm.status.innerHTML = pilihstatus;

function pegawai() {
  let nama = frm.nama.value;
  let jabatan = frm.jabatan.value;
  let status = frm.status.value;

  let gajipokok;

  switch (jabatan) {
    case "Manager":
      gajipokok = 15000000;
      break;
    case "Asisten Manager":
      gajipokok = 10000000;
      break;
    case "Staff":
      gajipokok = 5000000;
      break;
    default:
      gajipokok = 0;
  }
  let tunjanganjabatan = gajipokok * 0.15;
  let bpjs = gajipokok * 0.1;
  let tunjangankeluarga = status == "Menikah" ? 0.2 * gajipokok : 0;
  let totalgaji = gajipokok + tunjanganjabatan + tunjangankeluarga + bpjs;

  swal({
    html: `
            <h1>Data Pegawai</h1>
            <table id="table" border="1" cellpadding="5" cellspacing="0" align="center">
                <thead>
                    <tr>
                        <th>Nama Pegawai</th>
                        <th>Jabatan</th>
                        <th>Status</th>
                        <th>Gaji Pokok</th>
                        <th>Tunjangan Jabatan</th>
                        <th>BPJS</th>
                        <th>Tunjangan Keluarga</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${nama}</td>
                        <td>${jabatan}</td>
                        <td>${status}</td>
                        <td>${gajipokok}</td>
                        <td>${tunjanganjabatan}</td>
                        <td>${bpjs}</td>
                        <td>${tunjangankeluarga}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                    <th colspan="3">Total Gaji</th>
                    <th colspan="4">${totalgaji}</th>
                    </tr>
                <tfoot>
                </table>`,
    width: 900,
  });
}
