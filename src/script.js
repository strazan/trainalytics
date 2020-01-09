import "./style.css";

const display = document.getElementById("display");
document.getElementById("knock-on-delays").addEventListener("click", () => {
  display.innerHTML = "fetching...";
  fetch("http://localhost:8080/knock-on")
    .then(res => res.json())
    .then(myJson => {
      displayJson(myJson);
    });
});

document.getElementById("vehicle-movements").addEventListener("click", () => {
  display.innerHTML = "fetching...";
  fetch("http://localhost:8080/vehicle-movement")
    .then(res => res.json())
    .then(myJson => {
      displayJson(myJson);
    });
});
document.getElementById("storning").addEventListener("click", () => {
  display.innerHTML = "fetching...";
  fetch("http://localhost:8080/vehicle-movement")
    .then(res => res.json())
    .then(myJson => {
      displayJson(myJson);
    });
});
document.getElementById("trafiklaget").addEventListener("click", () => {
  display.innerHTML = "fetching...";
  fetch("http://localhost:8080/vehicle-movement")
    .then(res => res.json())
    .then(myJson => {
      displayJson(myJson);
    });
});

function displayJson(obj) {
  console.log(obj);
  display.innerHTML = JSON.stringify(obj, null, 2);
}
