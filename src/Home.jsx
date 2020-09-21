import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { FAB, DataTable, } from 'react-native-paper';
import { useHistory } from "react-router-dom";
import db from '../fb';

const Home = () => {
  const [contacts, setContacts] = useState([]);
  let history = useHistory();

  function handleClick() {
    history.push("/add");
  }
  useEffect(() => {
    db.collection("contacts").orderBy("created", "desc")
      .onSnapshot(async (snapshot) => {
        const contacts = await snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setContacts(contacts)
      }, function (error) {
        console.log(error)
      });
  }, []);
  return (
    <View style={styles.container}>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        color="#fff"
        onPress={() => handleClick()}
      />
      <DataTable style={styles.tables}>
        <DataTable.Header
          style={styles.tablesHeader}
        >
          <DataTable.Title
            theme={{
              colors: {
                text: 'white',
              }
            }}
          >Name</DataTable.Title>
          <DataTable.Title
            theme={{
              colors: {
                text: 'white',
              }
            }}
          >Email</DataTable.Title>
          <DataTable.Title
            theme={{
              colors: {
                text: 'white',
              }
            }}
          >Num</DataTable.Title>
        </DataTable.Header>
        {
          contacts.length > 0 && contacts.map((contact, i) =>
            <DataTable.Row
              key={i}
              onPress={() => history.push(`/edit/${contact.id}`)}>
              <DataTable.Cell >{contact.name}</DataTable.Cell>
              <DataTable.Cell >{contact.email}</DataTable.Cell>
              <DataTable.Cell numeric>{contact.num}</DataTable.Cell>
            </DataTable.Row>
          )
        }
      </DataTable>
    </View >
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    zIndex: 10000
  },
  tables: {

  },
  tablesHeader: {
    backgroundColor: '#1c3738',
  },
  container: {
    backgroundColor: '#8baaad',
    height: Dimensions.get("window").height,
  }
})

export default Home;

