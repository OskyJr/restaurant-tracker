export enum RestaurantRating {
  BAD = "Bad",
  AVERAGE = "Average",
  TERRIFIC = "Terrific",
}

export interface RestaurantInterface {
  id: string;
  name: string;
  description: string;
  rating: RestaurantRating;
  address: string;
  images: string[];
}
