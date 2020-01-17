function CloseIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			{...props}
		>
			<path d="M18 6L6 18M6 6l12 12"></path>
		</svg>
	);
}

export default CloseIcon;
