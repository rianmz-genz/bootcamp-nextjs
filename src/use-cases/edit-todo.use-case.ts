import { BaseApiResponse } from "@/domain/fetch";
import { TodoToEdit } from "@/domain/todo";
import { BaseUseCaseReturn } from "@/domain/use-case";
interface EditTodoUseCaseProps {
  submit: (id: number, data: TodoToEdit) => Promise<BaseApiResponse>;
  formData: FormData;
  id: number;
}
export const editTodoUseCase = async (
  context: EditTodoUseCaseProps
): Promise<BaseUseCaseReturn> => {
  try {
    const todo: TodoToEdit = {
      todo: context.formData.get("todo")?.toString() || "",
      completed: context.formData.get("completed") === "on",
    };

    const response = await context.submit(context.id, todo);
    return {
      ok: response.status,
      message: response.message,
    };
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.log(errorMessage);
    return {
      ok: false,
      message: errorMessage,
    };
  }
};
