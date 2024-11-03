import React, { useReducer } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'tang':
            return { count: state.count + 1 };
        case 'tru':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const ReduxScreen = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return ( <
        View style = { styles.container } >
        <
        Text style = { styles.title } > Redux < /Text> <
        Text style = { styles.counter } > { state.count } < /Text> <
        TouchableOpacity style = { styles.button }
        onPress = {
            () => dispatch({ type: 'tang' }) } >
        <
        Text style = { styles.buttonText } > Tang < /Text> <
        /TouchableOpacity> <
        TouchableOpacity style = { styles.button }
        onPress = {
            () => dispatch({ type: 'tru' }) } >
        <
        Text style = { styles.buttonText } > Tru < /Text> <
        /TouchableOpacity> <
        /View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    counter: {
        fontSize: 48,
        marginBottom: 20,
    },
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default ReduxScreen;