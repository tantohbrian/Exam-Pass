const btn = document.querySelector(".display");
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

      // Function to generate a unique ID
      const generateUniqueID = () => {
        return Math.floor(100000 + Math.random() * 900000);
      };

      // console.log(jsonData);
      document.querySelector(".group").addEventListener("submit", (e) => {
        e.preventDefault();
      });

      btn.addEventListener("click", () => {
        gridsContainer.innerHTML = "";

        jsonData.forEach((item) => {
          const uniqueID = generateUniqueID(); // Generate a new unique ID for each student
          const htmlData = `
            <div class="grid">
              <div class="header">
                <div class="img-container"><img src="img/logo.jpg" alt="" /></div>
                <div class="header-content">
                  <h2>Landmark Metropolitan University</h2>
                  <div class="verified">Verified ✔</div>
                </div>
              </div>
              <div class="student-details">
                <div class="student-name">${item.Name}</div>
                <div class="level">${item.Level}</div>
                <div class="Specialty">${item.Specialty}</div>
                <div class="id"> <img src="img/qr.png"/> ${uniqueID}</div>
              </div>
              <div class="footer">
                <div class="category"> ${item.Category}</div>
                <div class="signature"><p>Sign here</p> <div class="line"></div></div>
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

// print
document.querySelector(".print").addEventListener("click", () => {
  print();
});
