// SearchInput.js
import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

interface SearchInputProps {
  placeholder: string;
  style?: object;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, style }) => {
  return (
    <View style={[styles.searchContainer, style]}>
      <AntDesign name="search1" color="#666" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 36,
    alignItems: "center",
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
});

export default SearchInput;
