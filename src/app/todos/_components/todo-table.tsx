import { TodoToShow } from "@/domain/todo";
import Link from "next/link";
import React, { FC } from "react";
interface TodoTableProps {
  todos: TodoToShow[];
}

const thStyle =
  "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b";
const trStyle = "bg-gray-100 border-b";
const tdStyle = "px-6 py-4 whitespace-nowrap";
const tableStyle = "min-w-full bg-white border border-gray-300";

const TodoTable: FC<TodoTableProps> = ({ todos }) => {
  return (
    <table className={tableStyle}>
      <thead className="">
        <tr>
          <th className={thStyle}>No</th>
          <th className={thStyle}>Todo</th>
          <th className={thStyle}>Completed</th>
          <th className={thStyle}>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr className={index % 2 == 0 ? trStyle : ""} key={index}>
            <td className={tdStyle}>{index + 1}</td>
            <td className={tdStyle}>{todo.todo}</td>
            <td className={tdStyle}>
              {todo.completed ? "Completed" : "Not Completed"}
            </td>
            <td>
              <Link href={`/todos/${todo.id}/edit`}>Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
