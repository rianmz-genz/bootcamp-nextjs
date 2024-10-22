import { GetTodoResponse, Todo, TodoToShow } from "@/domain/todo";
import { BaseUseCaseReturn } from "@/domain/use-case";

interface GetTodoListUseCaseProps {
  getData: () => Promise<GetTodoResponse>;
}

interface GetTodoListUseCaseReturn extends BaseUseCaseReturn {
  todos: TodoToShow[];
}

const presenter = (datas: Todo[]): TodoToShow[] => {
  return datas.map((data) => ({
    completed: data.completed,
    id: data.id,
    todo: data.todo,
  }));
};

export default async function getTodoListUseCase(
  context: GetTodoListUseCaseProps
): Promise<GetTodoListUseCaseReturn> {
  try {
    const responseData = await context.getData();
    return {
      todos: presenter(responseData.todos),
      ok: true,
    };
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.log(errorMessage);
    return {
      todos: [],
      ok: false,
      message: errorMessage,
    };
  }
}
