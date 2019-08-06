// $.get("/notes", function(data) {
//     if (data.length !== 0) {
//         for (var i = 0; i < data.length; i++) {
//             var row = $("<div>");
//             row.addClass("savedNotes");

//             row.append("<p>" + data[i].title + "<p>");
//             row.append("<p>" + data[i].body + "<p>");

//             $("#note-area").prepend(row);
//         }
//     }
// });


// var noteArea = $("#note-area")

// write display function
function displayNotes() {
  $.ajax({
    url:"/api/notes",
    method:"GET"
  }).then(function(data) {
         if (data.length !== 0) {
              for (var i = 0; i < data.length; i++) {
                var row = $("<div>")
                row.addClass("savedNotes")
row.append(`<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${data[i].title}</h5>
  <p class="card-text">${data[i].body}</p>
  <button type="button" class="btn btn-outline-secondary">Delete</button>
</div>
</div>`)


                  // var row = $("<div>");
                  // // row.addClass("savedNotes");
      
                  // row.append("<p>" + data[i].title + "<p>");
                  // row.append("<p>" + data[i].body + "<p>");
                  
      
                  $("#note-area").prepend(row);
                  // $("#note-area").prepend(`<button type="button" class="btn btn-outline-secondary">Delete</button>`)
              }
          }
  })
}

// click function for delete

// var id = $(this).val()
// url: "/api/notes/" + id,
//

function getNotes() {
  $.ajax({
    url: "/api/notes",
    method: "GET"
  }).then( function(result) {
    console.log(result);
    displayNotes();
    // run that function in here
  })
}

getNotes();

$(".submit-note").on("click", function(event) {
    event.preventDefault();
  
    // Make a newChirp object
    var newNote = {
      title: $("#title").val().trim(),
      body: $("#note-text").val().trim(),
    //   created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  
    console.log(newNote);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/notes", newNote)
      // On success, run the following code
      .then(function() {
  
        // var row = $("<div>");
        // row.addClass("savedNotes");
  
        // row.append("<p>" + newNote.title + "</p>");
        // row.append("<p>" + newNote.body + "</p>");
        // //row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");
  
        // $("#note-area").prepend(row);
        location.reload()
  
      });
  
    // Empty each input box by replacing the value with an empty string
   
  });