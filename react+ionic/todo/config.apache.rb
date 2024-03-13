# ------------------------------------------
# 1. Configurar URL Host
# ------------------------------------------
sudo nano /etc/hosts
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1       localhost
255.255.255.255 broadcasthost
::1             localhost
127.0.0.1   react.dev.local

# ------------------------------------------
# 2. Configurar archivo httpd.conf
# - Modificar el archivo httpd.conf -> Descomentar la opcion que permite habilitar los virtualHosts
# ------------------------------------------
sudo nano /Applications/MAMP/conf/apache/httpd.conf
# Virtual hosts --> # <-- Remover el simbolo de la siguiente linea
Include /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf

# ------------------------------------------
# 3. Crear el virtualhost
# sudo nano /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf
# ------------------------------------------
<VirtualHost *:8888>
    ServerName react.dev.local
    ServerAdmin react.dev.local
    DocumentRoot "/Users/bitsamericas/Desktop/React/react+ionic/todo/dist"
    <Directory "/Users/bitsamericas/Desktop/React/react+ionic/todo/dist">
        RewriteEngine On
        #check for files and do not redirect
        RewriteCond %{REQUEST_FILENAME} -f [OR]
        RewriteCond %{REQUEST_FILENAME} -d
        RewriteRule ^ - [L]
        #rewrite everything else to index.html to allow html5 state links
        RewriteRule ^ index.html [L]
    </Directory>
    ErrorLog "/Users/bitsamericas/Desktop/React/react+ionic/todo/dist/error_log"
</VirtualHost>

# ------------------------------------------
# 4. Acceder al sitio
# ------------------------------------------
# http://react.dev.local:8888/