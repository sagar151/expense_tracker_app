import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../Context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		console.log("delete called",props);
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span class='badge badge-primary badge-pill mr-3' class="text-secondary">{props.cost}</span>{"  "}
				<TiDelete size='2em' color='red'  onClick={handleDeleteExpense} />
			</div>
		</li>
	);
};

export default ExpenseItem;