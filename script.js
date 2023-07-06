const wrapper = document.querySelector(".wrapper"),
  generateBtn = wrapper.querySelector(".form button"),
  qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.innerText = "Generate QR Code";

generateBtn.addEventListener("click", () => {
  // set the random value for the below qrValue
  let qrValue = Math.random() * 100000000;  // <----
  if (!qrValue || preValue === qrValue) return;
  preValue = qrValue;
  generateBtn.innerText = "Generating QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    let count = 40;
    let interval = setInterval(() => {
      console.log(count);
      generateBtn.innerText = "Reset in " + count;
      generateBtn.disabled = true;
      generateBtn.style.backgroundColor = "#7d95a5";
      if (count == 0) {
        clearInterval(interval);
        generateBtn.innerText = "Reset";
        count = 0;
        generateBtn.style.backgroundColor = "#3498DB";
        generateBtn.disabled = false;
      } else {
        count--;
      }
    }, 1000);
  });
});
