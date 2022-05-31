import React from 'react'
import TaskCard from '../card task/TaskCard';

export default function TasksList({tasks}) {    

  return (
    <section style={{display: 'flex', flexFlow: 'wrap'}}>{
        tasks.map(task => <TaskCard key={task.id} task={task}/>)
      }</section>
  )
}
