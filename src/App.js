import { useEffect, useReducer, useRef } from 'react';
import './App.css';
//import AddTaskModal from './components/add-task-modal/AddTaskModal';
import Header from './components/header/Header';
//import TasksList from './components/tasks-lists/TasksList';
import taskReducer from './reducers/tasksReducer';
import HealthIcon from './assets/images/health.jpg';
import './components/card task/card-task.scss';
import {CREATE, UPDATE, DELETE} from './actions/tasksActions';


function App() {
  const initialState = {
    counter: 2,
    tasks: [
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


  // * ADD TASK METHODS
  const taskNameRef = useRef();
  const dueDateRef = useRef();
  const categoryRef = useRef();
  const priorityRef = useRef();

useEffect(()=>{
  console.log(initialState.tasks)
}, [initialState.tasks])

  const handlerSubmitTask = () => {
    //dispatch(CREATE)
    console.log({
      id: initialState.tasks.length + 1,
      taskName: taskNameRef.current.value,
      dueDate: dueDateRef.current.value,
      category: categoryRef.current.value,
      isAPriority: priorityRef.current.checked,
      isActive: true,
      details: ''
    })

    initialState.tasks.push({
      id: initialState.tasks.length + 1,
      taskName: taskNameRef.current.value,
      dueDate: dueDateRef.current.value,
      category: categoryRef.current.value,
      isAPriority: priorityRef.current.checked,
      isActive: true,
      details: ''
    })

    initialState.counter++;

  };

  return (
    <div className="App">
      <Header />
      {/* AddTaskModal */}
      {/* <AddTaskModal currentTasks={initialState.tasks} parentCallback = {handleCallback}/> */}
      <div
        className="modal fade"
        id="addTaskModal"
        aria-labelledby="addTaskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addTaskModalLabel">
                New Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="new-task-form">
                <div
                  className="m-4"
                  style={{
                    display: "flex",
                    flexFlow: "row",
                    alignItems: "center",
                  }}
                >
                  <label htmlFor="taskNameInput" className="form-label col-3">
                    Task name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="taskNameInput"
                    ref={taskNameRef}
                  />
                </div>
                <div
                  className="m-4"
                  style={{
                    display: "flex",
                    flexFlow: "row",
                    alignItems: "center",
                  }}
                >
                  <label htmlFor="dueDateInput" className="form-label col-3">
                    Due date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dueDateInput"
                    ref={dueDateRef}
                  />
                </div>
                <div className="m-4" style={{ display: "flex", flexFlow: "row", alignItems: 'baseline', justifyContent: 'space-around' }}>
                  <div className="category-form" style={{ display: "flex", flexFlow: "row", alignItems: 'baseline' }}>
                    <label htmlFor="categorySelector" className="form-label col-6">
                      Task category
                    </label>
                    <select id="categorySelector" className="form-control" style={{ marginLeft: '5px' }} ref={categoryRef}>
                      <option value="other">Other</option>
                      <option value="work">Work</option>
                      <option value="academic">Academic</option>
                    </select>
                  </div>
                  <div className="priority-form" style={{ display: "flex", flexFlow: "row", alignItems: 'baseline' }}>
                    <label htmlFor="prioritySelector" className="form-label">
                      Mark as priority
                    </label>
                    <input type="checkbox" id="prioritySelector" style={{ marginLeft: '10px' }} ref={priorityRef} />
                  </div>
                </div>
                <div className="m-4" style={{ display: "flex", flexFlow: "row", alignItems: 'center' }}>
                  <label htmlFor="categorySelector" className="form-label col-3">
                    Details
                  </label>
                  <textarea id="" className="form-control" />
                </div>

                <button
                  type="button"
                  className="btn btn-success m-3"
                  data-bs-dismiss="modal"
                  style={{ fontWeight: 'bold' }}
                  onClick={() => handlerSubmitTask()}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-secondary m-3"
                  data-bs-dismiss="modal"
                  style={{ fontWeight: 'bold' }}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* TasksList */}
      {/* <TasksList tasks={initialState.tasks}/> */}
      <section style={{ display: 'flex', flexFlow: 'wrap', margin: '5% 0', justifyContent: 'space-around' }}>{
        initialState.tasks.map(task =>
          <div className="accordion-item" key={task.id} id="taskAccordion" style={{ width: '40%' }}>
            <h2 className="accordion-header" id="headingOne">
              <button className="crd-header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={{justifyContent: 'space-between'}}>
                <img src={HealthIcon} alt="task-icon" className="task-icon" />
                <h5 className="" >{task.taskName}</h5>
                <div className="task-info" style={{display: 'flex', flexFlow: 'row', justifyContent: 'flex-end', alignItems:'center', width: '400px'}}>
                {task.isAPriority ? <i className="bi bi-exclamation-triangle"></i>
                  : null}
                <i className="bi bi-caret-down-fill"></i>
                </div>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="dueDate-info">
                  <strong className="card-text">Due date</strong>
                  <p className="card-text due-date-value">{task.dueDate}</p>
                </div>
                <div className="description-info">
                  <strong className="card-text">Details</strong>
                  <p className="card-text">{task.details}</p>
                </div>
                <div className="option-buttons">
                  <button className=" btn btn-success done-button"><i className="bi bi-check2-square"></i> Mark as done</button>
                  <button className="btn btn-danger delete-button"><i className="bi bi-trash-fill"></i> Delete</button>
                </div>
              </div>
            </div>
          </div>
        )
      }</section>
    </div>
  );
}

export default App;
