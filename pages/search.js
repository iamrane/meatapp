import React from 'react';
import PropTypes from 'prop-types';
import SearchResult from 'components/SearchResult';

const Search = props => {
	return (
		<div className="my-4">
			<SearchResult />
		</div>
	);
};

Search.propTypes = {};

export default Search;
