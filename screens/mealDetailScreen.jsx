import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import MealDetails from "../components/mealDetails";
import Subtitle from "../components/mealDetail/subtitle";
import List from "../components/mealDetail/list";
import IconButton from "../components/iconButton";
import { useDispatch, useSelector } from "react-redux";
// import { FavoritesContext } from "../store/context/favorites-context";
import { favoritesSliceAction } from "../store/redux/favorites-slice";
const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  // const favoriteMelsCtx = useContext(FavoritesContext);

  const favoriteMels = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMels.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      // favoriteMelsCtx.removeFavorite(mealId);
      dispatch(favoritesSliceAction.removeFavorites({ id: mealId }));
    } else {
      // favoriteMelsCtx.addFavorite(mealId);
      dispatch(favoritesSliceAction.addFavorites({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    const categoryTitle = MEALS.find((meal) => meal.id === mealId).title;
    navigation.setOptions({
      title: categoryTitle,
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            color="white"
            icon={mealIsFavorite ? "star" : "star-outline"}
          />
        );
      },
    });
  }, [mealId, navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainervv}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
