.. title: How to use rsync
.. slug: how-to-use-rsync
.. date: 2015-11-08 12:37:24 UTC-05:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text



Tengo dos carpetas, *carpeta1* y *carpeta2*, voy a copiar todo el contenido de *carpeta1* a *carpeta2*. 

    rsync -r folder1/* folder2

Opciones
--------

rsync tiene muchas opciones que permiten obtener diferentes resultados:

**-r**: Esta opcion significa recursión, esto le dice a rsync que copie todo lo que hay dentro de la carpeta y subcarpetas.

Para copia recursiva tambien se puede usar la opción **-a**, ademas esta opción permite preservar tiempo de modificación, grupos, dueños y permisos de archivos.

**-v**: Esta opción activa el detalle para la operación ejecutada, asi se obtendrá mas información de lo que se esta haciendo y del resultado del mismo.

**-h**: Con la opción -h se puede producir una salida mas legible para el usuario al ejecutar rsync, con datos mas amigables de entender.
