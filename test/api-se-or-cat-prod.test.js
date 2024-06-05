import { beforeAll, describe, expect, expectTypeOf, test } from 'vitest';
import { Servicios } from '../src/configuraciones/consumo-servicios.js';
import { ConsumirServicio } from '../src/servicios/microservicios.js';



const BEFORE_ALL_TIMEOUT = 30000; // 30 sec


describe('Servicios.cat_prod.ApiCatProd.ConsApiCatProdGet', () => {
    let response;
    let body;
 
    beforeAll(async () => {
        let url = Servicios.cat_prod.ApiCatProd.ConsApiCatProdGet
        url.url = url.url.replace(":id_cat_prod", 1)
        response = await ConsumirServicio(url, 'ConsApiCatProdGet')
        console.log("response", response)
    }, BEFORE_ALL_TIMEOUT);

    test('Should have response status 200', () => {
        expect(response.status).toBe(200);
    });

    test('Should have array in the body', () => {
        expectTypeOf(response.data.resultado).toBeArray();
    });

   
});



describe('Servicios.cat_prod.ApiCatProd.ConsApiCatProdPost', () => {
    let response;
    let body;
    

    beforeAll(async () => {
        let url = Servicios.cat_prod.ApiCatProd.ConsApiCatProdPost
        url.data={
            "paqueteprod":{
                "id_client_admin_bot":11,
                "idbot":8,
                "status_paquete":"Testing",
                "nombre_paquete":"Test",
                "descripcion_paquete":"Test",
                "descuento_id":4
            }
        }
        response = await ConsumirServicio(url, 'ConsApiCatProdPost')
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
            "paqueteprod":{
                ":id_cat_prod": 18,
                "id_client_admin_bot":11,
                "idbot":8,
                "status_paquete":"Testing",
                "nombre_paquete":"Test",
                "descripcion_paquete":"Test",
                "descuento_id":4
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



