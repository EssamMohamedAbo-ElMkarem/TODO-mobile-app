import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.squared}></TouchableOpacity>
                <Text style={styles.itemTitle}>{props.text} {props.id}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#FFF',
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:10,
        marginTop:30,
    },
    itemLeft:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
    },
    squared:{
        width:24,
        height:24,
        opacity:0.4,
        backgroundColor:'#55BCF6',
        borderRadius:5,
    },
    itemTitle:{
        paddingHorizontal:40,
        fontSize:18,
    },
    circular:{
        width:12,
        height:12,
        borderRadius:5,
        borderColor:'#55BCF6',
        borderWidth:2,
    },
});

export default Task;