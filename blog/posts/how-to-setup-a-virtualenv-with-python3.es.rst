.. title: How to setup a virtualenv with python3
.. slug: how-to-setup-a-virtualenv-with-python3
.. date: 2015-11-08 11:42:34 UTC-05:00
.. tags: python3,virtualenv 
.. category: 
.. link: 
.. description: 
.. type: text

Este es un tema un poco confuso para mi, asi que aquí comparto una muy buena solución para esto. Esto ha sido trabajado en Debian 8.

Primero que todo, debes estar seguro de que tienes instalado Python3, si no, instalalo.

    apt-get install python3.4

Ahora instala pip si no lo tienes instalado.

    wget https://bootstrap.pypa.io/get-pip.py
    
    python3 get-pip.py

Ahora installa virtualenv, y crea un ambiente con Python3

    pip3 install virtualenv
    
    #Crea el ambiente virtualenv sin paquetes
    
    virtualenv projectname --no-site-packages

Usalo

    cd projectname
    
    source bin/activate

Ahora pruebalo escribiendo "python3" en consola. Para desactivar virtualenv:

    deactivate

    


