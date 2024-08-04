import { RestaurantCardProps } from "../components/RestaurantCard";
import { RestaurantRating } from "../interfaces/RestaurantInterface";

const urlHelper = (id: string): string => {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
}

export const mockRestaurantData: RestaurantCardProps = {
  id: "5f5644d0-196a-4a25-9721-d13efa8709f5",
  name: "Hvala",
  description: "Spacious and zen Japanese inspired cafe near City Hall MRT, offering a selection of mains like ochazuke, mixed soba and shio pan sandwiches, along with housemade waffles, warabi mochi and gelato",
  rating: RestaurantRating.FOUR_STAR,
  address: "333 North Bridge Rd, #01-11 Odeon Towers, Singapore 188721",
  images: [urlHelper('12L2-aJugGMnOQfVw7MgIJHZPDJo_JHtY')],
  dateAdded: new Date().toISOString(),
  onClickCallback: () => { },
};

export const mockRestaurantDataList: RestaurantCardProps[] = [
  mockRestaurantData,
  {
    ...mockRestaurantData,
    id: '2',
    name: "PS Cafe",
    description: "This stunning retreat for weary shoppers is housed inside a floating double-story greenhouse concept.",
    rating: RestaurantRating.THREE_STAR,
    images: [urlHelper('1yi472DfabqGpEo96eYfQiu0hyscxXR2L')],
  },
  {
    ...mockRestaurantData,
    id: '3',
    name: "Salted Caramel",
    description: "Serving hand-crafted ice cream made from scratch with superlative ingredients.",
    rating: RestaurantRating.FIVE_STAR,
    images: [urlHelper('1ek3quxScyvDvi_2KbvjoMWWtmAvciFke')],
  },
  {
    ...mockRestaurantData,
    id: '4',
    name: "Fish & Co",
    description: "Casual, family restaurant chain serving fresh seafood in a pan, a unique dining experience that drew inspiration from the Mediterranean fishermen who caught seafood fresh from the seas, cooked and ate it straight from the pan.",
    rating: RestaurantRating.FOUR_STAR,
    images: [urlHelper('19QWKcU9eqvhwwihwS03r1bRkKGDRIl72')],
  },
];