import React, { useState } from "react"; 
import {
    SafeAreaView,
} from "react-native";

import ToDoList from "./src/ToDoList";
import ToDoForm from "./src/ToDoForm";

const App = () : React.JSX.Element => {

    const [tasks, setTasks] = useState([
      'Do laundry',
      'Go to gym',
      'Walk dog'
    ]);

    const addTask = (taskText: string) => {
        setTasks([...tasks, taskText]);
    };

    return (
        <SafeAreaView>           
            <ToDoForm addTask={addTask} /> 
            <ToDoList tasks={tasks} />
        </SafeAreaView>
    );
}

export default App;
