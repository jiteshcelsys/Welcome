let UserName = document.getElementById("UserName")
let EmailId = document.getElementById("EmailId")
let Date = document.getElementById("Date")
let clear = document.getElementById("clear")
let Submit = document.getElementById("Submit")
let Genders = document.getElementById("Genders")
let Qualification = document.getElementById("Qualification")
let Profile = document.getElementById("Profile")
let child = document.getElementById("child")
let UserListDisplay = document.getElementById("UserListDisplay")
let operation = document.getElementById('operation');
document.addEventListener("DOMContentLoaded", retrieveFunction)
clear.addEventListener('click', clearData)
function clearData() {
    UserName.value = "";
    EmailId.value = "";
    Date.value = "";
    Genders.value = "";
    Qualification.value = "";
    Profile.value = ""
}

Submit.addEventListener("click", function (e) {
    e.preventDefault();
  
    let user = UserName.value;
    let email = EmailId.value;
    let date = Date.value;
    let gender = Genders.value;
    let qualification = Qualification.value;
    let profile = Profile.value;
    let jsonObject = {}
    let regxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexUser = /^[A-Za-z]+$/;

    if (user === '' || email === '' || date === '' || gender === '' || qualification === '' || profile === '') {
        alert('fill all the details ')
        return;
    }
    if (!regxEmail.test(email) || !regexUser.test(user)) {
        alert('incorectly Written')
        return;
    }
    if (user != '' && email != '' && date != '' && gender != '' && qualification != '' && profile != '') {
        jsonObject.user = user;
        jsonObject.email = email;
        jsonObject.gender = gender;
        jsonObject.qualification = qualification;
        jsonObject.profile = profile;
        jsonObject.date=date;
        let userData = [];
        const localStorageData = localStorage.getItem('DataInfo') && JSON.parse(localStorage.getItem('DataInfo'));
        if (!localStorageData) {
            userData.push(jsonObject);
            alert('Data submitted successfully')


            localStorage.setItem('DataInfo', JSON.stringify(userData));
        } else {
            let isUniqueEmail = true;
            userData = [...localStorageData];
            for (let i = 0, l = localStorageData.length; i < l; i = i + 1) {
                if (localStorageData?.[i]?.email === email) {//optional chaining
                    isUniqueEmail = false;
                    alert('email is  in use')
                    return;
                }


            }
            if (isUniqueEmail) {
                alert('Data submitted successfully')

                userData.push(jsonObject);
                console.log(userData)
                localStorage.setItem('DataInfo', JSON.stringify(userData));

            }

        }

    }
    retrieveFunction();

});
function retrieveFunction() {
    const localData = JSON.parse(localStorage.getItem('DataInfo'));
    console.log(localData)
    const tbody = document.querySelector('.tbody')
    tbody.innerHTML = '';
    console.log(tbody);
    if (localData);
    {
        localData.map((item, index) => {
            const buttonDel = document.createElement('button')
            const buttonView = document.createElement('button')
            const buttonEdit = document.createElement('button')
            buttonDel.innerHTML = "delete"
            buttonView.innerHTML = "View"
            buttonEdit.innerHTML = "Edit"
            buttonDel.setAttribute('key', index);
            buttonView.setAttribute('key', index);
            buttonEdit.setAttribute('key', index);

            buttonDel.addEventListener('click', delFunc)
            buttonView.addEventListener('click', viewFunc)
            buttonEdit.addEventListener('click', editFunc)
            const tr = document.createElement('tr');
            const td = document.createElement('td');

            tr.innerHTML = `<td>${index+1}</td><td>${item.user}</td>
            <td>${item.email}</td>
            `
            td.append(buttonDel)
            td.append(buttonView)
            td.append(buttonEdit)
            tr.append(td);
            tbody.append(tr);//innner
            child.append(tbody)//outer

        })
    }
    
}
function editFunc(e) {
    let matchingKey = e.target.getAttribute('key');
    const localData = JSON.parse(localStorage.getItem('DataInfo'));
    localData.map((item, index) => {
        if (matchingKey == index) {
            let user = UserName;
            let email = EmailId;
            let date = Date;
            let gender = Genders;
            let qualification = Qualification;
            let profile = Profile;
            user.value = item.user;
            email.value = item.email;
            date.value = item.date;
            gender.value = item.gender;
            qualification.value = item.qualification;
            profile.value = item.profile;
        }
        localStorage.removeItem('key', index);
    })
    retrieveFunction();


}
function viewFunc(e) {
    const tbodyView = document.getElementById('view');
    tbodyView.innerHTML = ``;
    console.log(e.target.getAttribute('key'));
    const localData = JSON.parse(localStorage.getItem('DataInfo'));
    localData.map((item, index) => {
        if (index == e.target.getAttribute('key')) {
            console.log(item.date);
            var tr = document.createElement('tr');
            tr.innerHTML = `<td>${index+1}</td>
            <td>${item.user}</td><td>${item.email}</td><td>${item.date}</td>
            <td>${item.gender}</td> <td>${item.qualification}</td><td>${item.profile}</td>`

            tbodyView.appendChild(tr);
        }
       
    })


}


function delFunc(e) {
    alert('sure u want to del')

    const localData = JSON.parse(localStorage.getItem('DataInfo'));

    localData.map((item, index) => {
        localStorage.setItem('DataInfo', JSON.stringify(
            localData.filter((value, Index) => {
                if (Index != e.target.getAttribute('key')) {
                    return true;
                }
            })
        ));
    })
    retrieveFunction();
    let x=document.getElementById("view");
    x.innerHTML="";

}

//     const viewList = document.getElementsByClassName('view');

//     for (let i = 0; i < viewList.length; i++) {
//         viewList[i].addEventListener('click', function (e) {
//             console.log('view clicked')
//             let dataDisplay = JSON.parse(localStorage.getItem('DataInfo'));
//             document.getElementById('view').innerHTML = ""
//             dataDisplay.map((value, Index) => {
//                 if (Index == e.target.getAttribute('key')) {
//                     var tr = document.createElement('tr');
//                     tr.innerHTML = `<td>${Index + 1}</td>
//                 <td>${value.user}</td>\
//                 <td>${value.email}</td>
//                 <td>${value.Date}</td>
//                 <td>${value.gender}</td>
//                 <td>${value.qualification}</td>
//                 <td>${value.profile}</td>
//                 `
//                     document.getElementById('view').appendChild(tr);
//                 }
//             })
//         })
//     }
// }