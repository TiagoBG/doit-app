import React, { useRef } from "react";

export default function AddTaskModal({currentTasks, parentCallback}) {
    const taskNameRef = useRef();
    const dueDateRef = useRef();
    const categoryRef = useRef();
    const priorityRef = useRef();


    const handlerSubmitTask = () => {
        parentCallback({
            id: currentTasks.length + 1,
            taskName: taskNameRef.current.value,
            dueDate: dueDateRef.current.value,
            category: categoryRef.current.value,
            isAPriority: priorityRef.current.checked,
            isActive: true,
            details: ''
        });
    };

    return (
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
                                    <select id="categorySelector" className="form-control" style={{ marginLeft: '5px'}} ref={categoryRef}>
                                        <option value="other">Other</option>
                                        <option value="work">Work</option>
                                        <option value="academic">Academic</option>
                                    </select>
                                </div>
                                <div className="priority-form" style={{ display: "flex", flexFlow: "row", alignItems: 'baseline' }}>
                                <label htmlFor="prioritySelector" className="form-label">
                                    Mark as priority
                                </label>
                                <input type="checkbox" id="prioritySelector" style={{ marginLeft: '10px'}} ref={priorityRef}/>
                                </div>
                            </div>
                            <div className="m-4" style={{ display: "flex", flexFlow: "row", alignItems: 'center' }}>
                                <label htmlFor="categorySelector" className="form-label col-3">
                                    Details
                                </label>
                                <textarea id="" className="form-control"/>
                            </div>

                            <button
                                type="button"
                                className="btn btn-success m-3"
                                style={{fontWeight:'bold'}}
                                onClick={() => handlerSubmitTask()}
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary m-3"
                                data-bs-dismiss="modal"
                                style={{fontWeight:'bold'}}
                            >
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
