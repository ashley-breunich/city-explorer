import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('recognizes div', () => {
  let app = shallow(<App />);
  expect(app.find('div').exists()).toBeTruthy();
});
