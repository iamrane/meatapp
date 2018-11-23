import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import uniqBy from 'lodash/uniqBy';
import { Formik, Form } from 'formik';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Button from './Button';

import mock from './mock';
import background from './background.jpg';
import logoImg from './logo-swe.png';
import closeIcon from './icons/cancel-100.png';

import temperature from './icons/temperature-white-100.png';
import oven from './icons/cooker-white-100.png';

import steak from './icons/steak-white-100.png';
import pig from './icons/pig-white-100.png';
import lamb from './icons/rack-of-lamb-white-100.png';
import chicken from './icons/thanksgiving-white-100.png';
import fish from './icons/whole-fish-white-100.png';
import deer from './icons/deer-white-100.png';

const GET_MEATS = gql`
	{
		allMeats {
			id
			name
			minOvenTemp
			maxOvenTemp
			minInnerTemp
			maxInnerTemp
			meatGroup
		}
	}
`;

const GlobalStyles = createGlobalStyle`
	html, body, #root {
		height: 100%;
	}
	body {
		box-sizing: border-box;

		&:after {
			content: '';
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background: url(${background}) repeat center center;
			z-index: -1;
		}
	}
	*, *:after, *:before {
		box-sizing: inherit;
	}
`;

const Container = styled.div`
	position: absolute;
	width: 100%;
	padding: 1rem;

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
	position: relative;
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
	height: 25px;
	width: 25px;
	transform: translateY(-50%);
	background: url(${closeIcon}) no-repeat center center;
	background-size: 100% 100%;
`;
const NoResult = styled.p`
	color: white;
`;
const Logo = styled.img`
	display: block;
	width: ${props => (props.isSearching ? 100 : 200)}px;
	margin: auto;
	transition: width 0.2s ease;
`;

const Tips = styled.div`
	margin-bottom: 0.5rem;
	text-align: center;
	color: #fff;

	a {
		color: inherit;
	}
`;

const MeatGroupIcon = styled.img`
	display: block;
	width: 50px;
	position: absolute;
	right: 1rem;
	top: 1rem;
`;

const MeatName = styled.h3`
	margin: 0;
	font-size: 1.17rem;
`;

const InfoText = styled.p`
	margin: 0.5rem 0 0;
	display: flex;
	align-items: center;
	font-size: 0.875rem;
`;

const InfoIcon = styled.img`
	display: inline-block;
	width: 30px;
	margin-right: 0.5rem;
`;

const TipsButton = styled.button`
	font-size: 100%;
	font-family: inherit;
	border: 0;
	padding: 0;
	background: transparent;
	color: inherit;
	text-decoration: underline;

	&:hover {
		cursor: pointer;
	}
`;

const ButtonContainer = styled.div`
	margin-top: 1rem;
	text-align: center;
`;

function getMeatGroupIcon(meatGroup) {
	switch (meatGroup) {
		case 'Kalv':
		case 'Nötkött':
			return steak;
		case 'Fläsk':
			return pig;
		case 'Lamm':
			return lamb;
		case 'Vilt':
			return deer;
		case 'Kyckling':
		case 'Kalkon':
			return chicken;
		case 'Fisk':
			return fish;
		default:
			return undefined;
	}
}

function App() {
	return (
		<>
			<GlobalStyles />
			<Query query={GET_MEATS}>
				{({ loading, error, data }) => {
					// const data = { ...mock };
					return (
						<Formik
							initialValues={{
								search: '',
							}}
						>
							{({ values, handleChange, handleBlur, setFieldValue }) => {
								const filterName = data.allMeats.filter(meat =>
									meat.name.toLowerCase().includes(values.search.toLowerCase())
								);
								const filterTags = data.allMeats.filter(meat =>
									meat.meatGroup.toLowerCase().includes(values.search.toLowerCase())
								);
								const result = uniqBy([...filterName, ...filterTags], 'name');

								const handleClick = text => evt => {
									evt.preventDefault();
									setFieldValue('search', text);
								};

								return (
									<Container isSearching={!!values.search}>
										<Form>
											<Logo src={logoImg} isSearching={!!values.search} />
											<SearchFieldWrapper>
												<SearchField
													name="search"
													onChange={evt => {
														handleChange(evt);
														window.scrollTo(0, 0);
													}}
													onBlur={handleBlur}
													value={values.search}
													placeholder="Vilket kött undrar du över?"
													autoComplete="off"
												/>
												{values.search && <CloseIcon onClick={handleClick('')} />}
											</SearchFieldWrapper>

											{!values.search ? (
												<>
													<Tips key="meatGroup">
														<TipsButton onClick={handleClick('Nöt')}>Nöt</TipsButton>,{' '}
														<TipsButton onClick={handleClick('Fläsk')}>Fläsk</TipsButton>,{' '}
														<TipsButton onClick={handleClick('Vilt')}>Vilt</TipsButton>,{' '}
														<TipsButton onClick={handleClick('Kyckling')}>
															Kyckling
														</TipsButton>
														, <TipsButton onClick={handleClick('Fisk')}>Fisk</TipsButton>
													</Tips>
													<Tips key="meatNames">
														<TipsButton onClick={handleClick('Märgpipa')}>
															Märgpipa
														</TipsButton>
														,{' '}
														<TipsButton onClick={handleClick('Sidfläsk')}>
															Sidfläsk
														</TipsButton>
														,{' '}
														<TipsButton onClick={handleClick('Älgfilé')}>
															Älgfilé
														</TipsButton>
														,{' '}
														<TipsButton onClick={handleClick('Kycklingvingar')}>
															Kycklingvingar
														</TipsButton>
														,{' '}
														<TipsButton onClick={handleClick('Tonfisk albacore')}>
															Tonfisk albacore
														</TipsButton>
													</Tips>
												</>
											) : (
												<>
													{isEmpty(result) ? (
														<NoResult>Hittade inte köttbiten du letade efter :(</NoResult>
													) : (
														<List>
															{result.map(meat => {
																const meatGroupIcon = getMeatGroupIcon(meat.meatGroup);

																return (
																	<Item key={meat.name}>
																		{meatGroupIcon && (
																			<MeatGroupIcon src={meatGroupIcon} />
																		)}
																		<MeatName>{meat.name}</MeatName>
																		{meat.minInnerTemp && (
																			<>
																				<InfoText>
																					<InfoIcon src={temperature} />
																					{meat.minInnerTemp ===
																					meat.maxInnerTemp
																						? `${meat.minInnerTemp}°`
																						: `${meat.minInnerTemp}-${
																								meat.maxInnerTemp
																						  }°`}
																				</InfoText>
																			</>
																		)}

																		{meat.minOvenTemp && (
																			<>
																				<InfoText>
																					<InfoIcon src={oven} />
																					{meat.minOvenTemp ===
																					meat.maxOvenTemp
																						? `${meat.minOvenTemp}°`
																						: `${meat.minOvenTemp}-${
																								meat.maxOvenTemp
																						  }°`}
																				</InfoText>
																			</>
																		)}
																		<ButtonContainer>
																			<Button>Mer info</Button>
																		</ButtonContainer>
																	</Item>
																);
															})}
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
				}}
			</Query>
		</>
	);
}

export default App;
