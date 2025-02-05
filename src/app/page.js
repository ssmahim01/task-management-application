import { headers } from "next/headers";
import AllTasks from "./components/AllTasks";

const fetchTasks = async () => {
  const response = await fetch("https://task-management-application-azure-two.vercel.app/api/task", {
    headers: new Headers(await headers()),
  });
  const data = await response.json();
  return data;
};
export default async function Home() {
  const tasks = await fetchTasks();

  return (
    <div className="lg:w-4/5 w-11/12 mx-auto py-24">
      {/* {JSON.stringify(tasks)} */}

      {/* All Tasks */}
      <AllTasks tasks={tasks} />
    </div>
  );
}