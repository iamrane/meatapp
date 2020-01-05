import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { Formik } from 'formik';
import withData from 'utils/apollo';
import 'styles/tailwind.css';

class MyApp extends App {
	render() {
		const { Component, pageProps, apollo } = this.props;
		return (
			<ApolloProvider client={apollo}>
				<Formik initialValues={{ searchString: '' }}>
					<Component {...pageProps} />
				</Formik>
			</ApolloProvider>
		);
	}
}

// Wraps all components in the tree with the data provider
export default withData(MyApp);
