import React from "react";
import Header from "./Header";
import ReactDOM from 'react-dom';
import { render, screen } from "@testing-library/react";

describe('Header Component', () => {

    // FIRST WAY
    // test('Has heading without testing library', () => {
    //     const rootElement = document.createElement('div');
    //     rootElement.id = 'root';

    //     document.body.appendChild(rootElement);

    //     ReactDOM.render(<Header />, rootElement);

    //     const actualElement = rootElement.querySelector('h1.heading');
    //     expect(actualElement.textContent).toBe('Unit Testing');
    // });

    // SECOND WAY
    test('Has heading using testing library', () => {
        // Arrange
        render(<Header />);

        // Act
        const element = screen.getByText('Unit Testing');

        // Assert
        expect(element).toBeInTheDocument();
    });
});