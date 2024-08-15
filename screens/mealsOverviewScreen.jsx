import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/mealsList/mealItem";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/mealsList/mealsList";
const MealsOverviewScreen = ({ route, navigation }) => {
  // const route = useRoute()
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId,navigation]);

  return <MealsList items={displayedMeals}/>

};

export default MealsOverviewScreen;

