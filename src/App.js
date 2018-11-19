import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import { Formik, Form } from 'formik';
import data from './mock.json';
import background from './background.jpg';
import logoImg from './logo.png';

const GlobalStyles = createGlobalStyle`
	html, body, #root {
		height: 100%;
	}
	body {
		background-image: url(${background});
		background-attachment: fixed;
	}
`;

const Container = styled.div`
	padding: 1rem;
	height: 100%;
	box-sizing: border-box;
`;

const List = styled.div`
	display: grid;
	grid-template-rows: auto;
	grid-gap: 1rem;
	margin-top: 1rem;
`;
const Item = styled.div`
	color: #fff;
	border: 0.5rem solid rgba(255, 255, 255, 0.3);
	padding: 1rem;
`;
const SearchFieldWrapper = styled.div`
	padding: 1rem 0;
`;
const SearchField = styled.input`
	width: 100%;
	border: none;
	border-radius: 1rem;
	margin: 0;
	font-size: 1.17rem;
	padding: 0.75rem 1rem;
	box-sizing: border-box;
	outline: none;
	text-align: center;
`;
const NoResult = styled.p`
	color: white;
`;
const Logo = styled.img`
	display: block;
	width: ${props => (props.isSearching ? 100 : 200)}px;
	margin: auto;
	margin-top: ${props => (props.isSearching ? 0 : 45)}%;
	transition: all 0.2s ease;
`;

const Tips = styled.div`
	text-align: center;
	color: #fff;

	a {
		color: inherit;
	}
`;

function getText(id) {
	return data.texts.find(text => text.id === id).text;
}

function App() {
	return (
		<Container>
			<GlobalStyles />
			<Formik
				onSubmit={console.log}
				initialValues={{
					search: '',
				}}
			>
				{({ values, handleChange, handleBlur, setFieldValue }) => {
					const filterName = data.meats.filter(meat => meat.name.includes(values.search));
					const filterTags = data.meats.filter(meat => meat.meatGroup.includes(values.search));
					const result = [...filterName, ...filterTags];

					return (
						<Form>
							<>
								<Logo src={logoImg} isSearching={!!values.search} />
								<SearchFieldWrapper>
									<SearchField
										name="search"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.search}
										placeholder="Vilket kött undrar du över?"
									/>
								</SearchFieldWrapper>

								{!values.search ? (
									<Tips>
										<a
											href="#"
											onClick={evt => {
												evt.preventDefault();
												setFieldValue('search', 'Nöt');
											}}
										>
											Nöt
										</a>
										,{' '}
										<a
											href="#"
											onClick={evt => {
												evt.preventDefault();
												setFieldValue('search', 'Fläsk');
											}}
										>
											Fläsk
										</a>
										,{' '}
										<a
											href="#"
											onClick={evt => {
												evt.preventDefault();
												setFieldValue('search', 'Vilt');
											}}
										>
											Vilt
										</a>
										,{' '}
										<a
											href="#"
											onClick={evt => {
												evt.preventDefault();
												setFieldValue('search', 'Kyckling');
											}}
										>
											Kyckling
										</a>
										,{' '}
										<a
											href="#"
											onClick={evt => {
												evt.preventDefault();
												setFieldValue('search', 'Fisk');
											}}
										>
											Fisk
										</a>
									</Tips>
								) : (
									<>
										{isEmpty(result) ? (
											<NoResult>Hittade inte köttbiten du letade efter :(</NoResult>
										) : (
											<List>
												{result.map(meat => (
													<Item key={meat.name}>
														<h3>{meat.name}</h3>
														{meat.minInnerTemp && (
															<>
																<h4>{getText('innerTemperature')}</h4>
																<p>
																	{meat.minInnerTemp === meat.maxInnerTemp
																		? `${meat.minInnerTemp}°`
																		: `${meat.minInnerTemp}° - ${
																				meat.maxInnerTemp
																		  }°`}
																</p>
															</>
														)}

														{meat.minOvenTemp && (
															<>
																<h4>{getText('ovenTemperature')}</h4>
																<p>
																	{meat.minOvenTemp === meat.maxOvenTemp
																		? `${meat.minOvenTemp}°`
																		: `${meat.minOvenTemp}° - ${meat.maxOvenTemp}°`}
																</p>
															</>
														)}
													</Item>
												))}
											</List>
										)}
									</>
								)}
							</>
						</Form>
					);
				}}
			</Formik>
		</Container>
	);
}

export default App;
