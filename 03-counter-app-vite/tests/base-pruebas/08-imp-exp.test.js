import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import dataHeroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeById debe retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    })

    // Tarea:
    // Debe de retornar un arreglo con los heroes de DC
    // Lenght === 3
    // toEqual al arreglo filtrado

    test('getHeroesByOwner debe retornar los heroes de DC', () => {
        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);

        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        expect(heroes).toEqual(dataHeroes.filter((heroe) => heroe.owner === owner));
    });

    // Tarea:
    // Debe de retornar un arreglo con los heroes de Marvel
    test('getHeroesByOwner debe retornar los heroes de Marvel', () => {
        const owner = 'Marvel';

        const heroes = getHeroesByOwner(owner);

        // console.log(hero);

        expect(heroes.length).toBe(2);

        expect(heroes).toEqual(dataHeroes.filter((heroe) => heroe.owner === owner));
    });
})
