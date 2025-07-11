# Deploy en Vercel - Club Futbol

## Configuración Lista ✅

El proyecto ya está configurado para hacer deploy en Vercel. Solo necesitas ejecutar:

```bash
vercel
```

## Configuración Aplicada

### 1. vercel.json
- Configurado para Angular con build automático
- Rutas configuradas para SPA (Single Page Application)
- Assets configurados correctamente

### 2. package.json
- Script `build:vercel` agregado para producción
- Dependencias configuradas correctamente

### 3. .vercelignore
- Archivos innecesarios excluidos del deploy
- Optimización del tamaño del bundle

## Pasos para Deploy

1. **Instalar Vercel CLI** (si no lo tienes):
   ```bash
   npm i -g vercel
   ```

2. **Hacer login en Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Para producción**:
   ```bash
   vercel --prod
   ```

## Características del Deploy

- ✅ Build automático en Vercel
- ✅ Routing de Angular funcionando
- ✅ Assets optimizados
- ✅ Configuración de producción
- ✅ HTTPS automático
- ✅ CDN global

## Notas Importantes

- El proyecto se construye automáticamente en Vercel
- Las rutas de Angular funcionan correctamente
- Los assets se sirven desde `/assets/`
- El deploy incluye optimizaciones de producción 
