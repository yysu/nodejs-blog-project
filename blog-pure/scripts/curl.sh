PORT=3000

# Get, /api/blog/list
curl http://localhost:${PORT}/api/blog/list?author=su&keyword=marvel

# Post 
curl -X POST "http://localhost:${PORT}/api/blog" \
    -H 'Content-Type: application/json' \
    -H 'Accept: application/json' \
    -d "{\"birthyear\": 1905, \"press\": \"OK\"}"

# PATCH
curl -X PATCH "http://localhost:${PORT}/api/blog" \
    -H 'Content-Type: application/json' \
    -H 'Accept: application/json;  charset=utf-8' \
    -d "{\"birthyear\": 1905, \"press\": \"OK\"}"

# DELETE

