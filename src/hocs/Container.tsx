import { ComponentType } from 'react';

const withContainer = <P extends object>(
	WrappedComponent: ComponentType<P>
) => {
	return (props: P) => (
		<div className="container p-6 border rounded-12 border-gray-200 bg-white">
			<WrappedComponent {...props} />
		</div>
	);
};

export default withContainer;
