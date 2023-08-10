---
title: 'Como realizar un ataque CSRF'
excerpt: 'En este post veremos realizar una ataque CSRF MetaSploitable.'
coverImage: '/assets/blog/dynamic-routing/csrfExample.jpg'
date: '2023-08-02T17:35:07.322Z'
author:
  name: Mario Pérez
  picture: '/assets/blog/authors/hacker.png'
ogImage:
  url: '/assets/blog/preview/csrf.jpg'
---

## 1 - Preparación del ataque

Para comenzar con este ataque vamos a usar las siguientes herramientas:

- Imagen de WebForPentester
- MetaSploitable2 con DVNA

Esta última cuenta con un formulario que permite cambiar la contraseña de cualquier usuario aprovechandose de la vulnerabilidad CSRF.

En el siguiente diagrama se muestra cual sería el flujo que seguiría el ataque:

![csrf](/assets/blog/preview/csrf.jpg)

Una vez preparado el escenario, vamos a ver como se envian las peticiones en el formulario de recuperación de la contraseña. Para este caso voy a utilizar Burp Suite como proxy, para capturar la petición y analizarla.

![csrf](/assets/blog/preview/burp.jpg)

Como se puede ver en la imagen se envia por el metodo GET, por lo que podemos llegar a cambiar los valores de la contraseña por los que queramos. De esta manera vamos a preparar una URL maliciosa donde el usuario vea la web de WebForPentester, pero luego por debajo, sin ser visible para el usuario se realice la petición GET para el cambio de contraseña en DVNA.
Para conseguirlo, aprovechamos que el usuario ya tenga iniciada sesión en la web vulnerabale (DVNA) para robar sus cookies y asi completar el ataque.

La URL maliciosa consistse en primer lugar en la dirección de WebForPentester, seguida de un "iframe", que es una web embebida dentro de otra. En esta se realiza una petición GET al formulario de cambio de contraseña por las que nosotros le indiquemos a la victima.


🔴 **Direccion IP de la web** 

🔵 **Iframe donde incluir la peticion para cambiar la contraseña**

🟠 **Contaseña a cambiar**

![url](/assets/blog/preview/url.jpg)


Ahora quedaria acortar esta URL para que el usuario no se extrañe al recibir un enlace como este. Para ello podemos usar cualquier acortador y nos quedaria como la siguiente: https://acortar.link/UpGAnx. Donde no se puede ver el contenido. Lo que deberia hacer la victima antes de abrir el link seria usar algun servicio como https://unshorten.it/ para poder ver el contenido.

Para este nivel en concreto, habria que superar ciertos medidas de seguridad contra los ataques XSS. Esta protección ha sido la de añadir al principio la etiqueta de cierre </script>, ya que al ver el código fuente vemos que la web ya incluye una como medida de protección.

![csrf](/assets/blog/preview/csrf2.jpg)

Ahora actuando como si fueramos la victima, abrimos la URL acortado que nos haya llegado por email por ejemplo y vemos que visualmente todo parece normal. Pero si accedemos a las opciones de desarrollador, en network, veremos que se ha realizado correctamente el envio de la petición para el cambio de contraseña. Todo esto de manera transparente para el usuario.

![csrf](/assets/blog/preview/csrf3.jpg)

Espero que os haya sido de utilidad. 😃