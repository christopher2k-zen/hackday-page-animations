document.querySelector(".nextBtn").addEventListener("click", evt => {
  const element = evt.currentTarget;
  const page = element.getAttribute("data-page");

  const currentPage = document.querySelector("section.active");
  const targetPage = document.querySelector(`section.${page}`);

  currentPage.classList.add("inactive");
  currentPage.classList.remove("active");
  targetPage.classList.remove("inactive");
  targetPage.classList.add("active");
});
