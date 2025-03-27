import React, { ComponentType } from 'react';

// Define the type for additional props added by the HOC
type WithContainerProps = {
    className?: string;
};

// Create a generic HOC that properly handles type propagation
const withContainer = <P extends object>(
    WrappedComponent: ComponentType<P>
) => {
    // Create a new component type that combines original props with additional container props
    const WithContainer: React.FC<P & WithContainerProps> = ({ 
        className = '', 
        ...props 
    }) => (
        <div className={`container p-6 border rounded-12 border-gray-200 bg-white ${className}`}>
            <WrappedComponent {...props as P} />
        </div>
    );

    // Copy display name for better debugging
    WithContainer.displayName = `withContainer(${
        WrappedComponent.displayName || WrappedComponent.name || 'Component'
    })`;

    return WithContainer;
};

export default withContainer;