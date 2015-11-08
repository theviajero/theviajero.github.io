.. title: How to setup a virtualenv with python3
.. slug: how-to-setup-a-virtualenv-with-python3
.. date: 2015-11-08 11:42:34 UTC-05:00
.. tags: python3,virtualenv 
.. category: 
.. link: 
.. description: 
.. type: text

This is a topic that use to confuse me, so here i share a very good solution for this. I work with this steps in Debian 8.

First at all, be sure that you have installed Python3 on your system, if not, install it.

    apt-get install python3.4

Then install pip if you don't have installed it.

    wget https://bootstrap.pypa.io/get-pip.py
    
    python3 get-pip.py

Now, install virtualenv and create the environment with python3

    pip3 install virtualenv
    
    #Create the virtualenv environment without packages
    
    virtualenv projectname --no-site-packages

Use it

    cd projectname
    
    source bin/activate

Now you can try typing **python3**. For deactivate the virtualenv:

    deactivate

    


