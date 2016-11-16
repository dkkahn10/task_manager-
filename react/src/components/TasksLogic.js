import React from 'react';
import Task from './Task';
import TaskEdit from './TaskEdit';
import TasksSection from './TasksSection';

const TasksLogic = props => {
  let allTasks = "";
  let taskList = "";
  let Tasks = props.Tasks;
  let handleNewTaskClick = props.handleNewTaskClick;
  let handleEditTaskClick = props.handleEditTaskClick;
  let handleEditTask = props.handleEditTask;
  let handleDeleteTaskClick = props.handleDeleteTaskClick;
  let handleTaskClick = props.handleTaskClick;
  let taskId = props.taskId;
  let projectId = props.projectId;
  let editTask = props.editTask;
  let handleEditChange = props.handleEditChange;
  let handleCancelTask = props.handleCancelTask;
  let Task = props.Task;
  let handleFieldChange = props.handleFieldChange;

  if (Tasks.length !== 0) {
    allTasks = Tasks.map(task => {
      let nonEditKey = `nonEdit_${task.id}`;
      let taskBlock = `taskBlock_${task.id}`;
      let newTaskClick = () => props.handleNewTaskClick();
      let handleEditTaskClick = () => props.handleEditTaskClick(task.id);
      let handleEditTask = () => props.handleEditTask();
      let handleDeleteTaskClick = () => props.handleDeleteTaskClick(task.id);
      let handleTaskClick = () => props.handleTaskClick(task.id);
      if (taskId !== task.id) {
        taskList =
          <Task
            key={nonEditKey}
            handleEditTaskClick={handleEditTaskClick}
            handleDeleteTaskClick={handleDeleteTaskClick}
            body={task.body}
          />
      } else {
        taskList =
          <TaskEdit
            editTask={editTask}
            handleEditChange={handleEditChange}
            handleEditTask={handleEditTask}
            handleCancelTask={handleCancelTask}
          />
      }
      return(
        <div key={taskBlock}>
          {taskList}
        </div>
      )
    });
  }
  return(
    <TasksSection
      allTasks={allTasks}
      Task={Task}
      handleFieldChange={handleFieldChange}
      handleNewTaskClick={handleNewTaskClick}
    />
  );
}

export default TasksLogic;
