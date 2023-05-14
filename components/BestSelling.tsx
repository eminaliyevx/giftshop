import { useRef, useState } from "react";
import { Animated, FlatList, Text, View, ViewToken } from "react-native";
import Product1Image from "../assets/images/product1.svg";
import Product2Image from "../assets/images/product2.svg";
import Product3Image from "../assets/images/product3.svg";
import BestSellingItem from "./BestSellingItem";

const items = [
  {
    id: "product1",
    name: "Product 1",
    price: 20,
    rating: 5,
    ratingCount: 444,
    image: Product1Image,
  },
  {
    id: "product2",
    name: "Product 2",
    price: 30,
    rating: 5,
    ratingCount: 430,
    image: Product2Image,
  },
  {
    id: "product3",
    name: "Product 3",
    price: 50,
    rating: 5,
    ratingCount: 321,
    image: Product3Image,
  },
  {
    id: "product4",
    name: "Product 4",
    price: 50,
    rating: 5,
    ratingCount: 321,
    image: Product3Image,
  },
  {
    id: "product5",
    name: "Product 5",
    price: 50,
    rating: 5,
    ratingCount: 321,
    image: Product3Image,
  },
];

const BestSelling = () => {
  const [_currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const ref = useRef(null);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setCurrentIndex(Number(viewableItems[0].index));
    }
  ).current;

  return (
    <View style={{ marginTop: 30 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: 20,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text style={{ fontFamily: "CircularStd-Medium", fontSize: 21 }}>
            Best Selling
          </Text>

          <Text
            style={{
              fontFamily: "CircularStd-Book",
              fontSize: 10,
              color: "#9b9b9b",
            }}
          >
            This week
          </Text>
        </View>

        <Text
          style={{
            fontFamily: "CircularStd-Book",
            fontSize: 10,
            color: "#557ac7",
          }}
        >
          See all
        </Text>
      </View>

      <View>
        <FlatList
          ref={ref}
          data={items}
          renderItem={({ item }) => <BestSellingItem item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
          style={{ marginBottom: 20 }}
        />
      </View>
    </View>
  );
};

export default BestSelling;
