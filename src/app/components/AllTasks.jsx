"use client"

export default function AllTasks({tasks}) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
      {tasks.map((task) => (
        <div
          key={task?._id}
          className="p-4 bg-base-100 bg-opacity-60 shadow-md border border-gray-200 rounded-box hover:scale-105 hover:transition-transform duration-300"
        >
          <div className="space-y-2">
            <h4 className="text-gray-800 text-xl font-bold mb-2">
              {task?.title}
            </h4>
            <p className="text-base text-gray-600 font-semibold">
              {task?.description}
            </p>
            <p className="text-lg">
              <span className="text-gray-800 font-bold">Due Date: </span>{" "}
              <span className="text-gray-600 font-semibold">
                {task?.dueDate}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
