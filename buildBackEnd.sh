git submodule init
git submodule update
cd backend 
mvn clean
# Skipping tests for faster setup. This assumes that only a working version is pulled.
mvn package -DskipTests
cd ..
