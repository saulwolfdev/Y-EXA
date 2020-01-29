**Software requerido:**

- Visual Studio Code (https://code.visualstudio.com/)

- Node.JS versión LTS (https://nodejs.org/es/)

- GIT (https://git-scm.com/downloads)

Luego de tener esto instalado abrir una terminal en Visual Studio Code para poder ir haciendo lo siguiente:

**Instalar GULP:**

- <span style="background-color:yellow"> $ npm i gulp -g </span>

**Verificar si Node.js y NPM están instalados y qué versiones tienen:**

- <span style="background-color:yellow"> node -v </span>

- <span style="background-color:yellow"> npm –v </span>

**Para preparar el ambiente de trabajo en los casos de una solución previamente armada por desarrolladores (ejemplo Y-DOC), estos serían los posibles pasos:**

- Obtenemos la ruta del repositorio donde esté la solución. En DevOps esto lo encontramos en “Repos”, “Clone” (botones situados arriba a la derecha)
 
- Crear una carpeta en el C:\ (ejemplo C:\Y-DOC)

- En la terminal de Visual Studio Code nos paramos en la carpeta creada (“Archivo”, “Abrir carpeta”)

- Y escribimos los comandos para clonarla (ejemplo): <span style="background-color:yellow">git clone https://tfs-ypf-desa.visualstudio.com/DefaultCollection/DESA-SHP-YDOC/_git/DESA-SHP-YDOC</span>

- Una vez finalizado el clonado vamos a tener configurado el archivo “package.json” que especifica un listado de paquetes que necesita nuestra solución.

- Para descargar los paquetes escribimos el comando: <span style="background-color:yellow">npm install</span> y esperamos a que termine. OJO, debemos estar parados en el directorio <span style="background-color:yellow">C:\Y-DOC\DESA-SHP-YDOC></span>

<div style="background-color:red; color: white; padding: 20px; margin-bottom: 20px">Al hacer esto voy a estar parado en el <b>"MASTER"</b>, cuidado acá porque debo cambiar de branch para no correr el riesgo de modificar el <b>"MASTER"</b> y sonar todo....</div>

<div style="background-color:red; color: white; padding: 20px; margin-bottom: 20px">Si al hacer un <span style="background-color:yellow; color: black">npm run dev</span> obtengo un error de versiones de NODE o algo por el estilo debo borrar la carpeta <span style="background-color:yellow; color: black">"node_modules"</span> desde Windows y luego volver a hacer un <span style="background-color:yellow; color: black">npm install</span> para regenerarla.</div>

**Selección de tipo de terminal:**

Es aconsejable seleccionar la terminal de <span style="background-color:yellow">GIT</span> en lugar de la que viene por defecto ya que es más "colorida" y se entiende mejor a simple vista. Para eso ir al desplegable de terminales, seleccionar "Select default Shell" y luego <span style="background-color:yellow">"Git Bash"</span>.

**Generación de token:**

Es posible que al finalizar de instalar los paquetes veamos este warning:

<span style="background-color:magenta">[12:14:47] Warning - [spfx-serve] When serving in HTTPS mode, a PFX cert path or a cert path and a key path must be provided, or a dev certificate must be generated and trusted. If a SSL certificate isn't provided, a default, self-signed certificate will be used. Expect browser security warnings.</span>

En este caso lo que falta es generar un token mediante la ejecución del comando:

- <span style="background-color:yellow">gulp trust-dev-cert</span>

**Posibles errores:**

Al intentar clonar la solución, Visual Studio Code podría tirar un error referente al proxy. En nuestro caso era que GIT y NPM tenían configurado un proxy de Sofrecom que ya no se utiliza.

Ejemplos de error que me tiraba al intentar hacer diferentes cosas:

<span style="background-color:magenta">$ git clone https://github.com/saulwolfdev/Admin-Manager-React.git
Cloning into 'Admin-Manager-React'...
fatal: unable to access 'https://github.com/saulwolfdev/Admin-Manager-React.git/': Failed to connect to 172.31.255.22 port 8080: Timed out</span>

----OTRO ERROR-----

<span style="background-color:magenta">$ npx create-react-app myfirstapp
npm ERR! code ENOTFOUND
npm ERR! errno ENOTFOUND
npm ERR! network request to https://registry.npmjs.org/create-react-app failed, reason: getaddrinfo ENOTFOUND proxy.sofrecom.local proxy.sofrecom.local:8080
npm ERR! network This is a problem related to network connectivity.
npm ERR! network In most cases you are behind a proxy or have bad network settings.
npm ERR! Network
npm ERR! network If you are behind a proxy, please make sure that the
npm ERR! network 'proxy' config is set properly. See: 'npm help config'</span>

**Para quitar el proxy de GIT escribimos los comandos:**

- <span style="background-color:yellow">git config --global -l</span> (para obtener una lista de todos los proxy definidos)

- <span style="background-color:yellow">git config --global --unset http.proxy</span> (para desabilitar el seleccionadom en este caso http.proxy)

**Para quitar el proxy de NPM escribimos los comandos:**

- <span style="background-color:yellow">npm config rm proxy</span>

- <span style="background-color:yellow">npm config rm http-proxy</span>

- <span style="background-color:yellow">npm config rm https-proxy</span>

Al intentar descargar los paquetes definidos en el archivo “package.json” obtuvimos un error de versión de Python y GYP que aparentemente es bastante común y lo solucionamos escribiendo en la consola “PowerShell” ejecutada como “Administrador” los comandos:

- <span style="background-color:yellow">npm install --global --production windows-build-tools</span>

- <span style="background-color:yellow">npm install --global  windows-build-tools</span>

Luego ejecutar:

- <span style="background-color:yellow">npm install -g node-gyp</span>

Y por último eliminar todo lo que contiene la carpeta “node_modules” para evital conflictos antes de volver a intentar la instalación de los paquetes mediante:

- <span style="background-color:yellow">npm install</span>

**Extensiones recomendables para instalar en Visual Studio Code:**

- Azure Repos
- Beautify
- Beautify css/sass/scss/less
- Bracket Pair Colorizer
- Debugger for Chrome
- Git Graph
- Git History Diff
- IntelliSense for CSS class names in HTML
- Live Sass Compiler
- Live Server
- Live Share
- React Native Snippet
- Spanish Language Pack for Visual Studio Code
- vscode-icons

**Configuraciones útiles de Visual Studio Code:**

Las configuraciones se encuentran haciendo clic en el iconito de "engranaje"

- Autosave (es posible configurar un autosave con diferentes opciones para no tener que ir haciendo CTRL + S

**Datos importantes:**

El return <span style="background-color:red">NUNCA</span> puede quedar vacío, sino nos dará un error:

```
return (
);
```

```
return (
    <div>
        Hello World
    </div>
);
```