/** @jest-environment jsdom */
import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

// Tarea
// Pruebas en el <CounterApp />
// test: debe de hacer match con el snapshot
// tets: debe de mostrar el valor inicial de 100 <CounterApp value={100} />

describe('Pruebas en <CounterApp />', () => {
    const initialValue = 10;

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
        // console.log(container)
    });

    // La idea de este test es verificar que en el HTML del componente se renderiza un 100 que es el valor que se pasa por props
    test('debe de mostrar el valor inicial de 100 <CounterApp value={100}', () => {
        render(<CounterApp value={100} />);
        expect(screen.getByText(100)).toBeTruthy();

        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain('100')
    });

    test('debe aumentar con el boton +1', () => {
        render(<CounterApp value={initialValue} />); // Ponemos nuestro sujeto de pruebas
        fireEvent.click(screen.getByText('+ 1')); // Simulamos la accion del evento click [Aplicar un estimulo]
        expect(screen.getByText('11')).toBeTruthy(); // Comparamos con el resultado esperado cuando se de click [Hacer la asercion del comportamiento esperado despues del estimulo]
    })
    
    test('debe de decrementar con el boton -1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('- 1')); // Simulamos la accion del evento click
        // screen.debug(); // Linea para verificar como se modifica el DOM al momento que se simula el click en la linea anterior
        expect(screen.getByText('9')).toBeTruthy(); // Comparamos con el resultado esperado cuando se de click
    })

    test('debe de funcionar el boton de reset', () => {
        render(<CounterApp value={355} />)
        fireEvent.click(screen.getByText('+ 1')); // Se incrementa el valor en 1
        fireEvent.click(screen.getByText('+ 1')); // Se incrementa el valor en 1
        fireEvent.click(screen.getByText('+ 1')); // Se incrementa el valor en 1
        // fireEvent.click(screen.getByText('Reset')); // Se resetea el value [Manera 1]
        // Se verifica si se reseteo correctamente
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'})); // Se resetea el value [Manera 2]
        expect(screen.getByText(355)).toBeTruthy(); // Busca que en el DOM aparezca el valor de 355, que es valor que se envia inicialmente al componente en el value
    })
    
});