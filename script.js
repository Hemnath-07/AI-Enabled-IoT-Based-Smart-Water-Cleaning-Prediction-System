function predict() {
  const fileInput = document.getElementById("file");
  const formData = new FormData();
  formData.append("file", fileInput.files[0]);

  fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("result").innerHTML =
      `📅 Month: <b>${data.month}</b><br>
       🧹 Cleaning Level: <b>${data.cleaning_level}</b>`;
  });
}
