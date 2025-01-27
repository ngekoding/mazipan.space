---
title: Membuat pull request yang ciamik
date: '2020-10-31'
excerpt: Bagaimana sih cara-cara membuat pull request yang sedap dipandang mata?
author: mazipan
published: true
featured: false
tags: [open-source]
coverImage: /thumbnail/membuat-pull-request-ciamik/you-shall-not-merge.png
lang: id
enready: false
---

Membuat pull request seharusnya menjadi pengetahuan dasar ketika kita bekerja dengan berkolaborasi bersama pengembang lain. Sayangnya bahkan buat pengembang yang sudah malang melintang pun tidak jarang membuat pull request seadanya, termasuk juga saya yang menjadi pelakunya. Jadi mari kita belajar bersama-sama mengenai bagaimana membuat pull request yang ciamik.

## Mengenai pull request

Github sudah menjelaskan mengenai [apa itu pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests) bahkan sudah mewanti-wanti beberapa poin yang seharusnya jadi perhatian kita bersama. Pull request memberikan kita kesempatan untuk memberitahukan kepada pengembang lain mengenai perubahan yang telah kita kerjakan di branch tertentu pada suatu repository. Sekali membuka pull request, maka kita bisa membuka diskusi pula mengenai perubahan-perubahan yang ada dengan para kolaborator, menjelaskan setiap commit atau perubahan yang dibuat, mengerjakan perubahan yang diminta atau disarankan, sebelum akhirnya nanti semua perubahan tersebut diterima dan digabungkan ke branch utama yang digunakan.

Sebelum membahas lebih jauh, saya akan coba mengupas alur kerja yang biasa digunakan oleh para pengembang dalam berkolaborasi, berikut garis besarnya:

## Alur kolaborasi umum dalam satu repository

