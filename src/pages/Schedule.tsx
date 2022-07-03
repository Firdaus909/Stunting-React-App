import React from 'react';
import {
  Flex,
  Box,
  Stack,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  TableContainer,
  Heading,
  Divider,
  Text,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';

const Schedule = () => (
  <Flex mx="auto" align="center" justify="center" my={5} py={5}>
    <Box
      rounded="lg"
      bg={useColorModeValue('white', 'whiteAlpha.100')}
      boxShadow="lg"
      w={{ base: '90%', md: '70%' }}
    >
      <Heading as="h3" size="lg" ps={2} py={4}>
        Jadwal Imunisasi
      </Heading>
      <Divider orientation="horizontal" />

      <Stack spacing={4} mb={5} p={{ base: 4, md: 8 }}>
        <TableContainer whiteSpace={{ base: 'nowrap', md: 'normal' }}>
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>
                  <Heading size={{ base: 'sm', md: 'md' }}>
                    Umur (bulan)
                  </Heading>
                </Th>
                <Th>
                  <Heading size={{ base: 'sm', md: 'md' }}>
                    Jenis Imunisasi
                  </Heading>
                </Th>
              </Tr>
            </Thead>
            <Tbody fontSize={{ base: 'sm', md: 'md' }}>
              <Tr>
                <Td>0 bulan</Td>
                <Td>
                  <UnorderedList>
                    <ListItem>Hepatitis B-0</ListItem>
                    <Text mt={1}>
                      Mencegah penularan penyakit hepatitis B dan kerusakan hati
                    </Text>
                  </UnorderedList>
                </Td>
              </Tr>

              <Tr>
                <Td>1 bulan</Td>
                <Td>
                  <UnorderedList>
                    <ListItem>BCG</ListItem>
                    <Text mt={1}>
                      Mencegah penularan penyakit TBC (Tuberkolosis) yang berat
                    </Text>
                    <ListItem mt={3}>Polio 1</ListItem>
                    <Text mt={1}>
                      Mencegah penularan penyakit Polio yang dapat menyebabkan
                      lumpuh layuh pada tungkai dan atau lengan
                    </Text>
                  </UnorderedList>
                </Td>
              </Tr>

              <Tr>
                <Td>2 bulan</Td>
                <Td>
                  <UnorderedList>
                    <ListItem mb={2}>DPT 1 - Hepatitis B 1 - HIB 1</ListItem>
                    Mencegah penularan penyakit:
                    <UnorderedList>
                      <ListItem mt={1}>
                        Difteri yang menyebabkan penyumbatan jalan nafas
                      </ListItem>
                      <ListItem mt={1}>Batuk Rejan (batuk 100 hari)</ListItem>
                      <ListItem mt={1}>Tetanus</ListItem>
                      <ListItem mt={1}>
                        Hepatitis B yang menyebabkan kerusakan hati
                      </ListItem>
                      <ListItem mt={1}>
                        Infeksi HIB menyebabkan meningitis (radang selaputotak)
                      </ListItem>
                    </UnorderedList>
                    <ListItem mt={3}>Polio 2</ListItem>
                    <Text mt={1}>
                      Mencegah penularan penyakit Polio yang dapat menyebabkan
                      lumpuh layuh pada tungkai dan atau lengan
                    </Text>
                  </UnorderedList>
                </Td>
              </Tr>

              <Tr>
                <Td>3 bulan</Td>
                <Td>
                  <UnorderedList>
                    <ListItem mb={2}>DPT2 - Hepatitis B2 - HIB 2</ListItem>
                    Mencegah penularan penyakit:
                    <UnorderedList>
                      <ListItem mt={1}>
                        Difteri yang menyebabkan penyumbatan jalan nafas
                      </ListItem>
                      <ListItem mt={1}>Batuk Rejan (batuk 100 hari)</ListItem>
                      <ListItem mt={1}>Tetanus</ListItem>
                      <ListItem mt={1}>
                        Hepatitis B yang menyebabkan kerusakan hati
                      </ListItem>
                      <ListItem mt={1}>
                        Infeksi HIB menyebabkan meningitis (radang selaputotak)
                      </ListItem>
                    </UnorderedList>
                    <ListItem mt={3}>Polio 3</ListItem>
                    <Text mt={1}>
                      Mencegah penularan penyakit Polio yang dapat menyebabkan
                      lumpuh layuh pada tungkai dan atau lengan
                    </Text>
                  </UnorderedList>
                </Td>
              </Tr>

              <Tr>
                <Td>4 bulan</Td>
                <Td>
                  <UnorderedList>
                    <ListItem mb={2}>DPT3 - Hepatitis B3 - HIB 3</ListItem>
                    Mencegah penularan penyakit:
                    <UnorderedList>
                      <ListItem mt={1}>
                        Difteri yang menyebabkan penyumbatan jalan nafas
                      </ListItem>
                      <ListItem mt={1}>Batuk Rejan (batuk 100 hari)</ListItem>
                      <ListItem mt={1}>Tetanus</ListItem>
                      <ListItem mt={1}>
                        Hepatitis B yang menyebabkan kerusakan hati
                      </ListItem>
                      <ListItem mt={1}>
                        Infeksi HIB menyebabkan meningitis (radang selaputotak)
                      </ListItem>
                    </UnorderedList>
                    <ListItem mt={3}>Polio 4</ListItem>
                    <Text mt={1}>
                      Mencegah penularan penyakit Polio yang dapat menyebabkan
                      lumpuh layuh pada tungkai dan atau lengan
                    </Text>
                    <ListItem mt={3}>IPV</ListItem>
                    <Text mt={1}>
                      Mencegah penularan penyakit yang dapat menyebabkan lumpuh
                      layuh pada tungkai dan atau lengan.
                    </Text>
                  </UnorderedList>
                </Td>
              </Tr>

              <Tr>
                <Td>9 bulan</Td>
                <Td>
                  <UnorderedList>
                    <ListItem>Campak</ListItem>
                    <Text mt={2}>
                      Mencegah penularan penyakit Campak yang dapat
                      mengakibatkan komplikasi radang paru, radang otak dan
                      kebutaan
                    </Text>
                  </UnorderedList>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  </Flex>
);

export default Schedule;
