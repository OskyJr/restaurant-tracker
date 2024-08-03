export enum RestaurantRating {
  ONE_STAR = 1,
  TWO_STAR = 2,
  THREE_STAR = 3,
  FOUR_STAR = 4,
  FIVE_STAR = 5
}

export interface RestaurantInterface {
  id: string;
  name: string;
  description: string;
  rating: RestaurantRating;
  address: string;
  images: string[];
  dateAdded: string;
}
