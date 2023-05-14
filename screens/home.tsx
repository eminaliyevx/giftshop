import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BestSelling, TopCategories, Trending } from "../components";

const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        flex: 1,
        backgroundColor: "#fff",
        // paddingTop: insets.top,
        // paddingBottom: insets.bottom,
        paddingLeft: insets.left + 20,
        paddingRight: insets.right,
      }}
    >
      {/* <Search /> */}
      <Trending />
      <BestSelling />
      <TopCategories />
    </ScrollView>
  );
};

export default Home;
