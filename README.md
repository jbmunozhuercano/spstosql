## Convierte un archivo csv o xlsx en una consulta sql, por líneas.

## Instrucciones.

1. Clonar o descargar el repositorio.
2. Entrar en la carpeta y usar npm install o yarn.
3. Para obtener ayuda de las opciones, usar `node spstosql.js --help`.
4. Ejemplo de uso:

`node spstosql.js --filename input.csv --tablename ps_category_lang --id id_category`

Donde **--filename** es el nombre del archivo (csv o xlsx), **--tablename** es el nombre de la tabla e **--id** es el nombre del id principal de la tabla.
