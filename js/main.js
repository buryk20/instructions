

window.onload = function () {
  var instrDow = document.querySelectorAll(".dev-inst-js");
  instrDow.forEach((el) => {
    el.onclick = function (e) {
      const wrapper = el.closest(".instr-main-cont__wrp");
      const list = wrapper.querySelector(".instr-pup-up-downloads");
      const arrow = wrapper.querySelector(".instr-main-cont__nav-details-img");
      const status = wrapper.querySelector(".instr-main-cont__nav-details");
      console.log(arrow);
      const currBtn = el.dataset.toggledText;
      console.log(currBtn);
      const nextText = currBtn;
      // el.dataset.toggledText = el.innerText;
      // el.innerText = nextText;
      // el.innerText = currBtn;
      console.log(nextText);


      if (list.hasAttribute("style")) {
        list.removeAttribute("style");
        status.innerText = "Развернуть"
        arrow.style.transform = "rotate(90deg)"

      } else {
        // el.style.transform = 'rotate(180deg)';
        list.style.opacity = "1";
        list.style.maxHeight = "500px";
        list.style.maxWidth = "100%"
        list.style.display = "block"
        arrow.style.transform = "rotate(-90deg)"
        status.innerText = "Свернуть"
      }
    }
  })
}
