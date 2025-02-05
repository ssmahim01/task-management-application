"use client"
import { useRouter } from "next/navigation";
import { MdUpdate } from "react-icons/md";
import { toast } from "react-toastify";

export default function UpdateTaskForm({task}) {
  const router = useRouter();
  const handleUpdateTask = async(event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.taskTitle.value;
    const description = form.description.value;
    const dueDate = form.dueDate.value;
    // console.log(taskTitle, description, dueDate);
    const taskData = {
      title,
      description,
      dueDate,
    }

    const res = await fetch(`http://localhost:3000/api/task/${task?._id}`, {
      method: "PATCH",
      body: JSON.stringify(taskData),
    });
    // console.log(res);
    if (res.ok) {
      toast.success("Successfully updated the task", {
        position: "top-center",
      });
      router.refresh();
      router.push("/manage-tasks");
    } else {
      toast.error("Failed to update the task!");
    }
  };

  return (
    <div className="hero py-20">
      <div className="lg:w-3/5 w-11/12 mx-auto flex-col">
        <div className="text-center pb-5">
          <h1 className="md:text-4xl text-3xl font-bold">
            Update The Task
          </h1>
        </div>

        <div className="bg-base-200 bg-opacity-70 shrink-0 shadow-lg rounded-lg">
          <form onSubmit={handleUpdateTask} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="font-bold">Task Title</span>
              </label>
              <input
                type="text"
                name="taskTitle"
                defaultValue={task?.title}
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
                defaultValue={task?.description}
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
                defaultValue={task?.dueDate}
                className="input input-bordered font-medium"
                required
              />
            </div>

            <div className="form-control mt-6 lg:w-1/4 md:w-2/5 w-11/12">
              <button className="btn bg-emerald-600 border-none text-white/90 hover:btn-primary font-bold rounded-md flex gap-2 items-center">
                <MdUpdate className="text-xl" /> <span className="text-lg">Update Task</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}