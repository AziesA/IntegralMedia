window.MathJax = {
    tex: {
        inlineMath: [
            ['$', '$'],
            ['\\(', '\\)']
        ]
    },
    svg: {
        fontCache: 'global'
    }
};
(function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
    script.async = true;
    document.head.appendChild(script);
})();

function satu() {
    document.getElementById("btnprev").classList.add('disabled');
    document.getElementById("btnnext").classList.remove('disabled');
    document.getElementById("satu").hidden = false;
    document.getElementById("btnsatu").classList.add('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active');
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('active');
    document.getElementById("next").setAttribute("onClick", "javascript: dua();");

}

function dua() {
    document.getElementById("btnprev").classList.remove('disabled');
    document.getElementById("btnnext").classList.remove('disabled');
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = false;
    document.getElementById("btndua").classList.add('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active');
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('active');
    document.getElementById("next").setAttribute("onClick", "javascript: tiga();");
    document.getElementById("prev").setAttribute("onClick", "javascript: satu();");

}

function tiga() {
    document.getElementById("btnprev").classList.remove('disabled');
    document.getElementById("btnnext").classList.remove('disabled');
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = false;
    document.getElementById("btntiga").classList.add('active');
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('active');
    document.getElementById("next").setAttribute("onClick", "javascript: empat();");
    document.getElementById("prev").setAttribute("onClick", "javascript: dua();");

}

function empat() {
    document.getElementById("btnprev").classList.remove('disabled');
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active');
    document.getElementById("empat").hidden = false;
    document.getElementById("btnempat").classList.add('active');
    document.getElementById("btnnext").classList.add('disabled');
    document.getElementById("prev").setAttribute("onClick", "javascript: tiga();");
    document.getElementById("mnext").hidden = false;
}

function mulaikuis() {
    document.getElementById("petunjukkuissatu").hidden = true;
    document.getElementById("biodatakuissatu").hidden = true;
    document.getElementById("soalkuissatu").hidden = false;
}

function selesaikuis() {
    document.getElementById("soalkuissatu").hidden = true;
    document.getElementById("hasilkuissatu").hidden = false;
}

function validasikuis() {
    const nama = document.getElementById("namaform1").value;
    const sekolah = document.getElementById("sekolahform1").value;
    const kelas = document.getElementById("kelasform1").value;
    const errNama = document.getElementById("errNama");
    const errSekolah = document.getElementById("errSekolah");
    const errKelas = document.getElementById("errKelas");

    if ((nama == "") && (sekolah == "") && (kelas == "")) {
        errNama.innerHTML = `<div class="alert alert-danger" role="alert">
                            Nama Harus di isi
                            </div>`
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert">
                            Sekolah Harus di isi
                            </div>`
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert">
                            Silahkan Pikih Kelas
                            </div>`
    }
    else if ((sekolah == "") && (kelas == "")) {
        errNama.innerHTML = ``
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert">
                            Sekolah Harus di isi
                            </div>`
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert">
                            Silahkan Pikih Kelas
                            </div>`
    }
    else if ((nama == "") && (kelas == "")) {
        errNama.innerHTML = `<div class="alert alert-danger" role="alert">
        Nama Harus di isi
                            </div>`
        errSekolah.innerHTML = ``
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert">
                            Silahkan Pikih Kelas
                            </div>`
    }
    else if ((nama == "") && (sekolah == "")) {
        errNama.innerHTML = `<div class="alert alert-danger" role="alert">
        Nama Harus di isi
                            </div>`
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert">
        Sekolah Harus di isi
        </div>`
        errKelas.innerHTML = ``
    }
    else if ((sekolah == "") && (kelas == "")) {
        errNama.innerHTML = ``
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert">
                            Sekolah Harus di isi
                            </div>`
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert">
                            Silahkan Pikih Kelas
                            </div>`
    }
    else if (nama == "") {
        errNama.innerHTML = `<div class="alert alert-danger" role="alert">
        Nama Harus di isi
        </div>`
        errSekolah.innerHTML = ``
        errKelas.innerHTML = ``
    }
    else if (sekolah == "") {
        errNama.innerHTML = ``
        errSekolah.innerHTML = `<div class="alert alert-danger" role="alert">
        Sekolah Harus di isi
        </div>`
        errKelas.innerHTML = ``
    }
    else if (kelas == "") {
        errNama.innerHTML = ``
        errSekolah.innerHTML = ``
        errKelas.innerHTML = `<div class="alert alert-danger" role="alert">
        Silahkan Pikih Kelas
        </div>`
    }

    else {
        mulaikuis();
    }
}

