import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './FirstScreen.js'; 
import IngredientList from './ShowIngredient.js'; 
import Info from "./InfoIngredient.js";
import Expiring from "./ExpiringIngredient";
import Modify from "./ModifyIngredient.js";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="IngredientList"
          component={IngredientList}
          options={{ title: 'My Ingredients' }}
        />
        <Stack.Screen
        name="Info"
        component={Info}
        options={{title: 'Ingredient Info' }}
        />
        <Stack.Screen
        name="Expiring"
        component={Expiring}
        options={{title: 'Show Expiring Ingredients' }}
        />
        <Stack.Screen
        name="Modify"
        component={Modify}
        options={{title: 'Modify information of the ingredient' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
