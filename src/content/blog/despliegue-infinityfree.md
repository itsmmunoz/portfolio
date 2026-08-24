Desplegar un proyecto Laravel en hosting compartido no requiere herramientas avanzadas. Esta guía cubre los pasos para publicar tu proyecto en InfinityFree usando FTP y la configuración mínima necesaria.

## Requisitos

Antes de comenzar, asegúrate de contar con lo siguiente:

- Una cuenta en InfinityFree.
- Un proyecto Laravel funcionando en local.
- Un cliente FTP como FileZilla.

## Paso 1: Preparar el Proyecto

Para evitar problemas, realiza una copia de seguridad de tu proyecto, ya que haremos algunos cambios.

## Paso 2: Limpiar Archivos Innecesarios

Elimina los siguientes archivos y carpetas para reducir el tamaño del proyecto:

- Archivos de documentación, como `README.md`.
- Imágenes u otros archivos dentro de `storage` que no sean esenciales.
- La carpeta `vendor` (se reinstalará más adelante).

## Paso 3: Configurar la Base de Datos

1. Crea una base de datos en InfinityFree desde el panel de control.
2. Copia el host, usuario y contraseña proporcionados.
3. Configura el archivo `.env` en tu proyecto con estos valores.
4. Exporta tu base de datos local a SQL.
5. Importa el SQL de tu base de datos a la base de datos de InfinityFree.

## Paso 4: Instalar Dependencias y Optimizar el Proyecto

Ejecuta los siguientes comandos en tu terminal para instalar solo las dependencias necesarias y optimizar la aplicación:

```bash
composer install --no-dev --optimize-autoloader

php artisan optimize
```

## Paso 5: Subir Archivos al Servidor

1. Conéctate a tu cuenta de InfinityFree usando **FileZilla**.
2. Sube la carpeta de tu proyecto dentro de `htdocs`.

## Paso 6: Configurar el .htaccess

Crea un archivo `.htaccess` y agrega el siguiente código, reemplazando `tuproyecto` por el nombre de la carpeta de tu proyecto. Luego, sube este archivo a `htdocs`.

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteRule ^(.*)$ tuproyecto/public/index.php/$1 [L]
</IfModule>
```

Con estos pasos, tu proyecto Laravel debería estar funcionando en **InfinityFree**.
