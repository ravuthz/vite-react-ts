import axios from './axios';

const fetchItems = (path: string, config: any = {}) => axios.get(path, config).then((res: any) => res.data);

const createItem = (path: string, data: any) => axios.post(path, data).then((res: any) => res.data);

const updateItem = (path: string, { id, ...data }: any) => axios.put(path, data).then((res: any) => res.data);

const deleteItem = (path: string) => axios.delete(path).then((res: any) => res.data);

export default {
  fetchItems,
  createItem,
  updateItem,
  deleteItem,
};
