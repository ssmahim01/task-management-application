"use client"
export default function AddTaskForm() {
  const handleAddTask = (e) => {
    e.preventDefault();

    const form = e.target;
    const taskTitle = form.taskTitle.value;
    const description = form.description.value;
    const dueDate = form.dueDate.value;
    console.log(taskTitle, description, dueDate);
  };

  return (
    <div className="hero py-20">
      <div className="lg:w-3/5 w-11/12 mx-auto flex-col">
        <div className="text-center pb-5">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
            Add New Task
          </h1>
        </div>

        <div className="bg-base-200 bg-opacity-70 shrink-0 shadow-lg rounded-lg">
          <form onSubmit={handleAddTask} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="font-bold">Task Title</span>
              </label>
              <input
                type="text"
                name="taskTitle"
                pattern="^[A-Za-z\s]*$"
                placeholder="Write the task name"
                className="input input-bordered font-medium"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="font-bold">Task Description</span>
              </label>
              <textarea
                name="description"
                placeholder="Task Description"
                className="textarea textarea-bordered textarea-md font-medium"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="font-bold">Due Date</span>
              </label>
              <input
                type="date"
                name="dueDate"
                className="input input-bordered font-medium"
                required
              />
            </div>

            <div className="form-control mt-6 lg:w-2/5 md:w-1/2 w-11/12 mx-auto">
              <button className="btn bg-teal-600 border-none text-white/90 text-lg hover:btn-primary font-bold rounded-full">
                 Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
