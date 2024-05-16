import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Button, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [picker1SelectedValue, setPicker1SelectedValue] = useState("val-Apples-5");
  const [picker2SelectedValue, setPicker2SelectedValue] = useState("1");
  const [picker3SelectedValue, setPicker3SelectedValue] = useState("val-Artichokes-5");
  const [picker4SelectedValue, setPicker4SelectedValue] = useState("1");
  const [CalculatedValue, setCalculatedValue] = useState(0);

  const getPrice = (value) => parseInt(value.split('-')[2]);

  const calculateTotal = () => {
    const price1 = getPrice(picker1SelectedValue);
    const price2 = getPrice(picker3SelectedValue);
    const quantity1 = parseInt(picker2SelectedValue);
    const quantity2 = parseInt(picker4SelectedValue);
    const total = price1 * quantity1 + price2 * quantity2;
    setCalculatedValue(total);
    console.log("Total Cost of Order: $", total);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row1}>
        <Text style={styles.heading}> Welcome to POGS 🥕! </Text>
        <Image
        style={styles.image}
        source={{ uri: "https://i.pinimg.com/564x/52/f4/1d/52f41d9cf5fef52676f823718ff0f604.jpg"}}
        />
      </View>
      <View style={styles.row2}>
        <Picker
          style={styles.picker1}
          selectedValue={picker1SelectedValue}
          onValueChange={(itemValue, itemIndex) => setPicker1SelectedValue(itemValue)}
        >
          <Picker.Item label="Apples - $5" value="val-Apples-5" />
          <Picker.Item label="Bananas - $10" value="val-Bananas-10" />
          <Picker.Item label="Durian - $20" value="val-Durian-20" />
          <Picker.Item label="Grapes - $15" value="val-Grapes-15" />
          <Picker.Item label="Oranges - $10" value="val-Oranges-10" />
        </Picker>
        <Picker
          style={styles.picker2}
          selectedValue={picker2SelectedValue}
          onValueChange={(itemValue, itemIndex) => setPicker2SelectedValue(itemValue)}
        >
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
        </Picker>
      </View>
      <View style={styles.row3}>
        <Picker
          style={styles.picker1}
          selectedValue={picker3SelectedValue}
          onValueChange={(itemValue, itemIndex) => setPicker3SelectedValue(itemValue)}
        >
          <Picker.Item label="Artichokes - $5" value="val-Artichokes-5" />
          <Picker.Item label="Asparagus - $10" value="val-Asparagus-10" />
          <Picker.Item label="Beans - $20" value="val-Beans-20" />
          <Picker.Item label="Cabbages - $15" value="val-Cabbages-15" />
          <Picker.Item label="Cucumber - $10" value="val-Cucumber-10" />
        </Picker>
        <Picker
          style={styles.picker2}
          selectedValue={picker4SelectedValue}
          onValueChange={(itemValue, itemIndex) => setPicker4SelectedValue(itemValue)}
        >
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
        </Picker>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="CALCULATE" onPress={calculateTotal} />
      </View>
      <Text style={styles.totalText}> Total Cost: $ {CalculatedValue} </Text>
      <Text style={styles.bottomText}> Jordan Shao, Tony Do, My Linh Do, Ahnaf Ahmed Samin </Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3D3E3'
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 16 / 9,
  },
  row1: {
    marginTop: -10,
    alignItems: 'center'
  },
  row2: {
    flexDirection: 'row',
    marginTop: -20,
    justifyContent: 'center'
  },
  row3: {
    flexDirection: 'row',
    marginTop: -40,
    justifyContent: 'center'
  },
  picker1: {
    flex: 3
  },
  picker2: {
    flex: 1
  },
  buttonContainer: {
    marginTop: 0,
    alignItems: 'center'
  },
  bottomText: {
    fontSize:0,
    textAlign: 'center',
    marginTop: 20
  }
});
