import React,{useState,useContext} from 'react'
import ViewBudget from './ViewBudget'
import EditBudget from './EditBudget'
import { AppContext}from '../Context/AppContext'
const Budget=()=>{
    const {budget,dispatch}=useContext(AppContext)
    const [isEditing,setEditing]=useState(false);
    const handleEditClick=()=>{
        setEditing(true);

    }
    const handleSaveClick=(value)=>{
        dispatch({
            type:'SET_BUDGET',
            payload:value,
        })
        setEditing(false)
    }
    return(
        <div class='alert alert-secondary p-3 d-flex align-item-center justify-content'>
            {isEditing?(
            <EditBudget handleSaveClick={handleSaveClick} budget={budget}/>    
        ):(
            <ViewBudget handleEditClick={handleEditClick} budget={budget}/>
        )}
        </div>
    )
}
export default Budget;