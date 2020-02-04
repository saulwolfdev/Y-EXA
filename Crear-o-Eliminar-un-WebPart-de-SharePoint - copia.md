**Debemos instalar los siguientes componentes en Visual Studio para poder crear un WebPart:**

- <span style="background-color:yellow"> npm install -g gulp </span>
- <span style="background-color:yellow"> npm install -g yo </span>
- <span style="background-color:yellow"> npm install -g @microsoft/generator-sharepoint </span>

**Pasos a seguir para <span style="background-color:MediumSeaGreen; color:white; padding: 7px">CREAR</span> un WebPart:**

1) Correr en la terminal el comando:

- <span style="background-color:yellow"> yo </span>

2) Seleccionar la opción:

- <span style="background-color:yellow"> @microsoft/sharepoint</span> (con las flechitas de arriba o abajo)

3) Seleccionar el "Tipo de componente client-side" a utilizar:

- <span style="background-color:yellow"> WebPart</span> (con las flechitas de arriba o abajo)

4) Escribir el nombre del WebPart

5) Escribir la descripción del WebPart

6) Seleccionar el "Javascript Framework" a utilizar:

- <span style="background-color:yellow"> React </span>

>>>FIN

**Pasos a seguir para <span style="background-color:Tomato; color:white; padding: 7px">BORRAR</span> un WebPart**

1) Borrar la carpeta física del webpart (buscarla en "src/webparts" y preferentemente hacerlo desde el explorador de archivos de Windows para que no tarde mucho ya que Visual Studio tarda mucho y suele colgarse con esta operación)

2) Ir a la carpeta "config"

3) Buscar adentro el archivo "config.json" 

4) Abrirlo y eliminar las lineas de código referentes al webpart que quiero quitar (tanto en el apartado de "bundles" como en el de  "localizedResources")

5) Correr en la terminal el comando:

- <span style="background-color:yellow"> gul clean </span>

>>>FIN



