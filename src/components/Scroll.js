import React from 'react';

const Scroll = (props) => {
	return (
		// {{}} - an object (inner {}) inside JS (outen {})
		// JSX - ocerflowY, css - overflow-y
		<div style={{overflowY: 'scroll', border: '1px solid black', height: '400px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;