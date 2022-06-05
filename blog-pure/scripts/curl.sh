PORT=3000

# Get, /api/blog/list
curl http://localhost:${PORT}/api/blog/list?author=su&keyword=marvel

# Post 
curl -X POST "http://localhost:${PORT}/api/blog" \
    -H 'Content-Type: application/json' \
    -H 'Accept: application/json' \
    -d "{\"title\": \"title asdf\", \"content\": \"content 123\", \"author\": \"Bess\"}"

# Update
curl -X POST "http://localhost:${PORT}/api/blog/update" \
    -H 'Content-Type: application/json' \
    -H 'Accept: application/json;  charset=utf-8' \
    -d "{\"title\": \"title asdf\", \"content\": \"content 123\", \"author\": \"Bess\"}"

# DELETE
curl -X POST "http://localhost:${PORT}/api/blog/delete" \
    -H 'Content-Type: application/json' \
    -H 'Accept: application/json;  charset=utf-8' \
    -d "{\"id\": 4}"



# User login, success
curl -X POST "http://localhost:${PORT}/api/user/login" \
    -H 'Content-Type: application/json' \
    -H 'Accept: application/json;  charset=utf-8' \
    -d "{\"username\": \"Alex\", \"password\": \"123\"}"

# User login, fail
curl -X POST "http://localhost:${PORT}/api/user/login" \
    -H 'Content-Type: application/json' \
    -H 'Accept: application/json;  charset=utf-8' \
    -d "{\"username\": \"Alex\", \"password\": \"1234\"}"
 