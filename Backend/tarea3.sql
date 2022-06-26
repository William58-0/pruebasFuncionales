use tarea;

create table estudiante1(
	ID INTEGER PRIMARY KEY AUTO_INCREMENT,
	nombre VARCHAR(150),
    apellido VARCHAR(150),
	correo VARCHAR(150),
	contrasenia VARCHAR(150),
	fechanacimiento DATE
);

create table asignacion(
	ID INTEGER PRIMARY KEY AUTO_INCREMENT,
	curso VARCHAR(150),
    seccion VARCHAR(150),
	dia VARCHAR(150),
	hora VARCHAR(150),
    estudiante INTEGER,
    FOREIGN KEY (estudiante) REFERENCES estudiante1 (ID) ON DELETE CASCADE
);

insert into asignacion(curso, seccion, dia, hora, estudiante) values ("matematicas", "A", "lunes", "fdafafa", 1);
insert into estudiante1(nombre, apellido, correo, contrasenia, fechanacimiento) values ("william", "borrayo", "william@gmail.com", "1234", "2001-10-19");

drop table estudiante1;
drop table asignacion;

select * from estudiante1;
select * from asignacion;

DELETE FROM estudiante1;

SET  @num := 0;
UPDATE estudiante1 SET id = @num := (@num+1);
ALTER TABLE estudiante1 AUTO_INCREMENT =1;