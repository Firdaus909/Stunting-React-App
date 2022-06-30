import React, { SetStateAction, useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { searchInstant } from '../service/services';
import { useAppDispatch } from '../store/hooks';
import { foodAction } from '../store/slice';

interface searchbarProps {
  setIsSearched: React.Dispatch<SetStateAction<boolean>>;
}

const Searchbar: React.FC<searchbarProps> = ({ setIsSearched }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleSubmit = async (keyword: string) => {
    try {
      const { data } = await searchInstant(keyword);
      dispatch(foodAction.setFood(data));
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw err;
      }
    }
  };

  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={async (values, { resetForm }) => {
        setIsSearched(false);
        setIsLoading(true);
        await handleSubmit(values.query);
        resetForm();
        setIsLoading(false);
        setIsSearched(true);
      }}
      validationSchema={Yup.object({
        query: Yup.string().required('Please Type Something!'),
      })}
    >
      {(formik) => (
        <Flex
          gap={3}
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
          width={{ base: '80%', md: '50%', lg: '30%' }}
        >
          <FormControl isInvalid={!!formik.errors.query}>
            <Input
              id="keyword"
              type="text"
              value={formik.values.query}
              onChange={formik.handleChange('query')}
            />
            <FormErrorMessage position="absolute">
              {formik.errors.query}
            </FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            isLoading={isLoading}
            loadingText="Searching..."
          >
            Search
          </Button>
        </Flex>
      )}
    </Formik>
  );
};

export default Searchbar;
