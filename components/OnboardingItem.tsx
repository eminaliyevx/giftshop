import { useWindowDimensions, View } from "react-native";

type OnboardingItemProps = {
  item: {
    id: string;
    image: any;
  };
};

const OnboardingItem = ({ item }: OnboardingItemProps) => {
  const { width } = useWindowDimensions();

  return (
    <View>
      <item.image width={width - 60} />
    </View>
  );
};

export default OnboardingItem;
