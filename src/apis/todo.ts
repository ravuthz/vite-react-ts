import crud from '../utils/crud';
// const getTodos = (config: any = {}) => axios.get('/todos', config).then((res: any) => res.data);
// const getTodoById = (id: number) => axios.get(`/todos/${id}`).then((res: any) => res.data);
// const createTodo = (data: any) => axios.post('/todos', data).then((res: any) => res.data);
// const updateTodoById = ({ id, ...data }: any) => axios.put(`/todos/${id}`, data).then((res: any) => res.data);
// const deleteTodoById = (id: number) => axios.delete(`/todos/${id}`).then((res: any) => res.data);

const getTodos = (config: any) => crud.fetchItems('/todos', config);
const getTodoById = (id: number) => crud.fetchItems(`/todos/${id}`);
const createTodo = (data: any) => crud.createItem('/todos', data);
const updateTodoById = ({ id, ...data }: any) => crud.updateItem(`/todos/${id}`, data);
const deleteTodoById = (id: number) => crud.deleteItem(`/todos/${id}`);

export { getTodos, getTodoById, createTodo, updateTodoById, deleteTodoById };
