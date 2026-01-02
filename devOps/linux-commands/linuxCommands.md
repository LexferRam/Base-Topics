# Linux Commnads

`clear / ctrl + l`: limpia consola

`cd` ejecutado solo te lleva a home

`whoami` ver usuario

`history` ver historial de comandos

`sudo` Executes a command with superuser (root) privileges.

*Rutas y ystemas de archivos* orden predefinido de las carpetas y archivos

## shell: Bash, zsh

`cat /etc/shells` lista de shells disponibles en nuestro sistema

`echo $SHELL`

## Redireciones y pipe

- `>` Envía la salida de un comando a un archivo.(lo sobreescribe) eje: `ls -l > output.txt`
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
- `rm -r [carpeta]` Recursively removes a directory and its contents. rm -r old_folder

## Buscar archivos y contenido

- `find` busca archivos por nombre extension y tamaño
- `grep` busca texto dentro de archivos

## Instalar programas

Se usa un gestor de paquete eje: apt

- `sudo apt update`
- `sudo apt upgrade`
- `sudo apt install nombre`
- `sudo apt remove nombre`

## Permisos basicos

Cuando listamos los archivos o carpetas vamos a poder ver **Dueño(persona que creó el archivo o carpeta) - grupo(grupo de users que pueden compoartir permisos) - otros**

- Permisos: `r` (leer), `w` (escribir), `x` (ejecutar)

- `ls -l` muestra archivos y sus permisos
- `chmod +x script.sh` hacerlo ejecutable. +x significa "añadir permiso de ejecución (execute)". chmod Changes the permissions (mode) of a file or directory.
- `./script.sh` ejecuta
- `chown` `chgrp` cambiar dueño/grupo

## Ver y filtrar contenido de archivos

- `cat` muestra todo el archivo
- `less` abre un visor navegable
- `head` muestra las primeras lineas
- `tail` muestra las ultimas lineas

## Editores de texto

- nano
- vim

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
- Listar todo: `printenv`
- Buscar algo específico: `printenv | grep NOMBRE`

macOS (MacBook): Está basado en BSD (un derivado directo de Unix) y su núcleo se llama Darwin. Es un sistema certificado como Unix oficial.

Linux: Es un "clon" de Unix creado desde cero por Linus Torvalds. No es Unix por herencia de código, sino por comportamiento.

## Terminal, Shell y Editor de Texto

La Terminal (o Emulador de Terminal): Es la "ventana" o la aplicación que abres (el ícono negro o transparente). Es la interfaz visual que recibe tus pulsaciones de teclado y muestra texto.

La Shell (Bash o Zsh): Es el "cerebro"/"interprete" que vive dentro de esa ventana. Es el programa que realmente entiende lo que escribes, ejecuta las órdenes y te responde.

``echo $SHELL`` para ver que shell estas usando

Si la Terminal es la ventana y Zsh/Bash es el intérprete que recibe órdenes, Vim y Nano son los Editores de Texto.

Siguiendo la analogía del auto:

Terminal: El tablero.

Zsh/Bash: El motor que procesa tus movimientos (intérprete de comandos).

Vim/Nano: Son herramientas que sacas de la guantera para modificar los documentos del sistema (editores de texto).

## Un pequeño ejercicio para tu Mac

Prueba esto en tu terminal para ver la diferencia:

Escribe nano prueba.txt, escribe algo, y presiona Ctrl + O para guardar y Ctrl + X para salir.

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

## Creando un alias

`alias l="ls -lh"` (los alias solo se crean por sesion de terminal)

## Condicionales && (se ejecutan solo si el comando anterior fue exitoso)

`mkdir directoriio && cd directoriio`

## Bash scripts (.sh) (crear scripts y automatizar tareas)

tiene sus propisas reglas:
Varibles, bucles, condicionales, funciones, arreglos, comandos

## Modificando permisos en la terminal

> mitexto.txt : crea un archico y te permite agregar informacion(para salir ctrl + d)

```shell
-rw-r--r--  1 lexferfrancisco  staff  31 Nov 27 10:49 mitexto.txt
```

tiene read/write para el usuario, read para grupos y read para world

## Conceptos básicos: Usuarios y Permisos

Cada archivo tiene tres niveles de propiedad y tres tipos de permisos:

**Niveles de Usuario:**

u (User/Owner): El propietario del archivo.

g (Group): Usuarios que pertenecen al grupo del archivo.

o (Others): Todos los demás usuarios.

a (All): Todos los anteriores.

**Tipos de Permisos:**

r (Read): Lectura.

w (Write): Escritura/Modificación.

x (Execute): Ejecución.

## Cambiando los permisos con chmod (change mode)

Sintaxis: `chmod [usuario][operación][permiso] archivo`

**Operaciones:** + (añadir), - (quitar), = (asignar exactamente).

Ejemplos:

`chmod u+x archivo.sh` → Añade permiso de ejecución al dueño.

`chmod g-w documento.txt` → Quita permiso de escritura al grupo.

`chmod u=rwx,g=rx,o=r foto.jpg` → Define permisos específicos para cada nivel.

## Cambio de usaurio R(recursive) v(verbose)

`chown -Rv lexferramirez .`
