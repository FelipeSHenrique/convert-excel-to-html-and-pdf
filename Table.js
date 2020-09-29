class Table {

  constructor(arr) {
    this.header = arr[0];
    arr.shift(); // Remove o primeiro elemento da Array
    this.rows = arr;
  }

  // Get vai transformar esse metodo em um atributo
  get RowCount() {
    return this.rows.length; // Retorna a quantidade de linhas na minha tabela
  }

  get ColumnCount() {
    return this.header.length;
  }

}

module.exports = Table;