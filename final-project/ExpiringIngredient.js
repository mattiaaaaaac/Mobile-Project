import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TextInput } from 'react-native';

const Expiring = ({ route, navigation }) => {
  const [days, setDays] = useState('');
  const [sortedIngredients, setSortedIngredients] = useState([]);
  const [expiredIngredients, setExpiredIngredients] = useState([]);

  const getData = route.params?.example || [];

  const sortedExpiringIngredients = (ingredients, days) => {
    const result = [];
    const expiredIngredients = [];
    const currentDate = new Date();
    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i].expirationDate <= (currentDate.getTime() + days * 24 * 60 * 60 * 1000) && ingredients[i].expirationDate >= currentDate.getTime()) {
        result.push(ingredients[i]);
      } else if (ingredients[i].expirationDate <= currentDate.getTime()) {
        expiredIngredients.push(ingredients[i]);
      }
    }
    result.sort((a, b) => new Date(a.expirationDate).getTime() - new Date(b.expirationDate).getTime());
    return { result, expiredIngredients };
  };

  const handleExpiryDateChange = (text) => {
    setDays(text);
    const sortedIng = sortedExpiringIngredients(getData, parseInt(text));
    setSortedIngredients(sortedIng.result);
    setExpiredIngredients(sortedIng.expiredIngredients);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter days until expiry"
        value={days}
        onChangeText={handleExpiryDateChange}
      />
      <Text style={styles.text}>Ingredients expiring:</Text>
      <FlatList
        data={sortedIngredients}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Button
              title={item.name}
              onPress={() => navigation.navigate('Info', { item: item })}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.text}>Expired Ingredients:</Text>
      <FlatList
        data={expiredIngredients}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Button
              title={item.name}
              onPress={() => navigation.navigate('Info', { item: item })}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
  listItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Expiring;
