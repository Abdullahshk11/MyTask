import { useState, useEffect } from 'react'
import Navbar from './compounds/Navbar'
import { MdEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState(() => {
    const saved = localStorage.getItem("todos")
    return saved ? JSON.parse(saved) : []
  })
 const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addtodo = () => {
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    settodo("")
  }

  const edittodo = (e, id) => {
    const t = todos.find(i => i.id === id)
    if (!t) return
    settodo(t.todo)
    const newtodos = todos.filter(item => item.id !== id)
    settodos(newtodos)
  }

  const delettodo = (e, id) => {
    const newtodos = todos.filter(item => item.id !== id)
    settodos(newtodos)
  }

  const handlechange = (e) => {
    settodo(e.target.value)
  }

  const HandleCheckbox = (e) => {
    const id = e.target.name
    const index = todos.findIndex(item => item.id === id)
    if (index === -1) return
    const newtodos = [...todos]
    newtodos[index] = {
      ...newtodos[index],
      isCompleted: !newtodos[index].isCompleted,
    }
    settodos(newtodos)
  }
  const toogleFinished = (e)=>{
    setshowFinished(!showFinished)
  }

  return (
    <>
      <Navbar />
      <div className=" contanier mx-auto m-5 my-4 bg-violet-200 p-5 rounded-2xl min-h-[80vh] md:w-1/2">
      <h1 className='text-xl font-bold text-center'>Mytask- Manage your todo in one place</h1>
        <div className="addtodo">
          <h2 className='text-lg font-bold'>Add todo</h2>
          <input onChange={handlechange}  value={todo} type="text" className='bg-white w-full rounded-lg p-3' />
          <button onClick={addtodo} disabled={todo.length<3} className='cursor-pointer bg-violet-300 font-bold text-md p-2 my-4 rounded-md w-full'>Add</button>
        </div>
        <input onChange={toogleFinished} type="checkbox" checked={showFinished}  />Show Finished Taskes
        <h2 className='font-bold text-lg'>Your todo</h2>
        <div className="todos flex flex-col gap-3 ">
          {todos.length == 0 && <div className='p-2'>No todos were added</div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex md:w-1/2 justify-between items-center bg-violet-100 p-2 rounded-md">
              <div className="flex gap-x-2.5">
                
                <input onChange={HandleCheckbox} checked={item.isCompleted} type="checkbox" name={item.id}  />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex">
                <button onClick={(e) => { edittodo(e, item.id) }} className="cursor-pointer bg-violet-300 font-bold text-sm p-2 rounded-md mx-1" > <MdEdit /> </button>
                <button onClick={(e) => { delettodo(e, item.id) }} className="cursor-pointer bg-red-400 font-bold text-sm p-2 rounded-md mx-1 text-white" > <AiOutlineDelete /> </button>
              </div>

            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
