interface Photo {
  thumb: string;
}

export interface Common {
  food_name: string;
  serving_unit: string;
  serving_qty: number;
  photo: Photo;
}

export interface Branded {
  food_name: string;
  serving_unit: string;
  serving_qty: number;
  nf_calories: number;
  photo: Photo;
  brand_name: string;
  nix_item_id: string;
}

export default interface FoodTypes {
  common: Common[];
  branded: Branded[];
}
