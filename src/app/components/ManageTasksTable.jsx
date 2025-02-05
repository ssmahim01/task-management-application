"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function ManageTasksTable({ tasksData }) {
  const router = useRouter();
  const handleDeleteTask = async (id) => {
    console.log(id);

    const response = await fetch(`https://task-management-application-azure-two.vercel.app/api/task/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      toast.success("Successfully deleted the task", {
        position: "top-center",
      });
      router.refresh();
    } else {
      toast.error("Failed to delete the task!");
    }
  };

  return (
    <>
      <h1 className="text-center font-bold lg:text-4xl md:text-3xl text-2xl pb-5">
        Manage Tasks
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full table table-zebra">
          <thead className="border border-gray-200">
            <tr className="*:text-gray-700">
              <th>Task Title</th>
              <th>Task Description</th>
              <td>Due Date</td>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasksData?.map((task) => {
              return (
                <tr key={task?._id} className="border border-gray-200">
                  <td className="text-gray-600 font-semibold">{task?.title}</td>
                  <td className="text-gray-600 font-semibold">
                    {task?.description.slice(0, 40)}...
                  </td>
                  <td className="text-gray-600 font-semibold">
                    {new Date(task?.dueDate).toLocaleDateString("en-UK")}
                  </td>
                  <td>
                    <Link
                      className="btn btn-neutral btn-sm text-white font-bold flex gap-2 items-center"
                      href={`/update-task/${task?._id}`}
                    >
                      <FaRegEdit className="lg:block hidden text-xl" />{" "}
                      <span>Update</span>
                    </Link>
                  </td>

                  <td>
                    <button
                      onClick={() => handleDeleteTask(task?._id)}
                      className="btn btn-error btn-sm text-white font-bold flex gap-2 items-center"
                    >
                      <FaRegTrashCan className="lg:block hidden text-xl" />{" "}
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
