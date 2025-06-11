function submitForm() {
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  if (!email || !phone || !address || !city || !state) {
    alert("Please fill in all fields.");
    return;
  }

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <h3>Your Details:</h3>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Address: ${address}</p>
    <p>City: ${city}</p>
    <p>State: ${state}</p>
  `;

  // Optionally clear the form
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
}