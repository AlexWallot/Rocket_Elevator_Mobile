import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, TextInput, Image, Button } from 'react-native';

export default function App() {

  const onPressHandler = ()=>{
    
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/R2-1.png')}
      />
      <Text style={styles.titleText}>
        {"Employee Email"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="useless placeholder"
      />
       <Button
        title="Connect"
        onPress={onPressHandler()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    marginTop: 20,
    marginBottom: 50,
    borderWidth: 1,
    padding: 10,
  },
  logo: {
    width: 200, 
    height: 200, 
    borderRadius: 200,
  },
  titleText: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: "bold"
  }
});
