"use strict";

const btns = document.querySelectorAll("section>button");
console.log(btns)
const container = document.getElementById("container");
console.log(container)

const btnHandler = ({
  target: {
    dataset: { flex },
  },
  target,
}) => {
  container.style.flexDirection = flex;
};
for (const btn of btns) {
  btn.addEventListener("click", btnHandler);
}
