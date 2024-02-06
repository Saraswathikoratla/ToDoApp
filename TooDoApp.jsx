import React, { useState } from 'react'
import sty from "./styles.module.css"
const TooDoApp = (e) => {
    let [state,setState]=useState("");
    let[task,updateTask]=useState([]);
    let [edit,updateedit]=useState(null)
    const addTask=()=>{
        if(state==""){

        }
        else{
       updateTask([...task,state])
       setState("")
        }

    }
    let handleChange=(e)=>{
       setState(e.target.value)
    }
   let deleteItem=(id)=>{
    let updadtedata=task.filter((ele,index)=>{
        console.log(ele)
        return index!=id;
        
    })
   updateTask(updadtedata)
    }
   


    const editItem = (id) => {
        const updatedTask = [...task];
        const newText = prompt("Edit task:", updatedTask[id]);

        
        if (newText !== null) {
          updatedTask[id] = newText;
          updateTask(updatedTask);
         
            
         }
             
      };
  return (
    <div className={sty.container1}>
        <div className={sty.subcontainer1}>
        <input type="text" name="" id="" value={state} onChange={handleChange} className={sty.inputbox1}/>
    <input type="button" value="add" onClick={addTask} className={sty.addingtask}/></div>
    <div className={sty.container2}>
        {task.map((data,index)=>{
            return <ul key={index}>
                <li id="" className={sty.addedTasks}>{data }</li>
                <button onClick={(id)=>{deleteItem(index)}} className={sty.deletebutton}>delete</button>
                <button onClick={(id)=>{editItem(index)}} className={sty.editbutton}>edit</button>
            </ul>
        })}
    </div>
    </div>
    
  )
}

export default TooDoApp