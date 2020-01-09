import "./style.css";

fetch("http://localhost:8080/")
  .then(res => res.json())
  .then(myJson => {
    console.log(myJson);
  });
