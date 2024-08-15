import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryItem from "../components/categoryGridTile";


const CategoriesScreen = ({navigation}) => {

  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', { categoryId: itemData.item.id })
    };
    return (
      <CategoryItem
        id={itemData.item.id}
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        styl={styles.categoriesContainer}
        renderItem={renderCategoryItem}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {},
  categoriesContainer: {},
});
