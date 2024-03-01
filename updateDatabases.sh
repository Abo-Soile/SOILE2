docker start soile2-mongo
cd backend
mvn exec:java@update
cd ..
docker stop soile2-mongo