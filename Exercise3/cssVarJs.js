const inputs = document.querySelectorAll(".control");
let change = false;

function handleVarChange() {
  const { suffix } = this.dataset;
  const sx = suffix || "";

  document.documentElement.style.setProperty(`--${this.name}`, this.value + sx);
}

inputs.forEach((input) => input.addEventListener("change", handleVarChange));

inputs.forEach((input) => input.addEventListener("mousemove", handleVarChange));
