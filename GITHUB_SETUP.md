# 🚀 Configuración del Repositorio en GitHub

## Opción 1: Usando GitHub CLI (Recomendado)

Si tienes GitHub CLI instalado:

```bash
# Crear repositorio en GitHub
gh repo create PROCCWEB --public --source=. --remote=origin --push
```

O si quieres que sea privado:

```bash
gh repo create PROCCWEB --private --source=. --remote=origin --push
```

## Opción 2: Crear Repositorio Manualmente en GitHub

1. **Ve a GitHub.com** y crea un nuevo repositorio:
   - Nombre: `PROCCWEB`
   - Descripción: "Proyecto web profesional con React + Vite"
   - Elige si será público o privado
   - **NO** inicialices con README, .gitignore o licencia (ya los tenemos)

2. **Conecta el repositorio local con GitHub:**

```bash
# Añade el remote (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/PROCCWEB.git

# Cambia a la rama main (si GitHub usa main en lugar de master)
git branch -M main

# Sube el código
git push -u origin main
```

## Opción 3: Usando SSH (si tienes SSH configurado)

```bash
git remote add origin git@github.com:TU_USUARIO/PROCCWEB.git
git branch -M main
git push -u origin main
```

## ✅ Verificación

Después de subir, verifica que todo está correcto:

```bash
git remote -v
```

Deberías ver algo como:
```
origin  https://github.com/TU_USUARIO/PROCCWEB.git (fetch)
origin  https://github.com/TU_USUARIO/PROCCWEB.git (push)
```

## 📝 Notas

- El proyecto ya tiene un commit inicial
- El `.gitignore` está configurado correctamente
- El README.md está listo
- Todo está preparado para empezar a desarrollar

