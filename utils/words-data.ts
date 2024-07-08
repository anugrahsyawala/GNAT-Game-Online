export type Words = string[][];

const targetWords: Words = [
    ["Pesangon", "Tunjangan", "Cuti", "PHK", "Kantor", "SDM", "Lamaran", "Karir", "Trainee", "Manajer"],
    ["Skripsi", "IPK", "Organisasi", "Mahasiswa", "Universitas", "Praktikum", "Dosen", "Semester", "SKS", "UKT", "Wisuda", "Sidang", "Ospek", "BEM", "Institut", "Makalah", "E-Learning", "Sarjana", "Bimbingan", "Kampus", "Kuis", "Jurusan", "Asdos", "Proposal", "KKN", "UKM", "Rektor", "Dekan", "Senat", "Kaprodi"],
    ["Gacha", "War", "GG", "Bot", "AFK", "Grinding", "NT", "Streak", "Damage", "Hacking", "Play to Win", "Free to Play"," Streaming", "Scoreboard", "Damage", "Looting", "Base", "Noob", "Pro", "Quest", "Lose Streak", "Feeder", "Ganking", "Squad", "Dark System", "Contest", "Lagging", "Skin", "Login", "Mining"],
    ["Gaji","Bos","Karyawan","Waktu","Atasan","CEO","Lembur","Perusahaan","Sekretaris","Bawahan", "HRD", "Manajemen", "Divisi", "Kantor", "Marketing", "Jabatan", "Direktur", "Meeting", "Shift", "Promosi", "Pesangon", "Tunjangan", "Cuti", "PHK", "Kantor", "SDM", "Lamaran", "Karir", "Trainee", "Manajer"],
    ["Geng","Pacar","Sahabat","Circle","Group","Peer","Bestie","Friendzone", "HTS", "Curhat", "Mantan", "Gebetan", "Crush", "Kenalan", "Partner", "Rekan", "Intim", "Mesra", "Komitmen", "Putus", "Dating", "LDR", "Toxic", "Couple", "Akrab", "Renggang", "Reuni", "Serasi", "Jodoh", "Pernikahan"],
    
]

const distractorWords: Words = [
    ["Jurnal","Fakultas","Almamater","Gacha","War","GG","Bot","Perceraian ","Soulmate","Chemistry"],
    ["Gaji","Stress","Bos","Karyawan","Waktu","Atasan","Penghasilan","Curriculum Vitae","CEO","AFK", "Grinding", "NT", "Streak", "Damage", "Hacking", "Play to Win", "Free to Play"," Streaming", "Scoreboard", "Damage", "Looting", "Geng", "Pacar", "Sahabat", "Circle","Group", "Peer", "Bestie"," Friendzone", "HTS"],
    ["Skripsi", "IPK", "Organisasi", "Mahasiswa", "Teman", "Ujian", "Universitas", "Presentasi", "Praktikum", "Dosen", "Lembur", "Magang", "Perusahaan", "Sekretaris", "Bawahan", "HRD", "Manajemen", "Divisi", "Pegawai", "Kantor", "Curhat", "Mantan", "Gebetan", "Crush", "Kenalan", "Partner", "Rekan", "Intim", "Mesra", "Komitmen"],
    ["Base", "Noob", "Pro", "Quest", "Lose Streak", "Feeder", "Ganking", "Squad", "Dark System", "Contest", "Lagging", "Skin", "Semester", "SKS", "UKT", "Wisuda", "Sidang", "Ospek", "BEM", "Mata Kuliah", "Tugas", "Putus", "Dating", "LDR", "Toxic", "Couple", "Akrab", "Renggang", "Reuni","Serasi"],
    ["SDM","Lamaran","Karir","Trainee","Manajer","Gaji","Stress","Bos", "Karyawan", "Institut", "Non-Akademik", "Kemahasiswaan", "Makalah", "E-Learning", "Sarjana", "Bimbingan", "Kampus", "Kuis", "Login", "Mining", "Gacha", "War", "GG", "Bot", "AFK", "Grinding", "NT", "Streak", "Damage", "Hacking"],
    
]

const guideWords: string[] = [
"<b>Kata-Kata Terkait Kerja</b>",
"<b>Kata-Kata Terkait Kuliah</b>",
"<b>Kata-Kata Terkait Game</b>",
"<b>Kata-Kata Terkait Kerja</b>",
"<b>Kata-Kata Terkait Relasi</b>",

]

const sessionWords: string[] = [
    "<b>Sesi Latihan</b>",
    "<b>Sesi 1</b>",
    "<b>Sesi 2</b>",
    "<b>Sesi 3</b>",
    "<b>Sesi 4</b>",
]

const mainWords: string[] = [
    "<b>Kerja.</b>",
    "<b>Kuliah.</b>",
    "<b>Game.</b>",
    "<b>Kerja.</b>",
    "<b>Relasi.</b>",
]


export {targetWords, distractorWords, guideWords, sessionWords, mainWords}




















