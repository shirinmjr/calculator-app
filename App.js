import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>To Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Add List Item..." />
        <Button style={styles.buttonContainer} title="Add Item" />
      </View>
      <View>
        <Text style={{ fontSize: 30 }}>List Of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    borderBottomEndRadius: '50%',
  }



});
