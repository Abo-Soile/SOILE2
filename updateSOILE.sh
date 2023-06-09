# This assumes, that the setup is done.
git pull
git submodules update
stopSOILE.sh
buildBackEnd.sh
buildFrontEnd.sh
startSOILE.sh