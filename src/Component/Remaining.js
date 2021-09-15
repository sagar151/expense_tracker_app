import React,{useState,useContext} from 'react'
import { AppContext } from "../Context/AppContext";
const RemainingBudget=()=>{
    const {expenses,budget}=useContext(AppContext)
    const totalExpense=expenses.reduce((total,item)=>{
        return (total+=item.cost)

    },0)
    const alertType=totalExpense>budget?'alert-danger':'alert-success';
    return (
        <div class={`alert p-4 ${alertType}`}><span>Remaining: ₹{budget-totalExpense}</span></div>
      )
}
export default RemainingBudget;