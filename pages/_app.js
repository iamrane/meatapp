import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { withRouter } from 'next/router';
import withData from 'utils/apollo';
import Header from 'components/Header';
import SearchForm from 'components/SearchForm';

import 'styles/tailwind.css';

class MyApp extends App {
	render() {
		const { Component, pageProps, apollo, router } = this.props;
		return (
			<ApolloProvider client={apollo}>
				<Formik enableReinitialize initialValues={{ searchString: router?.query?.searchString || '' }}>
					<div className="table h-full w-full max-w-lg m-auto">
						<div className="table-cell align-middle">
							<div className="my-4">
								<Header />
							</div>
							<div className="my-4">
								<SearchForm />
							</div>
							<Component {...pageProps} />
						</div>
					</div>
				</Formik>
			</ApolloProvider>
		);
	}
}

// Wraps all components in the tree with the data provider
export default withData(withRouter(MyApp));
