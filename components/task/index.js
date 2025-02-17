import { TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import styles from './style';
const Task = (props) => {
    const {number}= props;
    const numberTest= number < 10 ? `0${number}`: number;
    const itemBackground= number%2 ===0 ? styles.even: styles.odd

    return (
        <TouchableOpacity onPress={props.onDeleteTask} >
            <View style={styles.item}>
                <View style={[styles.square,itemBackground]}>
                    <Text style={styles.number}>{numberTest}</Text>
                </View>
                <Text style={styles.content}>{props.title}</Text>
            </View>


        </TouchableOpacity>
    )
}

export default Task;

