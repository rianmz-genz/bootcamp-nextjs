import EditTodoForm from "./_components/edit-todo-form";
import getTodoByIdUseCase from "@/use-cases/get-todo-by-id.use-case";
import getTodoById from "@/data-access/get-todo-by-id.persistance";
import Link from "next/link";

export default async function EditTodoPage({
  params,
}: {
  params: Promise<{ todoId: string }>;
}) {
  const { todoId } = await params;
  const { ok, todo, message } = await getTodoByIdUseCase({
    getData: getTodoById,
    id: Number(todoId),
  });

  if (!ok) return <p className="text-red-500">{message}</p>;

  return (
    <div className="mx-auto max-w-screen-xl py-12">
      <Link href={"/todos"} className="underline">
        Home
      </Link>
      <h1 className="font-bold my-3 text-2xl">Edit Todos</h1>
      <EditTodoForm defaultValues={todo} />
    </div>
  );
}
