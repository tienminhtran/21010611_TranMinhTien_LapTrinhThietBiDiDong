import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const API_URL = 'https://67150c8133bc2bfe40b93603.mockapi.io/user';

export default function Info() {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [editId, setEditId] = useState(null);

    // Fetch users from the API when the component loads
    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    // Add or edit user
    const handleAddOrEditUser = () => {
        const userData = { name: username, mail: email, password };
        
        if (editId) {
            // Edit existing user
            fetch(`${API_URL}/${editId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            })
                .then(response => response.json())
                .then(updatedUser => {
                    setUsers(users.map(user => (user.id === editId ? updatedUser : user)));
                    resetForm();
                })
                .catch(error => console.error('Error updating user:', error));
        } else {
            // Add new user
            fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            })
                .then(response => response.json())
                .then(newUser => {
                    setUsers([...users, newUser]);
                    resetForm();
                })
                .catch(error => console.error('Error adding user:', error));
        }
    };

    // Delete user
    const handleDeleteUser = (id) => {
        fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setUsers(users.filter(user => user.id !== id));
            })
            .catch(error => console.error('Error deleting user:', error));
    };

    // Reset form after adding or editing
    const resetForm = () => {
        setUsername('');
        setEmail('');
        setPassword('');
        setEditId(null);
    };

    // Populate form with selected user's data for editing
    const handleEditUser = (user) => {
        setUsername(user.name);
        setEmail(user.mail);
        setPassword(user.password);
        setEditId(user.id);
    };

    return (
        <ScrollView style={styles.container}>
            {/* Input Section */}
            <View style={styles.inputSection}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Username:</Text>
                    <TextInput
                        style={styles.input}
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Enter username"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter email"
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter password"
                        secureTextEntry={true}
                    />
                </View>
            </View>

            {/* Add or Edit Button */}
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.addButton} onPress={handleAddOrEditUser}>
                    <Text style={styles.btnText}>{editId ? 'Edit' : 'Add'}</Text>
                </TouchableOpacity>
            </View>

            {/* User List Section */}
            <ScrollView style={styles.listSection}>
                {users.map(user => (
                    <View key={user.id} style={styles.listItem}>
                        <View style={styles.listInfo}>
                            <Text style={styles.label}>Username: {user.name}</Text>
                            <Text style={styles.label}>Email: {user.mail}</Text>
                            <Text style={styles.label}>Password: {user.password}</Text>
                        </View>
                        <View style={styles.buttonGroup}>
                            <TouchableOpacity style={styles.editButton} onPress={() => handleEditUser(user)}>
                                <Text style={styles.btnText}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteUser(user.id)}>
                                <Text style={styles.btnText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        paddingHorizontal: 20,
    },
    inputSection: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 18,
        color: '#333',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    btnContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    addButton: {
        backgroundColor: '#25C3D9',
        padding: 15,
        borderRadius: 10,
        width: '60%',
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
    },
    listSection: {
        flex: 4,
        marginTop: 20,
    },
    listItem: {
        flexDirection: 'row',
        backgroundColor: '#F0F1F6',
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listInfo: {
        flex: 3,
    },
    buttonGroup: {
        flexDirection: 'row',
    },
    editButton: {
        backgroundColor: '#25C3D9',
        padding: 10,
        borderRadius: 8,
        marginRight: 5,
    },
    deleteButton: {
        backgroundColor: '#FF6B6B',
        padding: 10,
        borderRadius: 8,
    },
});
