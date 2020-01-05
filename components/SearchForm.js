import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, useField } from 'formik';
import { motion, AnimatePresence } from 'framer-motion';
import Close from 'components/Close';

const SearchForm = props => {
	const [field, meta, helpers] = useField('searchString');
	const { value } = meta;
	const { setValue } = helpers;

	return (
		<Form>
			<div className="relative">
				<Field
					name="searchString"
					className="shadow appearance-none border rounded-lg w-full py-3 px-4 pr-6 text-lg text-gray-700 leading-tight focus:outline-none focus:shadow-lg"
					placeholder="Search for meat!"
				/>
				<AnimatePresence>
					{value && (
						<motion.div
							onClick={() => setValue('')}
							className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-4 text-gray-700"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<Close className="fill-current h-5 w-5" />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</Form>
	);
};

SearchForm.propTypes = {};

export default SearchForm;
