import { RestaurantCardProps } from "../components/RestaurantCard";
import { RestaurantRating } from "../interfaces/RestaurantInterface";

export const mockRestaurantData: RestaurantCardProps = {
  id: "5f5644d0-196a-4a25-9721-d13efa8709f5",
  name: "Hvala",
  description:
    "Spacious and zen Japanese inspired cafe near City Hall MRT, offering a selection of mains like ochazuke, mixed soba and shio pan sandwiches, along with housemade waffles, warabi mochi and gelato",
  rating: RestaurantRating.TERRIFIC,
  address: "333 North Bridge Rd, #01-11 Odeon Towers, Singapore 188721",
  images: ["/static/images/hvala.jpg"],
};

export const mockRestaurantDataList: RestaurantCardProps[] = [];

for (let i = 0; i < 10; ++i) {
  mockRestaurantDataList.push(mockRestaurantData);
  Array.isArray(mockRestaurantDataList);
}
