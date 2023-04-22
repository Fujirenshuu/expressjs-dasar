const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const identitas = new Image();
identitas.src = 'low.jpg';


// Tentukan posisi dan ukuran kolom gambar
const imgX = 50; // posisi X gambar
const imgY = 50; // posisi Y gambar
const imgWidth = 200; // lebar gambar
const imgHeight = 200; // tinggi gambar

// Tentukan posisi dan ukuran teks
const textX = imgX + 10; // margin kiri dari gambar
const textY = imgY + 10; // margin atas dari gambar
const textWidth = imgWidth - 20; // lebar teks
const textHeight = imgHeight - 20; // tinggi teks


// Tambahkan teks ke dalam canvas
ctx.fillStyle = "black";
ctx.font = "16px Arial";
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillText("Nama: John Doe", textX, textY, textWidth);
ctx.fillText("Member ID: 123456", textX, textY + 25, textWidth);
ctx.fillText("Tanda Tangan:", textX, textY + 50, textWidth);







identitas.onload = () => {
  ctx.drawImage(identitas, 0, 0);
};

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  input.addEventListener('input', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(identitas, 0, 0);

    ctx.font = 'bold 24px Arial';
    ctx.fillText(document.getElementById('nama').value, 100, 220);
    ctx.fillText(document.getElementById('alamat').value, 40, 250);
    ctx.fillText(document.getElementById('no_hp').value, 40, 280);
  });
});