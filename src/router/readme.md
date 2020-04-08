## Router

Directorio para el router de la app.

# ¿Como añadir una opcion de menu?
Se tiene que seguir estos sencillos pasos:

1. Modificar y guardar el fichero **rolesweb**, en el rol seleccionado añadir la nueva ruta dentro de la acción (el menu de la app), por ejemplo en el rol: DGT_PRE_US_OFICENTDIRE:

```json
    {
    "rol": "DGT_PRE_US_OFICENTDIRE",
    "accion": [
        { "path": "/admision", "sub": null },
        { "path": "/nuevo", "sub": null }
    ],
    "label": "Centro directivo"
    }
```

2. Modificar y guardar el fichero **routes**, añadiendo la nueva ruta, con su label y con su compomente:

```json
    {
    "path": "/nuevo",
    "component": nuevo,
    "label": "nuevo"
    }
```
3. Loguearse de nuevo para que pueda coger los cambios aplicados.