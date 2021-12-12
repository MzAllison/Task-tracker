import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'React crash course',
        day: 'Dec 12th at 5:00pm',
        reminder: true,
    },

    {
        id: 2,
        text: 'Meeting with the girls',
        day: 'Dec 13th at 8:00pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Study with friends',
        day: 'Dec 14th at 11:00pm',
        reminder: false,
    },
])

// Delete Task 
const deleteTask = (id) {
  console.log('delete', id)
}
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete= {deleteTask} />
    </div>
  );
}

export default App;
