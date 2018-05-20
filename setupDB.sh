#!/bin/bash”
cd db
mysql -u mark < schema.sql
mysql -u mark burgerzDB < seeds.sql
cd ..