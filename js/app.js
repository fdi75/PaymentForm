let userName = document.querySelector("#name-inp");
let cardNumber = document.querySelector("#card-number");
let exp = document.querySelector("#exp-date");
let cvv = document.querySelector("#cvv");
let icon = document.querySelector(".icon");
let zipCode = document.querySelector("#z-code");
let card = {};
let submitBtn = document.querySelector(".form-btn");

function validName() {
  const validTxt = document.querySelector(".validtxt");
  const inValidTxt = document.querySelector(".inValidtxt");

  const correctName = /^[a-zA-Z_ ]{3,25}$/;

  if (correctName.test(userName.value)) {
    inValidTxt.style.display = "none";
    validTxt.style.display = "block";
    card["user-name"] = userName.value;
  } else {
    inValidTxt.style.display = "block";
    validTxt.style.display = "none";
  }
}

function validCardNum() {
  const validTxt = document.querySelector("#success");
  const inValidTxt = document.querySelector("#err");

  const correctNum = /^\d{16}$/;
  if (correctNum.test(cardNumber.value.trim())) {
    inValidTxt.style.display = "none";
    validTxt.style.display = "block";
    card["card-number"] = cardNumber.value;
  } else {
    inValidTxt.style.display = "block";
    validTxt.style.display = "none";
    icon.style.top = "41%";
  }
}

function validDate() {
  const validTxt = document.querySelector("#success2");
  const inValidTxt = document.querySelector("#err2");

  const correctDate = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
  if (correctDate.test(exp.value)) {
    inValidTxt.style.display = "none";
    validTxt.style.display = "block";
    card["card-exp"] = exp.value;
  } else {
    inValidTxt.style.display = "block";
    validTxt.style.display = "none";
  }
}

function validCvv() {
  const validTxt = document.querySelector("#success3");
  const inValidTxt = document.querySelector("#err3");

  const correctCvv = /^\d{3}$/;
  if (correctCvv.test(cvv.value)) {
    inValidTxt.style.display = "none";
    validTxt.style.display = "block";
    card["cvv"] = cvv.value;
  } else {
    inValidTxt.style.display = "block";
    validTxt.style.display = "none";
  }
}

function validPass() {
  const validTxt = document.querySelector("#success4");
  const inValidTxt = document.querySelector("#err4");

  const correctPass = /^\d{5}$/;
  if (correctPass.test(zipCode.value)) {
    inValidTxt.style.display = "none";
    validTxt.style.display = "block";
    card["pass"] = zipCode.value;
  } else {
    inValidTxt.style.display = "block";
    validTxt.style.display = "none";
  }
}

submitBtn.addEventListener("click", async () => {
  try {
    console.log("Sending request...", card);
    const res = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(card),
    });

    console.log("RAW RESPONSE:", res);


    if(!res.ok) {
        throw new Error(`Server returnd: ${res.status} ${res.statusText}`)
    }

    const data = await res.json()
      console.log("SUCCESS:", data);
  } catch (err) {
    console.error("ERROR:", err);
  }
});
