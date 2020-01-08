import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
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
	const router = useRouter();
	const { searchString } = router.query;
	const [activeMeatId, setActiveMeatId] = useState();
	const { data, loading } = useQuery(getMeatsQuery);

	console.log('data', data);
	console.log('searchString', searchString);

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
		return event => {
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
