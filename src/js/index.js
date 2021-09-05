const button = document.querySelector("#button");
const COLUMNS = ["id", "dateTwitter", "milliseconds", "reservedBit", "dataCenter", "workerThread", "sequenceNumber"];
const MAX_TABLE_ROWS = 10;

function fillWithZeros(string) {
  const MAX = 64;
  const size = string.length;

  const zeros = "0".repeat(MAX - size);

  return zeros.concat(string);
}

function divide(string) {
  const TWITTER_TIMESTAMP = 1288834974675;

  const reservedBit = parseInt(string.substr(0, 1), 2);
  const timestamp = parseInt(string.substr(1, 41), 2) + TWITTER_TIMESTAMP;
  const dataCenter = parseInt(string.substr(42, 5), 2);
  const workerThread = parseInt(string.substr(47, 5), 2);
  const sequenceNumber = parseInt(string.substr(52, 12), 2);

  const result = {};

  result.reservedBit = reservedBit;
  result.timestamp = timestamp;
  result.dataCenter = dataCenter;
  result.workerThread = workerThread;
  result.sequenceNumber = sequenceNumber;
  result.dateTwitter = new Date(timestamp).toGMTString();
  result.milliseconds = new Date(timestamp).getMilliseconds();

  return result;
};

function deleteTable() {
  const table = document.querySelector("table");
  table.remove();
};

function addRowToTable(values) {
  const tableBody = document.querySelector("tbody");

  if (tableBody.rows.length == MAX_TABLE_ROWS) {
    tableBody.deleteRow(-1);
  };

  const row = document.createElement("tr");

  for (const v in COLUMNS) {
    const element = document.createElement("td");

    element.innerText = values[COLUMNS[v]];
    element.className = "text-left py-3 px-4";
        
    row.appendChild(element);
  };

  tableBody.prepend(row);

  for (let t = 0, row; row = tableBody.rows[t]; t++) {
    if (t % 2 == 0) {
      row.className = "bg-gray-100";
    } else {
      row.className = "";
    };
  };    
};

const calculate = function() {
  const input = BigInt(document.querySelector("input").value);

  let baseBin = input.toString(2);
  baseBin = fillWithZeros(baseBin);
  results = divide(baseBin);

  results.id = input;

  addRowToTable(results);

  /*
    for (let r in results) {
        console.log(r, results[r]);
        const divText = document.createElement("p");

        divText.className = r;
        divText.innerText = r + '  ' + results[r];

        result.appendChild(divText);
    };
    */    
};

button.addEventListener("click", calculate);