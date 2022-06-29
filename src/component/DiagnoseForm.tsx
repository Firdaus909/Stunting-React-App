import React from 'react';
import { Box, FormControl, FormLabel, Input, HStack, Stack, Button, Select } from '@chakra-ui/react';

interface FormProps {
	handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleChangeJk: (e: React.ChangeEvent<HTMLSelectElement>) => void
	handleChangeUmur: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleChangeBeratBadan: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleChangeTinggiBadan: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

const DiagnoseForm:React.FC<FormProps> = ({
	handleChangeName,
	handleChangeJk,
	handleChangeUmur,
	handleChangeBeratBadan,
	handleChangeTinggiBadan,
	handleSubmit,
}) => {
	return (
		<div>
			<Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8} maxW={'xl'}>
				<Stack spacing={4}>
					<form onSubmit={handleSubmit}>
						<FormControl id="nama" isRequired>
							<FormLabel>Nama Anak</FormLabel>
							<Input type="text" name="nama" onChange={handleChangeName} />
						</FormControl>
						<HStack mt={3}>
							<Box>
								<FormControl id="jk" isRequired>
									<FormLabel>Jenis Kelamin</FormLabel>
									<Select placeholder="Select option" onChange={handleChangeJk}>
										<option id="perempuan" value="perempuan">
											Perempuan
										</option>
										<option id="laki-laki" value="laki-laki">
											Laki-laki
										</option>
									</Select>
								</FormControl>
							</Box>
							<Box>
								<FormControl id="umur" isRequired>
									<FormLabel>Umur (bulan)</FormLabel>
									<Input
										type="number"
										placeholder="10 bulan"
										name="umur"
										onChange={handleChangeUmur}
										min="1"
										max="16"
									/>
								</FormControl>
							</Box>
						</HStack>
						<HStack mt={3}>
							<Box>
								<FormControl id="berat" isRequired>
									<FormLabel>Berat Badan (Kg)</FormLabel>
									<Input
										type="number"
										placeholder="4.3 kg"
										name="bb"
										onChange={handleChangeBeratBadan}
										step="any"
										min="0"
									/>
								</FormControl>
							</Box>
							<Box>
								<FormControl id="tinggi" isRequired>
									<FormLabel>Tinggi Badan (Cm)</FormLabel>
									<Input
										type="number"
										placeholder="60 cm"
										name="tb"
										onChange={handleChangeTinggiBadan}
										step="any"
										min="0"
									/>
								</FormControl>
							</Box>
						</HStack>
						<Stack spacing={10} pt={2} mt={4}>
							<Button
								loadingText="Submitting"
								size="lg"
								bg={'blue.400'}
								color={'white'}
								_hover={{
									bg: 'blue.500',
								}}
								type="submit"
							>
								Lihat Hasil
							</Button>
						</Stack>
					</form>
				</Stack>
			</Box>
		</div>
	);
};

export default DiagnoseForm;
