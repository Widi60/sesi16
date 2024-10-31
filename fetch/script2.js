let data_users_tag= document.getElementById("data_users");

fetch("https://randomuser.me/api/?results=10")
.then(response => response.json())
.then(data => { 
    data.results.forEach(user =>{
        data_users_tag.innerHTML +=`
        <tr>
              <td>
              <div class="row">
                <div class="col-md-2">
                  <img src="${user.picture.large}" class="img-fluid">
                </div>
                <div class="col-md-10">
                <h3>${user.name.first} ${user.name.last}</h3>
                  <p class="text-muted">
                    ${user.location.street.name} ${user.location.street.number}
                    <br>
                    ${user.email}
                    <br>
                    ${user.phone}
                  </p>
                </div>
              </div>
              </td>
              <td>
                <button class="btn btn-info">Detail</button>
                <button class="btn btn-warning">Edit</button>
                <button class="btn btn-danger">Delete</button>
              </td>
            </tr>`;
    });
})
//binding element html yang akan digunakan
/*let data_users_tag= document.getElementById("data_users");

//append adata ke element html yang dimaksud
data_users_tag.innerHTML=`
            <tr>
                <td>Widi</td>
                <td>Bandung</td>
                <td>didi@gmail.com</td>
                <td>083022536910</td>
            </tr>`;
*/
//append data LAIN ke element html yang dimaksud
/*data_users_tag.innerHTML=`
            <tr>
                <td>Widi</td>
                <td>Bandung</td>
                <td>didi@gmail.com</td>
                <td>083022536910</td>
            </tr>`;
            */
/*for(let i = 0; i < 10; i++){
    const element=Array[1];
    data_users_tag.innerHTML+=`
            <tr>
                <td>Aditia</td>
                <td>Bandung</td>
                <td>didi@gmail.com</td>
                <td>083022536910</td>
            </tr>`;
}
*/
/*let i =0;
while(i<10){
    data_users_tag.innerHTML+=`
            <tr>
                <td>Aditia</td>
                <td>Bandung</td>
                <td>didi@gmail.com</td>
                <td>083022536910</td>
            </tr>`;
            i++;
}
*/

