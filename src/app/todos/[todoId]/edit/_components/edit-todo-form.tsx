"use client";
import editTodo from "@/data-access/edit-todo.persistance";
import { TodoToShow } from "@/domain/todo";
import { editTodoUseCase } from "@/use-cases/edit-todo.use-case";
import React from "react";

interface EditTodoFormProps {
  defaultValues: TodoToShow;
}

export default function EditTodoForm({ defaultValues }: EditTodoFormProps) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const { message } = await editTodoUseCase({
      formData: formData,
      submit: editTodo,
      id: defaultValues.id,
    });
    alert(message);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="todo"
          className="block text-sm font-medium text-gray-700"
        >
          Todo:
        </label>
        <input
          type="text"
          name="todo"
          id="todo"
          defaultValue={defaultValues?.todo ?? ""}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="completed" className="flex items-center">
          <input
            type="checkbox"
            name="completed"
            id="completed"
            defaultChecked={defaultValues?.completed ?? false}
            className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          Completed
        </label>
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
}
