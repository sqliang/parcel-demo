#!/bin/bash

# release

npm run release

# result
if [ $? -ne 0 ]; then
    exit 1
fi

mkdir output

cd output
mkdir -p template/parcel-demo webroot/static/parcel-demo

cp ../dist/index.html ./template/parcel-demo
cp -r ../dist/* ./webroot/static/prcel-demo
tar czf parcel-demo.tar.gz template
tar czf static-parcel-demo.tar.gz webroot
rm -rf template webroot
#tar czf fe.tar.gz *

# cd ..

# mv output/fe.tar.gz .
# rm -rf output/*

# mv fe.tar.gz output/

# result
if [ $? -eq 0 ]; then
    echo '[build] done'
    exit 0
else
    echo '[build] fail'
    exit 1
fi
