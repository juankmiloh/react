import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await.js', () => {
    test('getImagen debe de retornar un URL de la imagen', async() => {
        const url = await getImagen();
        // console.log(url);
        expect(typeof url).toBe('string');
    })

    // Prueba para probar que se retorna un mensaje de error cuando no hay API disponible
    // test('getImagen debe de retornar un error sino tenemos API', async() => {        
    //     const resp = await getImagen();
    //     // console.log(url);
    //     expect(resp).toBe('No se encontro la imagen');
    // })
})