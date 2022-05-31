import React from 'react';
import './header.scss';

export default function Header() {
  return (
    <header className='app-header'>
        <h1>DoIt App</h1>
        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#addTaskModal">
                <strong>Add new task</strong>
            </button>
    </header>
  )
}
