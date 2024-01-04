curl -X POST http://localhost:8081/realms/windfire-restaurants/protocol/openid-connect/token \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'cache-control: no-cache' \
  -d 'client_id=<INSERT_REALM_ID>&username=<INSERT_REALM_USERNAME>&password=<INSERT_REALM_PASSWORD>&grant_type=password'