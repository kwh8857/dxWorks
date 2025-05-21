const textArea = document.querySelector(".content-input");
const textCount = document.querySelector(".text-count");
const requiredCheckBox = document.querySelector(".required-terms .box");
const optionalCheckBox = document.querySelector(".optional-terms .box");
const fileInput = document.getElementById("file");
const fileNameInput = document.querySelector(".file-input");
const receiptBtn = document.querySelector(".receipt-btn");

// 체크박스 상태를 저장할 객체
const checkBoxState = {
  required: false,
  optional: false,
};

function handleTextChange(e) {
  const { value } = e.target;
  textCount.textContent = value.length;
}

function handleCheckboxClick(e) {
  const checkBox = e.currentTarget;
  const isRequired = checkBox.closest(".required-terms") !== null;

  checkBox.classList.toggle("checked");
  checkBoxState[isRequired ? "required" : "optional"] =
    checkBox.classList.contains("checked");

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

function handleReceiptClick() {
  if (!checkBoxState.required) {
    alert("필수 동의 항목에 체크해주세요.");
    return;
  }
}

// 내용 text 길이
textArea.addEventListener("input", handleTextChange);

// 체크박스 클릭,해제
requiredCheckBox.addEventListener("click", handleCheckboxClick);
optionalCheckBox.addEventListener("click", handleCheckboxClick);

// 이미지 선택
fileInput.addEventListener("change", handleImgFileChange);

// 접수하기 버튼 클릭
receiptBtn.addEventListener("click", handleReceiptClick);
