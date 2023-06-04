$.ajax({
    url: './json/dandeli.json',
    dataType: 'json',
    success: function (data) {
        var value = $(data.resort); // Replace 'key' with the actual key in your JSON object
        // You can now use the value as needed
        var mainDiv = document.querySelector('.main');
        var resortContainer = document.createElement('div');
        resortContainer.setAttribute('class', 'container');

        for (let i = 0; i < value.length; i++) {

            var resortRow = document.createElement('div');
            resortRow.setAttribute('class', 'row resortList');

            var resortDiv = document.createElement('div');
            resortDiv.setAttribute('class', 'resortDiv col-xl-6 col-lg-6 col-sm-12 col-12');

            var resortImg = document.createElement('div');
            resortImg.setAttribute('class', 'resortImg col-xl-6 col-lg-6 col-sm-12 col-12');

            //resort name
            var resortName = document.createElement('h3');
            resortName.setAttribute('class', 'resortName');
            resortName.innerHTML = value[i].name;
            //resort name
            var resortImage = document.createElement('img');
            resortImage.setAttribute('class', 'mx-auto img-fluid d-block');
            resortImage.setAttribute('src', value[i].image);
            //resort button
            var viewMorebtn = document.createElement('div');
            viewMorebtn.setAttribute('class', 'btn');
            viewMorebtn.setAttribute('id', 'btn'+[i]);
            //redirect page
            var btnClick=document.createElement('a');
            btnClick.setAttribute('href','/page/resort/'+ value[i].name+'.html');
            btnClick.innerText = "View More";
            



            mainDiv.appendChild(resortContainer);
            resortContainer.appendChild(resortRow);
            resortRow.appendChild(resortDiv);
            resortRow.appendChild(resortImg);
            resortDiv.appendChild(resortName);
            resortImg.appendChild(resortImage);
            resortDiv.appendChild(viewMorebtn);
            viewMorebtn.appendChild(btnClick);
        }

    }
});
