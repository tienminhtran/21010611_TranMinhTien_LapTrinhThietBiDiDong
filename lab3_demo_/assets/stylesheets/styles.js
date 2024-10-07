import * as React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    width: '100%',
    padding: '10px 20px',
    borderRadius: '5px',
    textTransform: 'uppercase',
    borderWidth: '1px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative'
  },
  buttonText: {
    textAlign: 'center'
  },
  buttonStartAddon: {
    position: 'absolute',
    start: '10px'
  },
  buttonEndAddon: {
    position: 'absolute',
    end: '10px'
  },
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: '10px 20px'
  },
  section: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    marginBottom: '15px'
  },
  phoneImage: {
    width: '100%',
    height: '320px'
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '20px'
  }
})