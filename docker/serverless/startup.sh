#!/bin/bash

cd /app/dynamodb-tables

for table_file in $(ls)
do
  table_name=$(echo ${table_file} | awk -F '.' '{print $1}')
  aws dynamodb describe-table --table-name ${table_name} --endpoint-url http://dynamodb:8000
  if [ $? -gt 0 ]; then
    # テーブルがない場合は新規作成
    aws dynamodb create-table --cli-input-json "$(yq . ${table_file})" --endpoint-url http://dynamodb:8000
  fi
done
cd /app
npm install -S aws-sdk
sls offline start --host 0.0.0.0 --port 3000
