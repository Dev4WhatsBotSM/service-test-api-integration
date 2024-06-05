import { beforeAll, describe, expect, expectTypeOf, test } from 'vitest';
import { Servicios } from '../src/configuraciones/consumo-servicios.js';
import { ConsumirServicio } from '../src/servicios/microservicios.js';



const BEFORE_ALL_TIMEOUT = 30000; // 30 sec


describe('Servicios.order.ApiServOrderPed.ConsApiPedidos', () => {
    let response;
    let body;

    beforeAll(async () => {
        let url = Servicios.order.ApiServOrderPed.ConsApiPedidos
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

describe('Servicios.order.ApiServOrderPed.ConsApiPedidoPost', () => {
    let response;
    let body;


    beforeAll(async () => {
        let url = Servicios.order.ApiServOrderPed.ConsApiPedidoPost
        url.data = {
            "datos": {
                "idbot": 1,
                "status_pedido": "Testing",
                "title": "Johan Test",
                "email": "test@test.com",
                "phone": "5517961505",
                "link_pedido": "/testJ",
                "descuento_id": 0
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

describe('Servicios.order.ApiServOrderPed.ConsApiCategoryPut', () => {
    let response;
    let body;


    beforeAll(async () => {
        let url = Servicios.order.ApiServOrderPed.ConsApiCategoryPut
        url.data = {
            "datos": {
                "id_pedido": 2,
                "status_pedido": "Test ",
                "title": "TestPedido",
                "email": "test@johan.com",
                "phone": "5589874563",
                "link_pedido": "/Testing",
                "descuento_id": 1
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




