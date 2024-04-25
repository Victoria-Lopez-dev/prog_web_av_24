# crear nuestra API con nodeJS

- instalar Express (framework que obtenemos de npm para crear la estructura de la API)
- package.json
- node_modules
- .gitignore


Express nos brinda metodos para poder hacer de manera simple una API utilizando JS

# Metodos
- liste() que nos permite indicar por medio de que puerto nos comunicamos
- get("endpoint", callback) -> identificar una peticion de tipo GET y realizar acciones ante esta peticion
- post("endpoint", callback)-> identificar una peticion de tipo POST y realizar acciones ante esta peticion


# Node JS
 para cortar la ejecucion : control+C


# maneras de organizar la API

1- armarmos carpetas por las entidades afectadas ( ejemplo restoran: carptea para platos y carpeta para colaboradores)

2- armamos dos carpetas, una con los ruteos o routes(metodo con endpoint) y otro con los controllers o controladores (callback req-res)


CRUD -> API sea capaz de crear(post) - leer (get)- actualizar (put-patch)- eliminar (delete)