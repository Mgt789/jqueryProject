$.ajax({
  url: './data.json',
  dataType: 'json',
  success: function (data) {
    var value = $(data.employees); // Replace 'key' with the actual key in your JSON object
    // You can now use the value as needed
    var mainDiv = document.querySelector('.main');
    var empContainer = document.createElement('div');
    empContainer.setAttribute('class', 'EmployeesDiv')
    var empRow = document.createElement('div');
    empRow.setAttribute('class', 'row');
    for (let i = 0; i < value.length; i++) {

      var empDiv = document.createElement('div');
      empDiv.setAttribute('class', 'empDiv col-xl-6 col-lg-6 col-sm-12 col-12');

      var Details = document.createElement('div');
      Details.setAttribute('class', 'Details row');

      var empDetails = document.createElement('div');
      empDetails.setAttribute('class', 'details col-xl-6 col-lg-6 col-sm-12 col-12');

      var empimgDiv = document.createElement('div');
      empimgDiv.setAttribute('class', 'empimgDiv col-xl-6 col-lg-6 col-sm-12 col-12');


      //emp name
      var empName = document.createElement('h3');
      empName.setAttribute('class', 'empName');
      empName.innerHTML = 'Name = ' + value[i].name;
      //emp id
      var empid = document.createElement('p');
      empid.setAttribute('class', 'empId');
      empid.innerHTML = 'id = ' + value[i].id;
      //emp age
      var empage = document.createElement('p');
      empage.setAttribute('class', 'empage');
      empage.innerHTML = 'age = ' + value[i].age;
      //emp position
      var empPosition = document.createElement('p');
      empPosition.setAttribute('class', 'empPosition');
      empPosition.innerHTML = 'position = ' + value[i].position;
      //emp department
      var empdepartment = document.createElement('p');
      empdepartment.setAttribute('class', 'empdepartment');
      empdepartment.innerHTML = 'department = ' + value[i].department;
      //emp image
      var empimg = document.createElement('img');
      empimg.setAttribute('class', 'mx-auto img-fluid d-block');
      empimg.setAttribute('src', value[i].image);
      //emp btn for redirect
      var empbtn = document.createElement('button');
      empbtn.setAttribute('class', 'btn btn-primary');
      empbtn.innerHTML = 'submit';



      mainDiv.appendChild(empContainer);
      empContainer.appendChild(empRow);
      empRow.appendChild(empDiv);
      empDiv.appendChild(Details);
      Details.appendChild(empDetails);
      Details.appendChild(empimgDiv);

      empDetails.appendChild(empName);
      empDetails.appendChild(empid);
      empDetails.appendChild(empage);
      empDetails.appendChild(empPosition);
      empDetails.appendChild(empdepartment);
      empimgDiv.appendChild(empimg);
      empDiv.appendChild(empbtn);
    }


  }
});
