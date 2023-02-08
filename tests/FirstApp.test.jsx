const { render, getByText, getByTestId } = require("@testing-library/react");
const { FirstApp } = require("../src/FirstApp");

describe('Pruebas en FirstApp', () => {
  
    // test('Debe de hacer match',()=>{
        
    //     const title = 'Hola Soy Goku';
    //     const {container}=render(<FirstApp title={title}/>);

    //     expect(container).toMatchSnapshot();
    // });

    test('Debe de mostrar Titulo en un h1',()=>{
        
        const title = 'Hola Soy Goku';
        const {container,getByText,getByTestId}=render(<FirstApp title={title}/>);

        expect(getByText(title)).toBeTruthy();

        expect(getByTestId('test-title').innerHTML).toBe(title);
        // expect( getByText(title)).toBeTruthy();

        // const h1= container.querySelector('h1');
        // expect(h1.innerHTML).toBe(title);

    });

    test('Debe de mostrar el subtitulo enviado por props',()=>{
        
        const title = 'Hola Soy Goku';
        const subTitle = 'Soy un Subtitulo';

        const {getByText} = render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        )
        expect( getByText(subTitle)).toBeTruthy();

    });
})
