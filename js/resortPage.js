$.ajax({
    url: '../../json/resortList.json',
    dataType: 'json',
    success: function (data) {
        var value = $(data.resort); // Replace 'key' with the actual key in your JSON object
        // You can now use the value as needed
        var mainDiv = document.querySelector('.main');
        var resortContainer = document.createElement('div');
        resortContainer.setAttribute('class', 'container');


        var resortHeader = document.createElement('h2');
        resortHeader.setAttribute('class', 'resortHeader');
        resortHeader.innerHTML = value[0].name;

        mainDiv.appendChild(resortContainer);
        resortContainer.appendChild(resortHeader);

        for (let i = 0; i < value[0].Package_Details.length; i++) {

            var resortRow = document.createElement('div');
            resortRow.setAttribute('class', 'row resortList');

            var resortDiv = document.createElement('div');
            resortDiv.setAttribute('class', 'resortDiv col-xl-8 col-lg-8 col-md-8 col-sm-6 col-12 ');

            var resortImg = document.createElement('div');
            resortImg.setAttribute('class', 'resortImg col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ');

            var packageDiv = document.createElement('div');
            packageDiv.setAttribute('class', 'packageDiv');

            var packageImg = document.createElement('img');
            packageImg.setAttribute('class', 'mx-auto d-block img-fluid')
            packageImg.setAttribute('src', value[0].Package_Details[i].img);


            var packageDetails = document.createElement("h2");
            packageDetails.innerHTML = value[0].Package_Details[i].name;

            var hrTag = document.createElement("hr");

            var packageInc = document.createElement('h4');
            packageInc.innerHTML = value[0].Package_Details[i].Package_Includes[0].name;

            var packagedts = document.createElement("span");
            packagedts.innerHTML = value[0].Package_Details[i].Package_Includes[0].Package;

            var activityInc = document.createElement('h4');
            activityInc.innerHTML = value[0].Package_Details[i].Activities_Included[0].name;

            var activitydts = document.createElement("span");
            activitydts.innerHTML = value[0].Package_Details[i].Activities_Included[0].Activities;

            resortContainer.appendChild(resortRow);
            resortRow.appendChild(resortImg);
            resortRow.appendChild(resortDiv);
            resortImg.appendChild(packageImg);
            resortDiv.appendChild(packageDiv);
            packageDiv.appendChild(packageDetails);
            packageDiv.appendChild(hrTag);
            packageDiv.appendChild(packageInc);
            packageDiv.appendChild(packagedts);
            packageDiv.appendChild(activityInc);
            packageDiv.appendChild(activitydts);

        }

        var resortDescription=document.createElement('div');
        resortDescription.innerHTML=value[0].description;
        debugger;
        resortContainer.appendChild(resortDescription);
    }
});
