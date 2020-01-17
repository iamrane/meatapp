import PropTypes from 'prop-types';

const Pill = ({ active, onClick: handleClick, children }) => {
	let classNames =
		'inline-block border border-white rounded hover:border-gray-200 text-teal-500 hover:bg-gray-200 py-1 px-3';
	if (active) {
		classNames = 'inline-block border border-teal-500 rounded py-1 px-3 bg-teal-500 text-white';
	}

	return (
		<a onClick={handleClick} className={classNames} href="#">
			{children}
		</a>
	);
};

Pill.propTypes = {
	active: PropTypes.bool,
	onClick: PropTypes.func,
	children: PropTypes.node,
};

Pill.defaultProps = {
	active: false,
	onClick: f => f,
	children: null,
};

export default Pill;
