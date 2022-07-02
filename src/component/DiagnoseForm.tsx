import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Select,
  useColorModeValue,
  Spacer,
  Flex,
  VStack,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Formik, FormikHelpers as FormikActions } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  name: string;
  jk: string;
  age: number;
  bb: number;
  tb: number;
}

interface FormProps {
  handleSubmit: (values: FormValues) => Promise<void>;
}

const DiagnoseForm: React.FC<FormProps> = ({ handleSubmit }) => (
  <Box
    rounded="lg"
    bg={useColorModeValue('white', 'whiteAlpha.100')}
    boxShadow="lg"
    p={8}
    maxW="xl"
  >
    <Formik
      initialValues={{
        name: '',
        jk: '',
        age: 0,
        bb: 0,
        tb: 0,
      }}
      onSubmit={async (
        values: FormValues,
        { resetForm }: FormikActions<FormValues>,
      ) => {
        await handleSubmit(values);
        resetForm();
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Masukkan nama anak'),
        jk: Yup.string().required('Pilih jenis kelamin anak'),
        age: Yup.number()
          .required('Masukkan umur anak')
          .min(1, 'Diagnosis untuk anak minimal 1 bulan')
          .max(24, 'Diagnosis untuk anak maksimal 24 bulan'),
        bb: Yup.number()
          .required('Masukkan berat badan anak')
          .min(0, 'Berat badan anak tidak boleh negatif'),
        tb: Yup.number()
          .required('Masukkan tinggi badan anak')
          .min(0, 'Tinggi badan anak tidak boleh negatif'),
      })}
    >
      {(formik) => (
        <VStack
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <FormControl id="nama" isInvalid={!!formik.errors.name}>
            <FormLabel>Nama Anak</FormLabel>
            <Input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange('name')}
            />
            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
          </FormControl>
          <Flex w="100%" direction={{ base: 'column', sm: 'row' }} gap={{ base: 1, sm: 4 }}>
            <FormControl id="jk" isInvalid={!!formik.errors.jk}>
              <FormLabel>Jenis Kelamin</FormLabel>
              <Select
                placeholder="Select option"
                name="jk"
                value={formik.values.jk}
                onChange={formik.handleChange('jk')}
              >
                <option id="perempuan" value="perempuan">
                  Perempuan
                </option>
                <option id="laki-laki" value="laki-laki">
                  Laki-laki
                </option>
              </Select>
              <FormErrorMessage>{formik.errors.jk}</FormErrorMessage>
            </FormControl>
            <Spacer />
            <FormControl id="umur" isInvalid={!!formik.errors.age}>
              <FormLabel>Umur (bulan)</FormLabel>
              <Input
                type="number"
                placeholder="10 bulan"
                name="age"
                value={formik.values.age}
                onChange={formik.handleChange('age')}
              />
              <FormErrorMessage>{formik.errors.age}</FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex w="100%" direction={{ base: 'column', sm: 'row' }} gap={{ base: 1, sm: 4 }}>
            <FormControl id="berat" isInvalid={!!formik.errors.bb}>
              <FormLabel>Berat Badan (Kg)</FormLabel>
              <Input
                type="number"
                placeholder="4.3 kg"
                name="bb"
                value={formik.values.bb}
                onChange={formik.handleChange('bb')}
              />
              <FormErrorMessage>{formik.errors.bb}</FormErrorMessage>
            </FormControl>
            <Spacer />
            <FormControl id="tinggi" isInvalid={!!formik.errors.tb}>
              <FormLabel>Tinggi Badan (Cm)</FormLabel>
              <Input
                type="number"
                placeholder="60 cm"
                name="tb"
                value={formik.values.tb}
                onChange={formik.handleChange('tb')}
              />
              <FormErrorMessage>{formik.errors.tb}</FormErrorMessage>
            </FormControl>
          </Flex>
          <Stack spacing={10} pt={2} mt={4}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg="blue.400"
              color="white"
              _hover={{
                bg: 'blue.500',
              }}
              type="submit"
            >
              Lihat Hasil
            </Button>
          </Stack>
        </VStack>
      )}
    </Formik>
  </Box>
);

export default DiagnoseForm;
