import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, SafeAreaView, ScrollView } from 'react-native';
import {Picker} from "@react-native-community/picker";

const FirstScreen = ({ navigation }) => {
  const [example, setExample] = useState([
    {
        name: "Apple",
        category: "fruit",
        location: "fridge",
        confection: "fresh",
        expirationDate: new Date('2024-10-10')
    },
    {
        name: "Broccoli",
        category: "vegetable",
        location: "fridge",
        confection: "fresh",
        expirationDate: new Date('2024-08-15')
    },
    {
        name: "Milk",
        category: "dairy",
        location: "fridge",
        confection: "fresh",
        expirationDate: new Date('2024-07-12')
    },
    {
        name: "Salmon",
        category: "fish",
        location: "freezer",
        confection: "frozen",
        expirationDate: new Date('2024-08-20')
    },
    {
        name: "Chicken Breast",
        category: "meat",
        location: "fridge",
        confection: "fresh",
        expirationDate: new Date('2024-06-08')
    },
    {
        name: "Orange Juice",
        category: "liquid",
        location: "fridge",
        confection: "fresh",
        expirationDate: new Date('2024-04-15')
    },
    {
        name: "Salt",
        category: "seasoning",
        location: "pantry",
        confection: "cured",
        expirationDate: new Date('2025-12-31')
    },
    {
        name: "Tomato",
        category: "vegetable",
        location: "fridge",
        confection: "fresh",
        expirationDate: new Date('2024-04-10')
    }
  ]);
  
  
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    location: '',
    confection: '',
    expDate: '',
  });

  const insertANewIngredient = () => {
    if (formData.name === '') {
      Alert.alert('Please write a name.');
    } else if (!validateDate(formData.expDate)) {
      Alert.alert('Please write a valid date (YYYY-MM-DD).');
    } else {
      const newIngredient = {
        name: formData.name,
        category: formData.category,
        location: formData.location,
        confection: formData.confection,
        expirationDate: new Date(formData.expDate),
      };
      setExample([...example, newIngredient]);
      setFormData({
        name: '',
        category: '',
        location: '',
        confection: '',
        expDate: '',
      });
      Alert.alert(formData.name + ' has been inserted correctly.');
    }
  };

  const handleChange = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const validateDate = (dateString) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateString);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Insert a new Ingredient:</Text>
        <TextInput
          value={formData.name}
          onChangeText={(text) => handleChange('name', text)}
          style={styles.input}
          placeholder="Name"
        />
        <TextInput
          value={formData.category}
          onChangeText={(text) => handleChange('category', text)}
          style={styles.input}
          placeholder="Category"
        />
        
        

        <TextInput
          value={formData.location}
          onChangeText={(text) => handleChange('location', text)}
          style={styles.input}
          placeholder="Location"
        />

        <TextInput
          value={formData.confection}
          onChangeText={(text) => handleChange('confection', text)}
          style={styles.input}
          placeholder="Confection"
        />

        <TextInput
          value={formData.expDate}
          onChangeText={(text) => handleChange('expDate', text)}
          style={styles.input}
          placeholder="Expiring Date (YYYY-MM-DD)"
        />
        <Button title="Add Ingredient" onPress={insertANewIngredient} />
        <Button
          title="Show My Ingredients"
          onPress={() => navigation.navigate('IngredientList', { example: example, setExample: setExample })}
        />
        <Button
          title="Show Expiring Ingredients"
          onPress={() => navigation.navigate('Expiring', { example: example })}
        />
      </ScrollView>
    </SafeAreaView>
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

export default FirstScreen;
