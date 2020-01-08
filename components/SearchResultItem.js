import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Pill from 'components/Pill';
import Gauge from 'components/Gauge';
import Icon from 'components/Icon';

const variants = {
	initial: { y: 50, opacity: 0 },
	reveal: { y: 0, opacity: 1 },
};

const openProps = {
	initial: { height: 0 },
	animate: { height: 'auto' },
	exit: { height: 0 },
};

const SearchResultItem = props => {
	const {
		open,
		onClick,
		meat: { slug, meatName, shortDescription, fry, stew, roast, grill, marbling, tenderness, tags },
	} = props;
	const [tabIndex, setTabIndex] = useState(0);

	function handleTabClick(index) {
		return event => {
			console.log(event.target);
			event.preventDefault();
			setTabIndex(index);
		};
	}

	function handleTap(event) {
		if (event.target.tagName.toLowerCase() !== 'a') {
			onClick(event);
		}
	}

	if (open) {
		console.log(props);
	}

	const classes = 'cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg my-4';

	return (
		<motion.div
			id={slug}
			positionTransition={{ duration: 0.2, type: 'tween' }}
			onTap={handleTap}
			variants={variants}
			className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl my-4"
			onAnimationComplete={() => {
				if (open) {
					document.getElementById(slug).scrollIntoView({
						behavior: 'smooth',
					});
				}
			}}
		>
			<div className="mx-5 my-4">
				<div className="flex items-center font-bold text-xl text-grey-900 mb-2">
					{tags.split(',').map(tag => (
						<Icon key={tag} type={tag.trim()} className="fill-current mr-1 w-5" />
					))}
					{meatName}
				</div>
				<p className="text-grey-700 text-base">{shortDescription}</p>
			</div>
			<AnimatePresence>
				{open && (
					<motion.div className="overflow-hidden" {...openProps}>
						<div className="mx-5 my-4 overflow-hidden">
							<img src="https://placeimg.com/640/480/any" className="max-w-full rounded-lg shadow-lg" />
						</div>

						<div className="mx-5 my-6">
							<div className="inline-block">
								<Pill active={tabIndex === 0} onClick={handleTabClick(0)}>
									Stekpanna
								</Pill>
							</div>
							<div className="inline-block ml-2">
								<Pill active={tabIndex === 1} onClick={handleTabClick(1)}>
									Gryta
								</Pill>
							</div>
							<div className="inline-block ml-2">
								<Pill active={tabIndex === 2} onClick={handleTabClick(2)}>
									Ugn
								</Pill>
							</div>
							<div className="inline-block ml-2">
								<Pill active={tabIndex === 3} onClick={handleTabClick(3)}>
									Grill
								</Pill>
							</div>

							{tabIndex === 0 && <p className="my-3">{fry}</p>}
							{tabIndex === 1 && <p className="my-3">{stew}</p>}
							{tabIndex === 2 && <p className="my-3">{roast}</p>}
							{tabIndex === 3 && <p className="my-3">{grill}</p>}
						</div>

						{(!!marbling || !!tenderness) && (
							<div className="mx-5 my-6">
								{!!marbling && (
									<div className="inline-block w-24 mr-4">
										<div className="relative">
											<Gauge percent={marbling} />
											<span className="absolute inset-0 flex items-center justify-center">
												{marbling + '%'}
											</span>
										</div>
										<div className="my-1 text-center">Marbling</div>
									</div>
								)}
								{!!tenderness && (
									<div className="inline-block w-24">
										<div className="relative">
											<Gauge percent={tenderness} />
											<span className="absolute inset-0 flex items-center justify-center">
												{tenderness + '%'}
											</span>
										</div>
										<div className="my-1 text-center">Tenderness</div>
									</div>
								)}
							</div>
						)}
					</motion.div>
				)}
			</AnimatePresence>

			<div className="mx-5 my-4">
				{tags.split(',').map(tag => (
					<motion.span
						key={tag}
						whileHover={{ scale: 1.1 }}
						className="cursor-pointer inline-block hover:bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 hover:text-teal-900"
					>
						{tag.trim()}
					</motion.span>
				))}
			</div>
		</motion.div>
	);
};

export default SearchResultItem;
