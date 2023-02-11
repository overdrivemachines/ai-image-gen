// Called when form is submitted
function onSubmit(e) {
  e.preventDefault();

  // Clear the message and image
  document.querySelector(".msg").textContent = "";
  document.querySelector("#image").src = "";

  // Get the prompt
  const prompt = document.querySelector("#prompt").value;
  const size = document.querySelector("#size").value;

  if (prompt === "") {
    alert("Please add some text");
    return;
  }

  generateImageRequest(prompt, size);
}

async function generateImageRequest(prompt, size) {
  try {
    showSpinner();

    const response = await fetch("/openai/generateimage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, size }),
    });

    if (!response.ok) {
      // console.log(response);
      removeSpinner();
      throw new Error("That image could not be generated");
    }

    const data = await response.json();
    const imageUrl = data.url;
    document.querySelector("#image").src = imageUrl;
    removeSpinner();
  } catch (error) {
    document.querySelector(".msg").textContent = error;
  }
}

function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

function removeSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}

// When form is submitted call onSubmit()
document.querySelector("#image-form").addEventListener("submit", onSubmit);
