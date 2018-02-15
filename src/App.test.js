import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AddEntry from './components/AddEntry';
import Entries from './components/Entries';

it('The App component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('The AddEntry component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddEntry />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('The Entries component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Entries/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
