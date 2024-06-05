import { beforeAll, describe, expect, expectTypeOf, test } from 'vitest';
import { Servicios } from '../src/configuraciones/consumo-servicios.js';
import { ConsumirServicio } from '../src/servicios/microservicios.js';



const BEFORE_ALL_TIMEOUT = 30000; // 30 sec


describe('Servicios.order.ApiServOrderDetalle.ConsApiDetalle', () => {
    let response;
    let body;

    beforeAll(async () => {
        let url = Servicios.order.ApiServOrderDetalle.ConsApiDetalle
        url.url = url.url.replace(":id_pedido", 1)
        response = await ConsumirServicio(url, 'ConsApiDetalle')
        console.log("response", response)
    }, BEFORE_ALL_TIMEOUT);

    test('Should have response status 200', () => {
        expect(response.status).toBe(200);
    });

    test('Should have array in the body', () => {
        expectTypeOf(response.data.resultado).toBeArray();
    });


});


describe('Servicios.order.ApiServOrderDetalle.ConsApiDetallePost', () => {
    let response;
    let body;


    beforeAll(async () => {
        let url = Servicios.order.ApiServOrderDetalle.ConsApiDetallePost
        url.url = url.url.replace(":id_pedido", 18)
        url.data = {
            "datos": {
                "status": "Test",
                "id_tipo_ped": 11,
                "id_producto": 0,
                "cantidad": 0,
                "descuento_id": 0,
                "id_paquete": 8
            }
        }
        response = await ConsumirServicio(url, 'ConsApiDetallePost')
        console.log("response", response)
    }, BEFORE_ALL_TIMEOUT);

    test('Should have response status 200', () => {
        expect(response.status).toBe(200);
    });

    test('Should have array in the body', () => {
        expectTypeOf(response.data.resultado);
    });


});
describe('Servicios.order.ApiServOrderDetalle.ConsApiDetalleCambiarProductoPut', () => {
    let response;
    let body;


    beforeAll(async () => {
        let url = Servicios.order.ApiServOrderDetalle.ConsApiDetalleCambiarProductoPut
        url.url = url.url.replace(":id_pedido", 18)
        url.data = {
            "datos": {
                "id_detalle_pedido": 44,
                "id_producto": 24,
                "cantidad": 2000
            }
        }
        response = await ConsumirServicio(url, 'ConsApiDetalleCambiarProductoPut')
        console.log("response", response)
    }, BEFORE_ALL_TIMEOUT);

    test('Should have response status 200', () => {
        expect(response.status).toBe(200);
    });

    test('Should have array in the body', () => {
        expectTypeOf(response.data.resultado);
    });


});
describe('Servicios.order.ApiServOrderDetalle.ConsApiDetalleCambiarPaquetePut', () => {
    let response;
    let body;


    beforeAll(async () => {
        let url = Servicios.order.ApiServOrderDetalle.ConsApiDetalleCambiarPaquetePut
        url.url = url.url.replace(":id_pedido", 13)
        url.data = {
            "datos" : {
                "id_detalle_pedido" : 55,
                "id_paquete" : 8
            }
        }
        response = await ConsumirServicio(url, 'ConsApiDetalleCambiarPaquetePut')
        console.log("response", response)
    }, BEFORE_ALL_TIMEOUT);

    test('Should have response status 200', () => {
        expect(response.status).toBe(200);
    });

    test('Should have array in the body', () => {
        expectTypeOf(response.data.resultado);
    });


});

describe('Servicios.order.ApiServOrderDetalle.ConsApiDetalleCambiarPaq2ProdPut', () => {
    let response;
    let body;


    beforeAll(async () => {
        let url = Servicios.order.ApiServOrderDetalle.ConsApiDetalleCambiarPaq2ProdPut
        url.url = url.url.replace(":id_pedido", 13)
        url.data = {
            "datos" : {
                "id_detalle_pedido" : 36,
                "id_producto" : 17,
                "cantidad" : 8
            }
        }
        response = await ConsumirServicio(url, 'ConsApiDetalleCambiarPaquetePut')
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
//     let response;

//     beforeAll(async () => {
//         try {
//             let url = Servicios.order.ApiServOrderCategory.ConsApiDetalleDeletes;
//             url.url = url.url.replace("id_cat_ped", 22);

//             response = await ConsumirServicio(url, 'ConsApiDetalleDeletes');
//             console.log("response", response);
//         } catch (error) {
//             throw new Error(`Error al consumir el servicio: ${error}`);
//         }
//     }, BEFORE_ALL_TIMEOUT);

//     test('Debería tener un estado de respuesta 200', () => {
//         expect(response.status).toBe(200);
//     });

//     test('El cuerpo de la respuesta debería ser un array', () => {
//         expect(Array.isArray(response.body)).toBe(true);
//     });
// });