import React, { useState } from 'react';
import {
  Flex, Stack, Heading, Text,
} from '@chakra-ui/react';
import DiagnoseForm from '../component/DiagnoseForm';
import DiagnoseResult from '../component/DiagnoseResult';

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (jenisKelamin === 'perempuan') {
      if (umur === 1) {
        if (beratBadan > 4.8) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 3.2) setHasilBb('Normal');
        else if (beratBadan >= 2.7) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 59.5) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 49.8) setHasilTb('Normal');
        else if (tinggiBadan >= 47.8) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 2) {
        if (beratBadan > 5.8) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 3.9) setHasilBb('Normal');
        else if (beratBadan >= 3.4) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 63.2) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 53) setHasilTb('Normal');
        else if (tinggiBadan >= 51) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 3) {
        if (beratBadan > 6.6) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 4.5) setHasilBb('Normal');
        else if (beratBadan >= 4) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 66.1) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 55.6) setHasilTb('Normal');
        else if (tinggiBadan >= 53.5) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 4) {
        if (beratBadan > 7.3) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 5) setHasilBb('Normal');
        else if (beratBadan >= 4.4) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 68.6) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 57.8) setHasilTb('Normal');
        else if (tinggiBadan >= 55.6) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 5) {
        if (beratBadan > 7.8) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 5.4) setHasilBb('Normal');
        else if (beratBadan >= 4.8) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 70.7) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 59.6) setHasilTb('Normal');
        else if (tinggiBadan >= 57.4) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 6) {
        if (beratBadan > 8.2) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 5.7) setHasilBb('Normal');
        else if (beratBadan >= 5.1) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 72.5) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 61.2) setHasilTb('Normal');
        else if (tinggiBadan >= 58.9) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 7) {
        if (beratBadan > 8.6) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 6) setHasilBb('Normal');
        else if (beratBadan >= 5.3) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 74.2) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 62.7) setHasilTb('Normal');
        else if (tinggiBadan >= 60.3) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 8) {
        if (beratBadan > 9) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 6.3) setHasilBb('Normal');
        else if (beratBadan >= 5.6) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 75.8) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 64) setHasilTb('Normal');
        else if (tinggiBadan >= 61.7) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 9) {
        if (beratBadan > 9.3) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 6.5) setHasilBb('Normal');
        else if (beratBadan >= 5.8) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 77.4) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 65.3) setHasilTb('Normal');
        else if (tinggiBadan >= 62.9) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 10) {
        if (beratBadan > 9.6) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 6.7) setHasilBb('Normal');
        else if (beratBadan >= 5.9) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 78.9) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 66.5) setHasilTb('Normal');
        else if (tinggiBadan >= 64.1) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 11) {
        if (beratBadan > 9.9) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 6.9) setHasilBb('Normal');
        else if (beratBadan >= 6.1) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 80.3) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 67.7) setHasilTb('Normal');
        else if (tinggiBadan >= 65.2) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 12) {
        if (beratBadan > 10.1) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 7) setHasilBb('Normal');
        else if (beratBadan >= 6.3) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 81.7) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 68.9) setHasilTb('Normal');
        else if (tinggiBadan >= 66.3) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 13) {
        if (beratBadan > 10.4) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 7.2) setHasilBb('Normal');
        else if (beratBadan >= 6.4) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 83.1) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 70) setHasilTb('Normal');
        else if (tinggiBadan >= 67.3) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 14) {
        if (beratBadan > 10.6) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 7.4) setHasilBb('Normal');
        else if (beratBadan >= 6.6) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 84.4) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 71) setHasilTb('Normal');
        else if (tinggiBadan >= 68.3) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 15) {
        if (beratBadan > 10.9) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 7.6) setHasilBb('Normal');
        else if (beratBadan >= 6.7) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 85.7) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 72) setHasilTb('Normal');
        else if (tinggiBadan >= 69.3) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 16) {
        if (beratBadan > 11.1) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 7.7) setHasilBb('Normal');
        else if (beratBadan >= 6.9) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 87) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 73) setHasilTb('Normal');
        else if (tinggiBadan >= 70.2) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 17) {
        if (beratBadan > 11.4) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 7.9) setHasilBb('Normal');
        else if (beratBadan >= 7) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 88.2) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 74) setHasilTb('Normal');
        else if (tinggiBadan >= 71.1) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 18) {
        if (beratBadan > 11.6) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 8.1) setHasilBb('Normal');
        else if (beratBadan >= 7.2) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 89.4) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 74.9) setHasilTb('Normal');
        else if (tinggiBadan >= 72) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 19) {
        if (beratBadan > 11.8) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 8.2) setHasilBb('Normal');
        else if (beratBadan >= 7.3) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 90.6) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 75.8) setHasilTb('Normal');
        else if (tinggiBadan >= 72.8) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 20) {
        if (beratBadan > 12.1) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 8.4) setHasilBb('Normal');
        else if (beratBadan >= 7.5) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 91.7) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 76.7) setHasilTb('Normal');
        else if (tinggiBadan >= 73.7) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 21) {
        if (beratBadan > 12.3) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 8.6) setHasilBb('Normal');
        else if (beratBadan >= 7.6) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 92.9) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 77.5) setHasilTb('Normal');
        else if (tinggiBadan >= 74.5) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 22) {
        if (beratBadan > 12.5) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 8.7) setHasilBb('Normal');
        else if (beratBadan >= 7.8) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 94) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 78.4) setHasilTb('Normal');
        else if (tinggiBadan >= 75.2) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 23) {
        if (beratBadan > 12.8) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 8.9) setHasilBb('Normal');
        else if (beratBadan >= 7.9) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 95) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 79.2) setHasilTb('Normal');
        else if (tinggiBadan >= 76) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 24) {
        if (beratBadan > 13) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 9) setHasilBb('Normal');
        else if (beratBadan >= 8.1) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 96.1) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 80) setHasilTb('Normal');
        else if (tinggiBadan >= 76.7) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      }
    } else if (jenisKelamin === 'laki-laki') {
      if (umur === 1) {
        if (beratBadan > 5.1) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 3.4) setHasilBb('Normal');
        else if (beratBadan >= 2.9) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 60.6) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 50.8) setHasilTb('Normal');
        else if (tinggiBadan >= 48.9) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 2) {
        if (beratBadan > 6.3) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 4.3) setHasilBb('Normal');
        else if (beratBadan >= 3.8) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 64.4) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 54.4) setHasilTb('Normal');
        else if (tinggiBadan >= 52.4) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 3) {
        if (beratBadan > 7.2) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 5.0) setHasilBb('Normal');
        else if (beratBadan >= 4.4) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 67.6) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 57.3) setHasilTb('Normal');
        else if (tinggiBadan >= 55.3) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 4) {
        if (beratBadan > 7.8) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 5.6) setHasilBb('Normal');
        else if (beratBadan >= 4.9) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 70.1) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 59.7) setHasilTb('Normal');
        else if (tinggiBadan >= 57.6) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 5) {
        if (beratBadan > 8.4) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 6.0) setHasilBb('Normal');
        else if (beratBadan >= 5.3) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 72.2) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 61.7) setHasilTb('Normal');
        else if (tinggiBadan >= 59.6) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 6) {
        if (beratBadan > 8.8) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 6.4) setHasilBb('Normal');
        else if (beratBadan >= 5.7) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 74.0) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 63.3) setHasilTb('Normal');
        else if (tinggiBadan >= 61.2) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 7) {
        if (beratBadan > 9.2) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 6.7) setHasilBb('Normal');
        else if (beratBadan >= 5.9) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 75.7) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 64.8) setHasilTb('Normal');
        else if (tinggiBadan >= 62.7) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 8) {
        if (beratBadan > 9.6) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 6.9) setHasilBb('Normal');
        else if (beratBadan >= 6.2) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 77.2) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 66.2) setHasilTb('Normal');
        else if (tinggiBadan >= 64.0) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 9) {
        if (beratBadan > 9.9) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 7.1) setHasilBb('Normal');
        else if (beratBadan >= 6.4) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 78.7) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 67.5) setHasilTb('Normal');
        else if (tinggiBadan >= 65.2) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 10) {
        if (beratBadan > 10.2) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 7.4) setHasilBb('Normal');
        else if (beratBadan >= 6.6) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 80.1) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 68.7) setHasilTb('Normal');
        else if (tinggiBadan >= 66.4) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 11) {
        if (beratBadan > 10.5) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 7.6) setHasilBb('Normal');
        else if (beratBadan >= 6.8) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 81.5) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 69.9) setHasilTb('Normal');
        else if (tinggiBadan >= 67.6) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 12) {
        if (beratBadan > 10.8) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 7.7) setHasilBb('Normal');
        else if (beratBadan >= 6.9) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 82.9) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 71) setHasilTb('Normal');
        else if (tinggiBadan >= 68.6) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 13) {
        if (beratBadan > 11) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 7.9) setHasilBb('Normal');
        else if (beratBadan >= 7.1) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 84.2) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 72.1) setHasilTb('Normal');
        else if (tinggiBadan >= 69.6) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 14) {
        if (beratBadan > 11.3) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 8.1) setHasilBb('Normal');
        else if (beratBadan >= 7.2) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 85.5) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 73.1) setHasilTb('Normal');
        else if (tinggiBadan >= 70.6) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 15) {
        if (beratBadan > 11.5) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 8.3) setHasilBb('Normal');
        else if (beratBadan >= 7.4) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 86.7) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 74.1) setHasilTb('Normal');
        else if (tinggiBadan >= 71.6) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 16) {
        if (beratBadan > 11.7) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 8.4) setHasilBb('Normal');
        else if (beratBadan >= 7.5) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 88) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 75) setHasilTb('Normal');
        else if (tinggiBadan >= 72.5) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 17) {
        if (beratBadan > 12) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 8.6) setHasilBb('Normal');
        else if (beratBadan >= 7.7) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 89.2) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 76) setHasilTb('Normal');
        else if (tinggiBadan >= 73.3) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 18) {
        if (beratBadan > 12.2) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 8.8) setHasilBb('Normal');
        else if (beratBadan >= 7.8) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 90.4) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 76.9) setHasilTb('Normal');
        else if (tinggiBadan >= 74.2) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 19) {
        if (beratBadan > 12.5) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 8.9) setHasilBb('Normal');
        else if (beratBadan >= 8) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 91.5) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 77.7) setHasilTb('Normal');
        else if (tinggiBadan >= 75) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 20) {
        if (beratBadan > 12.7) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 9.1) setHasilBb('Normal');
        else if (beratBadan >= 8.1) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 92.6) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 78.6) setHasilTb('Normal');
        else if (tinggiBadan >= 75.8) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 21) {
        if (beratBadan > 12.9) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 9.2) setHasilBb('Normal');
        else if (beratBadan >= 8.2) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 93.8) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 79.4) setHasilTb('Normal');
        else if (tinggiBadan >= 76.5) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 22) {
        if (beratBadan > 13.2) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 9.4) setHasilBb('Normal');
        else if (beratBadan >= 8.4) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 94.9) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 80.2) setHasilTb('Normal');
        else if (tinggiBadan >= 77.2) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 23) {
        if (beratBadan > 13.4) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 9.5) setHasilBb('Normal');
        else if (beratBadan >= 8.5) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 95.9) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 81) setHasilTb('Normal');
        else if (tinggiBadan >= 78) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      } else if (umur === 24) {
        if (beratBadan > 13.4) setHasilBb('Risiko Berat Badan Lebih');
        else if (beratBadan >= 9.5) setHasilBb('Normal');
        else if (beratBadan >= 8.5) setHasilBb('Kurang');
        else setHasilBb('Sangat Kurang');

        if (tinggiBadan > 97) setHasilTb('Sangat Tinggi');
        else if (tinggiBadan >= 81.7) setHasilTb('Normal');
        else if (tinggiBadan >= 78.7) setHasilTb('Pendek');
        else setHasilTb('Sangat Pendek');
      }
    }

    setQuestion(true);
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNama(e.target.value);
  };

  const handleChangeJk = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setJenisKelamin(e.target.value);
  };

  const handleChangeUmur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUmur(Number(e.target.value));
  };

  const handleChangeBeratBadan = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBeratBadan(Number(e.target.value));
  };

  const handleChangeTinggiBadan = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTinggiBadan(Number(e.target.value));
  };

  return (
    <div>
      <Flex
        minH="100vh"
        minW="100vw"
        align="center"
        justify="center"
        bg="gray.50"
      >
        <Stack spacing={8} mx="auto" py={12}>
          <Stack align="center">
            <Heading fontSize="4xl" textAlign="center">
              Stunting Check
            </Heading>
            <Text fontSize="lg" color="gray.600">
              to check your baby&apos;s growth
            </Text>
          </Stack>
          {!question && (
            <DiagnoseForm
              handleChangeName={handleChangeName}
              handleChangeJk={handleChangeJk}
              handleChangeUmur={handleChangeUmur}
              handleChangeBeratBadan={handleChangeBeratBadan}
              handleChangeTinggiBadan={handleChangeTinggiBadan}
              handleSubmit={handleSubmit}
            />
          )}

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
    </div>
  );
};

export default Diagnose;
