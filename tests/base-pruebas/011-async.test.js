import { string } from "prop-types";
import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-Async-Await.js', () => {
    test('getImagen debe de retornar un URL de la imagen',async()=>{

        const resp = await getImagen();

        expect(resp).toBe('No se encontro');

    });
});