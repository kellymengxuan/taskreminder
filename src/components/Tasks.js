import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    // setTasks([...tasks,{}])
    //when you want to add new task should use as above shows
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;
