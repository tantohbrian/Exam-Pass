const btn = document.querySelector(".btn");
const gridsContainer = document.querySelector(".grids");

// File input event
document.getElementById("csvFile").addEventListener("change", function (e) {
  var file = e.target.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function (event) {
      var csvData = event.target.result;

      // Parse CSV to JSON
      var jsonData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
      }).data;

      //   random Id
      const Id = function generateRandomID() {
        return Math.floor(100000 + Math.random() * 900000); // Ensures a 6-digit number
      };

      console.log(jsonData); // Display the JSON data in console

      // Button click to render data
      btn.addEventListener("click", () => {
        // Clear the container before adding new content
        gridsContainer.innerHTML = "";

        // Append the data row by row
        jsonData.forEach((item) => {
          const htmlData = `
            <div class="grid">
              <div class="header">
                <div class="img-container"><img src="img/logo.jpg" alt="" /></div>
                <div class="header-content">
                  <h2>Landmark Metropolitan University</h2>
                  <div class="verified">Verified ✔</div>
                </div>
              </div>
              <div class="code">${Id}</div>
              <div class="student-details">
                <div class="student-name">${item.Name}</div>
                <div class="level">${item.Level}</div>
                <div class="Specialty">${item.Specialty}</div>
                <div class="category">${item.Category}</div>
              </div>
            </div>`;
          // Append each generated HTML block to the grids container
          gridsContainer.innerHTML += htmlData;
        });
      });
    };
    reader.readAsText(file);
  }
});
// console.log(Id);
