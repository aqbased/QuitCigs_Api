API="http://localhost:4741"
URL_PATH="/journal"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
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
