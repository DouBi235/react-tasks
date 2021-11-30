/*
 * @Author: your name
 * @Date: 2021-11-28 15:53:05
 * @LastEditTime: 2021-11-30 17:53:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react-mytask\src\App.js
 */
// react-hook
import { useState, useEffect } from 'react';
// router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// cpns
import About from './components/About';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(async () => {  
    const tasksFormServer = await fetchTasks();
    setTasks(tasksFormServer)
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5678/tasks');
    return await res.json()
  }

  // Fetch Task
  const fetchTask = async id => {
    const res = await fetch(`http://localhost:5678/tasks/${id}`);
    return await res.json();
  }

  // Add Task
  const addTask = async (task) => {
    console.log(task);
    const res = await fetch('http://localhost:5678/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    
    setTasks([...tasks, data]);
  }

  // Delete Task
  const deleteTask = async id => {
    const res = await fetch(`http://localhost:5678/tasks/${ id }`, { method: 'DELETE' });
    
    // 判断状态码是否等于200
    res.status === 200
      ? setTasks(tasks.filter(item => item.id != id))
      : alert('Error Deleting This Task');
  }
  
  // Toggle Reminder
  const toggleReminder = async id => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(`http://localhost:5678/tasks/${ id }`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json();
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  // 主体内容
  const Content = () => (
    <>
      { showAddTask && <AddTask onAdd={ addTask } /> }
      { tasks.length ? <Tasks tasks={ tasks } onDelete={ deleteTask } onToggle={ toggleReminder }/> : 'No Tasks To Show' }
    </>
  );

   return (
    <div className="container">
      <Header
        onAdd={ () => setShowAddTask(!showAddTask) }
        showAdd={ showAddTask }
      />
      <Routes>
        <Route path='/' exact={ false } element={ <Content /> } />
        <Route path='/about' element={ <About /> } />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App;
