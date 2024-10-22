interface GetTodoResponse {
  todos: Todo[];
}

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface TodoToShow {
  id: number;
  todo: string;
  completed: boolean;
}

interface TodoToEdit {
  todo: string;
  completed: boolean;
}

export {
  Todo,
  TodoToShow,
  GetTodoResponse,
  TodoToEdit
}