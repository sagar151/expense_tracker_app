import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import {v4 as uuidv4} from 'uuid';
 const AddExpenseForm=(props)=>{
    const {dispatch}=useContext(AppContext);
    const [name,setName]=useState('');
    const [cost,setCost]=useState('');
    const onSubmit=(event)=>{
        event.preventDefault();
        const expense={
            id:uuidv4(),
            name,
            cost:parseInt(cost)
        
        }
        dispatch({
            type:'ADD_EXPENSE',
            payload:expense,
        })
        setName('');
        setCost('');
    }
    return (
        <form  >
            <div class='row'>
                <div class='col-sm col-lg-4'>
                    <label >Name</label>
                    <input 
                       required='required'
                       type='text'
                       class='form-control'
                       id='name'
                       placeholder='enter expense name'
                       value={name}
                       onChange={(event)=>setName(event.target.value)}
                    ></input>
                </div>
                <div class='col-sm col-lg-4'>
              
                    <label>Amount</label>
                    <input 
                       required='required'
                       type='number'
                       class='form-control'
                       placeholder='enter expense amount'
                       id='cost'
                       value={cost}
                       onChange={(event)=>setCost(event.target.value)}
                    ></input>
                </div>
            </div>
            <div class='row mt-3'>
                <div class='col mt-3'>
                    <button type='submit' class='btn btn-dark' onClick={(event)=>onSubmit(event)}>Save</button>
                </div>
            </div>
        </form>
    )
}
export default AddExpenseForm;