import React from 'react';
import ReactDOM from 'react-dom';
import Results from '../components/main/results';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Results />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('recognizes div', () => {
  let main = shallow(<Results />);
  expect(main.find('div').exists()).toBeTruthy();
});


