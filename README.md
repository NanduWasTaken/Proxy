<h1 align="center">Proxy API</h1>

A fast, reliable, and developer-friendly **HTTPS Proxy API** designed to bypass CORS restrictions and forward requests with full HTTP method support.


---

## 📦 Features

- 🌍 Bypass **CORS** easily  
- ⚡ Supports **GET**, **POST**, **PUT**, **DELETE**, etc.  
- 🔐 Custom headers and full body forwarding  
- 🚀 Lightweight Express.js backend  
- 🧩 Simple and elegant UI for quick testing  

---

## 📖 How to Use

Send any HTTPS request to `/api` with a target URL and optional data.

---

### 🟨 Node.js (Axios) – Default Example

```js
const axios = require("axios");

axios.post("https://proxy.js.org/api", {
  url: "https://jsonplaceholder.typicode.com/posts",
  data: {
    title: "foo",
    body: "bar",
    userId: 1,
  },
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

---

## 📂 Other Examples

<details>
  <summary>🟦 JavaScript (Fetch)</summary>

```js
fetch("https://proxy.js.org/api", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {
      title: "foo",
      body: "bar",
      userId: 1,
    },
  }),
})
  .then((res) => res.json())
  .then(console.log);
```

</details>

<details>
  <summary>🐍 Python (requests)</summary>

```python
import requests

res = requests.post(
    "https://proxy.js.org/api",
    json={
        "url": "https://jsonplaceholder.typicode.com/posts",
        "data": {
            "title": "foo",
            "body": "bar",
            "userId": 1
        }
    }
)

print(res.json())
```

</details>

<details>
  <summary>💻 cURL</summary>

```bash
curl -X POST 'https://proxy.js.org' \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://jsonplaceholder.typicode.com/posts",
    "data": {
      "title": "foo",
      "body": "bar",
      "userId": 1
    }
  }'
```

</details>

---

## 🛠 Request Structure

| Field      | Type   | Description                         |
|------------|--------|-------------------------------------|
| `url`      | String | The full URL to proxy to (required) |
| `data`     | Object | Body content for `POST/PUT` methods |
| Headers    | Any    | Forwarded automatically             |

> Works with any HTTPS API!

---
> [!WARNING]
> This is a public open proxy and **should not be used to forward sensitive credentials** without additional security layers.
> This proxy should not be used for any purpose which is deemed not fit by the maintainers(eg: Malicious Use... etc)

---

## 👨‍💻 Creator

Made with ❤️ by [@NanduWasTaken](https://github.com/NanduWasTaken)  

> 🔧 Made by developers, for developers.
> Open-source and free to use forever ✌️
