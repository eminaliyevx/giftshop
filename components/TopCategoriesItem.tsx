import { LinearGradient } from "expo-linear-gradient";
import { Text, useWindowDimensions, View } from "react-native";

type BestSellingItemProps = {
  item: {
    id: string;
    name: string;
    image: any;
    colors: string[];
  };
};

const TopCategoriesItem = ({ item }: BestSellingItemProps) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ width: (width - 20) / 5, gap: 10, marginRight: 20 }}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={item.colors}
        style={{
          width: "100%",
          padding: 10,
          borderRadius: 6,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <item.image height={40} />
      </LinearGradient>

      <Text style={{ fontFamily: "CircularStd-Book", fontSize: 12 }}>
        {item.name}
      </Text>
    </View>
  );
};

export default TopCategoriesItem;
