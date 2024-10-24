import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from "react-native";

type ToDoFormPropType = {
    addTask: (taskText: string) => void; 
};

function ToDoForm(props: ToDoFormPropType) : React.JSX.Element {

    const [taskText, setTaskText] = React.useState('');    
    
    return (
        <View style={styles.toDoView}>
            <TextInput
                style={styles.toDo}
                placeholder="Add a new task..."
                onChangeText={(text) => setTaskText(text)}
                value={taskText}
                />
            <Button title="Add Task" onPress={() => props.addTask(taskText)} />                                 
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

export default ToDoForm;
