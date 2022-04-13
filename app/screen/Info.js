import React, { useState, useEffect } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'
import axios from "axios";


export default function Info({ route }) {
    const [id, setId] = useState(route.params.id)
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [type, setType] = useState('')
    useEffect(() => {
        
        console.log(id);
        axios.get("http://192.168.1.10:3001/app/"+id).then((response)=>{
            console.log(response);
            setName(response.data[0].nom)
            setType(response.data[0].type)
            setDesc(response.data[0].desc)

        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    return (
        <View style={styles.container} >
            <Text style={styles.text} >{route.params.id}</Text>
            <Text style={styles.text} >{name}</Text>
            <Text>{desc}</Text>
            <Text>{type}</Text>
            <View style={styles.menu}>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        color:'red'
    },
    menu:{
        flex:1,
        flexDirection:'row',
        width:'30%',
        height:'50%',
        padding:20,
    },
    image:{
        width:'100%',
        height:'100%',
        opacity:0.8,
        borderColor:'red',
        borderWidth:3
    }
  });
