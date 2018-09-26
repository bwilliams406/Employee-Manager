



// displays contact information

const view = function (content) {
  $('.content').empty();

  for (let i = 0; i < employeeList.length; i++) {
    $('.content').append(`<div class='card'><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`);
  };
}
$("#view").on("click", view);


// adds contact information

$("#add").on("click", function (event) {
  $('.content').empty();
  $('.verifyForm').addClass("hide");
  $('.addForm').removeClass("hide");
})

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
      phoneNum: phoneNum})
      render();
    }
  }
)


$("#add").on("click", view);

//verifys if the employee is in the contact book

$("#verify").on("click", function (event) {
  $('.content').empty();
  $('.addForm').addClass("hide");
  $('.verifyForm').removeClass("hide");
})

$("#verifyEmployee").on("click", function (event) {
  event.preventDefault();
  const name = $("#name").val();
  if (name === $("#name").val()){
    alert("Currently an Employee")
  } else {
   alert("Not an Employee")
      render();
    }
  }
)

$("#verify").on("click", view);




// $("#update").on("click", function (event) {
//   $('.content').empty();
//   $('.verifyForm').addClass("hide");
//   $('.addForm').removeClass("hide");
// })

// $("#updateEmployee").on("click", function (event) {
//   event.preventDefault();
//   const name = $("#name").val();
//   const officeNum = $("#officeNum").val();
//   const phoneNum = $("#phoneNum").val();
//   let newEmployee = {
//     name: name,
//     officeNum: officeNum,
//     phoneNum: phoneNum
//   }

//   const age = prompt('Enter Employee Name');

// function updateEmployee(event) {
//   if (name === "#name" ) {
//   } else {
//     alert('You did not input your age');
//   }
// }

// checkEmployee();


//   if (name === "" || officeNum === "" || phoneNum === "") {
//     alert("Didnt Fill Out")
//   } else {
//     employeeList.push({
//       name: name,
//       officeNum: officeNum,
//       phoneNum: phoneNum})
//       render();
//     }
//   }
// )



const render = function() {
  $('.content').empty();
  let employees = "";

  for (let i = 0; i < employeeList.length; i++) {
    $('.content').append(`<div class='card'><p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p></div>`);
  };
}