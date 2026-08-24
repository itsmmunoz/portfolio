MoonShine es un panel de administración para Laravel. Con el paquete `sweet1s/moonshine-roles-permissions` puedes agregar un sistema de roles y permisos basado en Spatie Permission.

Una vez instalado MoonShine, instala el paquete de permisos:

```bash
composer require sweet1s/moonshine-roles-permissions
```

En el archivo de configuración de MoonShine, actualice el modelo de usuario al siguiente modelo:

```php
'auth' => [
    'enabled' => true,
    'guard' => 'moonshine',
    'model' => \App\Models\User::class, // Authenticate::class,
    'pipelines' => [],
],
```

## Creación del Modelo Role

Cree un modelo llamado `Role` que extienda el modelo `Role` proporcionado por Spatie.

```bash
php artisan make:model Role
```

```php
namespace App\Models;

use Sweet1s\MoonshineRBAC\Traits\HasMoonShineRolePermissions;
use Spatie\Permission\Models\Role as SpatieRole;

class Role extends SpatieRole
{
    use HasMoonShineRolePermissions;

    protected $with = ['permissions'];
}
```

## Publicación de Configuración de Spatie

```bash
php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
```

En el archivo `permission.php`, reemplaza el modelo `Role` predeterminado:

```php
'models' => [
    'role' => App\Models\Role::class,
```

## Modificación del Modelo User

Agrega el siguiente _trait_ y define la constante `SUPER_ADMIN_ROLE_ID`:

```php
use Sweet1s\MoonshineRBAC\Traits\MoonshineRBACHasRoles;

class User extends Authenticatable
{
    use MoonshineRBACHasRoles;

    const SUPER_ADMIN_ROLE_ID = 1;
}
```

## Refrescar Base de Datos y Configurar Permisos

```bash
php artisan migrate:refresh
php artisan moonshine-rbac:install
```

## Creación de SuperAdmin

```bash
php artisan moonshine-rbac:user
```

## Modificación de Recursos en MoonShine

### Proveedor

```php
use Sweet1s\MoonshineRBAC\Resource\PermissionResource;
use Sweet1s\MoonshineRBAC\Resource\RoleResource;
use Sweet1s\MoonshineRBAC\Resource\UserResource;

public function boot(CoreContract $core, ConfiguratorContract $config): void
{
    // $config->authEnable();

    $core
        ->resources([
            UserResource::class, // pages([
            ...$config->getPages(),
        ]);
}
```

### Menú

Recuerda eliminar `…parent::menu()`:

```php
use Sweet1s\MoonshineRBAC\Resource\PermissionResource;
use Sweet1s\MoonshineRBAC\Resource\RoleResource;
use Sweet1s\MoonshineRBAC\Resource\UserResource;

protected function menu(): array
{
    return [
        MenuGroup::make('System',[
            MenuItem::make('Admins',  UserResource::class),
            MenuItem::make('Roles',  RoleResource::class),
            MenuItem::make('Permisos',  PermissionResource::class)
        ]),
    ];
}
```

## Uso de Permisos Basados en Roles

En los recursos donde deseas aplicar permisos basados en roles, usa el siguiente _trait_:

```php
use Sweet1s\MoonshineRBAC\Traits\WithRolePermissions;

class PostResource extends ModelResource
{
    use WithRolePermissions;
}
```

## Creación de Permisos Relacionados a un Recurso

```bash
php artisan moonshine-rbac:permissions PostResource
```

## Documentación del Paquete

Con estos pasos tendrás un sistema de roles y permisos funcional en tu panel de MoonShine. Para más información, consulta la documentación oficial: [MoonShine Roles & Permissions](https://github.com/sweet1s/moonshine-roles-permissions)
