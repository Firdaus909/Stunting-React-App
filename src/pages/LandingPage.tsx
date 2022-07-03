import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import GlowText from '../component/GlowText';

const LandingPage = () => {
  const navigate = useNavigate();
  const cardBg = useColorModeValue('rgba(255,255,255,0.3)', 'rgba(0,0,0,0.3)');

  const nutrition = [
    {
      name: 'Asam Folat',
      text: 'Vit B9',
      desc: 'Kekurangan asam folat dapat meningkatkan risiko terjadinya cacat tabung saraf atau cacat pada perkembangan sumsum tulang belakang.',
    },
    {
      name: 'Kalsium',
      text: 'Ca',
      desc: 'Kalsium sangat penting untuk perkembangan tulang dan gigi bayi, terutama pada trimester kedua dan ketiga.',
    },
    {
      name: 'Zat Besi',
      text: 'Fe',
      desc: 'Zat besi penting untuk mendukung peningkatan 50 persen volume darah, yang sangat diperlukan ketika memasuki trimester ketiga.',
    },
    {
      name: 'Zinc',
      text: 'Zn',
      desc: 'Kekurangan zinc pada ibu hamil dapat mengganggu perkembangan bayi dan berisiko kelahiran prematur, pertumbuhan janin terbatas, hingga cacat lahir.',
    },
    {
      name: 'Asam Lemak',
      text: 'Omega 3',
      desc: 'Asam lemak omega-3 diperlukan untuk perkembangan otak, sistem saraf, dan penglihatan bayi, serta dapat mengurangi risiko kelahiran prematur.',
    },
    {
      name: 'Serat',
      text: 'Fiber',
      desc: 'Serat membantu kontrol glukosa darah, mencegah sembelit dan penyakit kardiovaskular selama kehamilan, serta mencegah alergi anak pada masa kanak-kanak.',
    },
    {
      name: 'Vitamin B12',
      text: 'Vit B12',
      desc: 'Vitamin B12 penting untuk proses perkembangan saraf janin dan pembentukan DNA, juga dapat mencegah kelainan tabung saraf dan cacat neurologis pada bayi.',
    },
  ];

  return (
    <Flex direction="column" position="relative" justifyContent="center">
      <Box
        position="absolute"
        w="100%"
        top="0"
        left="0"
        zIndex="-1"
        display={{ base: 'none', md: 'block' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,160L16,154.7C32,149,64,139,96,154.7C128,171,160,213,192,229.3C224,245,256,235,288,240C320,245,352,267,384,240C416,213,448,139,480,138.7C512,139,544,213,576,245.3C608,277,640,267,672,245.3C704,224,736,192,768,186.7C800,181,832,203,864,218.7C896,235,928,245,960,229.3C992,213,1024,171,1056,170.7C1088,171,1120,213,1152,218.7C1184,224,1216,192,1248,154.7C1280,117,1312,75,1344,80C1376,85,1408,139,1424,165.3L1440,192L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
          />
        </svg>
      </Box>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        py={6}
        mt={{ base: 0, md: 4 }}
        mb={4}
        background={{
          base: 'url("https://drive.google.com/uc?export=view&id=1eSG8D23v3em6_ba4YULrbthkc1xgoRA-")',
          md: 'transparent',
        }}
        backgroundSize="cover"
        backgroundPosition="top center"
        backgroundRepeat="no-repeat"
      >
        <Box w="100vw" p={8} display={{ base: 'none', md: 'flex' }}>
          <Image
            w="full"
            h="auto"
            src="https://drive.google.com/uc?export=view&id=1eSG8D23v3em6_ba4YULrbthkc1xgoRA-"
          />
        </Box>
        <Spacer />
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          p={5}
          w={{ base: '80%', md: '100%' }}
          background={{ base: cardBg, md: 'transparent' }}
          borderRadius="2xl"
        >
          <Heading mb={3} fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}>
            MyStuntingApp
          </Heading>
          <Text
            mb={5}
            fontWeight="bold"
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
            textAlign="justify"
          >
            Stunting adalah kondisi gagal tumbuh pada anak balita (bayi di bawah
            5 tahun) akibat dari kekurangan gizi kronis sehingga anak terlalu
            pendek untuk usianya.
          </Text>
          <Text mb={2} fontSize={{ base: 'sm', md: 'md' }} textAlign="center">
            Ketahui Kondisi Anak Anda Sekarang
          </Text>
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => navigate('/diagnose')}
          >
            Diagnosis
          </Button>
        </Flex>
      </Flex>
      <Flex direction="column" alignItems="center" my={8}>
        <Heading
          textAlign="center"
          mb={5}
          fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
        >
          Nutrisi Penting Pada Masa Kehamilan
        </Heading>
        <Grid
          w="100%"
          px={5}
          mt={2}
          gap={3}
          templateColumns="repeat(auto-fit, minmax(15rem,1fr))"
        >
          {nutrition.map((nutri) => (
            <Flex
              key={nutri.name}
              direction="column"
              alignItems="center"
              p={4}
              borderRadius="2xl"
              boxShadow="md"
              bg={useColorModeValue('white', 'whiteAlpha.100')}
            >
              <Box mb={4}>
                <GlowText text={nutri.text} />
              </Box>
              <Heading mb={2} fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}>
                {nutri.name}
              </Heading>
              <Text textAlign="justify" fontSize={{ base: 'md', md: 'lg' }}>
                {nutri.desc}
              </Text>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
