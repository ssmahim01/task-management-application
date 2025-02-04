"use client"
import { IoMdAddCircle } from "react-icons/io";
import { toast } from "react-toastify";

export default function AddTaskForm() {
  const handleAddTask = async(e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.taskTitle.value;
    const description = form.description.value;
    const dueDate = form.dueDate.value;
    // console.log(taskTitle, description, dueDate);
    const taskData = {
      title,
      description,
      dueDate
    }

    const res = await fetch("http://localhost:3000/api/task", {
      method: "POST",
      body: JSON.stringify(taskData),
    });
    console.log(res);
    if (res.ok) {
      toast.success("Successfully added the task", {
        position: "top-center",
      });
      form.reset();
    } else {
      toast.error("Failed to add the task!");
    }
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

            <div className="form-control mt-6 lg:w-1/4 md:w-2/5 w-11/12">
              <button className="btn bg-teal-600 border-none text-white/90 hover:btn-primary font-bold rounded-md flex gap-2 items-center">
                <IoMdAddCircle className="text-xl" /> <span className="text-lg">Add Task</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
