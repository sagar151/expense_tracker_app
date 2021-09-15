import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext'

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);
 
	const total = expenses.reduce((total, item) => {
        console.log("total",total)
		return (total += item.cost);
	}, 0);

	return (
		<div class='alert alert-primary p-4'>
			<span>Total spend: ₹{total}</span>
		</div>
	);
};

export default ExpenseTotal;