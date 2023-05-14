import { useRef, useState } from "react";
import { Animated, FlatList, Text, View, ViewToken } from "react-native";
import ProductImage from "../assets/images/product.svg";
import Pagination from "./Pagination";
import TrendingItem from "./TrendingItem";

const items = [
  {
    id: "product1",
    name: "Product 1",
    store: "Store 1",
    price: 30,
    rating: 5,
    ratingCount: 301,
    image: ProductImage,
  },
  {
    id: "product2",
    name: "Product 2",
    store: "Store 2",
    price: 30,
    rating: 5,
    ratingCount: 301,
    image: ProductImage,
  },
  {
    id: "product3",
    name: "Product 3",
    store: "Store 3",
    price: 30,
    rating: 5,
    ratingCount: 301,
    image: ProductImage,
  },
];

const Trending = () => {
  const [_currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const ref = useRef(null);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setCurrentIndex(Number(viewableItems[0].index));
    }
  ).current;

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontFamily: "CircularStd-Medium", fontSize: 21 }}>
          Todays Trending
        </Text>

        <Text
          style={{
            fontFamily: "CircularStd-Book",
            fontSize: 10,
            color: "#9b9b9b",
          }}
        >
          13th May
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <FlatList
          ref={ref}
          data={items}
          renderItem={({ item }) => <TrendingItem item={item} />}
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

        <Pagination data={items} scrollX={scrollX} />
      </View>
    </View>
  );
};

export default Trending;
