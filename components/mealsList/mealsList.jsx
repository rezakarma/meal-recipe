import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./mealItem";

const MealsList = ({items}) => {
  const renderMealItem = (itemData) => {
    // const pressHandler = () => {
    //   navigation.navigate('MealDetails', { mealId: itemData.item.id })
    // };
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      // onPress: pressHandler
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
