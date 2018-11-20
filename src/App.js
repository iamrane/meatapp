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
		box-sizing: border-box;
		background: url(${background}) no-repeat center center fixed; 
	}
	*, *:after, *:before {
		box-sizing: inherit;
	}
`;

const Container = styled.div`
	position: absolute;
	width: 100%;
	padding: 1rem;
	transition: all 0.2s ease;

	${props =>
		props.isSearching
			? 'top: 0'
			: `
				top: 50%;
				transform: translateY(-50%);
			`}
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
	position: relative;
	padding: 1rem 0;
`;
const SearchField = styled.input`
	width: 100%;
	border: none;
	border-radius: 1rem;
	margin: 0;
	font-size: 1.17rem;
	padding: 0.75rem 1rem;
	outline: none;
	text-align: center;
`;
const CloseIcon = styled.div`
	position: absolute;
	right: 1rem;
	top: 50%;
	border-radius: 100%;
	background: rgba(0, 0, 0, 0.6);
	color: #fff;
	height: 1.5rem;
	width: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translateY(-50%);
	font-size: 0.7rem;
	font-weight: bold;
`;
const NoResult = styled.p`
	color: white;
`;
const Logo = styled.img`
	display: block;
	width: ${props => (props.isSearching ? 100 : 200)}px;
	margin: auto;
	transition: all 0.2s ease;
`;

const Tips = styled.div`
	margin-bottom: 0.5rem;
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

				const handleClick = text => evt => {
					evt.preventDefault();
					setFieldValue('search', text);
				};

				return (
					<Container isSearching={!!values.search}>
						<GlobalStyles />
						<Form>
							<Logo src={logoImg} isSearching={!!values.search} />
							<SearchFieldWrapper>
								<SearchField
									name="search"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.search}
									placeholder="Vilket kött undrar du över?"
								/>
								{values.search && <CloseIcon onClick={handleClick('')}>x</CloseIcon>}
							</SearchFieldWrapper>

							{!values.search ? (
								<>
									<Tips key="meatGroup">
										<a href="#" onClick={handleClick('Nöt')}>
											Nöt
										</a>
										,{' '}
										<a href="#" onClick={handleClick('Fläsk')}>
											Fläsk
										</a>
										,{' '}
										<a href="#" onClick={handleClick('Vilt')}>
											Vilt
										</a>
										,{' '}
										<a href="#" onClick={handleClick('Kyckling')}>
											Kyckling
										</a>
										,{' '}
										<a href="#" onClick={handleClick('Fisk')}>
											Fisk
										</a>
									</Tips>
									<Tips key="meatNames">
										<a href="#" onClick={handleClick('Märgpipa')}>
											Märgpipa
										</a>
										,{' '}
										<a href="#" onClick={handleClick('Sidfläsk')}>
											Sidfläsk
										</a>
										,{' '}
										<a href="#" onClick={handleClick('Älgfilé')}>
											Älgfilé
										</a>
										,{' '}
										<a href="#" onClick={handleClick('Kycklingvingar')}>
											Kycklingvingar
										</a>
										,{' '}
										<a href="#" onClick={handleClick('Tonfisk albacore')}>
											Tonfisk albacore
										</a>
									</Tips>
								</>
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
																	: `${meat.minInnerTemp}-${meat.maxInnerTemp}°`}
															</p>
														</>
													)}

													{meat.minOvenTemp && (
														<>
															<h4>{getText('ovenTemperature')}</h4>
															<p>
																{meat.minOvenTemp === meat.maxOvenTemp
																	? `${meat.minOvenTemp}°`
																	: `${meat.minOvenTemp}-${meat.maxOvenTemp}°`}
															</p>
														</>
													)}
												</Item>
											))}
										</List>
									)}
								</>
							)}
						</Form>
					</Container>
				);
			}}
		</Formik>
	);
}

export default App;
