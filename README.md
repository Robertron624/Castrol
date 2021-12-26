# Castrol

##ES
Webapp de manejo de combustible de automóviles inscritos por los usuarios (externos) y manejo de inventario y precios de los combustibles(interno)
hecha con ReactJs y bootstrap para el frontend, en cuanto al backend se usó node.js + express.js, para la base de datos se utilizó mongoDB Atlas.
Para ejecutar el cliente ejecutar el siguiente comando desde la terminal:
  npm start
Para ejecutar el servidor:
  npm start:dev
 Agregar la url de base de datos, el puerto y la sal para el hash de contraseñas en un archivo .env dentro la carpeta del servidor de la siguiente forma:
   - MONGO_DB_SRV= "Aqui la url de tu BD, sin comillas"
   - BCRYPT_ROUNDS= "número entero de tu elección"
   - PORT = "número del puerto" 
      
 
##EN
Fuel management Webapp for cars registered by users (external) and stock-price management(internal), made with ReactJs and bootstrap in the frontend,
and with node.js + express.js for the backend,for the database mongoDB Atlas was used.
To run the client execute the next command in the terminal:
  npm start
And to execute the server:
  npm start:dev
Add the DB url, the port and the salt for password hashing in this form:
   - MONGO_DB_SRV= "Here the mongoDB DB url"
   - BCRYPT_ROUNDS= "integer of your choice"
   - PORT = "port number" 
      
  
##FR
Webapp pour gérer les carburants enregistrés par les utilisateurs(externes) et pour la gestion des inventaires et des prix des carburants (internes).
Il a été crée avec ReactJs et bootstrap pour le frontend et node.js + express.js pour le backend, mongoDB a été utilisé pour la base de donnés.
Pour exécuter le client, exécutez la commande suivante dans le terminal:
  npm start
Et pour exécuter le serveur:
  npm start:dev
Ajouter la url de la base de donnés, le port et le sel pour le cryptage du mot de passe dans un fichier .env comme suit:
  - MONGO_DB_SRV= "Voici l'url de votre BD, sans les guillemets"
  - BCRYPT_ROUNDS= "nombre entier de votre choix"
  - PORT = "numéro du port" 
