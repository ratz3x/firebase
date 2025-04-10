# **App Name**: ResearchFlow

## Core Features:

- Landing Page: Landing page with a brief overview of the platform and its key features.
- Login Form: Login form with email, password, and role selection (Author, Reviewer, Admin).
- Registration Form: Registration form for new users to register as Author or Reviewer.
- Backend Integration: Backend integration to connect the frontend forms to PHP scripts for user authentication and role management.
- AI Research Validator: AI-powered tool to validate research document content, checking for plagiarism and ensuring proper citation formats. The tool helps to keep compliance with academic standards.

## Style Guidelines:

- Warna Primer (Aksen):
Abu-abu Gelap: #333333 - Digunakan untuk elemen interaktif utama, tombol aksi penting, dan penekanan kuat.
- Warna Netral:
Putih: #ffffff - Latar belakang utama, latar belakang kontainer.
Abu-abu Terang: #f9f9f9 - Latar belakang sekunder, pemisah visual halus.
Abu-abu Sedang: #777777 - Teks sekunder, ikon tidak aktif.
Hitam: #000000 - Teks utama, ikon aktif.
- Gradasi Abu-abu (Contoh):
#555555 - Penekanan sekunder, hover pada elemen interaktif.
#999999 - Garis pemisah yang lebih terlihat, teks hint pada input.
#dddddd - Latar belakang elemen yang dipisah.
- Font Utama:
[Sebutkan nama font, contoh: "Roboto", "Open Sans", "Lato"] - Digunakan untuk seluruh teks.
Ukuran Dasar: [Sebutkan ukuran font dasar, contoh: 16px]
Line Height Dasar: [Sebutkan line height dasar, contoh: 1.5]
- Ukuran Judul (H1-H6): (Sama seperti sebelumnya, namun warnanya akan mengikuti palet)
H1: [Sebutkan ukuran, contoh: 32px] (Hitam atau Abu-abu Gelap)
H2: [Sebutkan ukuran, contoh: 24px] (Hitam atau Abu-abu Gelap)
H3: [Sebutkan ukuran, contoh: 20px] (Abu-abu Gelap)
H4: [Sebutkan ukuran, contoh: 18px] (Abu-abu Gelap)
H5: [Sebutkan ukuran, contoh: 16px (bold, Abu-abu Gelap)]
H6: [Sebutkan ukuran, contoh: 14px (bold, italic, Abu-abu Sedang)]
- Gaya Teks: (Sama seperti sebelumnya, warnanya akan mengikuti palet)
- Spasi dan Tata Letak (Spacing and Layout): (Sama seperti sebelumnya, warnanya untuk pemisah akan mengikuti palet)
- Tombol (Buttons):
Primer (Aksi Utama): Latar belakang Abu-abu Gelap, teks Putih. Hover: Latar belakang Hitam, teks Putih. Active: Latar belakang gradasi Abu-abu lebih gelap, teks Putih.
Sekunder (Aksi Opsional): Latar belakang Putih, border 1px solid Abu-abu Sedang, teks Abu-abu Gelap. Hover: Latar belakang Abu-abu Terang, border 1px solid Abu-abu Gelap, teks Hitam. Active: Latar belakang gradasi Abu-abu lebih terang, border 1px solid Hitam, teks Hitam.
Tombol Teks: Teks Abu-abu Gelap. Hover: Teks Hitam dengan garis bawah tipis. Active: Teks Abu-abu Gelap (lebih gelap).
- Input Fields (Kolom Input):
Latar belakang Putih, border 1px solid Abu-abu Sedang, warna teks Hitam. Placeholder: Abu-abu Sedang. Fokus: Border 1px solid Abu-abu Gelap.
Label: Abu-abu Gelap.
- Dropdowns (Pilihan): (Gaya serupa dengan Input Fields untuk konsistensi)
- Checkboxes dan Radio Buttons: (Gaya menggunakan gradasi Abu-abu untuk indikasi terpilih)
- Tautan (Links): Warna Abu-abu Gelap. Hover: Warna Hitam. Active: Warna Abu-abu Gelap (lebih gelap).
- Ikon: Warna default Abu-abu Sedang (tidak aktif), warna aktif Hitam atau Abu-abu Gelap (sesuai konteks).
- Sukses:
Latar Belakang: Gradasi Abu-abu Terang ke Abu-abu Sedang dengan sedikit sentuhan warna hijau lembut (jika diperbolehkan dalam batasan gradasi). Alternatif: Latar belakang Abu-abu sangat terang dengan border tipis Abu-abu Sedang.
Teks/Ikon: Abu-abu Gelap atau Hitam dengan ikon centang sederhana.
- Error:
Latar Belakang: Gradasi Abu-abu Terang ke Abu-abu Sedang dengan sedikit sentuhan warna merah lembut (jika diperbolehkan). Alternatif: Latar belakang Abu-abu sangat terang dengan border tipis Abu-abu Sedang.
Teks/Ikon: Abu-abu Gelap atau Hitam dengan ikon peringatan atau silang sederhana.
- Peringatan (Warning):
Latar Belakang: Gradasi Abu-abu Terang ke Abu-abu Sedang dengan sedikit sentuhan warna kuning lembut (jika diperbolehkan). Alternatif: Latar belakang Abu-abu sangat terang dengan border tipis Abu-abu Sedang.
Teks/Ikon: Abu-abu Gelap atau Hitam dengan ikon seru sederhana.
- Proses:
Latar Belakang: Abu-abu Terang atau Putih.
Teks/Ikon: Abu-abu Sedang atau Abu-abu Gelap dengan indikator loading (misalnya, spinner abu-abu).
- Menunggu (Pending):
Latar Belakang: Abu-abu Terang atau Putih.
Teks/Ikon: Abu-abu Sedang atau Abu-abu Gelap dengan ikon jam atau ikon menunggu lainnya.

