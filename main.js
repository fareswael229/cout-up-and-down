function processNumber() {
  const usernum = document.getElementById("numberInput").value;
  let countuptext = "";
  //countup
  let i = 1;
  while (i <= usernum) {
    countuptext += `<p> ${i} </p>`;
    i++;
  }
  document.getElementById("countUp").innerHTML = countuptext;
  //------------------------------------------------------------------------
  //countdown
  let f = usernum;
  let countDownText = "";
  do {
    countDownText += `<p> ${f} </p>`;
    f--;
  } while (f >= 1);
  document.getElementById("countDown").innerHTML = countDownText;
}
