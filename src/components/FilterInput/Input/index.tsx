import React from 'react';

interface InputProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ onChange }) => {
	return (
		<input
			autoFocus
			type="text"
			autoComplete="off"
			className="p-2 w-2/3 border-black"
			placeholder="Busque o produto..."
			onChange={onChange}
		/>
	);
};

export default Input;
