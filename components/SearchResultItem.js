import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Pill from 'components/Pill';
import Gauge from 'components/Gauge';

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
	const { slug, meatName, shortDescription, fry, stew, oven, grill, marbling, tenderness } = props;
	const [open, setOpen] = useState(false);
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
			setOpen(!open);
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
			className={classes}
			onAnimationComplete={() => {
				if (open) {
					document.getElementById(slug).scrollIntoView({
						behavior: 'smooth',
					});
				}
			}}
		>
			{open && (
				<div className="mx-5 my-4 overflow-hidden">
					<img src="https://placeimg.com/640/480/any" className="max-w-full rounded-lg shadow-lg" />
				</div>
			)}

			<div className="mx-5 my-4">
				<div className="font-bold text-xl text-grey-900 mb-2"> {meatName}</div>
				<p className="text-grey-700 text-base">{shortDescription}</p>
			</div>

			{open && (
				<div className="mx-5 my-6 overflow-hidden">
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
					{tabIndex === 2 && <p className="my-3">{oven}</p>}
					{tabIndex === 3 && <p className="my-3">{grill}</p>}
				</div>
			)}

			{open && (
				<div className="mx-5 my-6 overflow-hidden">
					<div className="inline-block w-24 mr-4">
						<div className="relative">
							<Gauge percent={marbling} />
							<span className="absolute inset-0 flex items-center justify-center">25%</span>
						</div>
						<div className="my-1 text-center">Marbling</div>
					</div>
					<div className="inline-block w-24">
						<div className="relative">
							<Gauge percent={tenderness} />
							<span className="absolute inset-0 flex items-center justify-center">50%</span>
						</div>
						<div className="my-1 text-center">Tenderness</div>
					</div>
				</div>
			)}

			<div className="mx-5 my-4">
				<motion.span
					whileHover={{ scale: 1.1 }}
					className="cursor-pointer inline-block hover:bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 hover:text-teal-900"
				>
					#photography
				</motion.span>
				<motion.span
					whileHover={{ scale: 1.1 }}
					className="cursor-pointer inline-block hover:bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 hover:text-teal-900"
				>
					#travel
				</motion.span>
				<motion.span
					whileHover={{ scale: 1.1 }}
					className="cursor-pointer inline-block hover:bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 hover:text-teal-900"
				>
					#winter
				</motion.span>
			</div>
		</motion.div>
	);
};

export default SearchResultItem;
