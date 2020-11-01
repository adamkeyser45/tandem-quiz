import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuizBody from '..';

afterEach(cleanup);

describe('QuizBody Component', () => {
    it('renders', () => {
        render(<QuizBody />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<QuizBody />);
        expect(asFragment()).toMatchSnapshot();
    });
});