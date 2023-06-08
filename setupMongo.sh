# Input parameters: mongoAdminUser mongoAdminPassword MongoPort databaseDirectory
# First, we will create a mongo db for soile (if it does not exist)
[ ! "$(docker network ls | grep soile2-network)" ] && docker network create soile2-network
[ ! "$(docker container ls -a | grep soile2-mongo)" ] && docker run --env MONGO_INITDB_ROOT_USERNAME=$1 --env MONGO_INITDB_ROOT_PASSWORD=$2 --network soile2-network -p $3:27017 --name soile2-mongo --mount type=bind,source=$4,target=/data/db -d mongo:5.0

