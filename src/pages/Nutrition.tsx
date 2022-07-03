import React, { useState } from 'react';
import {
  Flex, Heading, Text, VStack, Divider, Spacer,
} from '@chakra-ui/react';
import { useAppSelector } from '../store/hooks';
import Searchbar from '../component/Searchbar';
import FoodCard from '../component/FoodCard';

const Nutrition = () => {
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const { food } = useAppSelector((state) => state.food);
  const common = food?.common;
  const branded = food?.branded;

  return (
    <Flex direction="column" minH="100vh" alignItems="center">
      <Heading
        textAlign="center"
        my={{ base: 2, md: 4 }}
        fontSize={{ base: '2xl', md: '4xl' }}
      >
        Search for Food Nutrition
      </Heading>
      <Searchbar setIsSearched={setIsSearched} />
      {isSearched && (
        <Flex
          mt={{ base: 5, md: 10 }}
          direction={{ base: 'column', md: 'row' }}
          width="100%"
          px={{ base: 4, md: 8 }}
          alignItems={{ base: 'center', md: 'flex-start' }}
        >
          <VStack p={2} w={{ base: '100%', md: 'calc(50% - 2rem)' }}>
            <Heading fontSize={{ base: 'xl', md: '3xl' }}>Common Food</Heading>
            <Divider />
            {common && common.length > 0 ? (
              common.map((com) => (
                <React.Fragment key={com.food_name}>
                  <FoodCard {...com} />
                  <Divider />
                </React.Fragment>
              ))
            ) : (
              <Text>No Data Found</Text>
            )}
          </VStack>
          <Spacer />
          <VStack
            p={2}
            mt={{ base: 5, md: 0 }}
            w={{ base: '100%', md: 'calc(50% - 2rem)' }}
          >
            <Heading fontSize={{ base: 'xl', md: '3xl' }}>Branded Food</Heading>
            <Divider />
            {branded && branded.length > 0 ? (
              branded.map((brd) => (
                <React.Fragment key={brd.nix_item_id}>
                  <FoodCard {...brd} />
                  <Divider />
                </React.Fragment>
              ))
            ) : (
              <Text>No Data Found</Text>
            )}
          </VStack>
        </Flex>
      )}
    </Flex>
  );
};

export default Nutrition;
