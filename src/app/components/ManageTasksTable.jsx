"use client";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

export default function ManageTasksTable({tasksData}) {
  const handleDeleteTask = (id) => {
    console.log(id);
  }

  return (
    <>
      <h1 className="text-center font-bold lg:text-4xl md:text-3xl text-2xl pb-5">Manage Tasks</h1>
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
                  <td className="text-gray-600 font-semibold">{task?.description.slice(0, 40)}...</td>
                  <td className="text-gray-600 font-semibold">{task?.dueDate}</td>
                  <td>
                    <Link
                      className="btn btn-neutral btn-sm text-white font-bold flex gap-2 items-center"
                      href={`/update-task/${task?._id}`}
                    >
                      <FaRegEdit className="lg:block hidden text-xl" /> <span>Update</span>
                    </Link>
                  </td>

                  <td>
                    <button
                      onClick={() => handleDeleteTask(task?._id)}
                      className="btn btn-error btn-sm text-white font-bold flex gap-2 items-center"
                    >
                      <FaRegTrashCan className="lg:block hidden text-xl" /> <span>Delete</span>
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
