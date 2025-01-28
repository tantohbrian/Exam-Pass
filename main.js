document
  .getElementById("excelFile")
  .addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Parse the Excel file
    const data = await file.arrayBuffer(); // Vanilla JS way to read file as ArrayBuffer
    const workbook = XLSX.read(data, { type: "array" });

    // Get the first sheet
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    // Convert sheet to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Display the data
    displayData(jsonData);
  });

function displayData(data) {
  const table = document.getElementById("dataTable");
  table.innerHTML = ""; // Clear any existing table data

  data.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const cellElement =
        rowIndex === 0
          ? document.createElement("th")
          : document.createElement("td");
      cellElement.textContent = cell || "";
      tr.appendChild(cellElement);
    });
    table.appendChild(tr);
  });
}
console.log("hello");
