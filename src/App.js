import { useReducer } from 'react';
import './App.css';
import AddTaskModal from './components/add-task-modal/AddTaskModal';
import Header from './components/header/Header';
import TasksList from './components/tasks-lists/TasksList';
import taskReducer from './reducers/tasksReducer';

function App() {
  const initialState = {
    counter: 2,
    tasks:[
        {
            id: 1,
            taskName: "task 1",
            dueDate: "28/05/2022",
            category: "academic",
            isAPriority: true,
            isActive: true,
            details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ullam commodi fugiat voluptates eius, quo animi exercitationem eos accusantium repellendus."
        },
        {
            id: 2,
            taskName: "task 2",
            dueDate: "02/06/2022",
            category: "social",
            isAPriority: false,
            isActive: true,
            details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ullam commodi fugiat voluptates eius, quo animi exercitationem eos accusantium repellendus."
        }
    ]
};

const [state, dispatch] = useReducer(taskReducer, initialState);

  const handleCallback = (newTaskData) =>{
    console.log(newTaskData)
}

  return ( 
    <div className="App">
      <Header/>
      {/* AddTaskModal */}
      <AddTaskModal currentTasks={initialState.tasks} parentCallback = {handleCallback}/>
      {/* TasksList */}
      <TasksList tasks={initialState.tasks}/>
    </div>
  );
}

export default App;
