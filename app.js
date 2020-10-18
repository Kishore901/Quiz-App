const correctAns = ["A", "A", "B", "A"];
const form = document.querySelector(".mainform");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;

  let userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  userAns.forEach((answer, index) => {
    if (answer === correctAns[index]) {
      score = score + 25;
    }
  });
  scrollTo(0, 0);
  result.style.display = "block";
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 9);
});
