import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    textTransform: 'uppercase',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 35
  },
  buttonText: {
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  section: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15
  },
  phoneImage: {
    width: 90,
    height: 320
  },
  rating: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 20
  }
})