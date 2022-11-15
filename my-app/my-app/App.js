import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <img src={require('./assets/azir.jpg')} 
      style={{ width: 420, height: 420 }}/>
      <Text>Manoel do Nascimento Fernandes, dale geraldinho, tinha feito essa atividade em React e depois fiquei sabendo que era React Native.</Text>
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
});
