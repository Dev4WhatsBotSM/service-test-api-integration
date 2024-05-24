![enter image description here](https://avatars.githubusercontent.com/u/77294778?s=200&v=4)

api-service-order
==========


<strong>Autor:</strong> Carlos Rivas Frutero<br>
<strong>Email:</strong> [crivas@whatsbotsm.com](crivas@whatsbotsm.com)<br>
<strong>Fecha:</strong> 22-03-2024<br>


## Descripción



## Como empezar

En el archivo "configuraciones/conexion.json" Sustituye la configuración de las conexiones a la base de datos
```json
{
    "desarrollo": {
        "config_id": "desarrollo",
        "database_config_pg": {
            "server": "HOST_DEV",
            "database": "BD_DEV",
            "user": "USR_DEV",
            "password": "PASS_DEV",
            "port": 1433
        }
    },
}
```

Instalar las dependencias
```shell
npm i
```

Iniciar el servidor
```shell
npm start
```

Ejecutar las pruebas de integración
```shell
npm test
```
docker build -t crivas/api-service-order-01 .
docker run -it -p 8092:8092 --rm --name 02-api-service-order crivas/api-service-order-01