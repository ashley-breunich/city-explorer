import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/main/main';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('recognizes main', () => {
  let main = shallow(<Main />);
  expect(main.find('main').exists()).toBeTruthy();
});

it('recognizes label', () => {
  let main = shallow(<Main />);
  expect(main.find('label').exists()).toBeTruthy();
});

it('recognizes input', () => {
  let main = shallow(<Main />);
  expect(main.find('input').exists()).toBeTruthy();
});

it('recognizes form', () => {
  let main = shallow(<Main />);
  expect(main.find('form').exists()).toBeTruthy();
});

it('recognizes button', () => {
  let main = shallow(<Main />);
  expect(main.find('button').exists()).toBeTruthy();
});
