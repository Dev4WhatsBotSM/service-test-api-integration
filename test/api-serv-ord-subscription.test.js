import { beforeAll, describe, expect, expectTypeOf, test } from 'vitest';
import { Servicios } from '../src/configuraciones/consumo-servicios.js';
import { ConsumirServicio } from '../src/servicios/microservicios.js';



const BEFORE_ALL_TIMEOUT = 30000; // 30 sec

// Aqui van los de los de pagos
describe('Servicios.Suscription.ApiPagosSusc.ConsApiSuscriptionGet', () => {
    let response;
    let body;

    beforeAll(async () => {
        let url = Servicios.Suscription.ApiPagosSusc.ConsApiSuscriptionGet
        url.url = url.url.replace(":id_pago_suscr", 10)
        response = await ConsumirServicio(url, 'ConsApiSuscriptionGet')
        console.log("response", response)
    }, BEFORE_ALL_TIMEOUT);

    test('Should have response status 200', () => {
        expect(response.status).toBe(200);
    });

    test('Should have array in the body', () => {
        expectTypeOf(response.data.resultado).toBeArray();
    });


});

describe('Servicios.Suscription.ApiPagosSusc.ConsApiSuscriptionPost', () => {
    let response;
    let body;


    beforeAll(async () => {
        let url = Servicios.Suscription.ApiPagosSusc.ConsApiSuscriptionPost
        url.data = {
            "pag_suscr":{
                "id_suscripcion_bot":5,
                "fecha_pago":"2024/06/05",
                "concepto":"pago unico",
                "referencia":"pago de servicio",
                "cantidad_pago":220,
                "comision":10
            }
        }
        response = await ConsumirServicio(url, 'ConsApiSuscriptionPost')
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

describe('Servicios.Suscription.ApiPagosSusc.ConsApiSuscriptionPut', () => {
    let response;
    let body;


    beforeAll(async () => {
        let url = Servicios.Suscription.ApiPagosSusc.ConsApiSuscriptionPut
        url.url = url.url.replace(":id_pago_suscr", 10)
        url.data = {
            "pag_suscr":{
                "id_suscripcion_bot":5,
                "fecha_pago":"2024/06/05",
                "concepto":"Test",
                "referencia":"Test",
                "cantidad_pago":220,
                "comision":10
            }
        }
        response = await ConsumirServicio(url, 'ConsApiSuscriptionPut')
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

//Aqui van los de suscripcion

describe('Servicios.Suscription.ApiSuscription.ConsApiSuscriptionGet', () => {
    let response;
    let body;

    beforeAll(async () => {
        let url = Servicios.Suscription.ApiSuscription.ConsApiSuscriptionGet
        url.url = url.url.replace(":id_suscripcion", 10)
        response = await ConsumirServicio(url, 'ConsApiSuscriptionGet')
        console.log("response", response)
    }, BEFORE_ALL_TIMEOUT);

    test('Should have response status 200', () => {
        expect(response.status).toBe(200);
    });

    test('Should have array in the body', () => {
        expectTypeOf(response.data.resultado).toBeArray();
    });


});

describe('Servicios.ServOrdPack.ApiPaquetes.PackagePostPack', () => {
    let response;
    let body;


    beforeAll(async () => {
        let url = Servicios.Suscription.ApiSuscription.ConsApiSuscriptionPost
        url.data = {
           "suscripcion":{
        "id_client_admin_bot":1,
        "id_prod_suscr":2,
        "id_paqu_suscr":5,
        "phone_suscr":"5599668844",
        "status_suscr":"Testing",
        "comision":10,
        "descuento_id":5
    }
        }
        response = await ConsumirServicio(url, 'PackagePostPack')
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

describe('Servicios.Suscription.ApiSuscription.ConsApiSuscriptionPut', () => {
    let response;
    let body;


    beforeAll(async () => {
        let url = Servicios.Suscription.ApiSuscription.ConsApiSuscriptionPut
        url.url = url.url.replace(":id_suscripcion", 10)
        url.data = {
           "suscripcion":{
        "id_client_admin_bot":1,
        "id_prod_suscr":2,
        "id_paqu_suscr":5,
        "phone_suscr":"5599668844",
        "status_suscr":"Testing PUT request",
        "comision":10,
        "descuento_id":5
    }
        }
        response = await ConsumirServicio(url, 'ConsApiSuscriptionPut')
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


