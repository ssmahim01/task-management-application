import { headers } from "next/headers";
import ManageTasksTable from "../components/ManageTasksTable";

const fetchAllTasks = async () => {
  const response = await fetch("https://task-management-application-azure-two.vercel.app/api/task", {
    headers: new Headers(await headers()),
  });
  const data = await response.json();
  return data;
};

export default async function ManageTasks() {
  const tasksData = await fetchAllTasks();
  
  return (
    <div className="lg:w-4/5 w-11/12 mx-auto py-20">
        <ManageTasksTable tasksData={tasksData} />
    </div>
  )
}