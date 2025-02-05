import UpdateTaskForm from "@/app/components/UpdateTaskForm";

export default async function UpdateTask({params}) {
  const {id} = await params;
  const response = await fetch(`https://task-management.vercel.app/api/task/${id}`, {
    method: "GET"
  });
  const task = await response.json();

  return <UpdateTaskForm task={task} />
}
