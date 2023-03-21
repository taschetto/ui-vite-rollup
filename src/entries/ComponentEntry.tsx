import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from '../components/Wrapper';
import { Component } from '../components/Component';

export const render = (container: Element, props: any) => {
  ReactDOM.render(
    <React.StrictMode>
      <Wrapper>
        <Component {...props} />
      </Wrapper>
    </React.StrictMode>,
    container
  );
};
