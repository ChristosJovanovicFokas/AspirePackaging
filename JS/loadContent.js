document.addEventListener("DOMContentLoaded", function() {
	fetch("HTML/header.html") //Fetch html file
	.then(response => response.text())
	.then(data => {
		document.getElementById("navbar-container").innerHTML = data;
	})
		.catch(error => console.error("Error Loading globalHeader.html:", error));
	});

document.addEventListener("DOMContentLoaded", function() {
        fetch("HTML/about.html") //Fetch html file
        .then(response => response.text())
        .then(data => {
                document.getElementById("about-section").innerHTML = data;
        })
                .catch(error => console.error("Error Loading globalHeader.html:", error));
        });

document.addEventListener("DOMContentLoaded", function() {
        fetch("HTML/products.html") //Fetch html file
        .then(response => response.text())
        .then(data => {
                document.getElementById("products-container").innerHTML = data;
		const script = document.createElement("script");
		script.src = "JS/products.js";
		script.defer = true;
		document.body.appendChild(script);
        })
                .catch(error => console.error("Error Loading globalHeader.html:", error));
        });

document.addEventListener("DOMContentLoaded", function() {
        fetch("HTML/customization.html") //Fetch html file
        .then(response => response.text())
        .then(data => {
                document.getElementById("customization-container").innerHTML = data;
                const script = document.createElement("script");
                script.src = "JS/customeBoxes.js";
                script.defer = true;
                document.body.appendChild(script);
        })      
                .catch(error => console.error("Error Loading globalHeader.html:", error));
        });

document.addEventListener("DOMContentLoaded", function() {
        fetch("HTML/footer.html") //Fetch html file
        .then(response => response.text())
        .then(data => {
                document.getElementById("footer-container").innerHTML = data;
                const script = document.createElement("script");
                script.src = "JS/ContactModal.js";
                script.defer = true;
                document.body.appendChild(script);
        })     
                .catch(error => console.error("Error Loading globalHeader.html:", error));
        });

document.addEventListener("DOMContentLoaded", function() {
        fetch("HTML/brandList.html") //Fetch html file
        .then(response => response.text())
        .then(data => {
                document.getElementById("brandList-container").innerHTML = data;
        })     
                .catch(error => console.error("Error Loading globalHeader.html:", error));
        });

document.addEventListener("DOMContentLoaded", function() {
        fetch("HTML/getStartedCustom.html") //Fetch html file
        .then(response => response.text())
        .then(data => {
                document.getElementById("get-started-container").innerHTML = data;
        })     
                .catch(error => console.error("Error Loading globalHeader.html:", error));
        });
document.addEventListener("DOMContentLoaded", function() {
        fetch("HTML/aboutExtension.html") //Fetch html file
        .then(response => response.text())
        .then(data => {
                document.getElementById("about-extension-container").innerHTML = data;
        })     
                .catch(error => console.error("Error Loading globalHeader.html:", error));
        });

