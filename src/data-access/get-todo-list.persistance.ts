import { GetTodoResponse } from "@/domain/todo";

export default async function getTodoList(): Promise<GetTodoResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/todos`,
    {
      headers: {
        // Menyatakan bahwa respons dapat di-cache dan valid hingga 1 hari (86400 detik)
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
      },
      // Menandakan bahwa ini cache-able oleh server dan client-side
      next: { revalidate: 86400 }, // 86400 detik = 1 hari
    }
  );
  const responseData: GetTodoResponse = await response.json();
  return responseData;
}
