import { fireEvent, render,screen} from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en el Counter App',()=>{

    const value = 10;

    test('debe de hacer match con el snapshot',()=>{

        const{ container } = render(<CounterApp value={value}/>);

        expect( container ).toMatchSnapshot();
    });

    test('debe de mostar el valor inicial de 100',()=>{

        render(<CounterApp value={100}/>);
        expect(screen.getByText(100)).toBeTruthy();

    });

    test('Debe Incrementar con el boton +1',()=>{
        render(<CounterApp value={value}/>);
        fireEvent.click( screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    });

});

