// Called when form is submitted
function onSubmit(e) {
  e.preventDefault();

  // Get the prompt
  const prompt = document.querySelector("#prompt").value;
  const size = document.querySelector("#size").value;

  if (prompt === "") {
    alert("Please add some text");
    return;
  }

  generateImageRequest(prompt, size);
}

async function generateImageRequest(prompt, size) {}

function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

function removeSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}

// When form is submitted call onSubmit()
document.querySelector("#image-form").addEventListener("submit", onSubmit);
