$(document).ready(function() {
  //GET the list
  function getLions() {
    fetch("/lions", { method: "GET" })
      .then(response => response.json())
      .then(appendLions);
  }

  //Append a list of lions
  const appendLions = function(lions) {
    $("ul").empty();
    for (lion of lions) {
      $("ul").append(
        "<li class='list-group-item'><a href='lion/" +
          lion.id +
          "'>" +
          lion.name +
          "</a><button id='delete' data-value='" +
          lion.id +
          "' class='btn btn-sm btn-danger'>Delete</button></li>"
      );
    }
  };

  // Send the form via api
  const saveData = function(e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const pride = document.querySelector('input[name="pride"]').value;
    const age = document.querySelector('input[name="age"]').value;
    const gender = document.querySelector("select").value;

    const data = {
      name,
      pride,
      age,
      gender
    };

    fetch("/lions", {
      method: "POST",
      headers: {
        "user-agent": "Mozilla/4.0 MDN Example",
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      })
      .then(appendLions);
  };

  $("#form").submit(saveData);
  $("ul").delegate("button", "click", function() {
    const id = $(this).data("value");

    fetch("/lions/" + id, { method: "DELETE" })
      .then(response => response.json())
      .then(appendLions);
  });

  getLions();
});
