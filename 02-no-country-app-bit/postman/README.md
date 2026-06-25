# Postman

# API Testing – Postman

Colección de pruebas automatizadas para el endpoint `/datos` de App-BI.

## Casos de prueba incluidos

| ID | Descripción | Tipo |
|----|-------------|------|
| TC-D00 | Validación de esquema JSON completo | Validación previa |
| TC-D01 | Verificación de campos raíz obligatorios | Happy path |
| TC-D02 | Validación de tipos de datos y consistencia de `total_registros` | Happy path |
| TC-D03 | Consulta vacía — se espera HTTP 400 o 422 | Negativo |
| TC-D04 | Consulta irrelevante — se espera error `CONSULTA_IRRELEVANTE` | Negativo |

## Cómo importar la colección

1. Abrí Postman
2. Clic en **Import**
3. Arrastrá el archivo `AppBI-API-Testing.postman_collection.json`
4. La colección aparece en el panel izquierdo lista para usar

## Configuración requerida

Antes de ejecutar, configurá la variable de entorno `base_url` apuntando al servidor donde corre la API.

Ejemplo:
```
base_url = http://localhost:8000
```

## Resultados de ejecución

| ID | Estado | Observaciones |
|----|--------|---------------|
| TC-D00 | ✅ PASS | Esquema completo validado correctamente |
| TC-D01 | ✅ PASS | Todos los campos raíz presentes |
| TC-D02 | ✅ PASS | Tipos de datos correctos. `total_registros` coincide con `datos.length` |
| TC-D03 | ✅ PASS | El sistema respondió HTTP 400 |
| TC-D04 | ✅ PASS | Retorna HTTP 422 con código `CONSULTA_IRRELEVANTE` |


