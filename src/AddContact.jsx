import * as React from 'react';
import { TextInput, Appbar, Button } from 'react-native-paper';
import { StyleSheet, View, Dimensions } from 'react-native';
import { useHistory } from "react-router-dom";
import firebase from 'firebase';

import db from '../fb';


const addContact = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [num, setNum] = React.useState('');
    const history = useHistory();

    const addContact = () => {
        db.collection("contacts").add({
            name,
            email,
            num,
            created: firebase.firestore.Timestamp.fromDate(new Date())
        })
            .then(function (docRef) {
                history.push('/');
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }
    return (
        <View style={styles.container}>
            <Appbar style={styles.topBar}>
                <Appbar.Action
                    icon="arrow-collapse-left"
                    color="#b86f52"
                    onPress={() => history.push('/')}
                />
            </Appbar>
            <View style={styles.form}>
                <TextInput
                    label="Name"
                    value={name}
                    style={styles.input}
                    underlineColor="transparent"
                    theme={{
                        colors: {
                            placeholder: '#220c10', text: '#220c10', primary: 'transparent',
                            underlineColor: 'transparent'
                        }
                    }}
                    onChangeText={name => setName(name)}
                />
                <TextInput
                    label="Email"
                    style={styles.input}
                    value={email}
                    underlineColor="transparent"
                    theme={{
                        colors: {
                            placeholder: '#220c10', text: '#220c10', primary: 'transparent',
                            underlineColor: 'transparent'
                        }
                    }}
                    onChangeText={email => setEmail(email)}
                />
                <TextInput
                    label="Num"
                    style={styles.input}
                    value={num}
                    underlineColor="transparent"
                    theme={{
                        colors: {
                            placeholder: '#220c10', text: '#220c10', primary: 'transparent',
                            underlineColor: 'transparent'
                        }
                    }}
                    onChangeText={num => setNum(num)}
                />
                <Button
                    icon="pencil-plus-outline"
                    mode="outlined"
                    color="#b86f52"
                    style={styles.button}
                    onPress={addContact} />
            </View>
        </View>
    );
};

export default addContact;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8baaad'
    },
    topBar: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: '#1c3738',
    },
    form: {
        display: 'flex',
        height: Dimensions.get("window").height,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10
    },
    input: {
        marginBottom: 5,
        backgroundColor: '#fde2ff',
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    button: {
        margin: 25,
        borderRadius: 20,
        backgroundColor: '#1c3738',

    }
});