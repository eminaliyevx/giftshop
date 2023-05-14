import { useRef, useState } from "react";
import { Animated, FlatList, Text, View, ViewToken } from "react-native";
import Category1Image from "../assets/images/category1.svg";
import Category2Image from "../assets/images/category2.svg";
import Category3Image from "../assets/images/category3.svg";
import Category4Image from "../assets/images/category4.svg";
import TopCategoriesItem from "./TopCategoriesItem";

const items = [
  {
    id: "category1",
    name: "Regular Gift",
    image: Category1Image,
    colors: ["#8ea2ff", "#557ac7"],
  },
  {
    id: "category2",
    name: "Box Gift",
    image: Category2Image,
    colors: ["#50f9b4", "#38cae9"],
  },
  {
    id: "category3",
    name: "Chocolate",
    image: Category3Image,
    colors: ["#ffb397", "#f46aa0"],
  },
  {
    id: "category4",
    name: "Gift with card",
    image: Category4Image,
    colors: ["#cf95ff", "#3b5cfe"],
  },
  {
    id: "category5",
    name: "Regular Gift",
    image: Category1Image,
    colors: ["#8ea2ff", "#557ac7"],
  },
];

const TopCategories = () => {
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
        <Text style={{ fontFamily: "CircularStd-Medium", fontSize: 21 }}>
          Top Categories
        </Text>

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
          renderItem={({ item }) => <TopCategoriesItem item={item} />}
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

export default TopCategories;
