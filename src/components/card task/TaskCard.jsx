import React from "react";
import './card-task.scss';
import HealthIcon from '../../assets/images/health.jpg';

export default function TaskCard({ task }) {

  return (
    <section>
      <div className="accordion-item" id="accordionExample" style={{ width: '40%' }}>
        <h2 className="accordion-header" id="headingOne">
          <button className="crd-header" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <img src={HealthIcon} alt="task-icon" className="task-icon" />
            <h5 className="">{task.name}</h5>
            {task.isAPriority ? <i className="bi bi-exclamation-triangle" style={{ marginLeft: '0.5rem' }}></i>
              : null}
            <i className="bi bi-caret-down-fill"></i>
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
              <button className=" btn btn-success done-mark"><i className="bi bi-check2-square"></i> Mark as done</button>
              <button className="btn btn-danger delete-button"><i className="bi bi-trash-fill"></i> Delete</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
