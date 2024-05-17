import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Pressable, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [picker1SelectedValue, setPicker1SelectedValue] = useState("val-Select-0");
  const [picker2SelectedValue, setPicker2SelectedValue] = useState("0");
  const [picker3SelectedValue, setPicker3SelectedValue] = useState("val-Select-0");
  const [picker4SelectedValue, setPicker4SelectedValue] = useState("0");
  const [CalculatedValue, setCalculatedValue] = useState(0);

  const getPrice = (value) => parseInt(value.split("-")[2]);

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
    <SafeAreaView>
      <ScrollView>
        <View id="header">
          <Text style={styles.heading}> Welcome to POGS 🥕! </Text>
          <Image
            style={styles.image}
            source={{
              uri: "https://i.pinimg.com/564x/52/f4/1d/52f41d9cf5fef52676f823718ff0f604.jpg",
            }}
          />
        </View>
        <View id="fruits" style={{ flexDirection: "row" }}>
          <Picker
            style={styles.picker1}
            selectedValue={picker1SelectedValue}
            onValueChange={(itemValue) => setPicker1SelectedValue(itemValue)}
          >
            <Picker.Item label="Select a fruit" value="val-Select-0" />
            <Picker.Item label="Apples - $5" value="val-Apples-5" />
            <Picker.Item label="Bananas - $10" value="val-Bananas-10" />
            <Picker.Item label="Durian - $20" value="val-Durian-20" />
            <Picker.Item label="Grapes - $15" value="val-Grapes-15" />
            <Picker.Item label="Oranges - $10" value="val-Oranges-10" />
          </Picker>
          <Picker
            style={styles.picker2}
            selectedValue={picker2SelectedValue}
            onValueChange={(itemValue) => setPicker2SelectedValue(itemValue)}
          >
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
          </Picker>
        </View>
        <View id="veggies" style={{ flexDirection: "row" }}>
          <Picker
            style={styles.picker1}
            selectedValue={picker3SelectedValue}
            onValueChange={(itemValue) => setPicker3SelectedValue(itemValue)}
          >
            <Picker.Item label="Select a vegetable - $5" value="val-Select-0" />
            <Picker.Item label="Artichokes - $5" value="val-Artichokes-5" />
            <Picker.Item label="Asparagus - $10" value="val-Asparagus-10" />
            <Picker.Item label="Beans - $20" value="val-Beans-20" />
            <Picker.Item label="Cabbages - $15" value="val-Cabbages-15" />
            <Picker.Item label="Cucumber - $10" value="val-Cucumber-10" />
          </Picker>
          <Picker
            style={styles.picker2}
            selectedValue={picker4SelectedValue}
            onValueChange={(itemValue) => setPicker4SelectedValue(itemValue)}
          >
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
          </Picker>
        </View>
        <View id="actions" style={styles.actions}>
          <Pressable onPress={calculateTotal} style={styles.button}>
            <Text style={styles.buttonText}>Calculate</Text>
          </Pressable>
          <View style={styles.totalCostContainer}>
            <Text style={styles.totalCostText}>Total Cost: ${CalculatedValue}</Text>
          </View>
        </View>
        <View id="footer" style={styles.footer}>
          <Text style={styles.bottomText}>
            Jordan Shao, Tony Do, My Linh Do, Ahnaf Ahmed Samin
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 16 / 7,
  },

  picker1: {
    flex: 1,
  },
  picker2: {
    flex: 1,
  },
  actions: {
    marginTop: 16,
    gap: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#40A94A",
    flex: 1,
    paddingVertical: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  totalCostContainer: {
    flex: 1,
    backgroundColor: "#FDE598",
    borderRadius: 100,
    padding: 16,
  },
  totalCostText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
  },
  footer: {
    marginTop: 30,
  },
  bottomText: {
    textAlign: "center",
    fontWeight: "200",
  },
});