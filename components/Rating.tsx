import { Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";

type RatingProps = {
  rating: number;
  ratingCount: number;
};

const Rating = ({ rating, ratingCount }: RatingProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
      <View style={{ flexDirection: "row" }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Svg key={index} width="10" height="9" viewBox="0 0 10 9" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 7.5L2.95781 8.57364C2.591 8.76649 2.16228 8.45501 2.23234 8.04655L2.62236 5.77254L0.970192 4.16208C0.673434 3.87281 0.837189 3.36882 1.2473 3.30923L3.53054 2.97746L4.55163 0.908493C4.73504 0.53687 5.26496 0.53687 5.44837 0.908493L6.46946 2.97746L8.7527 3.30923C9.16281 3.36882 9.32657 3.87281 9.02981 4.16208L7.37764 5.77254L7.76766 8.04655C7.83772 8.45501 7.409 8.76649 7.04219 8.57364L5 7.5Z"
              fill={index + 1 <= rating ? "#ffba49" : "#bcbcbc"}
            />
          </Svg>
        ))}
      </View>

      <Text
        style={{
          fontFamily: "CircularStd-Book",
          fontSize: 10,
          color: "#9b9b9b",
        }}
      >{`(${ratingCount})`}</Text>
    </View>
  );
};

export default Rating;
