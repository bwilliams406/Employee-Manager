// displays contact information

const view = function (content) {
  $('.content').empty();

  for (let i = 0; i < employeeList.length; i++) {
    $('.content').append(`<div class='card'><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`);
  };
}
$("#view").on("click", view);


// Switches forms when add button is clicked

$("#add").on("click", function (event) {
  $('.content').empty();
  hideForms();
  $(".addForm").toggleClass("hide");
})

// adds new imployee information
$("#addEmployee").on("click", function (event) {
  event.preventDefault();
  const name = $("#name").val();
  const officeNum = $("#officeNum").val();
  const phoneNum = $("#phoneNum").val();
  let newEmployee = {
    name: name,
    officeNum: officeNum,
    phoneNum: phoneNum
  }
  if (name === "" || officeNum === "" || phoneNum === "") {
    alert("Didnt Fill Out")
  } else {
    employeeList.push({
      name: name,
      officeNum: officeNum,
      phoneNum: phoneNum
    })
    render();
  }
}
)


$("#add").on("click", view);


// Switches forms when verify button is clicked
$("#verify").on("click", function (event) {
  $('.content').empty();
  hideForms();
  $(".verifyForm").toggleClass("hide");
})


//verifys if input is already an employee
$("#verifyEmployee").on("click", function (event) {
  event.preventDefault();
  const name = $("#verifyName").val();
  for (let i = 0; i < employeeList.length; i++) {
    if (name === employeeList[i].name) {
      return alert("Employee")
    }
  }
  return alert("Not Employee");
});

$("#verify").on("click", view);






// Switches forms when update button is clicked
$("#update").on("click", function (event) {
  $('.content').empty();
  hideForms();
  $(".updateForm").toggleClass("hide");
})



$("#update").on("click", view);




// Switches forms when delete button is clicked

$("#delete").on("click", function (event) {
  $('.content').empty();
  hideForms();
  $(".deleteForm").toggleClass("hide");
})



$("#delete").on("click", view);





//function to render to html
const render = function () {
  $('.content').empty();
  let employees = "";

  for (let i = 0; i < employeeList.length; i++) {
    $('.content').append(`<div class='card'><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`);
  };
}

//function that adds or hides forms based on what button is clicked
function hideForms() {
  $(".form-inline").each(function (i) {

    let isHidden = $(this).hasClass("hide")
    if (!isHidden) {
      $(this).addClass("hide");
    }
  });
}