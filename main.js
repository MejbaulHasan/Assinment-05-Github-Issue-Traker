const manageLoader = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("card-container").classList.add("hidden");
  } else {
    document.getElementById("card-container").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
};

const allIssues = (id) => {
  manageLoader(true);
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues").then((res) =>
    res.json().then((data) => allIssuesDisplay(data.data, id)),
  );
};

allIssues("all");

let allBtnArray = 0;
let openBtnArray = 0;
let closedBtnArray = 0;

