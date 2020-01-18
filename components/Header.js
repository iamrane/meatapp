import { useField } from 'formik';
import { motion } from 'framer-motion';
import Logo from 'components/Logo';

const Header = () => {
	const [meta] = useField('searchString');
	const { value: searchString } = meta;
	return (
		<motion.div
			className="m-auto max-w-full"
			animate={{
				width: searchString?.length < 3 ? 200 : 100,
			}}
		>
			<Logo fill="#fff" />
		</motion.div>
	);
};

export default Header;
