# This is pre-build script that cleans up resources and compiles for selected pages, then finally you may combine those subdirectories into one via nginx.
# double check you are using LF instead of CRLF

# please run this script in project root directory

echo "restore docker build _meta.js file"

cp "./docker/_meta.js" "./content/_meta.js"


