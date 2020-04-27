
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Header {}

function Header(props: any) {
  return (

    <View style={styles.header}>
       <View style={styles.divider}/>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.divider}/>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    backgroundColor: 'white',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  divider:{
    backgroundColor: '#22a9e3',
    height:5,
    width:15,
    flex:1,
    alignSelf:'center',
    marginLeft:10,
    marginRight:10,
}
});
