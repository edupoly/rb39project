import React, { useState } from 'react'
import { useAddTodoMutation } from '../../services/todos'

function NewTodo() {
     var [addTodoFn] = useAddTodoMutation();
     var [newtodo,setNewTodo ] = useState("")
     function takeTodo(){
      addTodoFn({title:newtodo})
     }
  return (
    <div>
        <h1>NewTodo</h1>
        <div className='p-2 border border-dark d-flex align-items-center flex-column w-25 m-4 rounded'>
          <i style={{fontSize:'5em',color:"gray"}}class="bi bi-plus-circle-fill m-2" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          <h3>Add New List</h3>
        </div>


      {/* dialog */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-center">
                <input type="text" className='w-100' onKeyUp={(e)=>{setNewTodo(e.target.value)}}/>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{takeTodo()}}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NewTodo