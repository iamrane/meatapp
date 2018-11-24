import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonElement = styled.button`
	font-size: 75%;
	font-family: inherit;
	border: 0;
	padding: 0.5rem 1rem;
	border: 0.25rem solid rgba(255, 255, 255, 0.5);
	background: rgba(255, 255, 255, 0);
	transition: border-color 0.2s ease-in-out;
	color: #fff;
	cursor: pointer;

	&:hover {
		border-color: rgba(255, 255, 255, 0.7);
	}
`;

const Button = ({ onClick, children }) => {
	return <ButtonElement onClick={onClick}>{children}</ButtonElement>;
};

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.node.isRequired,
};

Button.defaultProps = {
	onClick: f => f,
};

export default Button;
