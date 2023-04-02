import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, ScrollView, TextInput, Pressable } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';


const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / (height * height)) * 703;
      setBMI(bmiValue.toFixed(2));
      setHeight('');
    }
  };

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarText}>BMI Calculator</Text>
        </View>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={(text) => setWeight(text)}
          keyboardType="numeric"
          placeholder="Weight (in pounds)"
        />
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={(text) => setHeight(text)}
          keyboardType="numeric"
          placeholder="Height (in inches)"
        />
        <Pressable style={styles.button} onPress={calculateBMI}>
          <Text style={styles.buttonText}>Calculate BMI</Text>
        </Pressable>
        {bmi && (
          <>
            <Text style={styles.bmiText}>Body Mass Index is {bmi}</Text>
          </>
        )}
        <Text style={styles.assessmentText}>
          Assessing Your BMI
        </Text>
        <Text style={styles.infoText}>
          {"   "}Underweight less than 18.5
        </Text>
        <Text style={styles.infoText}>
          {"   "}Healthy: 18.5 to 24.9
        </Text>
        <Text style={styles.infoText}>
          {"   "}Overweight: 25.0 to 29.9
        </Text>
        <Text style={styles.infoText}>
          {"   "}Obese: 30.0 or higher
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toolbar: {
    backgroundColor: '#f4511e',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    height: 100,
  },
  toolbarText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  inputLabel: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#34495e',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  bmiText: {
    fontSize: 28,
    marginBottom: 10,
    marginHorizontal: 10,
    textAlign: 'center',
    padding: 25,
  },
  assessmentText: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  infoText: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});

export default BMICalculator;
