import { beforeAll, describe, expect, expectTypeOf, test } from 'vitest';
import { Servicios } from '../src/configuraciones/consumo-servicios.js';
import { ConsumirServicio } from '../src/servicios/microservicios.js';



const BEFORE_ALL_TIMEOUT = 30000; // 30 sec


describe('Servicios.cat_prod.ApiCatProd.ConsApiCatProdGet', () => {
    let response;
    let body;

    beforeAll(async () => {
        let url = Servicios.cat_prod.ApiCatProd.ConsApiCatProdGet
        url.url = url.url.replace(":id_cat_prod", 30)
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
        url.data = {
            "catprod": {
                "status": "Test",
                "type_prod": "Testing",
                "name_cat": "Tenis",
                "descrip": "Pedido test"
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


});

describe('Servicios.discount.ApiDiscount.ConsApiDiscountPut', () => {
    let response;
    let body;


    beforeAll(async () => {
        let url = Servicios.cat_prod.ApiCatProd.ConsApiCatProdPut
        url.url = url.url.replace(":id_cat_prod", 30)
        url.data = {
            "updcat": {
                "status": "Test Put",
                "type_prod": "Accesorios Put Test",
                "name_cat": "Test",
                "descrip": "Pedido test edit"
            }
        }
        response = await ConsumirServicio(url, 'ConsApiDiscountPut')
        console.log("response", response)
    }, BEFORE_ALL_TIMEOUT);

    test('Should have response status 200', () => {
        expect(response.status).toBe(200);
    });

    test('Should have array in the body', () => {
        expectTypeOf(response.data.resultado);
    });


});


// Aqui van los de producto

describe('Servicios.cat_prod.Productobot.ConsProductoGet', () => {
    let response;
    let body;

    beforeAll(async () => {
        let url = Servicios.cat_prod.Productobot.ConsProductoGet
        url.url = url.url.replace(":id_producto", 30)
        response = await ConsumirServicio(url, 'ConsProductoGet')
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
            let url = Servicios.cat_prod.Productobot.ProductoPost
            url.data = {
                "produbot":{
                    "idbot":1, 
                    "status_prod":"Test", 
                    "id_cat_prod":4, 
                    "name_prod":"Test", 
                    "descrip":"Camaras de Test", 
                    "img":"src:camaras", 
                    "price":250, 
                    "comision":0,
                    "descuento_id":0, 
                    "cantid_prod":4   
                    }
            }
            response = await ConsumirServicio(url, 'ProductoPost')
            console.log("response", response)
        }, BEFORE_ALL_TIMEOUT);

        test('Should have response status 200', () => {
            expect(response.status).toBe(200);
        });

        test('Should have array in the body', () => {
            expectTypeOf(response.data.resultado);
        });


});

describe('Servicios.cat_prod.Productobot.ProductoPut', () => {
        let response;
        let body;


        beforeAll(async () => {
            let url = Servicios.cat_prod.Productobot.ProductoPut
            url.url = url.url.replace(":id_producto", 30)
            url.data = {
                "updProducto": {
                    "id_cat_prod": 1,
                    "name_prod": "Test prod",
                    "descrip": "Test",
                    "img": "http:camaras"
                }
            }
            response = await ConsumirServicio(url, 'ProductoPut')
            console.log("response", response)
        }, BEFORE_ALL_TIMEOUT);

        test('Should have response status 200', () => {
            expect(response.status).toBe(200);
        });

        test('Should have array in the body', () => {
            expectTypeOf(response.data.resultado);
        });


    });

describe('Servicios.cat_prod.Productobot.ProductoPutPrecio', () => {
        let response;
        let body;


        beforeAll(async () => {
            let url = Servicios.cat_prod.Productobot.ProductoPutPrecio
            url.url = url.url.replace(":id_producto", 30)
            url.data = {
                "updprecio":{
                    "price": 999
                 }
            }
            response = await ConsumirServicio(url, 'ProductoPutPrecio')
            console.log("response", response)
        }, BEFORE_ALL_TIMEOUT);

        test('Should have response status 200', () => {
            expect(response.status).toBe(200);
        });

        test('Should have array in the body', () => {
            expectTypeOf(response.data.resultado);
        });


    });

describe('Servicios.cat_prod.Productobot.ProductoPutComision', () => {
        let response;
        let body;


        beforeAll(async () => {
            let url = Servicios.cat_prod.Productobot.ProductoPutComision
            url.url = url.url.replace(":id_producto", 30)
            url.data = {
                "updcomision":{
                    "comision": 500
                 }
            }
            response = await ConsumirServicio(url, 'ProductoPutComision')
            console.log("response", response)
        }, BEFORE_ALL_TIMEOUT);

        test('Should have response status 200', () => {
            expect(response.status).toBe(200);
        });

        test('Should have array in the body', () => {
            expectTypeOf(response.data.resultado);
        });


    });
describe('Servicios.cat_prod.Productobot.ProductoPutCantidad', () => {
        let response;
        let body;


        beforeAll(async () => {
            let url = Servicios.cat_prod.Productobot.ProductoPutCantidad
            url.url = url.url.replace(":id_producto", 30)
            url.data = {
                "updcantidadprod":{
                    "cantid_prod": 999
                 }
            }
            response = await ConsumirServicio(url, 'ProductoPutCantidad')
            console.log("response", response)
        }, BEFORE_ALL_TIMEOUT);

        test('Should have response status 200', () => {
            expect(response.status).toBe(200);
        });

        test('Should have array in the body', () => {
            expectTypeOf(response.data.resultado);
        });


    });