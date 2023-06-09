git submodule init
git submodule update
cd backend 
# Skipping tests for faster setup. This assumes that only a working version is pulled.
mvn package -DskipTests
# TODO: set up the Server if this is a first time start.
mvn vertx:start
cd ..
