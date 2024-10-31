# Terratest 1.1

## Tabla de Contenido

1. Instalación
2. Habilitación de MQTT en RabbitMQ
3. Frontend
4. Backend
5. Raspberry

---

## Habilitación de MQTT en RabbitMQ

### 1. Actualizar paquetes de Ubuntu

```bash
sudo apt update
sudo apt upgrade
````

### 2. Instalar Docker

Instala Docker en tu instancia de EC2 ejecutando:

```bash
sudo apt install -y docker.io
```

### 3. Iniciar y habilitar Docker para arranque automático

Inicia Docker y configura el servicio para que arranque automáticamente al reiniciar la instancia:

```bash
sudo systemctl start docker
sudo systemctl enable docker
```

### 4. Verificar la instalación de Docker

Asegúrate de que Docker se ha instalado correctamente con el siguiente comando:

```bash
docker --version
```

### 5. Ejecutar RabbitMQ con soporte para MQTT en Docker

Ejecuta el siguiente comando para lanzar RabbitMQ con soporte MQTT y asegurarlo para reinicio automático:

```bash
docker run -d --name rabbitmq --restart unless-stopped -p 5672:5672 -p 15672:15672 -p 1883:1883 rabbitmq:4.0-management
```

### Descripción de los puertos utilizados:

- **5672**: Puerto para el protocolo AMQP.
- **15672**: Puerto para la interfaz de administración web.
- **1883**: Puerto para el protocolo MQTT.

### 6. Habilitar el plugin de MQTT en RabbitMQ

```bash
docker exec -it rabbitmq rabbitmq-plugins enable rabbitmq_mqtt
```

### 7. Verificación del Estado de RabbitMQ y MQTT

#### A. Comprobar que el contenedor está en ejecución

Ejecuta el siguiente comando para confirmar que RabbitMQ está funcionando:

```bash
docker ps
```
