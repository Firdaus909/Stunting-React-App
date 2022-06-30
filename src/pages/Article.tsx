import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Article = () => {
  const data = [
    {
      question: 'Apa itu stunting',
      answer:
        'Stunting adalah kondisi gagal tumbuh pada anak balita (bayi di bawah 5 tahun) akibat dari kekurangan gizi kronis sehingga anak terlalu pendek untuk usianya.',
    },
    {
      question: 'Apa ciri-ciri Stunting?',
      answer:
        'Pertumbuhan melambat, Pertumbuhan gigi terlambat, Performa buruk pada kemampuan fokus dan memori, Anak menjadi lebih pendiam',
    },
    {
      question: 'Apa penyebab anak balita mengalami Stunting?',
      answer:
        'Stunting menurut WHO (World Health Organization) disebabkan oleh kekurangan nutrisi pada bayi dalam waktu lama, kurang ASI, infeksi berulang, atau penyakit kronis yang menyebabkan masalah penyerapan nutrisi dari makanan.',
    },
    {
      question: 'Bagaimana cara mengatasi Stunting?',
      answer:
        'Memenuhi kebutuhan gizi sejak hamil, Memberi ASI eksklusif sampai bayi berusia 6 bulan, Dampingi ASI eksklusif dengan MPASI sehat, Rutin memriksa tumbuh kemabng anak, Selalu menjaga kebersihan lingkungan',
    },
    {
      question: 'Faktor apa saja yang mempengaruhi Stunting?',
      answer:
        'Penyebabnya karena rendahnya akses terhadap makanan bergizi, rendahnya asupan vitamin dan mineral, dan buruknya keragaman pangan dan sumber protein hewani.',
    },
    {
      question: 'Apa saja dampak yang ditimbulkan akibat Stunting?',
      answer:
        'Anak-anak stunting berisiko lebih tinggi mengidap penyakit degeneratif, seperti kanker, diabetes, dan obesitas. Hal ini disebabkan karena kebutuhan zat gizi mikro dan makro dalam tubuh tidak terpenuhi secara maksimal sehingga pembentukan fungsi sel tubuh dan lainnya tidak sempurna',
    },
    {
      question:
        'Mengapa stunting merupakan masalah penyakit serius bagi genrasi yang akan datang?',
      answer:
        'Stunting berpotensi memperlambat perkembangan otak, dengan dampak jangka panjang berupa keterbelakangan mental, rendahnya kemampuan belajar, dan risiko serangan penyakit kronis seperti diabetes, hipertensi, hingga obesitas.',
    },
    {
      question: 'Bagaimana kondisi Stunting di Indoneisa?',
      answer:
        'Berdasarkan data Survei Status Gizi Balita Indonesia (SSGBI) tahun 2021, prevalensi stunting saat ini masih berada pada angka 24,4 persen atau 5,33 juta balita. Prevalensi stunting ini telah mengalami penurunan dari tahun-tahun sebelumnya.',
    },
    {
      question: 'Apa penyebab bayi kekurangan gizi?',
      answer:
        'Berikut ini adalah beberapa faktor yang bisa menjadi penyebab balita gizi buruk: Kurang makan: Kurangnya asupan makanan bisa memicu kekurangan nutrien yang penting hingga berujung pada gizi buruk. Makan tidak teratur: Makan secara tidak teratur bisa memicu masalah pencernaan dan malnutrisi.',
    },
    {
      question: 'Asupan gisi apa yang diperlukan?',
      answer:
        'Protein adalah nutrisi yang amat penting untuk anak stunting. Pasalnya, anak stunting yang kekurangan protein tidak hanya terancam gagal tumbuh, tapi juga lebih mudah kehilangan massa otot, mengalami patah tulang, serta terkena penyakit infeksi. Kekurangan zat besi dapat menghambat pertumbuhan dan menyebabkan anemia.',
    },
    {
      question:
        'Apa saja yang harus dilakukan untuk mengatasi masalah gizi pada balita?',
      answer:
        'Mengkonsumsi jenis sayur dan buah, mengkonsumsi protein, Memberikan susu dan produk olahannya seperti keju dan yoghurt, Memberikan makanan yang bersih dan terjamin kualitasnsya.',
    },
    {
      question: 'Bagaimana cara menghitung status gizi pada anak?',
      answer:
        'Salah satu cara untuk menentukan status gizi dengan membandingkan Berat Badan dan Tinggi Badan. IMT = BB(kg)/TB2 (dalam meter). Tanda-tanda atau petunjuk yang dapat memberikan indikasi tentang keadaan keseimbangan antara asupan (intake) zat gizi dan kebutuhan zat gizi oleh tubuh untuk berbagai proses biologis.',
    },
  ];

  return (
    <Flex
      direction="column"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      w={{ base: '80%', md: '50%' }}
      margin="auto"
      mb={4}
    >
      <Heading my={4} fontSize={{ base: '2xl', md: '3xl' }} textAlign="center">
        Informasi Stunting dan Gizi
      </Heading>
      <Accordion allowToggle>
        {data.map((dt) => (
          <AccordionItem>
            <AccordionButton>
              <Box
                flex="1"
                textAlign="left"
                fontSize={{ base: 'sm', sm: 'md' }}
              >
                {dt.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel
              pb={4}
              fontSize={{ base: 'sm', sm: 'md' }}
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              {dt.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
};

export default Article;
