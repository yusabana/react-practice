const express = require('express');
const http = require('http');
const _ = require('lodash');
const app = express();
const PORT = process.env.PORT || 8080;

let count = 0;

const countTemplate = `<span id='count'><%= count %></span>`;

const template = `
<div>こんにちは、あなたは ${countTemplate} 番目のお客様です。</div>
<button id='button'>count up</button>
<script>
  // クライアントサイドレンダリング部分
  // XHR でのリクエストを行い、結果を部分レンダリングする
  const countCompiled = ${_.template(countTemplate)};
  document.getElementById('button').addEventListener('click', () => {
    const req = new XMLHttpRequest();
    req.onload = (e) => {
      const count = document.getElementById('count');
      const result = JSON.parse(e.target.response);
      count.innerHTML = countCompiled(result);
    };
    req.open('GET', '/api/count');
    req.send();
  });
</script>
`;

const compiled = _.template(template);

// count を上げるためのリクエストを行う
app.use('/api/count', (req, res, next) => {
  // API へのリクエストが来た際は JSON を返す
  res.json({
    count: count++
  });
});

// favicon のリクエストは無視する
app.use('/favicon.ico', (req, res, next) => {
  res.sendStatus(404);
});

app.use((req, res, next) => {
  // サーバサイドレンダリングの部分
  // API へのリクエストを内部的に行い、その結果をレンダリングする
  http.get({
    port: PORT,
    path: '/api/count'
  }, (response) => {
    let data = '';
    response.on('readable', () => {
      const chunk = response.read();
      if (chunk) {
        data += chunk;
      }
    });

    response.on('end', () => {
      // ここで HTML を返す
      res.send(compiled(JSON.parse(data)));
    });
  });
});

app.listen(PORT);
