const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome di page kami");
  }
  if (req.url === "/about") {
    res.end("Ini mengenai kita");
  }
  res.end(`<h1> Oops!</h1>
    <p>Kami tidak bisa menemukan</p>
    <a href='/'>Kembali</a>`);
});

server.listen(5000);
