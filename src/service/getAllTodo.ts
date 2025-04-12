
import { TodoType } from '@/app/types/TodoType';
import axios from 'axios'
const getAllTodo = async (): Promise<TodoType[]> => {
    const response2 = await axios.get('http://localhost:3000/api/todo');
    return response2.data.message;
}
export default getAllTodo;