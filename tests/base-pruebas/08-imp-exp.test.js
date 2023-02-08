import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruenas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un héroe por ID',()=>{

        const id=100;

        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();

    });

    test('getHeroesByOwner debe de regresar heroes de DC',()=>{
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect( heroes ).toEqual( heroes.filter( (heroe)=> heroe.owner === owner));
    });

    test('getHeroesByOwner debe de regresar heroes de Marvel',()=>{
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
        expect( heroes ).toEqual( heroes.filter( (heroe)=> heroe.owner === owner));
    });
  
})
