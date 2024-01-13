import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import globalStyles from './src/styles/globleStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager app</Text>
      {/* <StatusBar style="auto" /> */}
      <Text style={[globalStyles.whiteText, styles.text]}>
        Go to notes.txt 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title:{
    fontSize: 25,
    fontWeight: '700',
    color: '#1DA1F2',
    marginBottom: 20,
  },
  text:{
    fontSize: 18,
    fontWeight: '400',
  }
});
