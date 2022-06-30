import React, { useState } from 'react';
import {
  Flex,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import DiagnoseForm from '../component/DiagnoseForm';
import DiagnoseResult from '../component/DiagnoseResult';

interface FormValues {
  name: string;
  jk: string;
  age: number;
  bb: number;
  tb: number;
}

const Diagnose = () => {
  /// form
  const [question, setQuestion] = useState<boolean>(false);
  const [nama, setNama] = useState<string>('');
  const [jenisKelamin, setJenisKelamin] = useState<string>('');
  const [umur, setUmur] = useState<number>(0);
  const [beratBadan, setBeratBadan] = useState<number>(0);
  const [tinggiBadan, setTinggiBadan] = useState<number>(0);
  // result
  const [hasilBb, setHasilBb] = useState<string>('');
  const [hasilTb, setHasilTb] = useState<string>('');

  const handleSubmit = async ({
    name,
    jk,
    age,
    bb,
    tb,
  }: FormValues) => {
    if (jk === 'perempuan') {
      if (age === 1) {
        if (bb > 4.8) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 3.2) setHasilBb('Normal');
        else if (bb >= 2.7) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 59.5) setHasilTb('Sangat Tinggi');
        else if (tb >= 49.8) setHasilTb('Normal');
        else if (tb >= 47.8) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 2) {
        if (bb > 5.8) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 3.9) setHasilBb('Normal');
        else if (bb >= 3.4) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 63.2) setHasilTb('Sangat Tinggi');
        else if (tb >= 53) setHasilTb('Normal');
        else if (tb >= 51) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 3) {
        if (bb > 6.6) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 4.5) setHasilBb('Normal');
        else if (bb >= 4) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 66.1) setHasilTb('Sangat Tinggi');
        else if (tb >= 55.6) setHasilTb('Normal');
        else if (tb >= 53.5) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 4) {
        if (bb > 7.3) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 5) setHasilBb('Normal');
        else if (bb >= 4.4) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 68.6) setHasilTb('Sangat Tinggi');
        else if (tb >= 57.8) setHasilTb('Normal');
        else if (tb >= 55.6) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 5) {
        if (bb > 7.8) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 5.4) setHasilBb('Normal');
        else if (bb >= 4.8) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 70.7) setHasilTb('Sangat Tinggi');
        else if (tb >= 59.6) setHasilTb('Normal');
        else if (tb >= 57.4) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 6) {
        if (bb > 8.2) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 5.7) setHasilBb('Normal');
        else if (bb >= 5.1) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 72.5) setHasilTb('Sangat Tinggi');
        else if (tb >= 61.2) setHasilTb('Normal');
        else if (tb >= 58.9) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 7) {
        if (bb > 8.6) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 6) setHasilBb('Normal');
        else if (bb >= 5.3) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 74.2) setHasilTb('Sangat Tinggi');
        else if (tb >= 62.7) setHasilTb('Normal');
        else if (tb >= 60.3) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 8) {
        if (bb > 9) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 6.3) setHasilBb('Normal');
        else if (bb >= 5.6) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 75.8) setHasilTb('Sangat Tinggi');
        else if (tb >= 64) setHasilTb('Normal');
        else if (tb >= 61.7) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 9) {
        if (bb > 9.3) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 6.5) setHasilBb('Normal');
        else if (bb >= 5.8) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 77.4) setHasilTb('Sangat Tinggi');
        else if (tb >= 65.3) setHasilTb('Normal');
        else if (tb >= 62.9) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 10) {
        if (bb > 9.6) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 6.7) setHasilBb('Normal');
        else if (bb >= 5.9) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 78.9) setHasilTb('Sangat Tinggi');
        else if (tb >= 66.5) setHasilTb('Normal');
        else if (tb >= 64.1) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 11) {
        if (bb > 9.9) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 6.9) setHasilBb('Normal');
        else if (bb >= 6.1) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 80.3) setHasilTb('Sangat Tinggi');
        else if (tb >= 67.7) setHasilTb('Normal');
        else if (tb >= 65.2) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 12) {
        if (bb > 10.1) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 7) setHasilBb('Normal');
        else if (bb >= 6.3) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 81.7) setHasilTb('Sangat Tinggi');
        else if (tb >= 68.9) setHasilTb('Normal');
        else if (tb >= 66.3) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 13) {
        if (bb > 10.4) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 7.2) setHasilBb('Normal');
        else if (bb >= 6.4) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 83.1) setHasilTb('Sangat Tinggi');
        else if (tb >= 70) setHasilTb('Normal');
        else if (tb >= 67.3) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 14) {
        if (bb > 10.6) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 7.4) setHasilBb('Normal');
        else if (bb >= 6.6) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 84.4) setHasilTb('Sangat Tinggi');
        else if (tb >= 71) setHasilTb('Normal');
        else if (tb >= 68.3) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 15) {
        if (bb > 10.9) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 7.6) setHasilBb('Normal');
        else if (bb >= 6.7) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 85.7) setHasilTb('Sangat Tinggi');
        else if (tb >= 72) setHasilTb('Normal');
        else if (tb >= 69.3) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 16) {
        if (bb > 11.1) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 7.7) setHasilBb('Normal');
        else if (bb >= 6.9) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 87) setHasilTb('Sangat Tinggi');
        else if (tb >= 73) setHasilTb('Normal');
        else if (tb >= 70.2) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 17) {
        if (bb > 11.4) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 7.9) setHasilBb('Normal');
        else if (bb >= 7) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 88.2) setHasilTb('Sangat Tinggi');
        else if (tb >= 74) setHasilTb('Normal');
        else if (tb >= 71.1) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 18) {
        if (bb > 11.6) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 8.1) setHasilBb('Normal');
        else if (bb >= 7.2) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 89.4) setHasilTb('Sangat Tinggi');
        else if (tb >= 74.9) setHasilTb('Normal');
        else if (tb >= 72) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 19) {
        if (bb > 11.8) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 8.2) setHasilBb('Normal');
        else if (bb >= 7.3) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 90.6) setHasilTb('Sangat Tinggi');
        else if (tb >= 75.8) setHasilTb('Normal');
        else if (tb >= 72.8) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 20) {
        if (bb > 12.1) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 8.4) setHasilBb('Normal');
        else if (bb >= 7.5) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 91.7) setHasilTb('Sangat Tinggi');
        else if (tb >= 76.7) setHasilTb('Normal');
        else if (tb >= 73.7) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 21) {
        if (bb > 12.3) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 8.6) setHasilBb('Normal');
        else if (bb >= 7.6) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 92.9) setHasilTb('Sangat Tinggi');
        else if (tb >= 77.5) setHasilTb('Normal');
        else if (tb >= 74.5) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 22) {
        if (bb > 12.5) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 8.7) setHasilBb('Normal');
        else if (bb >= 7.8) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 94) setHasilTb('Sangat Tinggi');
        else if (tb >= 78.4) setHasilTb('Normal');
        else if (tb >= 75.2) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 23) {
        if (bb > 12.8) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 8.9) setHasilBb('Normal');
        else if (bb >= 7.9) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 95) setHasilTb('Sangat Tinggi');
        else if (tb >= 79.2) setHasilTb('Normal');
        else if (tb >= 76) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 24) {
        if (bb > 13) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 9) setHasilBb('Normal');
        else if (bb >= 8.1) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 96.1) setHasilTb('Sangat Tinggi');
        else if (tb >= 80) setHasilTb('Normal');
        else if (tb >= 76.7) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      }
    } else if (jk === 'laki-laki') {
      if (age === 1) {
        if (bb > 5.1) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 3.4) setHasilBb('Normal');
        else if (bb >= 2.9) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 60.6) setHasilTb('Sangat Tinggi');
        else if (tb >= 50.8) setHasilTb('Normal');
        else if (tb >= 48.9) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 2) {
        if (bb > 6.3) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 4.3) setHasilBb('Normal');
        else if (bb >= 3.8) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 64.4) setHasilTb('Sangat Tinggi');
        else if (tb >= 54.4) setHasilTb('Normal');
        else if (tb >= 52.4) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 3) {
        if (bb > 7.2) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 5.0) setHasilBb('Normal');
        else if (bb >= 4.4) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 67.6) setHasilTb('Sangat Tinggi');
        else if (tb >= 57.3) setHasilTb('Normal');
        else if (tb >= 55.3) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 4) {
        if (bb > 7.8) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 5.6) setHasilBb('Normal');
        else if (bb >= 4.9) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 70.1) setHasilTb('Sangat Tinggi');
        else if (tb >= 59.7) setHasilTb('Normal');
        else if (tb >= 57.6) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 5) {
        if (bb > 8.4) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 6.0) setHasilBb('Normal');
        else if (bb >= 5.3) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 72.2) setHasilTb('Sangat Tinggi');
        else if (tb >= 61.7) setHasilTb('Normal');
        else if (tb >= 59.6) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 6) {
        if (bb > 8.8) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 6.4) setHasilBb('Normal');
        else if (bb >= 5.7) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 74.0) setHasilTb('Sangat Tinggi');
        else if (tb >= 63.3) setHasilTb('Normal');
        else if (tb >= 61.2) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 7) {
        if (bb > 9.2) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 6.7) setHasilBb('Normal');
        else if (bb >= 5.9) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 75.7) setHasilTb('Sangat Tinggi');
        else if (tb >= 64.8) setHasilTb('Normal');
        else if (tb >= 62.7) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 8) {
        if (bb > 9.6) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 6.9) setHasilBb('Normal');
        else if (bb >= 6.2) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 77.2) setHasilTb('Sangat Tinggi');
        else if (tb >= 66.2) setHasilTb('Normal');
        else if (tb >= 64.0) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 9) {
        if (bb > 9.9) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 7.1) setHasilBb('Normal');
        else if (bb >= 6.4) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 78.7) setHasilTb('Sangat Tinggi');
        else if (tb >= 67.5) setHasilTb('Normal');
        else if (tb >= 65.2) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 10) {
        if (bb > 10.2) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 7.4) setHasilBb('Normal');
        else if (bb >= 6.6) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 80.1) setHasilTb('Sangat Tinggi');
        else if (tb >= 68.7) setHasilTb('Normal');
        else if (tb >= 66.4) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 11) {
        if (bb > 10.5) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 7.6) setHasilBb('Normal');
        else if (bb >= 6.8) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 81.5) setHasilTb('Sangat Tinggi');
        else if (tb >= 69.9) setHasilTb('Normal');
        else if (tb >= 67.6) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 12) {
        if (bb > 10.8) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 7.7) setHasilBb('Normal');
        else if (bb >= 6.9) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 82.9) setHasilTb('Sangat Tinggi');
        else if (tb >= 71) setHasilTb('Normal');
        else if (tb >= 68.6) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 13) {
        if (bb > 11) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 7.9) setHasilBb('Normal');
        else if (bb >= 7.1) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 84.2) setHasilTb('Sangat Tinggi');
        else if (tb >= 72.1) setHasilTb('Normal');
        else if (tb >= 69.6) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 14) {
        if (bb > 11.3) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 8.1) setHasilBb('Normal');
        else if (bb >= 7.2) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 85.5) setHasilTb('Sangat Tinggi');
        else if (tb >= 73.1) setHasilTb('Normal');
        else if (tb >= 70.6) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 15) {
        if (bb > 11.5) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 8.3) setHasilBb('Normal');
        else if (bb >= 7.4) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 86.7) setHasilTb('Sangat Tinggi');
        else if (tb >= 74.1) setHasilTb('Normal');
        else if (tb >= 71.6) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 16) {
        if (bb > 11.7) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 8.4) setHasilBb('Normal');
        else if (bb >= 7.5) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 88) setHasilTb('Sangat Tinggi');
        else if (tb >= 75) setHasilTb('Normal');
        else if (tb >= 72.5) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 17) {
        if (bb > 12) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 8.6) setHasilBb('Normal');
        else if (bb >= 7.7) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 89.2) setHasilTb('Sangat Tinggi');
        else if (tb >= 76) setHasilTb('Normal');
        else if (tb >= 73.3) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 18) {
        if (bb > 12.2) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 8.8) setHasilBb('Normal');
        else if (bb >= 7.8) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 90.4) setHasilTb('Sangat Tinggi');
        else if (tb >= 76.9) setHasilTb('Normal');
        else if (tb >= 74.2) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 19) {
        if (bb > 12.5) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 8.9) setHasilBb('Normal');
        else if (bb >= 8) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 91.5) setHasilTb('Sangat Tinggi');
        else if (tb >= 77.7) setHasilTb('Normal');
        else if (tb >= 75) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 20) {
        if (bb > 12.7) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 9.1) setHasilBb('Normal');
        else if (bb >= 8.1) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 92.6) setHasilTb('Sangat Tinggi');
        else if (tb >= 78.6) setHasilTb('Normal');
        else if (tb >= 75.8) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 21) {
        if (bb > 12.9) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 9.2) setHasilBb('Normal');
        else if (bb >= 8.2) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 93.8) setHasilTb('Sangat Tinggi');
        else if (tb >= 79.4) setHasilTb('Normal');
        else if (tb >= 76.5) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 22) {
        if (bb > 13.2) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 9.4) setHasilBb('Normal');
        else if (bb >= 8.4) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 94.9) setHasilTb('Sangat Tinggi');
        else if (tb >= 80.2) setHasilTb('Normal');
        else if (tb >= 77.2) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 23) {
        if (bb > 13.4) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 9.5) setHasilBb('Normal');
        else if (bb >= 8.5) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 95.9) setHasilTb('Sangat Tinggi');
        else if (tb >= 81) setHasilTb('Normal');
        else if (tb >= 78) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (age === 24) {
        if (bb > 13.4) setHasilBb('Risiko Berat Badan Lebih');
        else if (bb >= 9.5) setHasilBb('Normal');
        else if (bb >= 8.5) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tb > 97) setHasilTb('Sangat Tinggi');
        else if (tb >= 81.7) setHasilTb('Normal');
        else if (tb >= 78.7) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      }
    }

    setNama(name);
    setJenisKelamin(jk);
    setUmur(age);
    setBeratBadan(bb);
    setTinggiBadan(tb);
    setQuestion(true);
  };

  return (
    <Flex minH="100vh" justify="center">
      <Stack spacing={8} py={4}>
        <Stack align="center">
          <Heading fontSize={{ base: '2xl', md: '3xl' }} textAlign="center">
            Cek Stunting
          </Heading>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color={useColorModeValue('gray.600', 'gray.300')}
          >
            untuk memeriksa pertumbuhan bayi anda
          </Text>
        </Stack>
        {!question && <DiagnoseForm handleSubmit={handleSubmit} />}

        {question && (
          <DiagnoseResult
            nama={nama}
            jenisKelamin={jenisKelamin}
            umur={umur}
            beratBadan={beratBadan}
            tinggiBadan={tinggiBadan}
            hasilBb={hasilBb}
            hasilTb={hasilTb}
          />
        )}
      </Stack>
    </Flex>
  );
};

export default Diagnose;
