.. title: How to use rsync
.. slug: how-to-use-rsync
.. date: 2015-11-08 12:37:24 UTC-05:00
.. tags: 
.. category: 
.. link: 
.. description: 
.. type: text


The most common uses of rsync are:

I have two folders, *folder1* and *folder2*  in different locations, i will copy the content of *folder1* to *folder2*. 

    rsync -r folder1/* folder2

Options
-------

rsync has many options that allow a lot of different actions:

**-r**: This option mean recursion, this tells rsync to copy all including the files or folders that are inside other folders.

For recursive copy you can use the **-a** option too, also this option allow preserve modification times, groups, owner and permissions.

**-v**: This option activate verbose for the current command, with this you can see more details of the operation.

**-h**: With the -h option you can produce a more readable output when execute a rsync command.
