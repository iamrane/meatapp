import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { useField } from 'formik';
import { motion, AnimatePresence } from 'framer-motion';
import uniqBy from 'lodash/uniqBy';
import isEmpty from 'lodash/isEmpty';
import { getMeatsQuery } from 'gql';
import SearchResultItem from 'components/SearchResultItem';

const variants = {
	initial: {},
	reveal: {
		transition: { staggerChildren: 0.05 },
	},
};

const SearchResult = props => {
	const [field, meta] = useField('searchString');
	const { value: meatName } = meta;
	const { data, loading } = useQuery(getMeatsQuery);

	if (meatName.length < 3 || loading) {
		return null;
	}

	const filterName = data.allMeats.filter(meat => meat.meatName.toLowerCase().includes(meatName.toLowerCase()));
	const filterTags = data.allMeats.filter(meat => meat.meatGroup.toLowerCase().includes(meatName.toLowerCase()));
	const result = uniqBy([...filterName, ...filterTags], 'meatName');

	if (isEmpty(result)) {
		return null;
	}

	return (
		<motion.div variants={variants} initial="initial" animate="reveal">
			{result.map(meat => {
				return <SearchResultItem key={meat.id} {...meat} />;
			})}
		</motion.div>
	);
};

SearchResult.propTypes = {};

export default SearchResult;
