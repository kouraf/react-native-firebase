import React, { useState, useEffect } from 'react';
import { TextInput, Appbar, Button } from 'react-native-paper';
import { StyleSheet, View, Dimensions } from 'react-native';
import { useHistory, useParams } from "react-router-dom";
import firebase from 'firebase';

import db from '../fb';


const EditContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [num, setNum] = useState('');
    const history = useHistory();
    let { id } = useParams();

    const EditContact = () => {
        db.collection("contacts").doc(id).set({
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
    const DeleteContact = () => {
        db.collection("contacts").doc(id).delete().then(function () {
            history.push('/');
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }
    useEffect(() => {
        db.collection("contacts").doc(id).get().then(function (doc) {
            if (doc.exists) {
                const { email, name, num } = doc.data();
                setEmail(email);
                setName(name);
                setNum(num);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }, [])

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
                    icon="content-save-edit"
                    mode="outlined"
                    color="#b86f52"
                    style={styles.buttonEdit}
                    onPress={EditContact} />
                <Button
                    icon="trash-can-outline"
                    mode="outlined"
                    color="#1c3738"
                    style={styles.buttonDelete}
                    onPress={DeleteContact} />
            </View>
        </View>
    );
};

export default EditContact;

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
    buttonEdit: {
        margin: 25,
        borderRadius: 20,
        backgroundColor: '#1c3738',
    },
    buttonDelete: {
        margin: 25,
        borderRadius: 20,
        backgroundColor: '#b86f52',
    }
});