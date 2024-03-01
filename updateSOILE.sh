# This assumes, that the setup is done.
git pull
git submodule update
./stopSOILE.sh
./buildBackEnd.sh
./updateDatabases.sh
./buildFrontEnd.sh
./startSOILE.sh
