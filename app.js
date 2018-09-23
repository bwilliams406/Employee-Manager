const render = function() {
    $('.content').empty();
  
    for( let i = 0; i < employeeList.length; i++ ) {
      $('.content').append(`<p>${employeeList[i].name}</p><p>${employeeList[i].officeNum}</p><p>${employeeList[i].phoneNum}</p>`);
    }
  }
  
  render();



const getInputVal = function() {
   const nameVal = $('#name').val();
    employeeList.push(nameVal);
  
    $('#name').val('');
    render();
  }
  
  $('#add').on('click', getInputVal);



  

const blueBody = function() {
    const nameVal = $('#name').val();
  
    if(employeeList.includes(nameVal)) {
      $('body').addClass('blue');
    }
  

    $('#name').val('');
  }
  
  $('#search').on('click', blueBody);



const removeName = function() {
   const nameVal = $('#name').val();
  
  
   employeeList.splice(employeeList.indexOf(nameVal), 1);
  

 $('#name').val('');
    render();
}
  
$('#delete').on('click', removeName);