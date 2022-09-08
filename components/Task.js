import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                
            <Text style={styles.itemText}>
                {props.text}
            </Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding:15,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 5,
        alignItems:'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent:'space-between',
        
        
},
    itemLeft: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems:'center',
        
},
    square: {
    backgroundColor: '#55BCF6',
        height:24,
        width: 24,
        opacity: 0.4,
        borderRadius: 5,
        marginRight:15
},
    itemText: {
    maxWidth:'80%',
},
    circular: {
        width: 12,
        height: 12,
        borderColor: ' #55BCF6',
        borderWidth: 2,
        borderRadius:5,
        

         
}
})
export default Task;