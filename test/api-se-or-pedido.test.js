import { beforeAll, describe, expect, expectTypeOf, test } from 'vitest';
import { Servicios } from '../src/configuraciones/consumo-servicios.js';
import { ConsumirServicio } from '../src/servicios/microservicios.js';



const BEFORE_ALL_TIMEOUT = 30000; // 30 sec


describe('Servicios.order.ApiServPed.ConsApiPedidos', () => {
    let response;
    let body;

    beforeAll(async () => {
        let url = Servicios.order.ApiServPed.ConsApiPedidos
        url.url = url.url.replace(":id_pedido", 1)

        response = await ConsumirServicio(url, 'ConsApiPedidos')
        console.log("response", response)
    }, BEFORE_ALL_TIMEOUT);

    test('Should have response status 200', () => {
        expect(response.status).toBe(200);
    });

    test('Should have array in the body', () => {
        expectTypeOf(response.data.resultado).toBeArray();
    });

   
}



);

describe('Servicios.order.ApiServOrderCategory.ConsApiPedidoPost', () => {
    let response;
    let body;
    

    beforeAll(async () => {
        let url = Servicios.order.ApiServOrderCategory.ConsApiPedidoPost
        url.data={
            "datos" : {
                "status" : "No Activo",
                "title" : "Test Johan",
                "descrip" : "Prueba de Test put",
                "prioridad" : "1"
            }
        }
        response = await ConsumirServicio(url, 'ConsApiPedidoPost')
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

describe('Servicios.order.ApiServOrderCategory.ConsApiPedidosPut', () => {
    let response;
    let body;
    

    beforeAll(async () => {
        let url = Servicios.order.ApiServOrderCategory.ConsApiPedidosPut
        url.data={
            "datos" : {
                "id_cat_ped":22,
                "status" : "No Activo",
                "title" : "Test Johan",
                "descrip" : "Prueba de Test en donde se modifican datos",
                "prioridad" : "1"
            }
        }
        response = await ConsumirServicio(url, 'ConsApiPedidosPut')
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

describe('Servicios.order.ApiServOrderCategory.ConsApiPedidosDeletes', () => {
    let response;

    beforeAll(async () => {
        try {
            let url = Servicios.order.ApiServOrderCategory.ConsApiPedidosDeletes;
            url.url = url.url.replace("id_cat_ped", 22);

            response = await ConsumirServicio(url, 'ConsApiPedidosDeletes');
            console.log("response", response);
        } catch (error) {
            throw new Error(`Error al consumir el servicio: ${error}`);
        }
    }, BEFORE_ALL_TIMEOUT);

    test('Debería tener un estado de respuesta 200', () => {
        expect(response.status).toBe(200);
    });

    test('El cuerpo de la respuesta debería ser un array', () => {
        expect(Array.isArray(response.body)).toBe(true);
    });
});



