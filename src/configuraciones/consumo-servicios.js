export const ORDER = {
    URL_API_SRVC_ORDER: process.env.URL_API_SRVC_ORDER || "http://localhost:8065/api/service/v1",//Api-Service-Orders

    URL_API_SERV_OR_PKG: process.env.URL_API_SERV_OR_PKG || "http://localhost:8092/api/service/v1",//Api-Service-Order-Package

    URL_AGENTE_ASOD: process.env.API_URL_AGENTE_ASOD || "http://localhost:8093",//Api-Service-Order-Discount
    URL_AGENTE_ASOS: process.env.API_URL_AGENTE_ASOS || "http://localhost:8094",//Api-Service-Order-Suscription
    URL_AGENTE_SOCP: process.env.API_URL_AGENTE_SOCP || "http://localhost:8095",//Api-svc-order-cat-prod

};
const idfrUsuario = "TestJohan";
const nameAppl = "api-service-order";

export const Servicios = {
    order: {
        ApiServOrderCategory: {

            ConsApiCategory: {
                method: "GET",
                url: `${ORDER.URL_API_SRVC_ORDER}/categoria/pedido/:idCategoria`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            ConsApiCategoryPost: {
                method : 'POST',
                url:`${ORDER.URL_API_SRVC_ORDER}/categoria/pedido`,
                 headers:{
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            ConsApiCategoryPut: {
                method : 'PUT',
                url:`${ORDER.URL_API_SRVC_ORDER}/categoria/pedido`,
                 headers:{
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            ConsApiCategoryDelete: {
                method : 'DELETE',
                url:`${ORDER.URL_API_SRVC_ORDER}/categoria/pedido/:id_cat_ped`,
                 headers:{
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },
           


        },


        ApiServOrderPed: {

            ConsApiPedidos: {
                method: "GET",
                url: `${ORDER.URL_API_SRVC_ORDER}/categoria/pedido/:idCategoria`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            ConsApiPedidoPost: {
                method : 'POST',
                url:`${ORDER.URL_API_SRVC_ORDER}/categoria/pedido`,
                 headers:{
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            ConsApiCategoryPut: {
                method : 'PUT',
                url:`${ORDER.URL_API_SRVC_ORDER}/categoria/pedido`,
                 headers:{
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            ConsApiCategoryDelete: {
                method : 'DELETE',
                url:`${ORDER.URL_API_SRVC_ORDER}/categoria/pedido/:id_cat_ped`,
                 headers:{
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },
           


        },


        ApiServOrderCategory: {

            ConsApiCategory: {
                method: "GET",
                url: `${ORDER.URL_API_SRVC_ORDER}/categoria/pedido/:idCategoria`,
                headers: {
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            ConsApiCategoryPost: {
                method : 'POST',
                url:`${ORDER.URL_API_SRVC_ORDER}/categoria/pedido`,
                 headers:{
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            ConsApiCategoryPut: {
                method : 'PUT',
                url:`${ORDER.URL_API_SRVC_ORDER}/categoria/pedido`,
                 headers:{
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },

            ConsApiCategoryDelete: {
                method : 'DELETE',
                url:`${ORDER.URL_API_SRVC_ORDER}/categoria/pedido/:id_cat_ped`,
                 headers:{
                    nombre_aplicativo: nameAppl,
                    identificador_usuario: idfrUsuario
                },
            },
           


        },



        




    }
};
