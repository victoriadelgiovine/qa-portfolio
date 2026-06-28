---
name: "Reporte de Bug"
about: Plantilla avanzada de QA con severidad, prioridad y datos de prueba.
title: "[BUG] "
labels: bug
---

### ID
*Ej: BUG-001 (o dejar vacío si se usa el número correlativo de GitHub)*

### Título
*Breve y descriptivo (Ej: El sistema no muestra mensaje de error al enviar formulario vacío)*

### Descripción / Resumen
*Una explicación concisa de qué está fallando y cuándo ocurre.*

### Entorno
* **Dispositivo / Sistema Operativo:** *(Ej: PC Windows 11 / iPhone 14)*
* **Navegador y Versión:** *(Ej: Chrome v125 / Safari)*
* **Tipo de pantalla:** *(Ej: Desktop / Mobile)*

### Precondiciones
1. 
2. 

### Datos de Prueba
*Variables o inputs específicos que usaste (Ej: campo email = "", contraseña = "abc123")*

### Pasos para Reproducir
1. 
2. 
3. 

### Resultado Esperado
*¿Qué debería pasar en el sistema según el Criterio de Aceptación?*

### Resultado Obtenido
*¿Qué pasó realmente? (El comportamiento fallido).*

### Severidad
*Impacto técnico del error en el sistema (Marcar con una 'X'):*
- [ ] **Bloqueante (Blocker):** La funcionalidad principal del sistema está completamente inoperativa. La app se cae o muestra pantalla en blanco. Impide la continuación de las pruebas sobre esa funcionalidad.
- [ ] **Crítica (Critical):** Falla una funcionalidad principal sin camino alternativo posible para el usuario.
- [ ] **Mayor (Major):** Falla una función importante, pero existe una alternativa para continuar operando.
- [ ] **Menor (Minor):** Error estético o visual: texto mal escrito, desbordamiento leve de UI, problema de alineación.

### Prioridad
*Urgencia para el negocio/desarrollo (Marcar con una 'X'):*
- [ ] **Alta:** Debe resolverse en el Sprint actual obligatoriamente.
- [ ] **Media:** Puede resolverse en el Sprint actual si hay capacidad, si no pasa al siguiente.
- [ ] **Baja:** No es urgente, puede planificarse para más adelante.

### Evidencia
*Arrastrá y soltá acá tus capturas de pantalla, videos o mensajes de la consola de desarrollo.*
