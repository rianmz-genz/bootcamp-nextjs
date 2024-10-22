import getTodoList from "@/data-access/get-todo-list.persistance";
import TodoTable from "./_components/todo-table";
import getTodoListUseCase from "@/use-cases/get-todo-list.use-case";

export default async function Home() {
  const { ok, todos, message } = await getTodoListUseCase({
    getData: getTodoList,
  });

  if (!ok) return <p className="text-red-500">{message}</p>;

  return (
    <div className="mx-auto max-w-screen-xl py-12">
      <h1 className="font-bold text-2xl">Todos</h1>
      <TodoTable todos={todos} />
    </div>
  );
}
