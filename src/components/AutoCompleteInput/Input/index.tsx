import React from 'react';

interface InputProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
}

const Input: React.FC<InputProps> = ({ onChange, value }) => {
	return (
		<input
			autoFocus
			type="text"
			autoComplete="off"
			className="p-2 w-2/3 border-black"
			placeholder="Busque o produto..."
			onChange={onChange}
			value={value}
		/>
	);
};

export default Input;
