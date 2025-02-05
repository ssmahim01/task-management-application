import ManageTasksTable from "../components/ManageTasksTable";

export default async function ManageTasks() {
    const response = await fetch("http://localhost:3000/api/task", {
        method: "GET"
    });
    const tasksData = await response.json();

  return (
    <div className="lg:w-4/5 w-11/12 mx-auto py-20">
        <ManageTasksTable tasksData={tasksData} />
    </div>
  )
}