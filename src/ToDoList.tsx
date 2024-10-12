import React from "react";
import {
    StyleSheet,
    Text,
    View, 
} from "react-native";

type ToDoListPropType = {
    tasks: string[]; 
};

function ToDoList(props: ToDoListPropType) : React.JSX.Element {

    const { tasks } = props;   
    
    return (
        <View style={styles.toDoView}>
            {tasks.map((task, index) => ( 
                <Text key={index} style={styles.toDo}> 
                    {task}
                </Text>
            ))}                                  
        </View>
    );
}

const styles = StyleSheet.create({
    toDo: {
        fontSize: 25,
    },
    toDoView: {
        margin: 20,
        padding: 20,        
    },
});

export default ToDoList;
