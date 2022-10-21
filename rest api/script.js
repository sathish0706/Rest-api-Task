var api=fetch("https://restcountries.com/v3.1/all");
api.then((data)=>data.json())
.then((data1)=>foo(data1));

function foo(countryData){
  for(var i=0; i<=countryData.length; i++){
    var div=document.createElement("div");
    div.innerHTML=
   `<div class="container">
    <div class="row">
        <div class="col-lg-4">
        <h3 class="card-title">${countryData[i].name.common}</h3>
        <div class="card-body">
            <img src="${countryData[i].flags.png}";>                   
                        <h5 class="card-text"> region:${countryData[i].region}</h5>
                        <h5 class="card-text">capital:${countryData[i].capital}</h5>
                        <h5 class="card-text">latlng:${countryData[i].latlng[0]}</h5>
                        <h5 class="card-text">code:${countryData[i].cca3}</h5>
                        <button type="submit" style="width:220px">click for weather</button>
                        
                       </div>
        </div>
    </div>
</div>`
    
    document.body.append(div);
   };
  
}

   
