import AllTasks from "./components/AllTasks";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/task", {
    method: "GET"
  });
  const tasks = await response.json();

  return (
    <div className="lg:w-4/5 w-11/12 mx-auto py-24">
      {/* {JSON.stringify(tasks)} */}

      {/* All Tasks */}
      <AllTasks tasks={tasks} />
    </div>
  );
}