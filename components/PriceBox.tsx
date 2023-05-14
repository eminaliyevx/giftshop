import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

type PriceBoxProps = {
  price: number;
};

const PriceBox = ({ price }: PriceBoxProps) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#8ea2ff", "#557ac7"]}
      style={{
        position: "absolute",
        top: 6,
        left: 6,
        marginBottom: 25,
        padding: 5,
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
        ${price}
      </Text>
    </LinearGradient>
  );
};

export default PriceBox;
