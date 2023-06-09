# Input parameters: mongoAdminUser mongoAdminPassword MongoPort databaseDirectory
# First, we will create a mongo db for soile (if it does not exist)
source .mongoenv 
mkdir -p $DBLOCATION
[ ! "$(docker network ls | grep soile2-network)" ] && docker network create soile2-network
[ ! "$(docker container ls -a | grep soile2-mongo)" ] && docker run --env MONGO_INITDB_ROOT_USERNAME=$DBADMIN --env MONGO_INITDB_ROOT_PASSWORD=$DBPASSWORD --network soile2-network -p $MONGOPORT:27017 --name soile2-mongo --mount type=bind,source=$DBLOCATION,target=/data/db -d mongo:5.0

