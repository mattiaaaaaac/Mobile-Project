import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';

const Modify = ({ route, navigation }) => {
  const { ingredient, setExample, example } = route.params;

  const [modifiedData, setModifiedData] = useState({
    name: ingredient.name || '',
    category: ingredient.category || '',
    location: ingredient.location || '',
    confection: ingredient.confection || '',
    expDate: ingredient.expDate || '',
  });

  const handleChange = (key, value) => {
    setModifiedData({ ...modifiedData, [key]: value });
  };

  const handleModify = () => {
    if (modifiedData.name === '') {
      Alert.alert('Please write a name.');
    } else {
      const modifiedIngredient = {
        name: modifiedData.name,
        category: modifiedData.category,
        location: modifiedData.location,
        confection: modifiedData.confection,
        expirationDate: new Date(modifiedData.expDate),
      };

      const updatedExample = example.map(item =>
        item === ingredient ? modifiedIngredient : item
      );

      setExample(updatedExample);
      
      navigation.navigate('FirstScreen');
      Alert.alert(modifiedData.name + ' has been modified correctly.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Modifying {modifiedData.name}</Text>
      <TextInput
        style={styles.input}
        value={modifiedData.name}
        onChangeText={(text) => handleChange('name', text)}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={modifiedData.category}
        onChangeText={(text) => handleChange('category', text)}
        placeholder="Category"
      />
      <TextInput
        style={styles.input}
        value={modifiedData.location}
        onChangeText={(text) => handleChange('location', text)}
        placeholder="Location"
      />
      <TextInput
        style={styles.input}
        value={modifiedData.confection}
        onChangeText={(text) => handleChange('confection', text)}
        placeholder="Confection"
      />
      <TextInput
        style={styles.input}
        value={modifiedData.expDate}
        onChangeText={(text) => handleChange('expDate', text)}
        placeholder="Expiration Date"
      />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    placeholderTextColor: 'grey',
  },
});

export default Modify;
