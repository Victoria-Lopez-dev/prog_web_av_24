/*
Comandos SQL : 
DDL -> crear y modificar la tabla (estructura)
DML -> registros , manipulacion de la informacion que colocamos en las tablas



** DDL **
CREATE ->crear tanto tablas como base de datos 
    CREATE DATABASE nombre;
    CREATE TABLE nombreTabla(campo tipo rest ,campo tipo rest ) -> si estamos en la consola dentro de la DB
    CREATE TABLE nombreDB.nombreTabla(campo tipo rest ,campo tipo rest ) -> si estamos en la consola del servidor (por fuera de la DB)


ALTER -> nos permite modificar la tabla creada 

    ALTER TABLE MODIFY COLUMN ->modificar estructura de una columna
    ALTER TABLE ADD COLUMN -> agregar un campo a la tabla
    ALTER TABLE DROP COLUMN -> eliminar un campo de la tabla (cuidado porque una vez eliminada no puedo volver atras, tengo que crearla desde cero - no tenemos "control+z")

** DML **

SELECT-> obtener la informacion de la tabla 
    SELECT campo|campos| * FROM tabla WHERE condicion
     -> *: trae el registro completo || campo/s : me trae solo la info de esos campos del registro
     -> condicion : campo=valor (indico que registro de la tabla quiero que me traiga)

     -> sin el WHERE me trae a todos los registros
     -> si no tenemos ningun registro con esa condicion, nos devuelve vacio


INSERT-> agregar un registro a la tabla
    INSERT INTO tabla(campos)VALUES(valores registro1),(valores registro2),.. -> Tenemos que tener la misma cantidad de campos que de valores ingresados por cada registro

    INSERT INTO baseDatos.tabla(campos) VALUES(valores registro1),(valores registro2),.. -> si estamos parados en la consola por fuera de la DB


UPDATE -> actualizar registros 
    UPDATE tabla SET campo=nuevoValor , campo2=nuevoValor... WHERE condicion
    ->condicion : campo=valor (dato para saber que/cuales registro/s es el que quiero modificar)

    UPDATE baseDato.tabla SET campo=nuevoValor , campo2=nuevoValor... WHERE condicion
    si estamos parados en la consola por fuera de la DB


DELETE -> eliminar registros 
    DELETE FROM tabla WHERE condicion
    -> no olvidarnos del WHERE , si no colocamos el WHERE,nos va a eliminar TODOS los registros de la tabla 
    ->condicion : campo=valor

    */

//CRUD -> create,reed,update,delete ->API se encargue de hacer estas acciones.
//SQL va a utilizar los comandos DML 

//Ejercicio

//crear una DB sitio de turismo

//info que maneja : destinos - personal
//crear 1 DB con 2 tablas: destinos  y personal