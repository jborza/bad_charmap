#!/bin/bash
cat blocks.txt | awk -F "[()]" '{gsub("-", ",0x", $2); gsub(" $","",$1);  print "{\x27name\x27:\x27" $1 "\x27,\x27range\x27:[0x" $2 "]}," 
}' > unicode.js