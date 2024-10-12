import React, { useState } from "react"; 
import {
    SafeAreaView,
} from "react-native";

import ToDoList from "./src/ToDoList";

const App = () : React.JSX.Element => {

    const [tasks, setTasks] = useState([
      'Do laundry',
      'Go to gym',
      'Walk dog'
    ]);
    
    return (
        <SafeAreaView>           
            <ToDoList tasks={tasks} />
        </SafeAreaView>
    );
}

export default App;
