import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
// import { naturalNutrient } from '../service/services';

interface Photo {
  thumb: string;
}

interface FoodProps {
  food_name: string;
  serving_unit: string;
  serving_qty: number;
  photo: Photo;
  brand_name?: string;
  nf_calories?: number;
}

const FoodCard: React.FC<FoodProps> = ({
  food_name: foodName,
  serving_unit: servingUnit,
  serving_qty: servingQty,
  photo,
  brand_name: brandName,
  nf_calories: calories,
}) =>
// Close Because API Limit Usage

// const [calories, setCalories] = useState<number>(0);

// const getCommonCalories = async () => {
//   try {
//     const { data } = await naturalNutrient(food_name);
//     setCalories(data.foods[0].nf_calories);
//   } catch (err: unknown) {
//     if (err instanceof Error) {
//       throw err;
//     }
//   }
// };

// useEffect(() => {
//   getCommonCalories();
// }, []);

  (
    <Box w="100%" px={2}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box maxW={{ base: '3rem', lg: '5rem' }}>
          <Image w="fill" h="fill" src={photo.thumb} />
        </Box>
        <Flex flexGrow={1} mx={{ base: 2, lg: 4 }} alignItems="center">
          <Flex
            direction="column"
            w="100%"
            mr={2}
          >
            <Heading
              textTransform="capitalize"
              fontSize={{ base: 'md', lg: 'xl' }}
              lineHeight={{ base: 1, md: 1.25 }}
              mb={1}
            >
              {foodName}
            </Heading>
            {brandName && <Heading fontSize={{ base: 'xs', lg: 'md' }}>{brandName}</Heading>}
            <Text fontSize={{ base: 'xs', lg: 'md' }}>
              {servingQty}
              {' '}
              {servingUnit}
            </Text>
          </Flex>
          <Spacer />
          <Flex direction="column" mr={{ base: 2, lg: 4 }} textAlign="center">
            <Heading fontSize={{ base: 'sm', lg: 'lg' }}>
              {calories ? calories.toFixed() : '109'}
            </Heading>
            <Text fontSize={{ base: 'sm', lg: 'md' }}>Calories</Text>
          </Flex>
        </Flex>
        <IconButton
          display={{ base: 'none', sm: 'flex' }}
          aria-label="Add Food"
          icon={<FaPlus />}
          variant="ghost"
        />
      </Flex>
    </Box>
  );
export default FoodCard;
