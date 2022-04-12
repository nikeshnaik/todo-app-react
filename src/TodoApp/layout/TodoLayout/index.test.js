import { render, screen } from '@testing-library/react';

test('renders layout with light theme', () => {
    render(<ToDoLayout />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
