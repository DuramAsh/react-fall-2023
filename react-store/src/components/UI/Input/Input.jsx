// custom input component

import React from 'react';
import classes from './Input.module.css';

const Input = ({ label, ...otherProps }) => {
	return (
		<div className={classes.input}>
			<input {...otherProps} />
			{label ? (
				<label
					className={`${otherProps.value.length ? classes.shrink : ''} ${classes.formInputLabel
						}`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default Input;