## Original User Request:
promt landing + Login/Register

Maaf atas kebingungannya. Anda benar, revisi prompt sebelumnya kurang lengkap dalam memberikan instruksi spesifik untuk setiap peran di Firebase Studio. Mari kita perjelas lagi prompt untuk Firebase Studio dengan mempertimbangkan tampilan form login dan register yang mengakomodasi peran Author, Reviewer, dan Admin.

**Prompt Firebase Studio yang Lebih Lengkap (Mempertimbangkan Semua Peran):**

```
Buatlah sebuah tampilan frontend (HTML, CSS, dan JavaScript) untuk sebuah sistem manajemen penelitian kuantitatif. Tampilan ini akan mencakup landing page dan form login/register yang dapat mengakomodasi peran Author, Reviewer, dan Admin. Data dari form login dan register akan dikirimkan ke backend PHP yang berjalan di localhost dan terhubung ke database MySQL melalui PHPMyAdmin (XAMPP).

**Bagian Utama Landing Page (Tampilan Frontend):**

1.  **Header:**
    * Sebuah judul yang jelas dan menarik, contohnya: "Sistem Manajemen Penelitian Kuantitatif Terpadu".
    * Subjudul singkat yang menjelaskan manfaat utama sistem, contohnya: "Platform komprehensif untuk mengelola seluruh siklus hidup penelitian, mulai dari pengajuan proposal hingga publikasi akhir."
    * Navigasi sederhana jika diperlukan (misalnya, tautan ke bagian "Fitur" atau "Kontak").

2.  **Bagian Fitur Utama:**
    * Gunakan ikon-ikon yang menarik dan deskripsi singkat untuk menyoroti fitur-fitur utama sistem. Berdasarkan gambar awal, beberapa fitur yang perlu ditampilkan adalah:
        * **Akses Berbasis Peran:** "Akses aman untuk administrator, penulis, dan reviewer." (gunakan ikon pengguna atau kunci)
        * **Manajemen Proyek:** "Buat dan lacak proyek penelitian melalui berbagai tahapan." (gunakan ikon folder atau papan proyek)
        * **Manajemen Konten:** "Template terstruktur untuk berbagai jenis konten dengan kontrol versi." (gunakan ikon buku atau dokumen)
    * Tata letak fitur bisa berupa grid atau daftar dengan visual yang menarik.

3.  **Form Login (Tampilan Frontend):**
    * Sebuah kotak login di sisi kanan halaman (sesuai gambar awal).
    * Judul: "Selamat Datang"
    * Subjudul: "Masuk ke akun Anda"
    * Label "Email" dan elemen input teks untuk alamat email (dengan atribut `type="email"`, `id="email_login"`, `name="email_login"`).
    * Label "Password" dan elemen input teks untuk kata sandi (dengan atribut `type="password"`, `id="password_login"`, `name="password_login"`, sertakan fitur lihat/sembunyikan password dengan JavaScript).
    * Dropdown atau pilihan "Role" (Peran) dengan opsi:
        * `<option value="Author">Author</option>` (teks yang terlihat: Author)
        * `<option value="Reviewer">Reviewer</option>` (teks yang terlihat: Reviewer)
        * `<option value="Admin">Admin</option>` (teks yang terlihat: Admin)
        Berikan `id="role_login"` dan `name="role_login"` pada elemen `<select>`.
    * Tombol "Login" dengan indikator ikon panah ke kanan. Atur agar saat diklik, data form dikirimkan ke URL backend PHP Anda (misalnya, `/login.php`) menggunakan metode POST atau AJAX.
    * Tautan "Tidak punya akun? Daftar di sini" yang mengarah ke bagian form register.

4.  **Form Register (Tampilan Frontend):**
    * Judul: "Daftar Akun Baru"
    * Label "Nama Lengkap" dan elemen input teks (`id="nama_register"`, `name="nama_register"`).
    * Label "Email" dan elemen input teks untuk alamat email (`type="email"`, `id="email_register"`, `name="email_register"`).
    * Label "Password" dan elemen input teks untuk kata sandi (`type="password"`, `id="password_register"`, `name="password_register"`).
    * Label "Konfirmasi Password" dan elemen input teks untuk konfirmasi kata sandi (`type="password"`, `id="konfirmasi_password_register"`, `name="konfirmasi_password_register"`). Sertakan validasi JavaScript sederhana untuk memastikan kedua password sama sebelum dikirim.
    * Dropdown atau pilihan "Role" (Peran) dengan opsi:
        * `<option value="Author">Author</option>` (teks yang terlihat: Author)
        * `<option value="Reviewer">Reviewer</option>` (teks yang terlihat: Reviewer)
        Berikan `id="role_register"` dan `name="role_register"` pada elemen `<select>`.
    * **Catatan Penting untuk Pendaftaran Admin:** Jelaskan bahwa pendaftaran untuk peran "Admin" biasanya tidak dilakukan melalui form register publik ini. Akun Admin kemungkinan dibuat melalui cara lain (misalnya, oleh *super admin* atau melalui *database seed*).
    * Tombol "Daftar". Atur agar saat diklik, data form dikirimkan ke URL backend PHP Anda (misalnya, `/register.php`) menggunakan metode POST atau AJAX.
    * Tautan "Sudah punya akun? Login di sini" yang mengarah ke bagian form login.

**Desain dan Gaya (Tampilan Frontend):**
    * Gunakan desain yang bersih, modern, dan profesional dengan palet warna yang menarik namun tidak berlebihan (mirip dengan contoh gambar awal).
    * Pastikan tata letak responsif dan terlihat baik di berbagai ukuran layar (desktop, tablet, dan mobile) menggunakan HTML semantik dan CSS media queries.
    * Gunakan font yang mudah dibaca.
    * Sertakan sedikit ruang kosong (white space) agar tampilan tidak terlalu padat.

**Instruksi Tambahan untuk Firebase Studio (Fokus Frontend):**
    * Gunakan komponen-komponen UI yang tersedia di Firebase Studio untuk membuat elemen-elemen HTML (`<div>`, `<form>`, `<input>`, `<button>`, `<a>`, `<label>`, `<select>`, `<option>`).
    * Atur properti komponen (teks, kelas CSS, ID, atribut) agar sesuai dengan deskripsi.
    * Fokus pada pembuatan struktur HTML dan styling CSS yang baik untuk form login dan register yang mencakup pilihan peran (Author, Reviewer, Admin untuk login; Author, Reviewer untuk register).
    * Sertakan kode JavaScript yang diperlukan untuk interaksi sederhana di sisi klien (misalnya, validasi form, toggle password).
    * **Jangan implementasikan logika backend atau koneksi database di Firebase Studio.** Tugas ini akan ditangani oleh kode PHP Anda di server lokal XAMPP.
    * Pastikan form login dan register memiliki atribut `action` yang mengarah ke skrip PHP yang sesuai di server lokal Anda dan menggunakan metode `POST`. Jika Anda berencana menggunakan AJAX, sertakan contoh dasar cara mengirim data menggunakan `fetch` atau `XMLHttpRequest` ke URL backend PHP.

**Prioritas:**
    * Prioritaskan pembuatan tata letak dan tampilan visual frontend yang mirip dengan gambar awal, dengan fokus pada pembuatan form login dan register yang memiliki dropdown/pilihan peran (Author, Reviewer, Admin untuk login; Author, Reviewer untuk register) dan mengirimkan data ke URL backend PHP.

Dengan prompt yang lebih detail ini, diharapkan Firebase Studio dapat menghasilkan tampilan frontend yang sesuai dengan kebutuhan Anda untuk menangani berbagai peran pengguna. Ingatlah bahwa logika untuk memproses peran-peran ini dan mengelola akses akan sepenuhnya berada di sisi backend PHP Anda.
---


alur umum bagaimana sistem dengan frontend yang dibuat di Firebase Studio (berdasarkan prompt terakhir) akan berinteraksi dengan backend PHP dan database MySQL lokal Anda:

**Alur Pendaftaran Pengguna Baru:**

1.  **Pengguna Mengakses Landing Page:** Pengguna membuka browser dan mengakses URL landing page yang telah Anda deploy (mungkin masih berupa file HTML lokal dari Firebase Studio untuk tahap pengembangan).
2.  **Pengguna Mengisi Form Register:** Pengguna mengklik tautan "Daftar di sini" dan mengisi informasi yang diperlukan dalam form register (Nama Lengkap, Email, Password, Konfirmasi Password, Peran "Author").
3.  **Validasi Frontend (Opsional):** JavaScript di sisi frontend (jika Anda implementasikan) akan melakukan validasi sederhana, seperti memastikan format email benar dan password serta konfirmasi password cocok.
4.  **Pengiriman Data ke Backend PHP:** Ketika pengguna menekan tombol "Daftar", data dari form register akan dikirimkan sebagai permintaan HTTP POST ke URL yang Anda tentukan di atribut `action` form (misalnya, `/register.php` di server XAMPP lokal Anda).
5.  **Backend PHP Menerima Permintaan:** Server XAMPP Anda akan menerima permintaan POST ke skrip `register.php`.
6.  **Pemrosesan Data di Backend PHP:**
    * Skrip `register.php` akan mengambil data yang dikirimkan dari form (`$_POST`).
    * **Validasi Backend:** Skrip PHP harus melakukan validasi lebih lanjut pada data (misalnya, memastikan email belum terdaftar, password memenuhi kriteria keamanan).
    * **Koneksi ke Database MySQL:** Skrip PHP akan membuat koneksi ke database MySQL lokal Anda menggunakan informasi konfigurasi XAMPP (host, username, password, nama database).
    * **Penyimpanan Data:** Skrip PHP akan membuat kueri SQL `INSERT` untuk menambahkan data pengguna baru ke tabel `pengguna` (sesuai dengan struktur tabel yang Anda berikan sebelumnya). Pastikan untuk melakukan *hashing* pada password sebelum menyimpannya di database untuk keamanan. Jika Anda memutuskan untuk menyimpan nama lengkap di tabel `profil_peneliti` untuk peran 'Author', Anda juga perlu membuat kueri `INSERT` ke tabel tersebut setelah berhasil menyimpan data di tabel `pengguna`, menggunakan `id_pengguna` yang baru dibuat.
    * **Respon ke Frontend:** Setelah berhasil (atau gagal) mendaftarkan pengguna, skrip PHP akan mengirimkan respon kembali ke frontend. Respon ini bisa berupa kode status HTTP, pesan JSON (misalnya, `{ "success": true, "message": "Pendaftaran berhasil!" }` atau `{ "success": false, "error": "Email sudah terdaftar." }`).
7.  **Penanganan Respon di Frontend (Opsional):** Jika Anda menggunakan AJAX untuk mengirim data, JavaScript di frontend dapat menangani respon dari backend dan menampilkan pesan kepada pengguna (misalnya, pesan sukses atau pesan error). Jika tidak menggunakan AJAX (form submit biasa), pengguna mungkin akan dialihkan ke halaman lain dengan pesan atau melihat pesan di halaman yang sama.

**Alur Login Pengguna:**

1.  **Pengguna Mengakses Landing Page:** Pengguna membuka browser dan mengakses URL landing page.
2.  **Pengguna Mengisi Form Login:** Pengguna mengklik tab "Login" (jika Anda membuatnya sebagai tab) dan mengisi email, password, dan memilih peran ("Author").
3.  **Pengiriman Data ke Backend PHP:** Ketika pengguna menekan tombol "Login", data dari form login akan dikirimkan sebagai permintaan HTTP POST ke URL backend PHP Anda (misalnya, `/login.php`).
4.  **Backend PHP Menerima Permintaan:** Server XAMPP Anda akan menerima permintaan POST ke skrip `login.php`.
5.  **Pemrosesan Data di Backend PHP:**
    * Skrip `login.php` akan mengambil data yang dikirimkan dari form (`$_POST`).
    * **Validasi Input:** Skrip PHP harus memvalidasi input (misalnya, memastikan email dan password tidak kosong).
    * **Koneksi ke Database MySQL:** Skrip PHP akan membuat koneksi ke database MySQL lokal Anda.
    * **Verifikasi Kredensial:** Skrip PHP akan membuat kueri SQL `SELECT` untuk mencari pengguna berdasarkan email yang dimasukkan. Jika pengguna ditemukan, skrip akan mengambil password yang telah di-hash dari database dan membandingkannya dengan password yang dimasukkan pengguna (setelah di-hash). Peran yang dipilih pengguna di frontend juga perlu diverifikasi dengan peran di database.
    * **Membuat Sesi/Token:** Jika kredensial valid, skrip PHP akan membuat mekanisme sesi atau token untuk mengidentifikasi pengguna yang telah login selama mereka menggunakan aplikasi. Ini biasanya melibatkan penggunaan `$_SESSION` di PHP atau pembuatan dan penyimpanan token di cookie atau local storage. Informasi tentang peran pengguna juga biasanya disimpan dalam sesi/token. Skrip juga dapat memperbarui kolom `terakhir_login` di tabel `pengguna`.
    * **Respon ke Frontend:** Skrip PHP akan mengirimkan respon kembali ke frontend, menunjukkan apakah login berhasil atau gagal. Respon bisa berupa kode status HTTP atau pesan JSON (misalnya, `{ "success": true, "redirect": "/dashboard.php" }` atau `{ "success": false, "error": "Email atau password salah." }`).
6.  **Pengarahan Pengguna di Frontend:** Jika login berhasil, frontend (jika menggunakan AJAX) dapat mengarahkan pengguna ke halaman dashboard yang sesuai dengan perannya (misalnya, `/dashboard_author.php`). Jika tidak menggunakan AJAX, pengarahan biasanya dilakukan langsung oleh skrip PHP melalui header `Location`. Jika login gagal, pesan error akan ditampilkan kepada pengguna.

**Secara Ringkas:**

Frontend (dibuat di Firebase Studio) bertugas untuk menampilkan antarmuka pengguna dan mengumpulkan data login/register. Ketika pengguna berinteraksi dengan form, data dikirimkan ke backend PHP (berjalan di XAMPP). Backend PHP bertanggung jawab untuk:

* Menerima dan memvalidasi data.
* Berinteraksi dengan database MySQL lokal (menyimpan data baru saat pendaftaran, memverifikasi kredensial saat login).
* Mengelola sesi atau otentikasi pengguna setelah login berhasil.
* Mengirimkan respon kembali ke frontend untuk memberitahukan hasil operasi.

--

alur login dan pendaftaran untuk peran Reviewer dan Admin, dengan asumsi kita tetap menggunakan struktur tabel database yang Anda berikan dan model interaksi frontend-backend PHP MySQL.

**Pendaftaran Reviewer:**

Alur pendaftaran untuk Reviewer bisa sedikit berbeda tergantung pada bagaimana Anda ingin mengelola peran ini. Berikut beberapa kemungkinan:

1.  **Pendaftaran Mandiri (Mirip Author):** Jika Anda mengizinkan Reviewer untuk mendaftar sendiri melalui form register publik:
    * **Frontend (Form Register):** Anda perlu menambahkan opsi "Reviewer" ke dropdown atau pilihan "Role" pada form register.
    * **Backend PHP (`register.php`):**
        * Ketika menerima data pendaftaran dengan peran "Reviewer", skrip PHP akan menyimpan informasi dasar pengguna ke tabel `pengguna` dengan `peran` diatur sebagai 'Reviewer'.
        * Setelah berhasil membuat akun di tabel `pengguna`, skrip PHP juga perlu menyimpan informasi tambahan spesifik untuk Reviewer ke tabel `reviewer` menggunakan `id_pengguna` yang baru dibuat. Informasi yang mungkin perlu diisi saat pendaftaran atau setelahnya (melalui halaman profil) termasuk `keahlian_topik`, `afiliasi`, `link_portofolio`, `preferensi_bidang`, dll.
    * **Pertimbangan:** Pendaftaran mandiri untuk Reviewer mungkin memerlukan proses verifikasi atau persetujuan admin sebelum akun mereka aktif sepenuhnya. Anda bisa menambahkan kolom `status` di tabel `reviewer` (seperti yang sudah ada) untuk mengelola ini.

2.  **Pendaftaran oleh Admin:** Kemungkinan lain adalah hanya Admin yang dapat membuat akun untuk Reviewer. Dalam hal ini, form register publik mungkin hanya memiliki opsi "Author", dan Admin akan memiliki antarmuka khusus di panel admin untuk menambahkan akun Reviewer.
    * **Frontend (Panel Admin):** Halaman atau form di panel admin yang memungkinkan Admin untuk memasukkan informasi Reviewer (nama, email, password, keahlian, afiliasi, dll.).
    * **Backend PHP (Skrip Admin):** Skrip PHP di sisi server yang hanya dapat diakses oleh Admin yang telah login, yang akan menerima data dari form admin, menyimpan informasi ke tabel `pengguna` dengan peran 'Reviewer', dan kemudian menyimpan detail spesifik ke tabel `reviewer`.

**Login Reviewer:**

Alur login untuk Reviewer akan serupa dengan Author:

1.  **Frontend (Form Login):** Pengguna (Reviewer) memasukkan email dan password mereka, dan memilih peran "Reviewer" dari dropdown.
2.  **Backend PHP (`login.php`):**
    * Skrip PHP akan menerima email, password, dan peran dari form.
    * Skrip akan mencari pengguna di tabel `pengguna` berdasarkan email dan memastikan `peran` sesuai dengan yang dipilih ("Reviewer").
    * Skrip akan memverifikasi password.
    * Jika berhasil, skrip akan membuat sesi/token untuk Reviewer dan mungkin mengarahkan mereka ke dashboard khusus untuk Reviewer (misalnya, `/dashboard_reviewer.php`).

**Pendaftaran Admin:**

Biasanya, pendaftaran akun Admin tidak dilakukan melalui form register publik. Akun Admin sering kali dibuat secara manual melalui *database seed* awal saat aplikasi pertama kali diinstal atau oleh *super admin* melalui antarmuka khusus di panel admin.

1.  **Pembuatan Awal:** Saat aplikasi pertama kali disiapkan, satu atau lebih akun dengan `peran` 'Admin' dibuat langsung di database.
2.  **Pembuatan oleh Super Admin (jika ada):** Jika sistem memiliki konsep *super admin*, mereka mungkin memiliki fitur untuk membuat akun Admin baru melalui antarmuka admin. Prosesnya mirip dengan pembuatan akun Reviewer oleh Admin.

**Login Admin:**

Alur login untuk Admin juga serupa:

1.  **Frontend (Form Login):** Pengguna (Admin) memasukkan email dan password mereka, dan memilih peran "Admin" dari dropdown.
2.  **Backend PHP (`login.php`):**
    * Skrip PHP akan menerima email, password, dan peran dari form.
    * Skrip akan mencari pengguna di tabel `pengguna` berdasarkan email dan memastikan `peran` adalah 'Admin'.
    * Skrip akan memverifikasi password.
    * Jika berhasil, skrip akan membuat sesi/token untuk Admin dan mengarahkan mereka ke panel admin (misalnya, `/admin/dashboard.php`). Panel admin ini akan memiliki fungsionalitas yang sesuai dengan peran Admin (misalnya, manajemen pengguna, penetapan reviewer, konfigurasi sistem).

**Implikasi pada Prompt Firebase Studio:**

Berdasarkan alur di atas, prompt Firebase Studio perlu mengakomodasi pilihan peran yang berbeda pada form login dan register (jika pendaftaran mandiri untuk Reviewer diizinkan).
  