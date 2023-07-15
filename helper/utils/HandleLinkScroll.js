export const HandleLinkScroll = (e) => {
  e.preventDefault();
  const navbar = document.querySelector("[data-mainHeader]");

  const id = e.currentTarget.dataset.id;
  const element = document.getElementById(id.slice(1));

  if (element.id === "home") {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    return;
  }

  const navHeight = navbar.getBoundingClientRect().height;
  let top = element.offsetTop - navHeight;
  if (!navbar.classList.contains("fixed")) top -= navHeight;
  window.scrollTo({
    top: top,
    left: 0,
    behavior: "smooth",
  });
};
