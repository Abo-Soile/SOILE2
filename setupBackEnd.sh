node createSetup.js

cd backend
# Check the exit status of the Node.js script
if [[ $? -ne 0 ]]; then
  echo "Node.js script was interrupted. Exiting."
  exit 1
fi

mvn exec:java@setup
cd ..
