import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from "./store/redux";

beforeEach(() => {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
    );
})

test('renders default elements', () => {
    const tabsObject = screen.getByRole("tablist");
    expect(tabsObject).toBeInTheDocument();

    //tabs
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(2);
    expect(tabs[0]).toHaveTextContent(/add candidate/i);
    expect(tabs[1]).toHaveTextContent(/manage nominations/i);

    //content
    fireEvent.click(tabs[0]);
    const addItem = screen.getByTestId("addCandidate");
    expect(addItem).toBeVisible()
    fireEvent.click(tabs[1]);
    const manageItem = screen.getByTestId("manageNominations");
    expect(manageItem).toBeVisible()
});
