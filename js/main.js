

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
      // console.log(nextText);
      // console.log($( window ).width())


      if (list.hasAttribute("style")) {
        // setTimeout(() => list.style.opacity = "0", 100)
        list.removeAttribute("style");
        
        status.innerText = "Развернуть";
        if($( window ).width() <= "680") {
          arrow.style.transform = "rotate(0deg)";
        } else {
          arrow.style.transform = "rotate(90deg)";
        }
        
        // setTimeout(() => list.style.opacity = "0", 1000)

      } else {
        list.style.opacity = "1";
        list.style.maxHeight = "500px";
        list.style.maxWidth = "100%";
        list.style.display = "block";
        
        status.innerText = "Свернуть";
        if($( window ).width() <= "680") {
          arrow.style.transform = "rotate(90deg)";
        } else {
          arrow.style.transform = "rotate(-90deg)";
        }
        // setTimeout(() => list.style.opacity = "1", 1000)
      }
    }
  })
}
