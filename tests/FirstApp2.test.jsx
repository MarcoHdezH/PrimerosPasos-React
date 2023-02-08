
const { render, getByText, getByTestId, fireEvent, screen} = require("@testing-library/react");
const { FirstApp } = require("../src/FirstApp");

describe('Pruebas en FirstApp', () => {

    const title='Hola Soy Goku';

    test('Match con SnapShot',()=>{
        const { container } = render( <FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "Hola Soy Goku" ',()=>{

        render(<FirstApp title={title}/>);
    });
});