Pada pekerjaan privat biasanya tidak diperlukan [metode fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo#fork-an-example-repository), sehingga caranya cukup dengan memberikan akses untuk seseorang langsung ke repository terkait. Ini berarti semua pengembang akan bekerja di satu repository yang sama.

Cara umum untuk berkolaborasi dalam kondisi satu repository begini biasanya:

👉  **Buat branch baru dari branch utama**, umumnya setiap perusahaan sudah punya konvensi atau aturan tersendiri dalam penamaan branch baru

👉  **Bekerja di dalam branch baru yang dibuat**

👉  **Sinkronisasi secara berkala**, apabila pekerjaan akan memakan waktu yang cukup lama sampai berhari-hari, ada baiknya untuk mengecek secara berkala dengan branch utama

👉  **Setelah selesai, buat pull request ke branch utama**, ini dilakukan tentu setelah kalian selesai melakukan serangkaian pengujian, baik di lokal kalian ataupun di lingkungan development lainnya.

👉  **Meminta review kode kepada teman sejawat**

👉  **Memperbaiki kode berdasarkan review yang ada**

👉  **Diterima atau ditolak untuk masuk ke branch utama**

## Alur kolaborasi dalam repository hasil fork

Caranya sebenarnya secara garis besar akan sama saja, hanya saja karena dalam versi fork kita tidak mempunyai akses langsung ke repository utama, melainkan hanya repository salinan dari aslinya. Ini yang menjadikan kita bisa saja langsung melakukan perubahan di branch utama, karena repository fork pada dasarnya adalah milik pribadi, kita bisa langsung menyasar ke branch utama tanpa perlu takut diteriaki oleh orang lain.

## Kriteria pull request yang ciamik

Ciamik menurut saya bisa berbeda dengan ciamik yang kalian anut, dan berikut adalah pull request yang ciamik versi saya pribadi:

**1. Memiliki judul yang jelas, singkat dan menggambarkan perubahan yang dibuat**

Judul pull request merupakan kesan pertama yang akan didapatkan oleh orang lain ketika mendapatkan notifikasi maupun lewat daftar pull request,
judul menjadi krusial karena merupakan pembeda, penanda dan gerbang awal untuk pemrogram lain mengerti konteks umum dari perubahan yang kalian buat.

Beberapa perusahaan umumnya juga memiliki konvensi atau aturan bagi pembuatan judul pull request.
Misalnya saja konvensi yang umum mengadopsi dari standard Commitizen juga, contohnya:

👉  `feat: menambahkan fitur share ke sosial media`

👉  `chore: menambahkan linter`

👉  `fix: memperbaiki tampilan header`

Namun bilapun belum ada konvensinya, tetap saja membuat judul yang baik adalah salah satu ciri pull request yang baik.

**2. Memberikan penjelasan yang gamblang mengenai perubahan yang dibuat**

Ini merupakan bagian yang paling penting namun sering sekali ditinggalkan, bahkan di kalangan pemrogram yang sudah pro saja seringkali membuat pull request tanpa ada deskripsi sama sekali.
Sepertinya asal buka pull request dan berharap orang lain bisa mengerti.
Kenapa ini penting? Ini merupakan tempat bagi kita untuk memberitahukan konteks dari perubahan yang kita buat, dampak apa yang terjadi dari perubahan tersebut, serta bagian-bagian yang kemungkinan harus dicek lebih teliti karena berpotensi menimbulkan bug.

Salah satu tips dari saya pribadi, coba posisikan diri kalian sebagai orang yang melakukan review pull request tersebut.
Pastikan mereka bisa melakukan review dengan tepat. Dengan memberikan penjelasan segamblang mungkin kita bisa mengarahkan si reviewer untuk bisa langsung tertuju ke sasaran yang seharusnya.

Mereview kode dalam pull request itu bukan pekerjaan mudah, apalagi bila kita tidak paham mengenai konteks bisnis flow yang dikerjakan.
Dengan adanya penjelasan yang baik, pekerjaan mereview biasanya akan lebih mudah dan terarah.

Beberapa hal yang paling tidak mestinya ada di deskripsi pull request antara lain:

👉  Kesimpulan atau _summary_ dari pull request

👉  Perubahan-perubahan penting yang perlu diperhatikan, misal saja menambahkan kalimat: saya mengubah kode di file A menjadi begini dengan tujuan begitu.

👉  Cara atau langkah melakukan pengujian, bisa berupa langkah detail ataupun cukup alamat dimana orang lain bisa melihat dan mengecek perubahannya.

**3. Menyertakan informasi pendukung**

Informasi ini adalah yang diharapkan mampu mendukung penjelasan kita di deskripsi, bisa macam-macam, diantaranya:

👉  Nomor issue atau tiket, bila memang terkait dengan suatu issue atau tiket

👉  Kondisi sebelum serta kondisi yang diharapkan setelah perubahan atau perbaikan, bisa berupa gambar atau cukup dengan kalimat saja

👉  Tautan ke dokumen pendukung, misal PRD, API spesifikasi, design mockup, test report, dan lain sebagainya

**4. Tidak membawa perubahan yang tidak relevan**

Fokus ke tujuan utama membuka pull request, jangan menambahkan perubahan yang tidak relevan dengan tujuan awal.
Kalau ada yang perlu ditambahkan namun tidak relevan, maka sebaiknya buka pull request lain saja.
Misalnya saya membuka pull request untuk memperbaiki style pada header, maka pastikan perubahannya juga hanya di bagian ini.
Jangan menambahkan perubahan lain, misal ikut mengubah style untuk product card.
Ini mengakibatkan orang jadi tidak fokus melakukan pengujian dan review, alhasil bisa saja perubahan yang kalian ikutkan terlewat untuk dilakukan pengujian terlebih dahulu.

**5. Memiliki riwayat commit yang mudah ditelusuri**

Commit history yang acak-acakan juga bisa menimbulkan gangguan bagi si reviewer, memperbaiki history sebelum pull request dibuka bisa jadi solusi kalau kalian memang hobi bikin commit asal-asalan sebelum siap di bukakan pull request.

## Kebiasaan yang bisa meningkatkan kualitas pull request

👉  Judul pull request umumnya secara otomatis akan mengambil dari judul commit yang pertama dari suatu branch.
Karenanya membuat judul commit yang sesuai akan mempermudah kita membuat judul pull request pula.

👉  Biasakan membuat pull request saat sudah yakin, sudah dilakukan test sana-sini, sudah dibuatkan unit test, dan lainnya.

Ini untuk mengurangi terlalu banyak perubahan yang mestinya tidak diperlukan saat pull request sudah dibuka.
Terlalu banyak menambahkan commit baru saat pull request sudah dibuka seringkali juga akan menggangu proses diskusi pada pull request tersebut.

👉  Bila bekerja sendirian, kita memperbaiki commit history sebelum pull request dibuka

👉  Biasakan menulis dokumentasi, ini akan melatih kita membuat deskripsi pull request juga

👉  Sempatkan untuk melakukan review pull request orang lain, agar lebih bisa merasakan kenapa pull request dengan deskripsi yang jelas itu penting

Demikian artikel ini, semoga bermanfaat 🙏
