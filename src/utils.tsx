import React from 'react';
import ReactDOM from 'react-dom';

function getComponentNameInKebabCase<T extends React.ComponentType<any>>(
  Component: T
): string {
  const componentName = Component.displayName || Component.name;
  const kebabCaseName = componentName
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
  console.log({ kebabCaseName });
  return kebabCaseName;
}

export const standalone = (Component: React.FC) => {
  ReactDOM.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>,
    document.getElementById(getComponentNameInKebabCase(Component))
  );
};
