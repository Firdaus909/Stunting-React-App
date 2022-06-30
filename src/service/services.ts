import CommonFoodTypes from '../type/commonFoodTypes';
import FoodTypes from '../type/foodTypes';
import instance from './instance';

export const searchInstant = (keyword: string) =>
  instance.get<FoodTypes>('search/instant', {
    params: { query: keyword },
  });

export const naturalNutrient = (keyword: string) =>
  instance.post<CommonFoodTypes>('natural/nutrients', {
    query: keyword,
  });
