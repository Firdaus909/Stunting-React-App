import { createSlice } from '@reduxjs/toolkit';
import FoodTypes from '../type/foodTypes';

interface FoodState {
  food: FoodTypes | null;
}

const initialState: FoodState = {
  food: null,
};

export const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    setFood(state, action) {
      return {
        ...state,
        food: action.payload,
      };
    },
  },
});

export const foodAction = foodSlice.actions;

export default foodSlice.reducer;
