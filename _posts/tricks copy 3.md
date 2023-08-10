---
title: 'Como realizar pentesting en Android'
excerpt: 'En este post vamos a ver como se puede realizar un pentesting en dispositivos Android'
coverImage: '/assets/blog/dynamic-routing/hackingAndroid.jpg'
date: '2023-08-02T17:35:07.322Z'
author:
  name: Mario Pérez
  picture: '/assets/blog/authors/hacker.png'
ogImage:
  url: '/assets/blog/dynamic-routing/thm.png'
---

## 1 - Comprometiendo la maquina para obtener la primera flag

En este post voy a explicar como realizar un pentesting a una aplicación movil en Android. 

Para ello necesitamos en primer lugar obtener el apk. En mi caso voy a obtener el apk de la app de Microsoft Word. Un primer metodo puede ser buscando el nombre de la aplicación en repositorios como  [https://m.apkpure.com/es/](https://m.apkpure.com/es/) y bajandonos la versión que queramos.

![word](/assets/blog/dynamic-routing/word.jpg)

Otra segunda forma seria extraer el apk de nuestro movil utilizando la aplicación apk extractor. Esta aplicación nos muestra el listado de aplicaciones que tenemos instalado en nuestro terminal. Esto incluye tanto aplicaciones nativas como las que nosotros hayamos descargado por nuestra cuenta.

![word](/assets/blog/dynamic-routing/apkExtractor.jpg)

Una vez que tenemos la aplicación en nuestro ordenador, vamos a instalar la app en el emulador Android Studio. He elegido este por la interfaz cuidada que tiene y la fluidez a la hora de utilizarlo, ya que con un ordenador suficientemente potente puede llegar a ser igual de fluido que el dispositivo real. Después nos dirigimos a la web oficial:

[https://developer.android.com/studio](https://developer.android.com/studio)

Tras instalarlo queda configurar nuestro dispositivo Android que prefiramos. Esta herramienta al ser de Google solo cuenta por defecto con sus dispositivos Pixel y los antiguos Nexus. En mi caso eligiré un Nexus 4, ya que fue uno de mis primeros moviles que rootee en su momento añadiendole customs ROMS.

![word](/assets/blog/dynamic-routing/nexus.jpg)

# Decompilando la aplicación con ApkTool

El siguiente paso es decompilar la aplicación utilizando la herramienta apktool. En la siguiente web se puede descargar:

[https://ibotpeaches.github.io/Apktool/install/](https://ibotpeaches.github.io/Apktool/install/)

En resumen, es bajamos el apktool.jar, después nos bajamos el apktool.bat y estos dos ficheros
los guardamos juntos en el mismo directorio.

A continuación, ponemos el APK en la misma ruta que estos dos ficheros anteriores y con el
siguiente comando instalamos el framework:

![word](/assets/blog/dynamic-routing/apktool1.jpg)

Después ejecutamos el siguiente comando para descompilar la aplicación y poder extraer los
ficheros internos:

![word](/assets/blog/dynamic-routing/apktool2.jpg)

![word](/assets/blog/dynamic-routing/apktool3.jpg)

Tras la ejecución vemos que nos genera la siguiente carpeta con todos los componentes
internos:

![word](/assets/blog/dynamic-routing/apktool4.jpg)

En el AndroidManifest.xml podemos sacar por ejemplo si permite realizar Backups, buscando
por “allowBackup”. Podemos mirar por la palabra “LAUNCHER”, para poder localizar cual es la actividad que la
contiene, ya que esta es la actividad principal que se encargará de iniciar la aplicación en el
sistema.

![word](/assets/blog/dynamic-routing/apk5.jpg)

Ahora el siguiente paso es bajarnos la herramienta Dex2Jar, para poder pasar del código fuente
al .jar y poder visualizarlo con la herramienta JD_GUI. Para ello nos bajamos la herramienta del
siguiente enlace:

[https://github.com/DexPatcher/dex2jar](https://github.com/DexPatcher/dex2jar/releases/download/v2.1-20171001-lanchon/dex-tools-2.1-20171001-lanchon.zip)

Descomprimimos él .zip y dentro de este, ejecutamos el siguiente comando:

![word](/assets/blog/dynamic-routing/apk6.jpg)

De esta manera hemos obtenido el .jar, ahora toca descargarnos la herramienta JD_GUI, que
nos servirá para poder visualizar las clases, funciones y métodos internos de la aplicación de
manera más detallada. Para ello nos dirigimos al siguiente enlace en el apartado de descargas:

[https://java-decompiler.github.io/](https://java-decompiler.github.io/)


Una vez instalada la herramienta abrimos el fichero y ya podemos ver la estructura interna de
la app.
Para este último apartado, si queremos encontrar cual es la clase principal donde se arranca la
aplicación, tenemos que tener en cuenta el apartado anterior del AndroidManifest.xml, ya que
el nombre de la actividad nos dirá cual es la ruta de la clase. Dicha ruta es la siguiente:

![word](/assets/blog/dynamic-routing/routeApk.jpg)

![word](/assets/blog/dynamic-routing/apk7.jpg)

Espero que hayan aprendido las nociones basicas de como comenzar a realizar un analisis a aplicaciones Android. En proximos post subiré como profundizar con nuevas herramientas y tecnicas!