import { Todo, TodoToShow } from "@/domain/todo";
import { BaseUseCaseReturn } from "@/domain/use-case";

interface GetTodoByIdUseCaseProps {
  getData: (id: number) => Promise<Todo>;
  id: number;
}

interface GetTodoByIdUseCaseReturn extends BaseUseCaseReturn {
  todo: TodoToShow;
}

const presenter = (data: Todo): TodoToShow => {
  return {
    completed: data.completed,
    id: data.id,
    todo: data.todo,
  };
};

export default async function getTodoByIdUseCase(
  context: GetTodoByIdUseCaseProps
): Promise<GetTodoByIdUseCaseReturn> {
  try {
    const responseData = await context.getData(context.id);
    return {
      todo: presenter(responseData),
      ok: true,
    };
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.log(errorMessage);
    return {
      todo: {
        completed: false,
        id: 0,
        todo: "",
      },
      ok: false,
      message: errorMessage,
    };
  }
}
