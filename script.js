let data=[{id:1,name:"John",age:"18",profession:"Developer"},{id:2, name:"Jack",age:"20", profession:"Developer"},{id:3, name:"Karen", age:"19",profession:"Admin"}]


var display=document.getElementById("display")

//////////////////////////////Load data 
function onLoading(option){
    if(option==="profession"){
        for(let index =0;index<data.length;index++){
            let container=document.createElement("div");
            container.className="person";
        
            let id=document.createElement("p");
            id.innerText=` ${data[index]["id"]}`;
        
            let namee=document.createElement("p");
            namee.innerText=`Name: ${data[index]["name"]}`;
        
            let profession=document.createElement("p");
            profession.innerText=`Profession: ${data[index]["profession"]}`;
        
            let age=document.createElement("p");
            age.innerText=`Age: ${data[index]["age"]}`;
        
            container.append(id);
            container.append(namee);
            container.append(profession);
            container.append(age);
        
            display.append(container);
         }
    }
    else if(option==="developer"){
        for(let index =0;index<data.length;index++){
            if(data[index]["profession"].toUpperCase()==="DEVELOPER"){
                let container=document.createElement("div");
                container.className="person";
            
                let id=document.createElement("p");
                id.innerText=` ${data[index]["id"]}`;
            
                let namee=document.createElement("p");
                namee.innerText=`Name: ${data[index]["name"]}`;
            
                let profession=document.createElement("p");
                profession.innerText=`Profession: ${data[index]["profession"]}`;
            
                let age=document.createElement("p");
                age.innerText=`Age: ${data[index]["age"]}`;
            
                container.append(id);
                container.append(namee);
                container.append(profession);
                container.append(age);
            
                display.append(container);
            }

         }
    }
    else if(option==="admin"){
        for(let index =0;index<data.length;index++){
            if(data[index]["profession"].toUpperCase()==="ADMIN"){
                let container=document.createElement("div");
                container.className="person";
            
                let id=document.createElement("p");
                id.innerText=` ${data[index]["id"]}`;
            
                let namee=document.createElement("p");
                namee.innerText=`Name: ${data[index]["name"]}`;
            
                let profession=document.createElement("p");
                profession.innerText=`Profession: ${data[index]["profession"]}`;
            
                let age=document.createElement("p");
                age.innerText=`Age: ${data[index]["age"]}`;
            
                container.append(id);
                container.append(namee);
                container.append(profession);
                container.append(age);
            
                display.append(container);
            }

         }
    }

}
/////////////////////Get selcted data
function getOption(){
    option=document.getElementById("select_option").value;
    // onLoading(option);
    console.log(option)
}
/////////////////////////Remove already existing data 
function remv(){ 
     document.getElementById("display").innerText="";
}
/////////////////////////Filter data by Profession
function filter(){
    if(option==="profession"){
        alert("Please Select A Profession");
        remv();
        onLoading(option);
    }
    else{
        let content=document.getElementsByClassName("person");
        remv();
        onLoading(option);
    }

}
let option=document.getElementById("select_option").value;
onLoading(option);

////////////////////////////////////////Add New USer
function addPerson(){
    let name1=document.getElementById("name").value;
    let profession1=document.getElementById("profession").value;
    let age1=document.getElementById("age").value;
    data.push({id:data[data.length-1]["id"]+1,name:name1,age:age1,profession:profession1});
    option=document.getElementById("select_option").value="profession";
    remv()
    onLoading(option);
}