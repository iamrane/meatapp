import PropTypes from 'prop-types';
import LambIcon from 'components/LambIcon';
import BeefIcon from 'components/BeefIcon';
import ChickenIcon from 'components/ChickenIcon';
import FishIcon from 'components/FishIcon';
import GameIcon from 'components/GameIcon';
import CloseIcon from 'components/CloseIcon';

const icons = {
	lamb: LambIcon,
	beef: BeefIcon,
	chicken: ChickenIcon,
	fish: FishIcon,
	game: GameIcon,
	close: CloseIcon,
};

const Icon = props => {
	const { type, ...restProps } = props;
	const Component = icons[type];
	return Component ? <Component {...restProps} /> : null;
};

Icon.propTypes = {
	type: PropTypes.string,
};

Icon.defaultProps = {
	type: '',
};

export default Icon;
