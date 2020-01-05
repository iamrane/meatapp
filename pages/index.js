import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import SearchForm from 'components/SearchForm';
import SearchResult from 'components/SearchResult';

const Index = () => {
	return (
		<div className="table h-screen w-full max-w-lg m-auto">
			<div className="table-cell align-middle">
				<div className="my-4">
					<Header />
				</div>
				<div className="my-4">
					<SearchForm />
				</div>
				<div className="my-4">
					<SearchResult />
				</div>
			</div>
		</div>
	);
};

Index.propTypes = {};

export default Index;
