const allPagesContent = {
  home: "",
  wisata: "",
  artikel: ""
};
const pages = {

  // ISI HALAMAN KETERANGAN SETIAP DESTINASI WISATA DISATUKAN DALAM FUNGSI conts pages = {} di JavaScript

    "masjid-sultan-riau": 
`<h2 style="margin-top: 40px; padding: 0px 100px;">Masjid Sultan Riau</h2>
<table style="width: 100%; padding: 0px 50px; border-spacing: 40px;">
  <!-- Baris 1 -->
  <tr>
    <!-- Kolom kiri: Gambar utama -->
    <td style="vertical-align: top; width: 300px;">
      <img src="https://tse1.mm.bing.net/th?id=OIP.zib1tZle4EhSMsyN4jR7sgHaFj&pid=Api&P=0&h=220" 
             alt="gambar utama" width="300" height="200" style="object-fit: cover;">
    </td>

    <!-- Kolom kanan: Penjelasan -->
    <td style="vertical-align: top; text-align: justify; ">
      <p>
        Masjid ini mulai didirikan pada tanggal 1 Syawal 1249 H (1832) oleh YDMR VII, Raja Abdurrahman (memerintah 1831–1844), 
        sebagai tempat ibadah umat Islam, khususnya yang ada di Pulau Penyengat. Masjid ini dibangun oleh Raja Abdurrahman 
        bersama kurang lebih 5000 penduduk Pulau Penyengat. Bangunan masjid secara arsitektural merupakan perpaduan Timur Tengah 
        dan Eropa dengan struktur yang terbuat dari bata dan mortar. Atap pada bangunan utama juga terbuat dari bata dan mortar. 
        Adapun mortar dimungkinkan menggunakan campuran kapur dan anggur berupa pasir dan kerikil.
      </p>
    </td>
  </tr>

  <!-- Baris 2 -->
  <tr>
    <!-- Kolom kiri: Informasi tambahan dan lokasi -->
    <td style="vertical-align: top;">
      <p><strong>Informasi Tambahan :</strong><br>
        Harga Tiket Masuk : Gratis<br>
        Jam Buka : 24 jam
      </p>
     <p style="margin-top: 20px;">
  <strong>Lokasi:</strong><br>
 <a href="https://maps.app.goo.gl/miUfZLJLooifVmj46" target="_blank" style="color: #018175; text-decoration: none;">
          Penyengat, Kec. Tj. Pinang Kota, Kota Tanjung Pinang, Kepulauan Riau 29114
  </a>
  <div class="kembali">
    <a data-page="wisata"><< Kembali</a>
  </div>  
</p>

    </td>

    <!-- Kolom kanan: Dua gambar kecil rata kanan -->
    <td style="vertical-align: top;">
      <div style="display: flex; justify-content: flex-end; gap: 20px;">
        <img src="https://tse3.mm.bing.net/th?id=OIP.KUkk2nuUsthfP00AV0XI1AHaEK&pid=Api&P=0&h=220" 
             alt="gambar 1" width="250" height="200" style="object-fit: cover;">
        <img src="https://res.cloudinary.com/wegowordpress/image/upload/v1474655442/penyengat-pulau-peziarah-02_wuplrb.jpg" 
             alt="gambar 2" width="250" height="200" style="object-fit: cover;">
             
      </div>
    </td>
  </tr>
  
</table>
 
    `,

"patung-seribu": 
    
`<h2 style="margin-top: 40px; padding: 0px 100px;">Patung Seribu</h2>
<table style="width: 100%; padding: 0px 50px; border-spacing: 40px;">
  <!-- Baris 1 -->
  <tr>
    <!-- Kolom kiri: Gambar utama -->
    <td style="vertical-align: top; width: 300px;">
      <img src=" https://tse3.mm.bing.net/th?id=OIP.iRCazPawUoTmH1dVq1o7SwHaFj&pid=Api&P=0&h=220"
             alt="gambar utama" width="300" height="200" style="object-fit: cover;">
    </td>

    <!-- Kolom kanan: Penjelasan -->
    <td style="vertical-align: top; text-align: justify; ">
      <p>
        Vihara Ksitigarbha Bodhisattva merupakan tempat ibadah umat Buddha dan objek wisata religi.Dari kejauhan, patung terlihat sama antara satu dengan yang lainnya. Padahal, patung dibuat dengan ekspresi dan pakaian yang berbeda. Tinggi patung sekitar 1,7 hingga 2 meter. Patung dan ornamennya didatangkan khusus dari Tiongkok yang pembuatannya dilakukan secara gotong royong oleh komunitas Tionghoa.Wisata Patung Seribu dibangun pada tahun 2003 dan selesai pada tahun 2014. Wisata tersebut dibuka untuk umum pada Februari 2017. Pada bagian atasnya terdapat atap bertingkat khas Tiongkok dengan hiasan patung naga.
      </p>
    </td>
  </tr>

  <!-- Baris 2 -->
  <tr>
    <!-- Kolom kiri: Informasi tambahan dan lokasi -->
    <td style="vertical-align: top;">
      <p><strong>Informasi Tambahan :</strong><br>
        Harga Tiket Masuk : 5.000-30.000/org<br>
        Jam Buka : 07.30 - 17.30 wib
      </p>
      <p style="margin-top: 20px; display: flex; align-items: flex-start; gap: 8px;">
      <strong>Lokasi:</strong>
      </p>
  <div style="display: flex; align-items: flex-start; gap: 8px;">
  <a href="https://maps.app.goo.gl/dgaGhizNGBKxbtno7" target="_blank" style="color: #018175; text-decoration: none;">
    Jl. Asia Afrika, Batu IX, Kec. Tanjungpinang Tim., Kota Tanjung Pinang, Kepulauan Riau 29125 </a>
  </div>
    </a>
    <div class="kembali">
    <a data-page="wisata"><< Kembali
    </a>
  </div>  
</td>

    <!-- Kolom kanan: Dua gambar kecil rata kanan -->
    <td style="vertical-align: top;">
      <div style="display: flex; justify-content: flex-end; gap: 20px;">
        <img src="https://tse2.mm.bing.net/th?id=OIP.jDkLZuF6CHx87J0jiFOPYQHaEK&pid=Api&P=0&h=220" 
             alt="gambar 1" width="250" height="200" style="object-fit: cover;">
        <img src="https://tse2.mm.bing.net/th?id=OIP.44_mts_4Ymf0dPHgGMk7FAHaEc&pid=Api&P=0&h=220" 
             alt="gambar 2" width="250" height="200" style="object-fit: cover;">
             
      </div>
    </td>
  </tr>
</table>
    `,


    "pulau-piugus": 
    
`<h2 style="margin-top: 40px; padding: 0px 100px;">Pulau Piugus</h2>
<table style="width: 100%; padding: 0px 50px; border-spacing: 40px;">
  <!-- Baris 1 -->
  <tr>
    <!-- Kolom kiri: Gambar utama -->
    <td style="vertical-align: top; width: 300px;">
      <img src=" https://tse3.mm.bing.net/th?id=OIP._xtk7f20WghIQ_Q73jW9JwAAAA&pid=Api&P=0&h=220 " 
             alt="gambar utama" width="300" height="200" style="object-fit: cover;">
    </td>

    <!-- Kolom kanan: Penjelasan -->
    <td style="vertical-align: top; text-align: justify; ">
      <p>
        Jika ingin merasakan liburan tanpa diganggu banyak orang, mungkin Pulau Piugus di Anambas bisa menjadi salah satu alternatif pilihan kamu. Berada di kawasan Pal Matak, kabupaten Anambas, Provinsi Kepulauan Riau, Pulau Piugus merupakan pulau yang masih bersih, sepi, alami, dan banyak dihiasi hijaunya pepohonan. Selain itu, pulau ini merupakan kawasan yang cocok untuk melakukan snorkeling dan diving. Airnya yang masih bersih jernih, membuat para pengunjung bisa dengan jelas melihat biota laut, mulai dari terumbu karang, ikan-ikan lucu dengan warna-warna menggemaskan, hingga kuda laut.

      </p>
    </td>
  </tr>

  <!-- Baris 2 -->
  <tr>
    <!-- Kolom kiri: Informasi tambahan dan lokasi -->
    <td style="vertical-align: top;">
      <p><strong>Informasi Tambahan :</strong><br>
        Harga Tiket Masuk : 10.000/org<br>
        Jam Buka : 08.00 - 20.00 wib
      </p>
      <p style="margin-top: 20px;">
  <strong>Lokasi:</strong><br>
  <a href="https://maps.app.goo.gl/rKYKBbtiKQWLuwHS7" target="_blank" style="color: #018175; text-decoration: none;">
    Kec. Palmatak, Kabupaten Kepulauan Anambas, Kepulauan Riau
  </a>
</p>
  </div>  
  </a>
   <div class="kembali">
    <a data-page="wisata"><< Kembali</a>
  </div>  
    </td>

    <!-- Kolom kanan: Dua gambar kecil rata kanan -->
    <td style="vertical-align: top;">
      <div style="display: flex; justify-content: flex-end; gap: 20px;">
        <img src="https://www.bing.com/th/id/OIP.7onM13Mmle7mYvVFc2YyDgHaEK?w=202&h=108&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" 
             alt="gambar 1" width="250" height="200" style="object-fit: cover;">
        <img src="https://tse2.mm.bing.net/th?id=OIP.IsDFhBk2kUiwQHx--YBBfAHaEK&pid=Api&P=0&h=220" 
             alt="gambar 2" width="250" height="200" style="object-fit: cover;">
             
      </div>
    </td>
  </tr>
</table>
    `,
    "gurun-pasir-busung":
    
`<h2 style="margin-top: 40px; padding: 0px 100px;">Gurun Pasir Busung</h2>
<table style="width: 100%; padding: 0px 50px; border-spacing: 40px;">
  <!-- Baris 1 -->
  <tr>
    <!-- Kolom kiri: Gambar utama -->
    <td style="vertical-align: top; width: 300px;">
      <img src="https://tse3.mm.bing.net/th?id=OIP.4gnaNLNOfrQfkrwjZI6WrAHaEk&pid=Api&P=0&h=220" 
             alt="gambar utama" width="300" height="200" style="object-fit: cover;">
    </td>

    <!-- Kolom kanan: Penjelasan -->
    <td style="vertical-align: top; text-align: justify; ">
      <p>
        Gurun Pasir Bintan adalah destinasi wisata unik di Kabupaten Bintan, Kepulauan Riau, yang menawarkan pemandangan menyerupai gurun di Timur Tengah. Hamparan pasir putih dan gundukan alami menciptakan suasana eksotis yang menakjubkan, terutama saat matahari mulai terbenam. Tempat ini juga menjadi favorit wisatawan karena banyaknya spot foto instagramable yang memanjakan mata. Cocok untuk bersantai sambil menikmati pesona alam yang berbeda dari biasanya.
      </p>
    </td>
  </tr>

  <!-- Baris 2 -->
  <tr>
    <!-- Kolom kiri: Informasi tambahan dan lokasi -->
    <td style="vertical-align: top;">
      <p><strong>Informasi Tambahan :</strong><br>
        Harga Tiket Masuk : Gratis<br>
        Jam Buka : 24 jam
      </p>
     <p style="margin-top: 20px;">
  <strong>Lokasi:</strong><br>
  <a href="https://maps.app.goo.gl/us1NS3LAquEgkS8k6" target="_blank" target="_blank" style="color: #018175; text-decoration: none;">
    Jl. Raya Busung, Busung, Kec. Seri Kuala Lobam, Kabupaten Bintan, Kepulauan Riau 29152
  </a>
</p>
</a>
   <div class="kembali">
    <a data-page="wisata"><< Kembali</a>
    </div>  
    </td>

    <!-- Kolom kanan: Dua gambar kecil rata kanan -->
    <td style="vertical-align: top;">
      <div style="display: flex; justify-content: flex-end; gap: 20px;">
        <img src="https://tse2.mm.bing.net/th?id=OIP.jt8o_5g20RLlYvSRTYSnOAHaFj&pid=Api&P=0&h=220" 
             alt="gambar 1" width="250" height="200" style="object-fit: cover;">
        <img src="https://tse3.mm.bing.net/th?id=OIP.M0biizS6j43prFuSgWuWXwHaDs&pid=Api&P=0&h=220" 
             alt="gambar 2" width="250" height="200" style="object-fit: cover;">
             
      </div>
    </td>
  </tr>
</table>
    `,


    "danau-biru-kijang": 
    
`<h2 style="margin-top: 40px; padding: 0px 100px;">Danau Biru Kijang</h2>
<table style="width: 100%; padding: 0px 50px; border-spacing: 40px;">
  <!-- Baris 1 -->
  <tr>
    <!-- Kolom kiri: Gambar utama -->
    <td style="vertical-align: top; width: 300px;">
      <img src=" https://tse4.mm.bing.net/th?id=OIP.i6Mf9e9nzEB8JWrZnzVXuwHaE8&pid=Api&P=0&h=220 " 
             alt="gambar utama" width="300" height="200" style="object-fit: cover;">
    </td>

    <!-- Kolom kanan: Penjelasan -->
    <td style="vertical-align: top; text-align: justify; ">
      <p>
        Danau Biru merupakan tempat wisata favorit di Bintan yang menyuguhkan pesona sebuah danau dengan hamparan airnya yang jernih dan biru bagai lautan. Terciptanya danau ini pun tergolong unik, karena ternyata danau tidak tercipta secara alami melainkan bekas penambangan pasir yang hingga kini masih beroperasi. Penambangan pasir tersebut menciptakan sebuah lubang yang cukup besar dan luas. Seiring berjalannya waktu, air hujan pun mengisi lubang tersebut dan akhirnya terbentuklah sebuah danau yang indah.
      </p>
    </td>
  </tr>

  <!-- Baris 2 -->
  <tr>
    <!-- Kolom kiri: Informasi tambahan dan lokasi -->
    <td style="vertical-align: top;">
      <p><strong>Informasi Tambahan :</strong><br>
        Harga Tiket Masuk : 5.000-10.000/org<br>
        Jam Buka : 24 jam
      </p>
     <p style="margin-top: 20px;">
  <strong>Lokasi:</strong><br>
  <a href="https://maps.app.goo.gl/TnqXJs5TWx1pMXcH6" target="_blank" style="color: #018175; text-decoration: none;">
    Gn. Kijang, Kec. Gn. Kijang, Kabupaten Bintan, Kepulauan Riau 29151
  </a>
</p>
   <div class="kembali">
    <a data-page="wisata"><< Kembali</a>
    </div>  
    </td>

    <!-- Kolom kanan: Dua gambar kecil rata kanan -->
    <td style="vertical-align: top;">
      <div style="display: flex; justify-content: flex-end; gap: 20px;">
        <img src=" https://tse1.mm.bing.net/th?id=OIP.5C2pqNXaQ3YUIEYbVOxFgQHaHa&pid=Api&P=0&h=220 " 
             alt="gambar 1" width="250" height="200" style="object-fit: cover;">
        <img src=" https://tse2.mm.bing.net/th?id=OIP._bCZsNlNjX5sxiEPTnNQSgHaEK&pid=Api&P=0&h=220 " 
             alt="gambar 2" width="250" height="200" style="object-fit: cover;">
             
      </div>
    </td>
  </tr>
</table>
    `,


    "taman-batu-alif": 
    
`<h2 style="margin-top: 40px; padding: 0px 100px;">Taman Batu Alif</h2>
<table style="width: 100%; padding: 0px 50px; border-spacing: 40px;">
  <!-- Baris 1 -->
  <tr>
    <!-- Kolom kiri: Gambar utama -->
    <td style="vertical-align: top; width: 300px;">
      <img src=" https://tse2.mm.bing.net/th?id=OIP.315Vhwn66aNrUiBEq_TbyAHaEs&pid=Api&P=0&h=220 " 
             alt="gambar utama" width="300" height="200" style="object-fit: cover;">
    </td>

    <!-- Kolom kanan: Penjelasan -->
    <td style="vertical-align: top; text-align: justify; ">
      <p>
        Kabupaten Natuna di Provinsi Kepulauan Riau menyimpan begitu banyak potensi wisata.  Salah satu destinasi wisata di Kepulauan Natuna yang indah adalah Alif Stone Park atau Taman Batu Alif. Susunan bebatuan besar yang ada di pantai. Memberikan suasana yang berbeda dari pantai lain di Indonesia. Suguhan utama di Alif Stone Park adalah hamparan batu besar yang tersebar sepanjang pantai. Sedangkan nama Alif sendiri karena ada batu yang berdiri tegak. Masyarakat menganggapnya mirip dengan huruf pertama Arab ‘Alif’.
      </p>
    </td>
  </tr>

  <!-- Baris 2 -->
  <tr>
    <!-- Kolom kiri: Informasi tambahan dan lokasi -->
    <td style="vertical-align: top;">
      <p><strong>Informasi Tambahan :</strong><br>
        Harga Tiket Masuk : 5.000/org<br>
        Jam Buka : 07.00 - 18.00 wib
      </p>
      <p style="margin-top: 20px;"><strong>Lokasi:</strong><br>
        <a href="https://maps.app.goo.gl/7qetPrLLM8Nua1z29" target="_blank" style="color: #018175; text-decoration: none;">
        Jl. Raya Sepempang, Sepempang, Kabupaten Natuna, Kepulauan Riau
        </a>
        </p>
        <div class="kembali">
    <a data-page="wisata"><< Kembali</a>
  </div>  
    </td>

    <!-- Kolom kanan: Dua gambar kecil rata kanan -->
    <td style="vertical-align: top;">
      <div style="display: flex; justify-content: flex-end; gap: 20px;">
        <img src=" https://tse2.mm.bing.net/th?id=OIP.tV6yivjkjuSri9zDJ7OdSQHaE8&pid=Api&P=0&h=220 " 
             alt="gambar 1" width="250" height="200" style="object-fit: cover;">
        <img src="https://tse4.mm.bing.net/th?id=OIP.1C20VEtTyA7B_jXUDDDxlAHaE8&pid=Api&P=0&h=220" 
             alt="gambar 2" width="250" height="200" style="object-fit: cover;">
             
      </div>
    </td>
  </tr>
</table>
    `,


    "pantai-trikora": 
    
`<h2 style="margin-top: 40px; padding: 0px 100px;">Pantai Trikora</h2>
<table style="width: 100%; padding: 0px 50px; border-spacing: 40px;">
  <!-- Baris 1 -->
  <tr>
    <!-- Kolom kiri: Gambar utama -->
    <td style="vertical-align: top; width: 300px;">
      <img src="https://tse4.mm.bing.net/th?id=OIP.kFwn_VqzaQesN7j2b7TPAQHaEK&pid=Api&P=0&h=220" 
             alt="gambar utama" width="300" height="200" style="object-fit: cover;">
    </td>

    <!-- Kolom kanan: Penjelasan -->
    <td style="vertical-align: top; text-align: justify; ">
      <p>
        Pantai Trikora di Pulau Bintan adalah tempat yang sempurna untuk menggapai keindahan pesisir selatan. Pantai ini dikelilingi oleh hamparan pasir putih yang mengundang untuk berjalan-jalan atau bersantai sambil menikmati pemandangan laut yang menakjubkan. Pantai ini menawarkan keindahan alam yang menakjubkan, dengan pasir putih dan air laut yang jernih. Di sini, pengunjung dapat menikmati berbagai aktivitas di pantai, mulai dari berenang, berjemur, hingga makan-makan di tepi pantai.
      </p>
    </td>
  </tr>

  <!-- Baris 2 -->
  <tr>
    <!-- Kolom kiri: Informasi tambahan dan lokasi -->
    <td style="vertical-align: top;">
      <p><strong>Informasi Tambahan :</strong><br>
        Harga Tiket Masuk : 10.000/org<br>
        Jam Buka : 24 jam
      </p>
      <p style="margin-top: 20px;">
  <strong>Lokasi:</strong><br>
  <a href="https://maps.app.goo.gl/e91aGMT5wPG75NfV8" target="_blank" style="color: #018175; text-decoration: none;">
    Gunung. Kijang, Kec. Gunung. Kijang, Kabupaten Bintan, Kepulauan Riau 29151
  </a>
</p>
    <div class="kembali">
      <a data-page="wisata"><< Kembali</a>
    </div>  
    </td>

    <!-- Kolom kanan: Dua gambar kecil rata kanan -->
    <td style="vertical-align: top;">
      <div style="display: flex; justify-content: flex-end; gap: 20px;">
        <img src="https://tse4.mm.bing.net/th?id=OIP.JNze9lgJc_BTKXTyUdCoHQAAAA&pid=Api&P=0&h=220" 
             alt="gambar 1" width="250" height="200" style="object-fit: cover;">
        <img src="https://tse4.mm.bing.net/th?id=OIP.AIjqzYI8WXSuMOWgfNf43AHaEK&pid=Api&P=0&h=220" 
             alt="gambar 2" width="250" height="200" style="object-fit: cover;">
             
      </div>
    </td>
  </tr>
</table>
    `,


    "museum-sultan-badrul-alamsyah": 
    
`<h2 style="margin-top: 40px; padding: 0px 100px;">Museum  Sultan Badrul Alamsyah</h2>
<table style="width: 100%; padding: 0px 50px; border-spacing: 40px;">
  <!-- Baris 1 -->
  <tr>
    <!-- Kolom kiri: Gambar utama -->
    <td style="vertical-align: top; width: 300px;">
      <img src="https://gokepri.com/gokepri/uploads/2023/02/museum-sultan-badrul-alamsyah.jpg" 
             alt="gambar utama" width="300" height="200" style="object-fit: cover;">
    </td>

    <!-- Kolom kanan: Penjelasan -->
    <td style="vertical-align: top; text-align: justify;">
      <p>
        Museum Kota Tanjungpinang Sultan Sulaiman Badrul Alamsyah, berlokasi di gedung bekas Sekolah Tingkat Dasar yang didirikan pada tahun 1918 dengan nama Hollandsch-Inlandsche School (HIS). Gedung ini memiliki sejarah panjang sebagai lembaga pendidikan, mulai dari masa kolonial hingga kemerdekaan, yang mencerminkan perkembangan pendidikan dalam pembentukan identitas kota ini. Museum Kota Tanjungpinang Sultan Sulaiman Badrul Alamsyah diharapkan dapat menjadi pusat pendidikan dan pelestarian budaya, serta menginspirasi masyarakat untuk lebih menghargai dan memahami nilai-nilai kebudayaan yang luhur.
      </p>
    </td>
  </tr>

  <!-- Baris 2 -->
  <tr>
    <!-- Kolom kiri: Informasi tambahan dan lokasi -->
    <td style="vertical-align: top;">
      <p><strong>Informasi Tambahan :</strong><br>
        Harga Tiket Masuk : Gratis<br>
        Jam Buka : 09.00 - 16.00 wib
      </p>
  <p style="margin-top: 20px;">
  <strong>Lokasi:</strong><br>
  <a href="https://maps.app.goo.gl/Urdj7WMzwe19qxmHA" target="_blank" style="color: #018175; text-decoration: none;">
    Jl. Ketapang No.2, Kemboja, Kec. Tanjungpinang Barat, Kota Tanjung Pinang, Kepulauan Riau 35132
  </a>
</p>
    <div class="kembali">
      <a data-page="wisata"><< Kembali</a>
    </div> 
    </td>

    <!-- Kolom kanan: Dua gambar kecil rata kanan -->
    <td style="vertical-align: top;">
      <div style="display: flex; justify-content: flex-end; gap: 20px;">
        <img src="https://tse1.mm.bing.net/th?id=OIP.K2qC86Jypb35UrXQnoL4QwHaEO&pid=Api&P=0&h=220" 
             alt="gambar 1" width="250" height="200" style="object-fit: cover;">
        <img src="https://tse2.mm.bing.net/th?id=OIP.MiNjDutqNmpk9egy8Huj-gAAAA&pid=Api&P=0&h=220" 
             alt="gambar 2" width="250" height="200" style="object-fit: cover;">
             
      </div>
    </td>
  </tr>
</table>
    `,


    "vihara-dharma-sasana": 
    
`<h2 style="margin-top: 40px; padding: 0px 100px;">Vihara Dharma Sasana</h2>
<table style="width: 100%; padding: 0px 50px; border-spacing: 40px;">
  <!-- Baris 1 -->
  <tr>
    <!-- Kolom kiri: Gambar utama -->
    <td style="vertical-align: top; width: 300px;">
      <img src="https://tse3.mm.bing.net/th?id=OIP.GTznFkuU72aiez5WLedtXwHaE8&pid=Api&P=0&h=220" 
             alt="gambar utama" width="300" height="200" style="object-fit: cover;">
    </td>

    <!-- Kolom kanan: Penjelasan -->
    <td style="vertical-align: top; text-align: justify; ">
      <p>
        Terletak di Senggarang, Kota Tanjungpinang, destinasi wisata religi ini dapat ditempuh dengan jalur darat dari pusat kota dengan waktu tempuh yang cukup panjang sekira 30 menit.  Di Vihara Dharma Sasana sendiri terdapat kuil yang sudah berdiri sejak abad ke 17 dan berdiri kokoh sejak zaman dinasti ming dan terhitung tertua di Provinsi Kepulauan Riau Vihara ini dulunya dibangun oleh Imigran dari Cina daratan. Kompleks vihara ini memiliki empat bangunan utama, di mana tiga bangunan merupakan kelenteng yang letaknya menghadap ke laut. 
      </p>
    </td>
  </tr>

  <!-- Baris 2 -->
  <tr>
    <!-- Kolom kiri: Informasi tambahan dan lokasi -->
    <td style="vertical-align: top;">
      <p><strong>Informasi Tambahan :</strong><br>
        Harga Tiket Masuk : Gratis<br>
        Jam Buka : 24 jam
      </p>
    <p style="margin-top: 20px;">
  <strong>Lokasi:</strong><br>
  <a href="https://maps.app.goo.gl/WXCMRMTziyCMSCdg6" target="_blank" style="color: #018175; text-decoration: none;">
    Senggarang, Kec. Tj. Pinang Kota, Kota Tanjung Pinang, Kepulauan Riau
  </a>
</p>
    <div class="kembali">
      <a data-page="wisata"><< Kembali</a>
    </div> 
    </td>

    <!-- Kolom kanan: Dua gambar kecil rata kanan -->
    <td style="vertical-align: top;">
      <div style="display: flex; justify-content: flex-end; gap: 20px;">
        <img src="https://tse2.mm.bing.net/th?id=OIP.6RyBjN96ZiNaayiEpdmrrAHaFj&pid=Api&P=0&h=220" 
             alt="gambar 1" width="250" height="200" style="object-fit: cover;">
        <img src="https://tse2.mm.bing.net/th?id=OIP.63qpM_8ib7l0xHsSFG1JYAHaFj&pid=Api&P=0&h=220" 
             alt="gambar 2" width="250" height="200" style="object-fit: cover;">
             
      </div>
    </td>
  </tr>
</table>
    `,
    "vihara-avalokitesvara-graha": 
    
`<h2 style="margin-top: 40px; padding: 0px 100px;">Vihara Avalokitesvara Graha</h2>
<table style="width: 100%; padding: 0px 50px; border-spacing: 40px;">
  <!-- Baris 1 -->
  <tr>
    <!-- Kolom kiri: Gambar utama -->
    <td style="vertical-align: top; width: 300px;">
      <img src="https://tse3.mm.bing.net/th?id=OIP.3BSakWYACu8ess6Qgrl_CAHaEk&pid=Api&P=0&h=220" 
             alt="gambar utama" width="300" height="200" style="object-fit: cover;">
    </td>

    <!-- Kolom kanan: Penjelasan -->
    <td style="vertical-align: top; text-align: justify; ">
      <p>
        Vihara Avalokitesvara Graha merupakan salah satu vihara favorit di Tanjungpinang, Provinsi Kepulauan Riau, dan disebut sebagai vihara terbesar se-Asia Tenggara. Di vihara ini juga banyak keluarga Tionghoa dari Malaysia, Singapura, Tiongkok, dan negara India yang datang untuk melakukan ibadah.
      </p>
    </td>
  </tr>

  <!-- Baris 2 -->
  <tr>
    <!-- Kolom kiri: Informasi tambahan dan lokasi -->
    <td style="vertical-align: top;">
      <p><strong>Informasi Tambahan :</strong><br>
        Harga Tiket Masuk : Gratis<br>
        Jam Buka : 05.00 - 17.00 wib
      </p>
      <p style="margin-top: 20px;">
  <strong>Lokasi:</strong><br>
  <a href="https://maps.app.goo.gl/wgXVC99ivhkQMRVw7" target="_blank" style="color: #018175; text-decoration: none;">
    pinamg, Tj. Unggat, Kec. Bukit Bestari, Kota Tanjung Pinang, Kepulauan Riau 29125
  </a>
</p>
    <div class="kembali">
      <a data-page="wisata"><< Kembali</a>
    </div> 
    </td>

    <!-- Kolom kanan: Dua gambar kecil rata kanan -->
    <td style="vertical-align: top;">
      <div style="display: flex; justify-content: flex-end; gap: 20px;">
        <img src="https://tse4.mm.bing.net/th?id=OIP.ovdr4GfAsGFmJtglsJBaZgHaEu&pid=Api&P=0&h=220" 
             alt="gambar 1" width="250" height="200" style="object-fit: cover;">
        <img src="https://tse1.mm.bing.net/th?id=OIP.C5zE4gszU68mZwZyWqphHwHaE8&pid=Api&P=0&h=220" 
             alt="gambar 2" width="250" height="200" style="object-fit: cover;">
             
      </div>
    </td>
  </tr>
</table>
    `,


    "lagoi-bay":
    
`<h2 style="margin-top: 40px; padding: 0px 100px;">Lagoi Bay</h2>
<table style="width: 100%; padding: 0px 50px; border-spacing: 40px;">
  <!-- Baris 1 -->
  <tr>
    <!-- Kolom kiri: Gambar utama -->
    <td style="vertical-align: top; width: 300px;">
      <img src=" https://tse1.mm.bing.net/th?id=OIP.iZy1s859tq4IUdqB3nfKzwHaFj&pid=Api&P=0&h=220 " 
             alt="gambar utama" width="300" height="200" style="object-fit: cover;">
    </td>

    <!-- Kolom kanan: Penjelasan -->
    <td style="vertical-align: top; text-align: justify; ">
      <p>
        Lagoi Bay Beach terkenal dengan hamparan pasir putih yang menawan. Di tepi pantainya, ada pepohonan kelapa yang punya keindahan tersendiri. Dilengkapi dengan fasilitas Lagoi Bay Latern Park yang makin cantik. Daya tarik yang dimiliki Lagoi Bay yang pertama yaitu terdapat penginapan yang menyatu langsung dengan objek wisata. Desainnyapun juga cukup megah ditambah lagi mempunyai tempat parkir yang luas serta fasilitas yang disediakan juga lumayan memadai dengan nuansa putih sehingga terlihat memukau. 
      </p>
    </td>
  </tr>

  <!-- Baris 2 -->
  <tr>
    <!-- Kolom kiri: Informasi tambahan dan lokasi -->
    <td style="vertical-align: top;">
      <p><strong>Informasi Tambahan :</strong><br>
        Harga Tiket Masuk : Gratis<br>
        Jam Buka : 24 jam
      </p>
    <p style="margin-top: 20px;">
  <strong>Lokasi:</strong><br>
  <a href="https://maps.app.goo.gl/Fp1me83tRiPNU6b96" target="_blank" style="color: #018175; text-decoration: none;">
    Lagoi Bay, Kec. Tlk. Sebong, Kabupaten Bintan, Kepulauan Riau
  </a>
</p>
<div class="kembali">
      <a data-page="wisata"><< Kembali</a>
    </div> 
    </td>

    <!-- Kolom kanan: Dua gambar kecil rata kanan -->
    <td style="vertical-align: top;">
      <div style="display: flex; justify-content: flex-end; gap: 20px;">
        <img src=" https://tse2.mm.bing.net/th?id=OIP.mKuCm5yDj4tEGNKgwFdZRAHaE8&pid=Api&P=0&h=220 " 
             alt="gambar 1" width="250" height="200" style="object-fit: cover;">
        <img src=" https://tse4.mm.bing.net/th?id=OIP.BcPGVl7-bdcoDaENQu7EOAHaEO&pid=Api&P=0&h=220 " 
             alt="gambar 2" width="250" height="200" style="object-fit: cover;">
             
      </div>
    </td>
  </tr>
</table>
    `,


    "pantai-tanjung-siambang": 
    
`<h2 style="margin-top: 40px; padding: 0px 100px;">Pantai Tanjung Siambang</h2>
<table style="width: 100%; padding: 0px 50px; border-spacing: 40px;">
  <!-- Baris 1 -->
  <tr>
    <!-- Kolom kiri: Gambar utama -->
    <td style="vertical-align: top; width: 300px;">
      <img src=" https://tse1.mm.bing.net/th?id=OIP.R-5qNOHotvBUD3EF4UwrrQHaEK&pid=Api&P=0&h=220" 
             alt="gambar utama" width="300" height="200" style="object-fit: cover;">
    </td>

    <!-- Kolom kanan: Penjelasan -->
    <td style="vertical-align: top; text-align: justify; ">
      <p>
        Pantai Tanjung Siambang Dompak, pantai yang berada di Pusat Ibu Kota Provinsi Kepri, Tanjungpinang. Karena lokasinya yang strategis tepat berada di tengah kota, tak heran eksotisme pemandangan Pantai Tanjung Siambang ini selalu menggoda dan membuat wisatawan ramai mengunjunginya, terutama di sore hari.  Pengunjung yang datang ke pantai ini akan dimanjakan dengan pasir putihnya yang membentang berpadu dengan nuansa cantik deretan pohon kelapa yang tumbuh tinggi di sepanjang pantai.
      </p>
    </td>
  </tr>

  <!-- Baris 2 -->
  <tr>
    <!-- Kolom kiri: Informasi tambahan dan lokasi -->
    <td style="vertical-align: top;">
      <p><strong>Informasi Tambahan :</strong><br>
        Harga Tiket Masuk : Gratis<br>
        Jam Buka : 24 jam
      </p>
     <p style="margin-top: 20px;">
  <strong>Lokasi:</strong><br>
  <a href="https://maps.app.goo.gl/FLJEFoDpyuYhQK13A" target="_blank" style="color: #018175; text-decoration: none;">
    Pulau Dompak, Kec. Bukit Bestari, Kota Tanjung Pinang, Kepulauan Riau
  </a>
</p>
    <div class="kembali">
      <a data-page="wisata"><< Kembali</a>
    </div> 
    </td>

    <!-- Kolom kanan: Dua gambar kecil rata kanan -->
    <td style="vertical-align: top;">
      <div style="display: flex; justify-content: flex-end; gap: 20px;">
        <img src=" https://tse3.mm.bing.net/th?id=OIP.JJzmq0q8PMznXmWvMhHkNQHaEK&pid=Api&P=0&h=220 " 
             alt="gambar 1" width="250" height="200" style="object-fit: cover;">
        <img src=" https://tse3.mm.bing.net/th?id=OIP.a3Rcc-GVFw_iIW7gfic8PgHaEH&pid=Api&P=0&h=220 " 
             alt="gambar 2" width="250" height="200" style="object-fit: cover;">
             
      </div>
    </td>
  </tr>
</table>
    `,


    "kepri-coral": 
    
`<h2 style="margin-top: 40px; padding: 0px 100px;">Kepri Coral</h2>
<table style="width: 100%; padding: 0px 50px; border-spacing: 40px;">
  <!-- Baris 1 -->
  <tr>
    <!-- Kolom kiri: Gambar utama -->
    <td style="vertical-align: top; width: 300px;">
      <img src="https://tse4.mm.bing.net/th?id=OIP.ed69jVPnGhGhzark_uNb5wHaFj&pid=Api&P=0&h=220" 
             alt="gambar utama" width="300" height="200" style="object-fit: cover;">
    </td>

    <!-- Kolom kanan: Penjelasan -->
    <td style="vertical-align: top; text-align: justify; ">
      <p>
        Kepri Coral Resort Batam menawarkan sensasi wisata yang berbeda karena bisa berpetualang sekaligus relaksasi dengan air jernih dan keindahan alami. Tempat tersebut cocok untuk pecinta alam dan penggemar aktivitas luar ruangan. Kesempurnaan bawah laut yang dimiliki Kepri Coral menjadi daya tarik yang diburu oleh banyak wisatawan sehingga selalu ramai didatangi. Terdapat juga berbagai fasilitas memuaskan yang membuat pengunjung betah berlama-lama di sana.
      </p>
    </td>
  </tr>

  <!-- Baris 2 -->
  <tr>
    <!-- Kolom kiri: Informasi tambahan dan lokasi -->
    <td style="vertical-align: top;">
      <p><strong>Informasi Tambahan :</strong><br>
        Harga Tiket Masuk : Gratis<br>
        Jam Buka : 07.00 - 22.00 wib
      </p>
      <p style="margin-top: 20px;">
  <strong>Lokasi:</strong><br>
  <a href="https://maps.app.goo.gl/1pVtadGgNH5hXJwS6" target="_blank" style="color: #018175; text-decoration: none;">
    Pulau Galang, Kota Batam, Kepulauan Riau 29464
  </a>
</p>
    <div class="kembali">
      <a data-page="wisata"><< Kembali</a>
    </div> 
    </td>

    <!-- Kolom kanan: Dua gambar kecil rata kanan -->
    <td style="vertical-align: top;">
      <div style="display: flex; justify-content: flex-end; gap: 20px;">
        <img src="https://tse2.mm.bing.net/th?id=OIP.20tTcDi76iVi59lWxOXrNAHaE7&pid=Api&P=0&h=220" 
             alt="gambar 1" width="250" height="200" style="object-fit: cover;">
        <img src="https://tse1.mm.bing.net/th?id=OIP.QqawtOBWt9gSirpJxgYrQQHaE2&pid=Api&P=0&h=220" 
             alt="gambar 2" width="250" height="200" style="object-fit: cover;">
             
      </div>
    </td>
  </tr>
</table>
    `,


    "trans-studio-garden": 

    `<h2 style="margin-top: 40px; padding: 0px 100px;">Trans studio Garden </h2>
<table style="width: 100%; padding: 0px 50px; border-spacing: 40px;">
  <!-- Baris 1 -->
  <tr>
    <!-- Kolom kiri: Gambar utama -->
    <td style="vertical-align: top; width: 300px;">
      <img src="https://tse1.mm.bing.net/th?id=OIP.49NgUZlUmC9UZm6N8Ip-1gHaFj&pid=Api&P=0&h=220" 
             alt="gambar utama" width="300" height="200" style="object-fit: cover;">
    </td>

    <!-- Kolom kanan: Penjelasan -->
    <td style="vertical-align: top; text-align: justify; ">
      <p>
        Trans Studio Tanjung Pinang memiliki luas mencapai 1,7 hektar. Kini setelah hampir 1 tahun, pembangunan sudah hampir 100%.  TSG merupakan taman bermain yang berkonsep kebun. Taman dengan berbagai bunga dan tanaman yang cantik menjadi sesuatu yang ditonjolkan disini.  Ada wahana outbound bagi yang suka berkegiatan di luar ruang. Beberapa fasilitas yang tersedia antara lain net climbing, flying fox, sky climbing, net bridge, tire bridge, bamboo balance dan juga hanging bridge.
      </p>
    </td>
  </tr>

  <!-- Baris 2 -->
  <tr>
    <!-- Kolom kiri: Informasi tambahan dan lokasi -->
    <td style="vertical-align: top;">
      <p><strong>Informasi Tambahan :</strong><br>
        Harga Tiket Masuk : 15.000-25.000/org<br>
        Jam Buka : 12.00-21.00 wib
      </p>
      <p style="margin-top: 20px;">
  <strong>Lokasi:</strong><br>
  <a href="https://maps.app.goo.gl/5tMn2Mcar7PQ4Avm9" target="_blank" style="color: #018175; text-decoration: none;">
    Jl. Adi Sucipto, Batu IX, Kec. Tanjungpinang Tim., Kota Tanjung Pinang, Kepulauan Riau 29125
  </a>
</p>
<div class="kembali">
      <a data-page="wisata"><< Kembali</a>
    </div> 
    </td>

    <!-- Kolom kanan: Dua gambar kecil rata kanan -->
    <td style="vertical-align: top;">
      <div style="display: flex; justify-content: flex-end; gap: 20px;">
        <img src=" https://tse2.mm.bing.net/th?id=OIP.aKLZ3XaAzcfI9vC3wa7-GAHaFj&pid=Api&P=0&h=220 " 
             alt="gambar 1" width="250" height="200" style="object-fit: cover;">
        <img src=" https://tse1.mm.bing.net/th?id=OIP.veXOIe53WhHCzQOUJtxt2wHaEJ&pid=Api&P=0&h=220 " 
             alt="gambar 2" width="250" height="200" style="object-fit: cover;">       
      </div>
    </td>
  </tr>
</table>
    `,


    "treasure-bay-bintan": 
    
`<h2 style="margin-top: 40px; padding: 0px 100px;">Treasure Bay Bintan</h2>
<table style="width: 100%; padding: 0px 50px; border-spacing: 40px;">
  <!-- Baris 1 -->
  <tr>
    <!-- Kolom kiri: Gambar utama -->
    <td style="vertical-align: top; width: 300px;">
      <img src="https://tse4.mm.bing.net/th?id=OIP.zmqdOCjp-rmJk8XX2aCPLgHaFj&pid=Api&P=0&h=220" 
             alt="gambar utama" width="300" height="200" style="object-fit: cover;">
    </td>

    <!-- Kolom kanan: Penjelasan -->
    <td style="vertical-align: top; text-align: justify; ">
      <p>
        Treasure Bay Bintan kawasan wisata yang menempati area tepi pantai dengan luas setidaknya 300 hektar. Salah satu yang unik dari objek wisata ini yaitu kolam renang air asinnya yang terbesar di Asia Tenggara. Menyandang gelar tersebut, tentu objek wisata ini begitu indah dengan berbagai fasilitas kelas dunia. Objek wisata ini menyediakan berbagai fasilitas olahraga air yang menyenangkan. Berbagai wahana yang menyenangkan pun tersedia bagi wisatawan. Selain aktivitas di kolam, ada juga aktivitas alam lain yang patut dicoba. Selain itu di sini juga tersedia penginapan berupa villa dan penginapan yang berdiri di dalam lokasi wisata.
      </p>
    </td>
  </tr>

  <!-- Baris 2 -->
  <tr>
    <!-- Kolom kiri: Informasi tambahan dan lokasi -->
    <td style="vertical-align: top;">
      <p><strong>Informasi Tambahan :</strong><br>
        Harga Tiket Masuk : 40.000-1.800,000/org<br>
        Jam Buka : 09.00-21.00 wib
      </p>
     <p style="margin-top: 20px;">
  <strong>Lokasi:</strong><br>
  <a href="https://maps.app.goo.gl/j4siXG4xdUuxy17s6" target="_blank" style="color: #018175; text-decoration: none;">
    Kawasan Pariwisata, Jl. Raja H. No.KM 01, Sebong Lagoi, Kec. Tlk. Sebong, Kabupaten Bintan, Kepulauan Riau 291554
  </a>
</p>
<div class="kembali">
      <a data-page="wisata"><< Kembali</a>
    </div> 
    </td>

    <!-- Kolom kanan: Dua gambar kecil rata kanan -->
    <td style="vertical-align: top;">
      <div style="display: flex; justify-content: flex-end; gap: 20px;">
        <img src=" https://tse1.mm.bing.net/th?id=OIP.V-V8wvyGZ-MpwCzvGlOISQHaEO&pid=Api&P=0&h=220 " 
             alt="gambar 1" width="250" height="200" style="object-fit: cover;">
        <img src="https://tse3.mm.bing.net/th?id=OIP.X35hFv54WFu17evacgM-1QHaFj&pid=Api&P=0&h=220" 
             alt="gambar 2" width="250" height="200" style="object-fit: cover;">
             
      </div>
    </td>
  </tr>
</table>
    `,


    "pantai-batu-berdaun":
`<h2 style="margin-top: 40px; padding: 0px 100px;">Pantai Batu Berdaun</h2>
<table style="width: 100%; padding: 0px 50px; border-spacing: 40px;">
  <!-- Baris 1 -->
  <tr>
    <!-- Kolom kiri: Gambar utama -->
    <td style="vertical-align: top; width: 300px;">
      <img src="https://tse4.mm.bing.net/th?id=OIP.TOJ3t9a_O39v_0-rYtmxewHaFj&pid=Api&P=0&h=220" 
             alt="gambar utama" width="300" height="200" style="object-fit: cover;">
    </td>

    <!-- Kolom kanan: Penjelasan -->
    <td style="vertical-align: top; text-align: justify; ">
      <p>
        Pantai Batu Bedaun menawarkan pemandangan laut yang indah dan kombinasi pantai yang apik. Wisatawan akan disambut oleh hamparan laut biru yang mempesona. Ombaknya sepertinya bergulung, tapi tidak terlalu tinggi. Riak-riak putih juga menghiasi keindahan kawasan laut tersebut. Air laut langsung masuk di tanah berpasir. Pasir pantai di sini berwarna putih dan areanya cukup luas untuk bermain. 
      </p>
    </td>
  </tr>

  <!-- Baris 2 -->
  <tr>
    <!-- Kolom kiri: Informasi tambahan dan lokasi -->
    <td style="vertical-align: top;">
      <p><strong>Informasi Tambahan :</strong><br>
        Harga Tiket Masuk : Gratis<br>
        Jam Buka : 24 jam
      </p>
      <p style="margin-top: 20px;">
  <strong>Lokasi:</strong><br>
  <a href="https://maps.app.goo.gl/tswsrNeDavWzCRGe6" target="_blank" style="color: #018175; text-decoration: none;">
    Batu Berdaun, Kec. Singkep, Kabupaten Lingga, Kepulauan Riau 29871
  </a>
</p>
<div class="kembali">
      <a data-page="wisata"><< Kembali</a>
    </div> 
    </td>

    <!-- Kolom kanan: Dua gambar kecil rata kanan -->
    <td style="vertical-align: top;">
      <div style="display: flex; justify-content: flex-end; gap: 20px;">
        <img src="https://tse4.mm.bing.net/th?id=OIP.ij37Vaxow-7tc4HJp3hfCgHaEK&pid=Api&P=0&h=220" 
             alt="gambar 1" width="250" height="200" style="object-fit: cover;">
        <img src="https://tse2.mm.bing.net/th?id=OIP.qrrqOhzyq9gHblke_btsVwHaEK&pid=Api&P=0&h=220" 
             alt="gambar 2" width="250" height="200" style="object-fit: cover;">
             
      </div>
    </td>
  </tr>
</table>
    `
  };