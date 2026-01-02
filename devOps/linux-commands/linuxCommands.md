# Linux Commnads

`whoami`

`clear`

`history`

`sudo` Executes a command with superuser (root) privileges.

*Rutas y ystemas de archivos* orden predefinido de las carpetas y archivos

## shell: Bash, zsh

`echo $SHELL`

## Redireciones y pipe

- `>` Envía la salida de un comando a un archivo.(lo sobreescribe)
- `>>` Igual que arriba pero **añade** al final
- `|` Toma la salida de un comando y lo pasa como entrada al siguiente

## Basic File & Directory Commands

- `pwd` Prints the working directory (your current location)
- `ls` Lists the contents of a directory. ls -l (for a detailed list) (con -l permite ver los permisos de los archivos)
- `cd` Changes directory. cd Documents or cd .. (go up one level)
- `mkdir` Makes a new directory. mkdir new_folder
- `touch` Creates a new, empty file. touch newfile.txt
- `cp` Copies files or directories. cp file1.txt file2.txt
- `mv` Moves or renames files and directories. mv oldname.txt newname.txt
- `rm` Removes (deletes) a file. rm file1.txt
- `rm -r` Recursively removes a directory and its contents. rm -r old_folder

## Buscar archivos y contenido

- `find` busca archivos por nombre extension y tamaño
- `grep` busca texto dentro de archivos

## Instalar programas

Se usa un gestor de paquete eje: apt

- `sudo apt update`
- `sudo apt upgrade`
- `sudo apt install nombre`
- `sudo apt remove nombre`

## Variables de entorno

- Listar todo: `printenv`
- Buscar algo específico: `printenv | grep NOMBRE`
- Ver el PATH: `echo $PATH`

## Permisos basicos

Cuando listamos los archivos o carpetas vamos a poder ver **Dueño(persona que creó el archivo o carpeta) - grupo(grupo de users que pueden compoartir permisos) - otros**

- Permisos: `r` (leer), `w` (escribir), `x` (ejecutar)

- `ls -l` muestra archivos y sus permisos
- `chmod +x script.sh` hacerlo ejecutable. +x significa "añadir permiso de ejecución (execute)". chmod Changes the permissions (mode) of a file or directory.
- `chown` `chgrp` cambiar dueño/grupo

## Ver y filtrar contenido de archivos

- `cat` muestra todo el archivo
- `less` abre un visor navegable
- `head` muestra las primeras lineas
- `tail` muestra las ultimas lineas

## Editores de texto

- nano
- vim

## Systemd (system deamon) (servicios: programas que siempre se estan ejecutando en segundo plano)

- `systemctl status servicio`
- `systemctl start servicio`
- `systemctl stop servicio`
- `systemctl restart servicio`
- `systemctl enable servicio`
- `systemctl disable servicio`

## Bash scripts (crear scripts y automatizar tareas)

tiene sus propisas reglas:
Varibles, bucles, condicionales, funciones, arreglos, comandos

## Usuarios, seguridad y entorno dev

- `id`
- `adduser`
- `passwd`
- `groups`
- `visudo`

## Variables de entorno

- `echo $PATH`
- `export VAR=valor`
- alias en `~/.bashrc`

macOS (MacBook): Está basado en BSD (un derivado directo de Unix) y su núcleo se llama Darwin. Es un sistema certificado como Unix oficial.

Linux: Es un "clon" de Unix creado desde cero por Linus Torvalds. No es Unix por herencia de código, sino por comportamiento.

### Comparación de Estructuras

| Directorio | En Linux | En macOS |
| :--- | :--- | :--- |
| **Archivos del sistema** | `/bin`, `/sbin`, `/usr` | `/bin`, `/sbin`, `/usr` (Igual) |
| **Configuraciones** | `/etc` | `/etc` (Igual) |
| **Usuarios** | `/home/nombre` | `/Users/nombre` |
| **Aplicaciones** | `/usr/bin` o `/opt` | `/Applications` (Carpeta principal) |
| **Dispositivos** | `/dev` | `/dev` (Igual) |
| **Temporales** | `/tmp` | `/tmp` (Enlace simbólico a `/private/tmp`) |

La Terminal (o Emulador de Terminal): Es la "ventana" o la aplicación que abres (el ícono negro o transparente). Es la interfaz visual que recibe tus pulsaciones de teclado y muestra texto.

La Shell (Bash o Zsh): Es el "cerebro"/"interprete" que vive dentro de esa ventana. Es el programa que realmente entiende lo que escribes, ejecuta las órdenes y te responde.

``echo $SHELL`` para ver que shell estas usando

Si la Terminal es la ventana y Zsh/Bash es el intérprete que recibe órdenes, Vim y Nano son los Editores de Texto.

Siguiendo la analogía del auto:

Terminal: El tablero.

Zsh/Bash: El motor que procesa tus movimientos.

Vim/Nano: Son herramientas que sacas de la guantera para modificar los documentos del sistema.

como saber si cual editor tengo instalado?

```sh
    which nano

    which vim

    which vi
```

## Un pequeño ejercicio para tu Mac

Prueba esto en tu terminal para ver la diferencia:

Escribe nano prueba.txt, escribe algo, y presiona Ctrl + O para guardar y Ctrl + X para salir.

Luego intenta abrirlo con vim prueba.txt. (Para salir de Vim sin romperte la cabeza, presiona Esc, escribe :q! y presiona Enter)

```prueba.sh
    #!/usr/bin/env bash

    echo "Hola, ¿cómo te llamas?"
    read nombre
    echo "Mucho gusto, $nombre. Creando tu carpeta personal..."
    mkdir "Carpeta_$nombre"
```

## Shebang

``#!/usr/bin/env bash`` indica al sistema operativo qué intérprete debe usar para ejecutar el resto del código que contiene el archivo

**Tip de portabilidad:** Muchos desarrolladores prefieren usar ``#!/usr/bin/env bash``. Esto hace que el sistema busque dónde está instalado Bash en el sistema actual, lo cual es más flexible si trabajas entre diferentes versiones de Linux o macOS.

## NANO

- ``nano archivo.sh`` si existe lo abre sino lo crea.
- ``echo "Este es un archivo nuevo" > prueba.txt`` crea el archivo con ese texto
- ``ctrl + x`` salir
- ``ctrl + c`` volver
- ``ctrl + o`` guardar
- ``ctrl + a`` ir al inicio de una linea
- ``ctrl + v`` siguiente pg
- ``ctrl + y`` previa pg
- ``ctrl + a`` coloca cursor al inicio de la linea
- ``ctrl + e`` coloca cursor al final de la linea
- ``ctrl + w`` permite filtrar en el archivo 
- ``ctrl + k`` cortar y copiar linea
- ``ctrl + u`` pegar linea
- ``ctrl + c`` nos muestra la ubicacion del cursos
- ``ctrl - r`` copiar info de un archivo al archivo actual
