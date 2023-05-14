import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text, useWindowDimensions, View } from "react-native";
import PriceBox from "./PriceBox";
import Rating from "./Rating";

type TrendingItemProps = {
  item: {
    id: string;
    name: string;
    store: string;
    price: number;
    rating: number;
    ratingCount: number;
    image: any;
  };
};

const TrendingItem = ({ item }: TrendingItemProps) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ width: width - 20, flexDirection: "row", gap: 10 }}>
      <View style={{ position: "relative" }}>
        <item.image />

        <PriceBox price={item.price} />
      </View>

      <View style={{ gap: 8 }}>
        <Text style={{ fontFamily: "CircularStd-Book", fontSize: 18 }}>
          {item.name}
        </Text>

        <Text
          style={{
            fontFamily: "CircularStd-Book",
            fontSize: 13,
            color: "#9b9b9b",
          }}
        >
          {item.store}
        </Text>

        <Rating rating={item.rating} ratingCount={item.ratingCount} />

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#8ea2ff", "#557ac7"]}
          style={{
            paddingHorizontal: 20,
            borderRadius: 6,
          }}
        >
          <Pressable
            style={{
              width: "100%",
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                fontFamily: "CircularStd-Book",
                fontSize: 12,
                color: "#fff",
              }}
            >
              Add to cart
            </Text>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
};

export default TrendingItem;
