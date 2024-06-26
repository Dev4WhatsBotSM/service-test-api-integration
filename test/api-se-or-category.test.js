import { beforeAll, describe, expect, expectTypeOf, test } from 'vitest';
import { Servicios } from '../src/configuraciones/consumo-servicios.js';
import { ConsumirServicio } from '../src/servicios/microservicios.js';



const BEFORE_ALL_TIMEOUT = 30000; // 30 sec


describe('Servicios.order.ApiServOrderCategory.ConsApiCategory', () => {
    let response;
    let body;
 
    beforeAll(async () => {
        let url = Servicios.order.ApiServOrderCategory.ConsApiCategory
        url.url = url.url.replace(":id_cat_ped", 1)
        response = await ConsumirServicio(url, 'ConsApiCategory')
        console.log("response", response)
    }, BEFORE_ALL_TIMEOUT);

    test('Should have response status 200', () => {
        expect(response.status).toBe(200);
    });

    test('Should have array in the body', () => {
        expectTypeOf(response.data.resultado).toBeArray();
    });

   
});


describe('Servicios.order.ApiServOrderCategory.ConsApiCategoryPost', () => {
    let response;
    let body;
    

    beforeAll(async () => {
        let url = Servicios.order.ApiServOrderCategory.ConsApiCategoryPost
        url.data={
            "datos" : {
                "status" : "No Activo",
                "title" : "Test Johan",
                "descrip" : "Prueba de Test put",
                "prioridad" : "1"
            }
        }
        response = await ConsumirServicio(url, 'ConsApiCategoryPost')
        console.log("response", response)
    }, BEFORE_ALL_TIMEOUT);

    test('Should have response status 200', () => {
        expect(response.status).toBe(200);
    });

    test('Should have array in the body', () => {
        expectTypeOf(response.data.resultado);
    });

   
}
);

describe('Servicios.order.ApiServOrderCategory.ConsApiCategoryPut', () => {
    let response;
    let body;
    

    beforeAll(async () => {
        let url = Servicios.order.ApiServOrderCategory.ConsApiCategoryPut
        url.data={
            "datos" : {
                "id_cat_ped":22,
                "status" : "No Activo",
                "title" : "Test Johan",
                "descrip" : "Prueba de Test en donde se modifican datos",
                "prioridad" : "1"
            }
        }
        response = await ConsumirServicio(url, 'ConsApiCategoryPut')
        console.log("response", response)
    }, BEFORE_ALL_TIMEOUT);

    test('Should have response status 200', () => {
        expect(response.status).toBe(200);
    });

    test('Should have array in the body', () => {
        expectTypeOf(response.data.resultado);
    });

   
}
);