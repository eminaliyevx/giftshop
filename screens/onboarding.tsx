import { LinearGradient } from "expo-linear-gradient";
import { useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Pressable,
  Text,
  View,
  ViewToken,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import OnboardingImage from "../assets/images/onboarding.svg";
import { OnboardingItem, Pagination } from "../components";

const items = [
  { id: "image1", image: OnboardingImage },
  { id: "image2", image: OnboardingImage },
  { id: "image3", image: OnboardingImage },
];

const Onboarding = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  const [_currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const ref = useRef(null);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setCurrentIndex(Number(viewableItems[0].index));
    }
  ).current;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: insets.top + 50,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left + 30,
        paddingRight: insets.right + 30,
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: "CircularStd-Bold",
            fontSize: 30,
            color: "#4a4a4a",
          }}
        >
          Buy gift for
        </Text>

        <Text
          style={{
            fontFamily: "CircularStd-Bold",
            fontSize: 30,
            color: "#4a4a4a",
          }}
        >
          beloved one
        </Text>
      </View>

      <View style={{ alignItems: "center", marginBottom: 80 }}>
        <FlatList
          ref={ref}
          data={items}
          renderItem={({ item }) => <OnboardingItem item={item} />}
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
        />

        <Pagination data={items} scrollX={scrollX} />
      </View>

      <View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#8ea2ff", "#557ac7"]}
          style={{
            marginBottom: 25,
            borderRadius: 6,
          }}
        >
          <Pressable
            style={{
              width: "100%",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text
              style={{
                fontFamily: "CircularStd-Bold",
                fontSize: 14,
                color: "#fff",
              }}
            >
              EXPLORE SHOP
            </Text>
          </Pressable>
        </LinearGradient>

        <Pressable>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 14,
              color: "#8ea2ff",
              textAlign: "center",
            }}
          >
            Learn More
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Onboarding;
