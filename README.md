# Configuración de RabbitMQ con soporte para MQTT en Docker (EC2 Ubuntu)

Este documento describe los pasos necesarios para configurar RabbitMQ con soporte para MQTT en una instancia de EC2 que ejecuta Ubuntu utilizando Docker.

## 1. Actualizar paquetes de Ubuntu

Ejecuta el siguiente comando para actualizar la lista de paquetes:

```bash
sudo apt update
```

## 2. Instalar Docker

Instala Docker en tu instancia de EC2 ejecutando:

```bash
sudo apt install -y docker.io
```

## 3. Iniciar y habilitar Docker para arranque automático

Inicia Docker y configura el servicio para que arranque automáticamente al reiniciar la instancia:

```bash
sudo systemctl start docker
sudo systemctl enable docker
```

## 4. Verificar la instalación de Docker

Asegúrate de que Docker se ha instalado correctamente con el siguiente comando:

```bash
docker --version
```

## 5. (Opcional) Ejecutar Docker sin sudo

Si prefieres ejecutar Docker sin sudo, agrega tu usuario al grupo `docker` y reinicia la sesión:

```bash
sudo usermod -aG docker $USER
```

Cierra la sesión y vuelve a iniciarla para aplicar los cambios.

## 6. Ejecutar RabbitMQ con soporte para MQTT en Docker

Ejecuta el siguiente comando para lanzar RabbitMQ con soporte MQTT y asegurarlo para reinicio automático:

```bash
docker run -d --name rabbitmq --restart unless-stopped -p 5672:5672 -p 15672:15672 -p 1883:1883 rabbitmq:4.0-management
```

### Descripción de los puertos utilizados:

- **5672**: Puerto para el protocolo AMQP.
- **15672**: Puerto para la interfaz de administración web.
- **1883**: Puerto para el protocolo MQTT.

## 7. Habilitar el plugin de MQTT en RabbitMQ (si es necesario)

Si necesitas habilitar el plugin MQTT en RabbitMQ, utiliza el siguiente comando:

```bash
docker exec -it rabbitmq rabbitmq-plugins enable rabbitmq_mqtt
```

## Verificación del Estado de RabbitMQ y MQTT

### A. Comprobar que el contenedor está en ejecución

Ejecuta el siguiente comando para confirmar que RabbitMQ está funcionando:

```bash
docker ps
```
