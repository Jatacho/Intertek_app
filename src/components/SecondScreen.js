import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SecondScreen = ({ navigation }) => {

  const [day, setDay] = useState('00');
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');
  const [second, setSecond] = useState('00');

  const [day2, setDay2] = useState('00');
  const [hour2, setHour2] = useState('00');
  const [minute2, setMinute2] = useState('00');
  const [second2, setSecond2] = useState('00');
  
  return (
    <View style={styles.container}>

      <Image 
        source={require('../../assets/Maquina.png')} 
        style={styles.image}
      />
      
      <Text style={styles.title}>TIEMPO DE ENCENDIDO</Text>
      <View style={styles.pickerRow}>
        {/* Día */}
        <View style={styles.pickerLabelContainer}>
          <Text style={styles.pickerLabel}>Día</Text>
          <View style={styles.pickerContainer}>
            <Text style={styles.selectedValue}> {day}</Text>
            <Picker
              selectedValue={day}
              style={styles.picker}
              onValueChange={(itemValue) => setDay(itemValue)}
            >
              {[...Array(32).keys()].map((day) => (
                <Picker.Item key={day} label={(day).toString().padStart(2, '0')} value={day} />
              ))}
            </Picker>
            
          </View>
        </View>

        {/* Hora */}
        <View style={styles.pickerLabelContainer}>
          <Text style={styles.pickerLabel}>Hora</Text>
          <View style={styles.pickerContainer}>
          <Text style={styles.selectedValue}>: {hour}</Text>
            <Picker
              selectedValue={hour}
              style={styles.picker}
              onValueChange={(itemValue) => setHour(itemValue)}
            >
              {[...Array(24).keys()].map((hour) => (
                <Picker.Item key={hour} label={hour.toString().padStart(2, '0')} value={hour} />
              ))}
            </Picker>
          </View>
        </View>

        {/* Minuto */}
        <View style={styles.pickerLabelContainer}>
          <Text style={styles.pickerLabel}>Minuto</Text>
          <View style={styles.pickerContainer}>
          <Text style={styles.selectedValue}>: {minute}</Text>
            <Picker
              selectedValue={minute}
              style={styles.picker}
              onValueChange={(itemValue) => setMinute(itemValue)}
            >
              {[...Array(60).keys()].map((minute) => (
                <Picker.Item key={minute} label={minute.toString().padStart(2, '0')} value={minute} />
              ))}
            </Picker>
            
          </View>
        </View>

        {/* Segundo */}
        <View style={styles.pickerLabelContainer}>
          <Text style={styles.pickerLabel}>Segundo</Text>
          <View style={styles.pickerContainer}>
          <Text style={styles.selectedValue}>: {second}</Text>
            <Picker
              selectedValue={second}
              style={styles.picker}
              onValueChange={(itemValue) => setSecond(itemValue)}
            >
              {[...Array(60).keys()].map((second) => (
                <Picker.Item key={second} label={second.toString().padStart(2, '0')} value={second} />
              ))}
            </Picker>
          </View>
        </View>
      </View>

      <Text style={styles.title}>TIEMPO DE APAGADO</Text>
      <View style={styles.pickerRow}>
        {/* Día */}
        <View style={styles.pickerLabelContainer}>
          <Text style={styles.pickerLabel}>Día</Text>
          <View style={styles.pickerContainer}>
          <Text style={styles.selectedValue}> {day2}</Text>
            <Picker
              selectedValue={day2}
              style={styles.picker}
              onValueChange={(itemValue) => setDay2(itemValue)}
            >
              {[...Array(32).keys()].map((day) => (
                <Picker.Item key={day} label={(day).toString().padStart(2, '0')} value={day} />
              ))}
            </Picker>
            
          </View>
        </View>

        {/* Hora */}
        <View style={styles.pickerLabelContainer}>
          <Text style={styles.pickerLabel}>Hora</Text>
          <View style={styles.pickerContainer}>
          <Text style={styles.selectedValue}>: {hour2}</Text>
            <Picker
              selectedValue={hour2}
              style={styles.picker}
              onValueChange={(itemValue) => setHour2(itemValue)}
            >
              {[...Array(24).keys()].map((hour) => (
                <Picker.Item key={hour} label={hour.toString().padStart(2, '0')} value={hour} />
              ))}
            </Picker>
            
          </View>
        </View>

        {/* Minuto */}
        <View style={styles.pickerLabelContainer}>
          <Text style={styles.pickerLabel}>Minuto</Text>
          <View style={styles.pickerContainer}>
          <Text style={styles.selectedValue}>: {minute2}</Text>
            <Picker
              selectedValue={minute2}
              style={styles.picker}
              onValueChange={(itemValue) => setMinute2(itemValue)}
            >
              {[...Array(60).keys()].map((minute) => (
                <Picker.Item key={minute} label={minute.toString().padStart(2, '0')} value={minute} />
              ))}
            </Picker>
            
          </View>
        </View>

        {/* Segundo */}
        <View style={styles.pickerLabelContainer}>
          <Text style={styles.pickerLabel}>Segundo</Text>
          <View style={styles.pickerContainer}>
          <Text style={styles.selectedValue}>: {second2}</Text>
            <Picker
              selectedValue={second2}
              style={styles.picker}
              onValueChange={(itemValue) => setSecond2(itemValue)}
            >
              {[...Array(60).keys()].map((second) => (
                <Picker.Item key={second} label={second.toString().padStart(2, '0')} value={second} />
              ))}
            </Picker>
            
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Establecer" color="#FFD700" onPress={() => console.log('Picker 1:', day, hour, minute, second)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Visualizar informacion" color="#FFD700" onPress={() => console.log('Picker 1:', day, hour, minute, second)} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  
  image: {
    width: 100,
    height: 100,
    marginLeft: 120,
    marginBotton: 80,
    alignItems: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    alignItems: 'center',
  },
  pickerLabelContainer: {
    alignItems: 'center',
    width: 100,
  },
  pickerLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: 35,
    borderWidth: 1,
    textAlign: 'flex-end',
    alignItems: 'flex-end',
    borderColor: '#FFD700', // Amarillo
    borderRadius: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30
  },
  selectedValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  
});

export default SecondScreen;
