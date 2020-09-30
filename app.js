let Reader = require("./Reader");
let Writer = require("./Writer");
let Processor = require("./Processor");
let Table = require("./Table");
let HtmlParser = require("./HtmlParser");
let PDFWriter = require("./PDFWriter");

let leitor = new Reader();
let escritor = new Writer();

async function main() {
  let dados = await leitor.Read("./users.csv");
  let dadosProcessados = Processor.Process(dados);

  let usuarios = new Table(dadosProcessados);

  let html = await HtmlParser.Parse(usuarios);
  let now = Date.now()

  escritor.Write(now + ".html", html);

  PDFWriter.WriterPDF(now + ".PDF", html);

}

main();