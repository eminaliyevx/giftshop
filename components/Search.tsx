import { TextInput } from "react-native";

const Search = () => {
  return (
    <TextInput
      placeholder="Search"
      placeholderTextColor="#9b9b9b"
      style={{
        height: 50,
        marginTop: 10,
        marginRight: 20,
        paddingHorizontal: 10,
        fontFamily: "CircularStd-Book",
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: "#bcbcbc",
      }}
    />
  );
};

export default Search;
