import { Text, useWindowDimensions, View } from "react-native";
import PriceBox from "./PriceBox";
import Rating from "./Rating";

type BestSellingItemProps = {
  item: {
    id: string;
    name: string;
    price: number;
    rating: number;
    ratingCount: number;
    image: any;
  };
};

const BestSellingItem = ({ item }: BestSellingItemProps) => {
  const { width } = useWindowDimensions();

  return (
    <View>
      <View style={{ width: (width - 20) / 3, position: "relative" }}>
        <item.image />

        <PriceBox price={item.price} />
      </View>

      <View>
        <Text style={{ fontFamily: "CircularStd-Book", fontSize: 18 }}>
          {item.name}
        </Text>

        <Rating rating={item.rating} ratingCount={item.ratingCount} />
      </View>
    </View>
  );
};

export default BestSellingItem;
