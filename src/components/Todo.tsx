"use client"
import { useEffect, useState } from "react";
import TodoSubmitButton from "./TodoSubmitButton";
import { TodoType } from "@/app/types/TodoType";
import getAllTodo from "@/service/getAllTodo";
import DeleteButton from '@/components/DeleteButton'
import UpdateTodo from "./UpdateTodo";
const Todo = () => {
    const [title, setTitle] = useState<string>("");
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [Todos, setTodos] = useState<TodoType[]>([]);
    const [showForm, setShowForm ] = useState<boolean>(false);
    const [ selectedForm, setSelecetedFrom ] = useState<TodoType | null>(null);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await getAllTodo();
    //         setTodos(response);
    //     }
    //     fetchData();
    // }, [])
    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllTodo();
            setTodos(response)
        }
        fetchData();
    }, [])
    return (
        <div className='flex justify-center items-center'>
            <div>
                <p className='mb-2'>Title</p>
                <input onChange={(e) => setTitle(e.target.value)} placeholder="Enter your Title"></input>
            </div>
            <div className='flex space-x-4'>
                <p>Completed</p>
                <input onChange={(e) => setIsCompleted(e.target.checked)} type='checkbox'></input>
            </div>
            <TodoSubmitButton title={title} isCompleted={isCompleted} setTodos={setTodos} />
            <div>
                {Todos.map((todo: TodoType) => (
                    <div key={todo.id} className = 'flex space-x-5'>
                        <p>{todo.title}</p>
                        <DeleteButton todoId={todo.id} setTodos={setTodos} />
                        {/* <button  onClick = {() => router.push('/updateTodo')}>Update Todo</button> */}
                        <button onClick = { () => {
                            setShowForm(true);
                            setSelecetedFrom(todo);
                        }} className = 'bg-blue-600 text-center p-5'>UpdateTodo</button>
                    </div>
                ))}
            </div>
            {showForm && <UpdateTodo todoId={selectedForm!.id} setTodos={setTodos} title = { selectedForm!.title } isCompleted = { selectedForm!.isCompleted }  setShowForm={ setShowForm }></UpdateTodo> }
        </div>
    )
}

export default Todo;