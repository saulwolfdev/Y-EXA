**Comandos Visual Studio Code**

- <span style="background-color:yellow">npm run dev</span> (Pone a funcionar el servidor, luego de esto puedo abrir una ventana de navegador con el Workbench de la solución: https://ypf.sharepoint.com/sites/Y-DOC.Desa/_layouts/15/Workbench.aspx)

- <span style="background-color:yellow">"CTRL + CC"</span> (Finaliza el servidor y deja de correr en memoria)

- <span style="background-color:yellow">“CTRL + Ñ"</span> (Crea una nueva ventana de terminal)

- <span style="background-color:yellow">“CTRL + J"</span> (Expande o contrae la ventana de terminal, no la cierra)

- <span style="background-color:yellow">“Mayús + Alt + F”</span> (Da formato al código de todo el documento)

- <span style="background-color:yellow">clear</span> (Limpia la ventana de terminal)

- Estando arriba del “nombre de un componente” o del “nombre de una clase” y presionando <span style="background-color:yellow">“F12”</span> se abre el componente o la hoja de estilos donde está la clase (tipo acceso directo).

**Comandos GIT**

<u>Para actualizar la versión de GIT:</u>
 
- <span style="background-color:yellow">git update-git-for-windows</span>

<u>De uso general:</u>

- <span style="background-color:yellow">git status</span> (Me muestra los archivos modificados en mi branch)

- <span style="background-color:yellow">git branch –all</span> (Me lista todos las ramas que tengo)

- <span style="background-color:yellow">gulp clean</span> (Limpia la solución, vacía el cache, borra espacios, etc.)

- <span style="background-color:yellow">git log</span> (Me tira un listado de todos los commits realizados. Cada commit tiene un ID, ejemplo: "commit 076544852425fc16adf1170e6e47abb2731c2d18")

- <span style="background-color:yellow">git log --author="mgbegher" -p --name-only</span> (Me tira el listado de todos los commits realizados mostrando solamente los nombres de los archivos del autor "mgbegher")

- <span style="background-color:yellow">Letra "q"</span> (Para finalizar el listado del log)

- <span style="background-color:yellow">git checkout 076544852425fc16adf1170e6e47abb2731c2d18</span> (me llevaría a ese commit y podría viajar para atrás o para adelante en el versionado)

<u>Pasos para hacer un commit (versionado local):</u>

1. <span style="background-color:yellow">git add .</span> (Agrego todos los archivos con cambios al GIT y los deja listos para el commit)

2. <span style="background-color:yellow"> git commit -m "Ajustes de maquetado para componentes del WF"</span> (Versiono localmente los archivos con cambios agregando además un comentario de referencia futura)

3. <b>Comentario:</b> Con <span style="background-color:yellow">git add package-lock.json</span> (Hago un add específico de un archivo)

<u>Pasos para hacer un push & pull (versionado remoto):</u>

1. <span style="background-color:yellow">git pull</span> (Me traigo todos los cambios del branch remoto <b>que tiene el mismo nombre del branch local en el que estoy parado</b>, ojo muy importante verificar esto!!!)

2. <span style="background-color:yellow"> git push</span> (Subo todos los cambios del commit a mi branch remoto)

<u>¿Cómo quito archivos del add si me confundí?</u>

- <span style="background-color:yellow">git reset</span> (Quito todo, es lo contrario de "git add .")

- <b>Comentario:</b> Con <span style="background-color:yellow"> git reset package-lock.json</span> (Hago un reset específico de un archivo)

<u>Pasos para cambiar de branch:</u>

1. <span style="background-color:yellow">git fetch --all</span> (Revisa que cambios existen en el proyecto y me los muestra (no baja nada) - Si no hago esto el sistema no sabe que hay cambios y no hace nada)

2. <span style="background-color:yellow">git checkout --track origin/UI-SP9</span> (Copiame el branch UI-SP9 y cambiame a ese)

3. <span style="background-color:yellow">git checkout UI-SP8</span> (Me cambia al branch UI-SP8 (para esto debo tenerlo descargado de forma local primero))

<u>Pasos para solicitar un "PULL REQUEST":<u>

1. Primero es necesario clonar nuestra rama actual de trabajo (ejemplo UI-SP10) para revertir cambios de forma simple si surge algún problema:

- <span style="background-color:yellow">git checkout -b UI-SP10-BackUp</span> (Copiame el branch donde estoy parado y cambiame al nuevo UI-SP10-BackUp).

> El comando "checkout" es el encargado de cambiarme de branch, el comando "-b" es el encargado de generar el nuevo branch con el nombre que le asigno.

2. Luego debo hacer un merge de la rama donde está el código principal (comunmente llamada "Integracion") a mi branch clonado recientemente (debo asegurarnme de estar parado ahí):

- <span style="background-color:yellow">git fetch --all</span>
- <span style="background-color:yellow">git merge origin/Integracion</span>

3. Si existiera algún conflicto debo resolverlo y luego debería hacer un merge de mi rama backup a la original (si quiero utilizar una herramienta visual para los conflictos puedo ejecutar el comando "git mergetool"):

- <span style="background-color:yellow">git checkout UI-SP10</span>
- <span style="background-color:yellow">git merge UI-SP10-BackUp</span>

4. Una vez hecho esto subo todo al branch remoto (debo seguir parado en UI-SP10):

- <span style="background-color:yellow">git add .</span>
- <span style="background-color:yellow">git push</span>
- <span style="background-color:yellow">git pull</span>

5. Por último voy a DevOps, "Repos", "Pull Request", "New Pull Request", cargo toda la info que me piden y guardo. 

**Comentario al hacer un merge**

- Es posible que los desarrolladores agreguen paquetes al node_modules. En este caso debemos hacer un nuevo "npm install" para actualizar los paquetes que no tengamos.

- Si el merge dió errores, luego de solucionarlos, se debe volver a hacer un <b>"add ."</b>, un <b>"commit"</b> (acá sería bueno aclarar que se hizo un merge manual asentando en que archivo fue realizado) y un nuevamente un <b>"pull"</b>.

**Si hay algún cambio que no se está refrescando en el WorkBench podría ser un tena de cache**

<u>Las posibles soluciones serían:<u>

- <span style="background-color:yellow">gulp clean</span>
- <span style="background-color:yellow">gulp serve</span>