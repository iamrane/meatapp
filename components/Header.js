import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { motion } from 'framer-motion';

import Logo from 'components/Logo';

const Header = props => {
	const [field, meta] = useField('searchString');
	const { value: searchString } = meta;

	return (
		<motion.div
			className="m-auto max-w-full"
			animate={{
				width: searchString.length < 3 ? 200 : 100,
			}}
		>
			<Logo fill="#fff" />
		</motion.div>
	);
};

Header.propTypes = {};

export default Header;