// const h1 = document.createElement("h1");
// h1.innerHTML = "E-commerce Webpage";
// div.appendChild(h1);



// const div = document.getElementById("h1-js");

// const h1 = React.createElement("h1", {}, [
//   React.createElement("div", { id: "inner-div-01" }, [
//     React.createElement("span", {}, "1"),
//     React.createElement("span", {}, "2"),
//   ]),
//   React.createElement("div", { id: "inner-div-01" }, [
//     React.createElement("span", {}, "3"),
//     React.createElement("span", {}, "4"),
//   ])
// ]);

// const root = ReactDOM.createRoot(div);
// root.render(h1);

const div = document.getElementById("h1-js");

const h1 = (
  <h1>
    <div id="inner-div-01">
      <span>1</span>
      <span>2</span>
    </div>

    <div id="inner-div-02">
      <span>3</span>
      <span>4</span>
    </div>
  </h1>
);

const root = ReactDOM.createRoot(div);

root.render(h1);
