export const ORDER = {
    URL_API_SRVC_ORDER: process.env.URL_API_SRVC_ORDER || "http://localhost:8090/api/service/v1",//Api-Service-Orders Pedidos
    URL_API_SERV_OR_PACKG: process.env.URL_API_SERV_OR_PACKG || "http://localhost:8091/api/service/v1",//Api-Service-Order-Package
    URL_API_SERV_ORDER_CAT_PROD: process.env.URL_API_SERV_ORDER_CAT_PROD || "http://localhost:8094/api/service/v1",//Api-sc-order-cat-prod
    URL_API_SERV_ORDER_SUS: process.env.URL_API_SERV_ORDER_SUS||"http://localhost:8093/api/service/v1",
    URL_API_SERV_ORDER_DISCOUNT: process.env.URL_API_SERV_ORDER_DISCOUNT || "http://localhost:8092/api/service/v1",
};
const idfrUsuario = "TestJohan";
const nameAppl = "Api-Test";

export const Servicios = {
    order: {

        ApiServOrderCategory: {

            ConsApiCategory: {
                method: "GET",
                url: `${ORDER.URL_API_SRVC_ORDER}/categoria/pedido/:id_cat_ped`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            ConsApiCategoryPost: {
                method: 'POST',
                url: `${ORDER.URL_API_SRVC_ORDER}/categoria/pedido`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            ConsApiCategoryPut: {
                method: 'PUT',
                url: `${ORDER.URL_API_SRVC_ORDER}/categoria/pedido`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },
        },


        ApiServOrderPed: {

            ConsApiPedidos: {
                method: "GET",
                url: `${ORDER.URL_API_SRVC_ORDER}/pedido/:id_pedido`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            ConsApiPedidoPost: {
                method: 'POST',
                url: `${ORDER.URL_API_SRVC_ORDER}/pedido/nuevaSolicitud`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },

            ConsApiCategoryPut: {
                method: 'PUT',
                url: `${ORDER.URL_API_SRVC_ORDER}/pedido`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            // ConsApiCategoryDelete: {
            //     method : 'DELETE',
            //     url:`${ORDER.URL_API_SRVC_ORDER}/categoria/pedido/:id_cat_ped`,
            //      headers:{
            //         nombre_aplicativo: nameAppl,
            //         identificador_usuario: idfrUsuario
            //     },
            // },



        },


        ApiServOrderDetalle: {

            ConsApiDetalle: {
                method: "GET",
                url: `${ORDER.URL_API_SRVC_ORDER}/detalle/pedido/:id_pedido`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            ConsApiDetallePost: {
                method: 'POST',
                url: `${ORDER.URL_API_SRVC_ORDER}/detalle/pedido/:id_pedido`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },
            
            ConsApiDetallePedidoPut: {
                method : 'PUT',
                url:`${ORDER.URL_API_SRVC_ORDER}/detalle/pedido`,
                 headers:{
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            ConsApiDetalleCambiarProductoPut: {
                method: 'PUT',
                url: `${ORDER.URL_API_SRVC_ORDER}/detalle/cambiarProducto/:id_pedido`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            ConsApiDetalleCambiarPaquetePut: {
                method: 'PUT',
                url: `${ORDER.URL_API_SRVC_ORDER}/detalle/cambiarPaquete/:id_pedido`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },


            ConsApiDetalleCambiarProd2PaqPut: {
                method: 'PUT',
                url: `${ORDER.URL_API_SRVC_ORDER}/detalle/cambiarProd2Paq/:id_pedido`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            ConsApiDetalleCambiarPaq2ProdPut: {
                method: 'PUT',
                url: `${ORDER.URL_API_SRVC_ORDER}/detalle/cambiarPaq2Prod/:id_pedido`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },

            // ConsApiDetalleDelete: {
            //     method : 'DELETE',
            //     url:`${ORDER.URL_API_SRVC_ORDER}/categoria/pedido/:id_cat_ped`,
            //      headers:{
            //         nombre_aplicativo: nameAppl,
            //         identificador_usuario: idfrUsuario
            //     },
            // },



        },








    },

    cat_prod: {
        ApiCatProd: {

            ConsApiCatProdGet: {
                method: "GET",
                url: `${ORDER.URL_API_SERV_ORDER_CAT_PROD}/categoria/producto/:id_cat_prod`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },
            ConsApiCatProdPost: {
                method: 'POST',
                url: `${ORDER.URL_API_SERV_ORDER_CAT_PROD}/categoria/producto`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            ConsApiCatProdPut: {
                method: 'PUT',
                url: `${ORDER.URL_API_SERV_ORDER_CAT_PROD}/categoria/producto/:id_cat_prod`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

        },

        Productobot: {
            ConsProductoGet: {
                method: "GET",
                url: `${ORDER.URL_API_SERV_ORDER_CAT_PROD}/productos/:id_producto`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },
            ProductoPost: {
                method: 'POST',
                url: `${ORDER.URL_API_SERV_ORDER_CAT_PROD}/productos`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },
            ProductoPut: {
                method: 'PUT',
                url: `${ORDER.URL_API_SERV_ORDER_CAT_PROD}/productos/:id_producto`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },

            ProductoPutPrecio: {
                method: 'PUT',
                url: `${ORDER.URL_API_SERV_ORDER_CAT_PROD}/productos/precio/:id_producto`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },
            ProductoPutComision: {
                method: 'PUT',
                url: `${ORDER.URL_API_SERV_ORDER_CAT_PROD}/productos/comision/:id_producto`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },
            ProductoPutCantidad: {
                method: 'PUT',
                url: `${ORDER.URL_API_SERV_ORDER_CAT_PROD}/productos/cantidad/producto/:id_producto`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },

        }
    },

    discount: {
        ApiDiscount: {
            ConsApiDiscountGet: {
                method: "GET",
                url: `${ORDER.URL_API_SERV_ORDER_DISCOUNT}/descuentos/:id_descuento`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },
            ConsApiDiscountPost: {
                method: 'POST',
                url: `${ORDER.URL_API_SERV_ORDER_DISCOUNT}/descuentos`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },
            ConsApiDiscountPut: {
                method: 'PUT',
                url: `${ORDER.URL_API_SERV_ORDER_DISCOUNT}/descuentos/:id_descuento`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },
        }
    },

    ServOrdPack: {
        ApiProducts: {
            PackageGetProd: {
                method: "GET",
                url: `${ORDER.URL_API_SERV_OR_PACKG}/precio/productos/:id_paquete`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },
            PackagePostProd: {
                method: 'POST',
                url: `${ORDER.URL_API_SERV_OR_PACKG}/detallepaquetes`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },
            PackagePutPack: {
                method: 'PUT',
                url: `${ORDER.URL_API_SERV_OR_PACKG}/updatedetalle`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },

        },
        ApiPaquetes: {
            PackageGetPack: {
                method: "GET",
                url: `${ORDER.URL_API_SERV_OR_PACKG}/paquete/productos/:id_paquete`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },
            PackagePostPack: {
                method: 'POST',
                url: `${ORDER.URL_API_SERV_OR_PACKG}/detallepaquetes`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },
        }
    },

    Suscription:{
        ApiSuscription: {
            ConsApiSuscriptionGet: {
                method: "GET",
                url: `${ORDER.URL_API_SERV_ORDER_SUS}/suscripcion/:id_suscripcion`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },
            ConsApiSuscriptionPost: {
                method: 'POST',
                url: `${ORDER.URL_API_SERV_ORDER_SUS}/suscripcion`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },
            ConsApiSuscriptionPut: {
                method: 'PUT',
                url: `${ORDER.URL_API_SERV_ORDER_SUS}/suscripcion/:id_suscripcion`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },
        },
        ApiPagosSusc: {
            ConsApiSuscriptionGet: {
                method: "GET",
                url: `${ORDER.URL_API_SERV_ORDER_SUS}/pago/suscripcion/:id_pago_suscr`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },
            ConsApiSuscriptionPost: {
                method: 'POST',
                url: `${ORDER.URL_API_SERV_ORDER_SUS}/pago/suscripcion`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },
            ConsApiSuscriptionPut: {
                method: 'PUT',
                url: `${ORDER.URL_API_SERV_ORDER_SUS}/pago/suscripcion/:id_pago_suscr`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: 1
                },
            },
        }
        
    }


};
