import React,{useState,useContext} from 'react'
const EditBudget= (props)=>{
   const [values,setValues]=useState(props.budget);
   return(
       <>
       <input type='number' required='required' class='form-control mr-3' id='name' value={values} onChange={(event)=>setValues(event.target.value)}/>
       <button type='button' class='btn btn-primary' onClick={()=>props.handleSaveClick(values)}>Save</button>
       </>
   )
}
export default EditBudget;