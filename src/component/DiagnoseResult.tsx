import React from 'react';
import {
	Flex,
	Box,
	Stack,
	Table,
	Tbody,
	Tr,
	Td,
	TableContainer,
	ListItem,
	UnorderedList,
	Heading,
	Text,
	Divider,
} from '@chakra-ui/react';

interface ResultProps {
	nama:string
	jenisKelamin:string
	umur:number
	beratBadan:number
	tinggiBadan:number
	hasilBb:string
	hasilTb:string
}

const DiagnoseResult:React.FC<ResultProps> = ({ nama, jenisKelamin, umur, beratBadan, tinggiBadan, hasilBb, hasilTb }) => {
	// result
	let result;
	if (hasilBb === 'Normal' && (hasilTb === 'Normal' || hasilTb === 'Sangat Tinggi')) {
		result = `Selamat Anak anda ${nama}, Tidak Mengalami Stunting`;
	} else if (hasilBb === 'Normal' && (hasilTb === 'Sangat Pendek' || hasilTb === 'Pendek')) {
		result = `Anak anda berkemungkinan mengalami Stunting, khususnya untuk Tinggi Badan yang kurang. Tetapi hal ini bisa saja terjadi karena gen Tinggi Badan.`;
	} else if (hasilBb === 'Risiko Berat Badan Lebih' && (hasilTb === 'Normal' || hasilTb === 'Sangat Tinggi')) {
		result = `Anak anda berkemungkinan tidak mengalami Stunting, tetapi Berat Badan anak yang berlebih berkemungkinan anak mengalami obesitas.`;
	} else if (hasilBb === 'Risiko Berat Badan Lebih' && (hasilTb === 'Sangat Pendek' || hasilTb === 'Pendek')) {
		result = `Anak anda mengalami Stunting, khususnya pada Tinggi Badan yang lambat berkembang. Berat Badan anak yang berlebih juga berkemungkinan anak mengalami obesitas.`;
	} else if (hasilBb === 'Kurang' && hasilTb === 'Normal') {
		result = `Anak anda berkemungkinan mengalami Stunting, khususnya pada Berat Badan yang kurang dari Berat ideal.`;
	} else if (hasilBb === 'Kurang' && hasilTb !== 'Normal') {
		result = `Anak Anda mengalami stunting.`;
	} else if (hasilBb === 'Sangat Kurang') {
		result = `Anak Anda mengalami stunting.`;
	}

	// rekomendasi
	let rekomendasi;
	if (umur > 0 && umur <= 6) {
		rekomendasi = (
			<div>
				<Heading>Kebutuhan Gizi</Heading>
				<Text>Kebutuhan gizi pada bayi usia 0-6 bulan cukup terpenuhi dari ASI saja (ASI Eksklusif)</Text>
				<UnorderedList>
					<ListItem>Berikan ASI yang pertama keluar dan berwarna kekuningan (kolostrum)</ListItem>
					<ListItem>Jangan berikan makanan atau minuman selain ASI</ListItem>
					<ListItem>Susui bayi sesering mungkin</ListItem>
					<ListItem>Susui setiap bayi menginginkan, paling sedikit 8 kali sehari</ListItem>
					<ListItem>Jika bayi tidur lebih dari 3 jam, bangunkan lalu susui</ListItem>
					<ListItem>Susui dengan payudara kanan dan kiri secara bergantian</ListItem>
					<ListItem>Susui sampai payudara terasa kosong, lalu pindah ke payudara sisi lainnya</ListItem>
				</UnorderedList>

				<Heading mt={5}>Tahap Perkembangan</Heading>
				<UnorderedList>
					<ListItem>Mengangkat kepala setinggi 45 derajat</ListItem>
					<ListItem>Menggerakkan kepala dari kiri/kanan ke tengah.</ListItem>
					<ListItem>Melihat dan menatap wajah anda.</ListItem>
					<ListItem>Mengoceh spontan atau bereaksi dengan mengoceh.</ListItem>
					<ListItem>Suka tertawa keras.</ListItem>
					<ListItem>Bereaksi terkejut terhadap suara keras.</ListItem>
					<ListItem>Membalas tersenyum ketika diajak bicara/tersenyum.</ListItem>
					<ListItem>Mengenal ibu dengan penglihatan, penciuman, pendengaran, kontak</ListItem>
				</UnorderedList>
			</div>
		);
	} else if (umur > 6 && umur <= 9) {
		rekomendasi = (
			<div>
				<Heading>Kebutuhan Gizi</Heading>
				<UnorderedList>
					<ListItem>
						Anak harus mulai dikenalkan dan diberi makanan pendamping ASI sejak umur 6 bulan
					</ListItem>
					<ListItem>Makanan utama adalah makanan padat yang diberikan secara bertahap</ListItem>
					<ListItem>ASI diberikan sampai anak usia 2 tahun</ListItem>
					<ListItem>Makanan Pendamping ASI yang baik</ListItem>
					<ListItem>
						Padat energi, protein dan zat gizi mikro (zat besi, Zinc, Kalsium, Vit. A, Vit. C dan Folat).
					</ListItem>
					<ListItem>
						Tidak berbumbu tajam, tidak menggunakan gula, garam, penyedap rasa, pewarna dan pengawet
					</ListItem>
					<ListItem>Mudah ditelan dan disukai anak</ListItem>
				</UnorderedList>

				<Heading mt={5}>Tahap Perkembangan</Heading>
				<UnorderedList>
					<ListItem>Duduk (sikap tripoid – sendiri).</ListItem>
					<ListItem>Belajar berdiri, kedua kakinya menyangga sebagian berat badan.</ListItem>
					<ListItem>Merangkak meraih mainan atau mendekati seseorang.</ListItem>
					<ListItem>Memindahkan benda dari satu tangan ke tangan lainnya.</ListItem>
					<ListItem>Memungut 2 benda, masing-masing tangan pegang 1 benda pada saat yang bersamaan.</ListItem>
					<ListItem>Memungut benda sebesar kacang dengan cara meraup.</ListItem>
					<ListItem>Bersuara tanpa arti, mamama, bababa, dadada, tatatata.</ListItem>
					<ListItem>Mencari mainan/benda yang dijatuhkan.</ListItem>
					<ListItem>Makan cemilan sendiri.</ListItem>
				</UnorderedList>
			</div>
		);
	} else if (umur > 9 && umur <= 12) {
		rekomendasi = (
			<div>
				<Heading>Kebutuhan Gizi</Heading>
				<UnorderedList>
					<ListItem>ASI tetap diberikan, kemudian Makanan Pendamping (MP) ASI</ListItem>
					<ListItem>
						Berikan Makanan Pendamping ASI yang lebih padat (Contohnya bubur nasi, nasi tim dan nasi lembek)
					</ListItem>
				</UnorderedList>

				<Text>Berikan juga aneka makanan yang terdiri dari:</Text>
				<UnorderedList>
					<ListItem>Makanan pokok; seperti nasi,ubi, sagu</ListItem>
					<ListItem>Lauk hewani; ikan , telur, hati ayam, daging.</ListItem>
					<ListItem>Lauk nabati; tempe, tahu, kacang-kacangan</ListItem>
					<ListItem>Sayur dan buah-buahan</ListItem>
					<ListItem>
						Beri makanan selingan 2 kali sehari. Contohnya bubur kacang hijau, pisang, biskuit, kue
						tradisional, dan kue lain
					</ListItem>
				</UnorderedList>

				<Heading mt={5}>Tahap Perkembangan</Heading>
				<UnorderedList>
					<ListItem>Mengangkat badannya ke posisi berdiri.</ListItem>
					<ListItem>Belajar berdiri selama 30 detik atau berpegangan di kursi.</ListItem>
					<ListItem>Dapat berjalan dengan dituntun.</ListItem>
					<ListItem>Mengulurkan lengan/badan untuk meraih mainan yang diinginkan.</ListItem>
					<ListItem>Mengenggam erat pensil.</ListItem>
					<ListItem>Memasukkan benda ke mulut.</ListItem>
					<ListItem>Menyebut 2-3 suku kata yang sama tanpa arti.</ListItem>
					<ListItem>Mengeksplorasi sekitar, ingin tahu, ingin menyentuh apa saja.</ListItem>
					<ListItem>Bereaksi terhadap suara yang perlahan atau bisikan.</ListItem>
					<ListItem>Senang diajak bermain ”CILUK BA”</ListItem>
					<ListItem>Mengenal anggota keluarga.</ListItem>
				</UnorderedList>
			</div>
		);
	} else {
		rekomendasi = (
			<div>
				<Heading>Kebutuhan Gizi</Heading>
				<UnorderedList>
					<ListItem>Makanan keluarga</ListItem>
					<ListItem> Makanan yang dicincang atau dihaluskan jika diperlukan</ListItem>
					<ListItem>ASI</ListItem>
				</UnorderedList>

				<Heading mt={5}>Tahap Perkembangan</Heading>
				<UnorderedList>
					<ListItem>Berdiri sendiri tanpa berpegangan.</ListItem>
					<ListItem>Membungkuk memungut mainan kemudian berdiri kembali.</ListItem>
					<ListItem>Berjalan mundur 5 langkah.</ListItem>
					<ListItem>Memanggil ayah dengan kata ”papa”, memanggil ibu dengan kata ”mama”.</ListItem>
					<ListItem>Menumpuk 2 kubus.</ListItem>
					<ListItem>Memasukkan kubus di kotak.</ListItem>
					<ListItem>
						Menunjuk apa yang diinginkan tanpa menangis/merengek, anak bisa mengeluarkan suara yang
						menyenangkan atau menarik tangan ibu
					</ListItem>
					<ListItem>Memperlihatkan rasa cemburu / bersaing</ListItem>
				</UnorderedList>
			</div>
		);
	}

	return (
		<div>
			<Flex mx={20}>
				<Box flexGrow={4} me={10}>
					<Box rounded={'lg'} bg={'white'} boxShadow={'lg'} flexGrow={4} mb={8}>
						<Heading as="h3" size="lg" ps={8} py={4}>
							Hasil
						</Heading>
						<Divider orientation="horizontal" />
						<Stack spacing={4} p={8}>
							<Heading as="h5" size="sm">
								{result}
							</Heading>
						</Stack>
					</Box>
					<Box rounded={'lg'} bg={'white'} boxShadow={'lg'} flexGrow={4}>
						<Heading as="h3" size="lg" ps={8} py={4}>
							Rekomendasi
						</Heading>
						<Divider orientation="horizontal" />
						<Stack spacing={4} p={8}>
							{rekomendasi}
						</Stack>
					</Box>
				</Box>

				<Box rounded={'lg'} bg={'white'} boxShadow={'lg'} h={'60%'}>
					<Heading as="h3" size="lg" ps={8} py={4}>
						Biodata Anak
					</Heading>
					<Divider orientation="horizontal" />
					<Stack spacing={4} mb={5} p={8}>
						<TableContainer>
							<Table variant="striped">
								<Tbody>
									<Tr>
										<Td>Nama Anak</Td>
										<Td>:</Td>
										<Td>
											<Heading as="h5" size="sm">
												{nama}
											</Heading>
										</Td>
									</Tr>
									<Tr>
										<Td>Jenis Kelamin</Td>
										<Td>:</Td>
										<Td>
											<Text fontWeight={'bold'}>{jenisKelamin}</Text>
										</Td>
									</Tr>
									<Tr>
										<Td>Umur</Td>
										<Td>:</Td>
										<Td>
											<Text fontWeight={'bold'}>{umur} bulan</Text>
										</Td>
									</Tr>
									<Tr>
										<Td>Berat Badan</Td>
										<Td>:</Td>
										<Td>
											<span>
												<Text fontWeight={'bold'}>
													{beratBadan} Kg <span>({hasilBb})</span>
												</Text>
											</span>
										</Td>
									</Tr>
									<Tr>
										<Td>Tinggi Badan</Td>
										<Td>:</Td>
										<Td>
											<span>
												<Text fontWeight={'bold'}>
													{tinggiBadan} Cm <span> ({hasilTb})</span>
												</Text>
											</span>
										</Td>
									</Tr>
								</Tbody>
							</Table>
						</TableContainer>
					</Stack>
				</Box>
			</Flex>
		</div>
	);
};

export default DiagnoseResult;
