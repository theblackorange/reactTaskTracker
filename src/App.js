import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTasks from './components/AddTasks';
import {useState} from 'react';
//import { FaTeamspeak } from 'react-icons/fa';


function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks]= useState([
    {
        id:1,
        text: 'Study',
        day: 'March 29 10:00am',
        reminder: false,
    },
    {
        id:2,
        text: 'Yoga',
        day: 'March 29 06:00am',
        reminder: false,
    },
    {
        id:3,
        text: 'Work',
        day: 'March 29 12:00pm',
        reminder: false,
    },
])

//Add Tasks
const addTask = (task) => {
  console.log(task)
  const id = Math.floor(Math.random()*10000)+1
  const newTask= {id, ...task}
  setTasks([...tasks, newTask])
}

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=>task.id!==id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      { showAddTask && <AddTasks onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> )
      : (' No Tasks To Show')}
    </div>
  );
}

export default App;
