import { beforeAll, describe, expect, expectTypeOf, test } from 'vitest';
import { Servicios } from '../src/configuraciones/consumo-servicios.js';
import { ConsumirServicio } from '../src/servicios/microservicios.js';



const BEFORE_ALL_TIMEOUT = 30000; // 30 sec

// Aqui van los de los paquetes
describe('Servicios.ServOrdPack.ApiPaquetes.PackageGetPack', () => {
    let response;
    let body;

    beforeAll(async () => {
        let url = Servicios.ServOrdPack.ApiProducts.PackageGetProd
        url.url = url.url.replace(":id_paquete", 10)
        response = await ConsumirServicio(url, 'PackageGetPack')
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
        let url = Servicios.ServOrdPack.ApiProducts.PackagePostProd
        url.data = {
            "insertpaquete": {
                "id_paquete": 10,
                "id_producto": 1,
                "cantid_prod": 2,
                "descuento_id": 0
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

describe('Servicios.ServOrdPack.ApiProducts.PackagePutPack', () => {
    let response;
    let body;


    beforeAll(async () => {
        let url = Servicios.ServOrdPack.ApiProducts.PackagePutPack
        url.data = {
            "insertpaquete": {
                "id_detalle_paquete": 10,
                "id_paquete": 10,
                "id_producto": 1,
                "cantid_prod": 2,
                "descuento_id": 0
            }
        }
        response = await ConsumirServicio(url, 'PackagePutPack')
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

//Aqui van los de Productos

describe('Servicios.ServOrdPack.ApiProducts.PackageGetProd', () => {
    let response;
    let body;

    beforeAll(async () => {
        let url = Servicios.ServOrdPack.ApiProducts.PackageGetProd
        url.url = url.url.replace(":id_paquete", 10)
        response = await ConsumirServicio(url, 'PackageGetProd')
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
        let url = Servicios.ServOrdPack.ApiProducts.PackagePostProd
        url.data = {
            "insertpaquete": {
                "id_paquete": 10,
                "id_producto": 1,
                "cantid_prod": 2,
                "descuento_id": 0
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

describe('Servicios.ServOrdPack.ApiProducts.PackagePutPack', () => {
    let response;
    let body;


    beforeAll(async () => {
        let url = Servicios.ServOrdPack.ApiProducts.PackagePutPack
        url.data = {
            "insertpaquete": {
                "id_detalle_paquete": 10,
                "id_paquete": 10,
                "id_producto": 1,
                "cantid_prod": 2,
                "descuento_id": 0
            }
        }
        response = await ConsumirServicio(url, 'PackagePutPack')
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


