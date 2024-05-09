import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Info = ({ route, navigation }) => {
  const { item: ingredient, example, setExample } = route.params || {};

  const handleModify = () => {
    navigation.navigate('Modify', {
      ingredient: ingredient,
      setExample: setExample,
      example: example,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ingredient.name}</Text>
      <Text>Category: {ingredient.category}</Text>
      <Text>Location: {ingredient.location}</Text>
      <Text>Confection: {ingredient.confection}</Text>
      <Text>Expiration date: {ingredient.expirationDate ? new Date(ingredient.expirationDate).toDateString() : ''}</Text>
      <Button title="Modify Data" onPress={handleModify} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Info;
