import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Prueba en 05-Funciones', () => {
  test('getUser debe retornar un objeto',()=>{

    const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    };

    const user =getUser();

    expect( testUser ).toEqual( user);

  });

  test('getUsuarioActivo debe retornar un Objeto',()=>{

    const name = 'John Connor';

    const user = getUsuarioActivo( name );

    expect( user ).toStrictEqual({
        uid: 'ABC567',
        username: name
    });

  });

});
