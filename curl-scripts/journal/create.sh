#!/bin/bash

API="http://localhost:4741"
URL_PATH="/journal"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "journal": {
      "desireScale": "'"${DS}"'",
      "hasSmoked": "'"${HS}"'",
      "cravings": "'"${C}"'",
      "notes": "'"${N}"'"
    }
  }'

echo
