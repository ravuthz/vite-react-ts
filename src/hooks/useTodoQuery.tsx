import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createTodo, getTodoById, getTodos, updateTodoById, deleteTodoById } from '../apis';

const staleTime = 100;

export const useFetchTodo = (id: number) => {
  return useQuery(['todo', id], () => getTodoById(id), { staleTime, enabled: id > 0 });
};

export const useFetchTodos = ({ page, size }: any) => {
  const params = { _page: page, _limit: size };
  return useQuery(['todos', params], () => getTodos({ params }), { staleTime });
};

export const useCreateTodoMutation = (options: any) => {
  return useMutation(createTodo, options);
};

export const useUpdateTodoMutation = (options: any) => {
  return useMutation(updateTodoById, options);
};

export const useDeleteTodoMutation = (options: any) => {
  return useMutation(deleteTodoById, options);
};

export const useTodoQuery = () => {
  const queryClient = useQueryClient();

  const invalidateTodo = async () => {
    await queryClient.invalidateQueries('todos');
  };

  const useCreateTodo = useCreateTodoMutation({
    onSuccess: invalidateTodo,
  });

  const useUpdateTodo = useUpdateTodoMutation({
    onSuccess: invalidateTodo,
  });

  const useDeleteTodo = useDeleteTodoMutation({
    onSuccess: invalidateTodo,
  });

  return {
    useCreateTodo,
    useUpdateTodo,
    useDeleteTodo,
    useFetchTodo,
    useFetchTodos,
    invalidateTodo,
  };
};
