import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function appPage3() {
  return (
    <LinearGradient
      colors={['#C7F4F6', '#D1F4F6', '#D1F4F6', '#D1F4F6', '#D1F4F6', '#D1F4F6', '#D1F4F6', '#D1F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
      style={styles.container}
    >
      <View style={styles.viewLock}>
        <Image
          source={require('./assets/icons8-lock-105.png')}
          style={styles.imageLock}
        />
      </View>

      <View style={styles.viewText}>
      <Text style={styles.title}>FORGET </Text>
      <Text style={styles.title}> PASSWORD</Text>
      </View>

      <View style={styles.email}>
        <Text style={styles.paragraph}>
          Provide your account’s email for which you want to reset your password
        </Text>

        <View style={styles.inputEmail}>
          <View style={styles.imageEmail}>
            <Image source={require('./assets/icons8-email-25.png')} />
          </View>
          <TextInput style={styles.input} placeholder="Email" />
        </View>
      </View>

      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewLock: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLock: {
    width: 105,
    height: 105,
  },
  viewText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputEmail: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  imageEmail: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  viewButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
