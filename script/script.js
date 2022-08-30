// Image hero akan berubah ketika di klik
let imagehero = document.querySelector("#imagehero");
imagehero.addEventListener("click", function (event) {
  imagehero.setAttribute("src", "assets/image/haircut act 2.jpg");
});

// Image hero akan berubah ketika di klik
let imageGaleri1 = document.querySelector("#imageGaleri1");
imageGaleri1.addEventListener("click", function (event) {
  let caption1 = document.querySelector("#caption1");
  caption1.innerHTML = "<figcaption>Cukur brewok anda dengan rapi</figcaption>";
});

let imageGaleri2 = document.querySelector("#imageGaleri2");
imageGaleri2.addEventListener("click", function (event) {
  let caption2 = document.querySelector("#caption2");
  caption2.innerHTML =
    "<figcaption>Biarkan kapster kami merancang rambut anda sesuai keinginan</figcaption>";
});

let imageGaleri3 = document.querySelector("#imageGaleri3");
imageGaleri3.addEventListener("click", function (event) {
  let caption3 = document.querySelector("#caption3");
  caption3.innerHTML =
    "<figcaption>Pengalaman potong rambut yang menyenangkan untuk si kecil</figcaption>";
});

let imageGaleri4 = document.querySelector("#imageGaleri4");
imageGaleri4.addEventListener("click", function (event) {
  let caption4 = document.querySelector("#caption4");
  caption4.innerHTML =
    "<figcaption>Sebagai remaja. ubah penampilan anda menjadi maskulin</figcaption>";
});

let imageGaleri5 = document.querySelector("#imageGaleri5");
imageGaleri5.addEventListener("click", function (event) {
  let caption5 = document.querySelector("#caption5");
  caption5.innerHTML =
    "<figcaption>Kapster kami sangat berpengalaman dan teliti ketika memoton rambut anda</figcaption>";
});

let imageGaleri6 = document.querySelector("#imageGaleri6");
imageGaleri6.addEventListener("click", function (event) {
  let caption6 = document.querySelector("#caption6");
  caption6.innerHTML =
    "<figcaption>Ubah si kecil tetap stylish dimanapun dia berada</figcaption>";
});

let imageGaleri7 = document.querySelector("#imageGaleri7");
imageGaleri7.addEventListener("click", function (event) {
  let caption7 = document.querySelector("#caption7");
  caption7.innerHTML =
    "<figcaption>Penggunaan hair dryer untuk hasil pemotongan rambut yang sempurna</figcaption>";
});

let imageGaleri8 = document.querySelector("#imageGaleri8");
imageGaleri8.addEventListener("click", function (event) {
  let caption8 = document.querySelector("#caption8");
  caption8.innerHTML =
    "<figcaption>Dimulai dengan potong rambut, diakhiri dengan pemberian vitamin untuk memelihara kesehatan rambut</figcaption>";
});
