const textArea = document.querySelector(".content-input");
const textCount = document.querySelector(".text-count");
const checkBox = document.querySelector(".box");
const fileInput = document.getElementById("file"); 
const fileNameInput = document.querySelector(".file-input"); 
function handleTextChange(e) {
  const { value } = e.target;
  textCount.textContent = value.length;
}

function handleCheckboxClick() {
  checkBox.classList.toggle("checked");

  const existingImg = checkBox.querySelector("img");

  if (checkBox.classList.contains("checked")) {
    if (!existingImg) {
      const img = document.createElement("img");
      img.src = "./assets/check.svg";
      img.alt = "check-img";
      img.style.width = "14px";
      img.style.height = "14px";
      checkBox.appendChild(img);
    }
  } else {
    if (existingImg) {
      checkBox.removeChild(existingImg);
    }
  }
}

function handleImgFileChange(e) {
  const file = e.target.files[0];
  if (file) {
    fileNameInput.value = file.name;
    fileNameInput.classList.add("uploaded");
  } else {
    fileNameInput.value = "";
    fileNameInput.classList.remove("uploaded");
  }
}

// 내용 text 길이
textArea.addEventListener("input", handleTextChange);

// 체크박스 클릭,해제
checkBox.addEventListener("click", handleCheckboxClick);

// 이미지 선택
fileInput.addEventListener("change", handleImgFileChange);
