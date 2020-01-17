import PropTypes from 'prop-types';

const Gauge = props => {
	const {
		strokeWidth,
		trailWidth,
		strokeColor,
		trailColor,
		strokeLinecap,
		percent,
		style,
		className,
		...restProps
	} = props;

	const radius = 50 - strokeWidth / 2;
	const pathString = `M 50,50 m 0,-${radius}
     a ${radius},${radius} 0 1 1 0,${2 * radius}
     a ${radius},${radius} 0 1 1 0,-${2 * radius}`;
	const len = Math.PI * 2 * radius;
	const pathStyle = {
		strokeDasharray: `${len}px ${len}px`,
		strokeDashoffset: `${(1 - percent) * len}px`,
	};

	return (
		<svg className={className} viewBox="0 0 100 100" style={style} {...restProps}>
			<path d={pathString} stroke={trailColor} strokeWidth={trailWidth || strokeWidth} fillOpacity="0" />
			<path
				d={pathString}
				strokeLinecap={strokeLinecap}
				stroke={strokeColor}
				strokeWidth={strokeWidth}
				fillOpacity="0"
				style={pathStyle}
			/>
		</svg>
	);
};

Gauge.defaultProps = {
	strokeWidth: 10,
	strokeColor: 'rgba(0, 0, 0, 0.10)',
	trailWidth: 10,
	trailColor: 'rgba(0, 0, 0, 0.10)',
	strokeLinecap: 'square',
};

Gauge.propTypes = {
	strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	strokeColor: PropTypes.string,
	trailWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	trailColor: PropTypes.string,
	strokeLinecap: PropTypes.oneOf(['round', 'square']),
	style: PropTypes.object,
	className: PropTypes.string,
	percent: PropTypes.number,
};

export default Gauge;
