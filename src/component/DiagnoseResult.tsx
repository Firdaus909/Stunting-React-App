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
  useColorModeValue,
  Button,
} from '@chakra-ui/react';

interface ResultProps {
  nama: string;
  jenisKelamin: string;
  umur: number;
  beratBadan: number;
  tinggiBadan: number;
  hasilBb: string;
  hasilTb: string;
  setQuestion: React.Dispatch<React.SetStateAction<boolean>>;
}

const DiagnoseResult: React.FC<ResultProps> = ({
  nama,
  jenisKelamin,
  umur,
  beratBadan,
  tinggiBadan,
  hasilBb,
  hasilTb,
  setQuestion,
}) => {
  // result
  let result;
  if (
    hasilBb === 'Normal'
    && (hasilTb === 'Normal' || hasilTb === 'Sangat Tinggi')
  ) {
    result = `Selamat Anak anda ${nama}, Tidak Mengalami Stunting`;
  } else if (
    hasilBb === 'Normal'
    && (hasilTb === 'Sangat Pendek' || hasilTb === 'Pendek')
  ) {
    result = 'Anak anda berkemungkinan mengalami Stunting, khususnya untuk Tinggi Badan yang kurang. Tetapi hal ini bisa saja terjadi karena gen Tinggi Badan.';
  } else if (
    hasilBb === 'Risiko Berat Badan Lebih'
    && (hasilTb === 'Normal' || hasilTb === 'Sangat Tinggi')
  ) {
    result = 'Anak anda berkemungkinan tidak mengalami Stunting, tetapi Berat Badan anak yang berlebih berkemungkinan anak mengalami obesitas.';
  } else if (
    hasilBb === 'Risiko Berat Badan Lebih'
    && (hasilTb === 'Sangat Pendek' || hasilTb === 'Pendek')
  ) {
    result = 'Anak anda mengalami Stunting, khususnya pada Tinggi Badan yang lambat berkembang. Berat Badan anak yang berlebih juga berkemungkinan anak mengalami obesitas.';
  } else if (hasilBb === 'Kurang' && hasilTb === 'Normal') {
    result = 'Anak anda berkemungkinan mengalami Stunting, khususnya pada Berat Badan yang kurang dari Berat ideal.';
  } else if (hasilBb === 'Kurang' && hasilTb !== 'Normal') {
    result = 'Anak Anda mengalami stunting.';
  } else if (hasilBb === 'Sangat Kurang') {
    result = 'Anak Anda mengalami stunting.';
  }

  // rekomendasi
  let rekomendasi;
  if (umur > 0 && umur <= 6) {
    rekomendasi = (
      <Stack spacing={3} p={5}>
        <Heading fontSize="2xl">Kebutuhan Gizi</Heading>
        <Text>
          Kebutuhan gizi pada bayi usia 0-6 bulan cukup terpenuhi dari ASI saja
          (ASI Eksklusif)
        </Text>
        <UnorderedList>
          <ListItem>
            Berikan ASI yang pertama keluar dan berwarna kekuningan (kolostrum)
          </ListItem>
          <ListItem>Jangan berikan makanan atau minuman selain ASI</ListItem>
          <ListItem>Susui bayi sesering mungkin</ListItem>
          <ListItem>
            Susui setiap bayi menginginkan, paling sedikit 8 kali sehari
          </ListItem>
          <ListItem>
            Jika bayi tidur lebih dari 3 jam, bangunkan lalu susui
          </ListItem>
          <ListItem>
            Susui dengan payudara kanan dan kiri secara bergantian
          </ListItem>
          <ListItem>
            Susui sampai payudara terasa kosong, lalu pindah ke payudara sisi
            lainnya
          </ListItem>
        </UnorderedList>

        <Heading mt={3} fontSize="2xl">Tahap Perkembangan</Heading>
        <UnorderedList>
          <ListItem>Mengangkat kepala setinggi 45 derajat</ListItem>
          <ListItem>Menggerakkan kepala dari kiri/kanan ke tengah.</ListItem>
          <ListItem>Melihat dan menatap wajah anda.</ListItem>
          <ListItem>Mengoceh spontan atau bereaksi dengan mengoceh.</ListItem>
          <ListItem>Suka tertawa keras.</ListItem>
          <ListItem>Bereaksi terkejut terhadap suara keras.</ListItem>
          <ListItem>
            Membalas tersenyum ketika diajak bicara/tersenyum.
          </ListItem>
          <ListItem>
            Mengenal ibu dengan penglihatan, penciuman, pendengaran, kontak
          </ListItem>
        </UnorderedList>
      </Stack>
    );
  } else if (umur > 6 && umur <= 9) {
    rekomendasi = (
      <Stack spacing={3} p={5}>
        <Heading fontSize="2xl">Kebutuhan Gizi</Heading>
        <UnorderedList>
          <ListItem>
            Anak harus mulai dikenalkan dan diberi makanan pendamping ASI sejak
            umur 6 bulan
          </ListItem>
          <ListItem>
            Makanan utama adalah makanan padat yang diberikan secara bertahap
          </ListItem>
          <ListItem>ASI diberikan sampai anak usia 2 tahun</ListItem>
          <ListItem>Makanan Pendamping ASI yang baik</ListItem>
          <ListItem>
            Padat energi, protein dan zat gizi mikro (zat besi, Zinc, Kalsium,
            Vit. A, Vit. C dan Folat).
          </ListItem>
          <ListItem>
            Tidak berbumbu tajam, tidak menggunakan gula, garam, penyedap rasa,
            pewarna dan pengawet
          </ListItem>
          <ListItem>Mudah ditelan dan disukai anak</ListItem>
        </UnorderedList>

        <Heading mt={3} fontSize="2xl">Tahap Perkembangan</Heading>
        <UnorderedList>
          <ListItem>Duduk (sikap tripoid – sendiri).</ListItem>
          <ListItem>
            Belajar berdiri, kedua kakinya menyangga sebagian berat badan.
          </ListItem>
          <ListItem>Merangkak meraih mainan atau mendekati seseorang.</ListItem>
          <ListItem>
            Memindahkan benda dari satu tangan ke tangan lainnya.
          </ListItem>
          <ListItem>
            Memungut 2 benda, masing-masing tangan pegang 1 benda pada saat yang
            bersamaan.
          </ListItem>
          <ListItem>Memungut benda sebesar kacang dengan cara meraup.</ListItem>
          <ListItem>
            Bersuara tanpa arti, mamama, bababa, dadada, tatatata.
          </ListItem>
          <ListItem>Mencari mainan/benda yang dijatuhkan.</ListItem>
          <ListItem>Makan cemilan sendiri.</ListItem>
        </UnorderedList>
      </Stack>
    );
  } else if (umur > 9 && umur <= 12) {
    rekomendasi = (
      <Stack spacing={3} p={5}>
        <Heading fontSize="2xl">Kebutuhan Gizi</Heading>
        <UnorderedList>
          <ListItem>
            ASI tetap diberikan, kemudian Makanan Pendamping (MP) ASI
          </ListItem>
          <ListItem>
            Berikan Makanan Pendamping ASI yang lebih padat (Contohnya bubur
            nasi, nasi tim dan nasi lembek)
          </ListItem>
        </UnorderedList>

        <Text>Berikan juga aneka makanan yang terdiri dari:</Text>
        <UnorderedList>
          <ListItem>Makanan pokok; seperti nasi,ubi, sagu</ListItem>
          <ListItem>Lauk hewani; ikan , telur, hati ayam, daging.</ListItem>
          <ListItem>Lauk nabati; tempe, tahu, kacang-kacangan</ListItem>
          <ListItem>Sayur dan buah-buahan</ListItem>
          <ListItem>
            Beri makanan selingan 2 kali sehari. Contohnya bubur kacang hijau,
            pisang, biskuit, kue tradisional, dan kue lain
          </ListItem>
        </UnorderedList>

        <Heading mt={3} fontSize="2xl">Tahap Perkembangan</Heading>
        <UnorderedList>
          <ListItem>Mengangkat badannya ke posisi berdiri.</ListItem>
          <ListItem>
            Belajar berdiri selama 30 detik atau berpegangan di kursi.
          </ListItem>
          <ListItem>Dapat berjalan dengan dituntun.</ListItem>
          <ListItem>
            Mengulurkan lengan/badan untuk meraih mainan yang diinginkan.
          </ListItem>
          <ListItem>Mengenggam erat pensil.</ListItem>
          <ListItem>Memasukkan benda ke mulut.</ListItem>
          <ListItem>Menyebut 2-3 suku kata yang sama tanpa arti.</ListItem>
          <ListItem>
            Mengeksplorasi sekitar, ingin tahu, ingin menyentuh apa saja.
          </ListItem>
          <ListItem>
            Bereaksi terhadap suara yang perlahan atau bisikan.
          </ListItem>
          <ListItem>Senang diajak bermain ”CILUK BA”</ListItem>
          <ListItem>Mengenal anggota keluarga.</ListItem>
        </UnorderedList>
      </Stack>
    );
  } else {
    rekomendasi = (
      <Stack spacing={3} p={5}>
        <Heading>Kebutuhan Gizi</Heading>
        <UnorderedList>
          <ListItem>Makanan keluarga</ListItem>
          <ListItem>
            Makanan yang dicincang atau dihaluskan jika diperlukan
          </ListItem>
          <ListItem>ASI</ListItem>
        </UnorderedList>

        <Heading mt={3} fontSize="2xl">Tahap Perkembangan</Heading>
        <UnorderedList>
          <ListItem>Berdiri sendiri tanpa berpegangan.</ListItem>
          <ListItem>
            Membungkuk memungut mainan kemudian berdiri kembali.
          </ListItem>
          <ListItem>Berjalan mundur 5 langkah.</ListItem>
          <ListItem>
            Memanggil ayah dengan kata ”papa”, memanggil ibu dengan kata ”mama”.
          </ListItem>
          <ListItem>Menumpuk 2 kubus.</ListItem>
          <ListItem>Memasukkan kubus di kotak.</ListItem>
          <ListItem>
            Menunjuk apa yang diinginkan tanpa menangis/merengek, anak bisa
            mengeluarkan suara yang menyenangkan atau menarik tangan ibu
          </ListItem>
          <ListItem>Memperlihatkan rasa cemburu / bersaing</ListItem>
        </UnorderedList>
      </Stack>
    );
  }

  return (
    <Flex direction={{ base: 'column', md: 'row' }} w="100%" py={5} px={10} gap={8}>
      <Flex direction="column" gap={5} w={{ base: '100%', md: '60%' }}>
        <Box boxShadow="lg" rounded="lg" bg={useColorModeValue('white', 'whiteAlpha.100')}>
          <Flex direction="column">
            <Heading ps={4} py={3}>Hasil</Heading>
            <Divider orientation="horizontal" />
            <Stack p={5}>
              <Heading fontSize="md" mb={1}>
                {result}
              </Heading>
              <Text as="em" fontSize="xs">
                <Text as="em" fontSize="xs">Note:</Text>
                <br />
                Untuk informasi lebih lanjut, Anda dapat melakukan pemeriksaan tumbuh kembang anak
                secara berkala ke dokter terdekat.
              </Text>
            </Stack>
          </Flex>
        </Box>
        <Box boxShadow="lg" rounded="lg" bg={useColorModeValue('white', 'whiteAlpha.100')}>
          <Flex direction="column">
            <Heading ps={4} py={3}>Rekomendasi</Heading>
            <Divider orientation="horizontal" />
            <Stack ps={2}>
              {rekomendasi}
            </Stack>
          </Flex>
        </Box>
      </Flex>
      <Flex direction="column" gap={5} w={{ base: '100%', md: '40%' }}>
        <Box boxShadow="lg" rounded="lg" bg={useColorModeValue('white', 'whiteAlpha.100')}>
          <Flex direction="column">
            <Heading ps={4} py={3}>Biodata</Heading>
            <Divider orientation="horizontal" />
            <TableContainer whiteSpace="normal" p={6}>
              <Table variant="striped">
                <Tbody>
                  <Tr>
                    <Td>Nama Anak</Td>
                    <Td>:</Td>
                    <Td>
                      <Text fontWeight="bold">{nama}</Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Jenis Kelamin</Td>
                    <Td>:</Td>
                    <Td>
                      <Text fontWeight="bold">{jenisKelamin}</Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Umur</Td>
                    <Td>:</Td>
                    <Td>
                      <Text fontWeight="bold">
                        {umur}
                        bulan
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Berat Badan</Td>
                    <Td>:</Td>
                    <Td>
                      <span>
                        <Text fontWeight="bold">
                          {beratBadan}
                          Kg
                          <span>
                            (
                            {hasilBb}
                            )
                          </span>
                        </Text>
                      </span>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Tinggi Badan</Td>
                    <Td>:</Td>
                    <Td>
                      <span>
                        <Text fontWeight="bold">
                          {tinggiBadan}
                          Cm
                          <span>
                            (
                            {hasilTb}
                            )
                          </span>
                        </Text>
                      </span>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        </Box>
        <Box>
          <Flex direction="column" alignItems="center" gap={3} mt={5}>
            <Text>Ingin melakukan diagnosis lagi?</Text>
            <Button onClick={() => setQuestion(false)}>Diagnosis</Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default DiagnoseResult;
