import React, { useState } from 'react';
import { useField } from 'formik';
import { useQuery } from '@apollo/react-hooks';
import { motion } from 'framer-motion';
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

const SearchResult = () => {
	const [, meta] = useField('searchString');
	const { value: searchString } = meta;
	const [activeMeatId, setActiveMeatId] = useState();
	const { data, loading } = useQuery(getMeatsQuery);

	if (searchString.length < 3 || loading) {
		return null;
	}

	const { meats = [] } = data;
	const filterName = meats.filter(meat => meat.meatName.toLowerCase().includes(searchString.toLowerCase()));
	const filterTags = meats.filter(meat => meat.tags.toLowerCase().includes(searchString.toLowerCase()));
	const result = uniqBy([...filterName, ...filterTags], 'meatName');

	if (isEmpty(result)) {
		return null;
	}

	function handleMeatClick(id) {
		return () => {
			setActiveMeatId(id);
		};
	}

	return (
		<motion.div variants={variants} initial="initial" animate="reveal">
			{result.map(meat => {
				return (
					<SearchResultItem
						key={meat.id}
						meat={meat}
						open={activeMeatId === meat.id}
						onClick={handleMeatClick(meat.id)}
					/>
				);
			})}
		</motion.div>
	);
};

SearchResult.propTypes = {};

export default SearchResult;
