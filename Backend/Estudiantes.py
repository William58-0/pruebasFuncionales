
from flask import Flask,request, redirect, url_for, flash
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '201909103'
app.config['MYSQL_DB'] = 'tarea'
mysql = MySQL(app)
CORS(app)

@app.route('/')
def home():
   return '201909103'

@app.route('/registrar', methods=['POST'])
def Registro():
    if request.method == 'POST':
        content = request.json['body']

        nombre = content['nombre']
        apellido = content['apellido']
        correo = content['correo']
        contrasenia = content['contrasenia']
        fechaNacimiento = content['fechaNacimiento']
        try:
            cur = mysql.connection.cursor()
            cur.execute('INSERT INTO estudiante1 (nombre, apellido, correo, contrasenia, fechanacimiento) \
                VALUES (%s, %s, %s, %s, %s)', (nombre, apellido, correo, contrasenia, fechaNacimiento))
            mysql.connection.commit()

            return {'message': 'Estudiante Registrado', 'code': 200}
        except:
            return {'message': 'Error ingresando estudiante', 'code': 404}

@app.route('/asignar', methods=['POST'])
def Asignacion():
    if request.method == 'POST':
        content = request.json['body']

        curso = content['curso']
        seccion = content['seccion']
        dia = content['dia']
        hora = content['hora']
        idEstudiante = content['idEstudiante']

        try:
            cur = mysql.connection.cursor()
            # verificar si ya se asigno ese curso
            cur.execute('SELECT  * from asignacion WHERE estudiante = %s AND curso = %s', (idEstudiante, curso))

            asignacion = cur.fetchone()
        
            if asignacion:
                return {'message': 'Ya se asignó este curso', 'code': 404}
            else:
               # hacer la asignacion
                cur.execute('INSERT INTO asignacion (curso, seccion, dia, hora, estudiante) \
                    VALUES (%s, %s, %s, %s, %s)', (curso, seccion, dia, hora, idEstudiante))
                mysql.connection.commit()

            return {'message': 'Asignación Registrada', 'code': 200}

        except:
            return {'message': 'Error ingresando asignacion', 'code': 400}
        

@app.route('/iniciarSesion', methods=['POST'])
@cross_origin()
def Login():
    if request.method == 'POST':
        content = request.json['body']
        
        correo = content['correo'],
        contrasenia = content['contrasenia']
        cur = mysql.connection.cursor()
        cur.execute('SELECT  * from estudiante1 WHERE correo = %s AND contrasenia = %s', (correo, contrasenia))

        estudiante = cur.fetchone()
        
        if estudiante:
            return {'message': 'Session Iniciada', 'code': 200}
        else:
            return {'message': 'Error Contraseña y/o usuario', 'code' : 404}
        
    return ''


if __name__ == '__main__':
   app.run(host='0.0.0.0', port=3001, debug=True)