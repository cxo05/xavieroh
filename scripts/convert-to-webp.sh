#!/bin/bash

PARAMS=('-m 6 -q 70 -mt -af -progress')

if [ $# -ne 0 ]; then
	PARAMS=$@;
fi

cd $(pwd)

shopt -s nullglob nocaseglob extglob

for FILE in public/images/*.@(jpg|jpeg|tif|tiff|png); do 
    cwebp $PARAMS "$FILE" -o "${FILE%.*}".webp #&& rm "$FILE"
done

for FILE in _posts/*.md; do 
    sed -i.bak -E "s/.(jpg|jpeg|tif|tiff|png)/.webp/gi" $FILE && rm "$FILE".bak
done
