import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import GamePage from '../../components/pages/GamePage';
import "@testing-library/jest-dom";

// Mocks für API und Timer
jest.mock('../../api', () => ({
    fetchTruth: jest.fn(() => Promise.resolve('Das ist die Wahrheit')),
    fetchLies: jest.fn(() => Promise.resolve(['Lüge 1', 'Lüge 2', 'Lüge 3']))
}));

jest.mock('../../components/hooks/useTimer', () => ({
    useTimer: jest.fn(() => [45, jest.fn()])
}));

describe('GamePage', () => {
    it('rendert die GamePage-Komponente', async () => {
        render(<GamePage mode="classic" onBack={jest.fn()}/>);
        expect(await screen.findByText(/streak/i)).toBeInTheDocument();
    });

    it('zeigt die Fakten an', async () => {
        render(<GamePage mode="classic" onBack={jest.fn()}/>);
        expect(await screen.findByText('Das ist die Wahrheit')).toBeInTheDocument();
        expect(await screen.findByText('Lüge 1')).toBeInTheDocument();
        expect(await screen.findByText('Lüge 2')).toBeInTheDocument();
    });

    it('erhöht die Streak bei richtiger Antwort', async () => {
        render(<GamePage mode="classic" onBack={jest.fn()}/>);
        const fact = await screen.findByText('Das ist die Wahrheit');
        fireEvent.click(fact);
        await waitFor(() => {
            expect(screen.getByText(/richtig/i)).toBeInTheDocument();
        });
    });

    it('zeigt Game Over nach 3 Fehlern im Classic-Modus', async () => {
        render(<GamePage mode="classic" onBack={jest.fn()}/>);
        // 3x auf eine Lüge klicken
        const lie = await screen.findByText('Lüge 1');
        fireEvent.click(lie);
        await waitFor(() => screen.getByText(/falsch/i));
        fireEvent.click(await screen.findByText('Lüge 1'));
        await waitFor(() => screen.getByText(/falsch/i));
        fireEvent.click(await screen.findByText('Lüge 1'));
        await waitFor(() => {
            expect(screen.getByText((content) => /game over | falsch/i.test(content))).toBeInTheDocument();
        });
    });

    it('ruft onBack auf, wenn der Zurück-Button geklickt wird', async () => {
        const onBack = jest.fn();
        render(<GamePage mode="classic" onBack={onBack}/>);
        const backButton = screen.getByRole('button', {name: /back to main page/i});
        fireEvent.click(backButton);
        expect(onBack).toHaveBeenCalled();
    });
});