import { Animated, StyleSheet, useWindowDimensions, View } from "react-native";

const Pagination = ({
  data,
  scrollX,
}: {
  data: any[];
  scrollX: Animated.Value;
}) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flexDirection: "row", gap: 8 }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.2],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={i}
            style={[styles.dot, { width: dotWidth, opacity }]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 5,
    borderRadius: 5,
    backgroundColor: "#8ea2ff",
  },
});

export default Pagination;
