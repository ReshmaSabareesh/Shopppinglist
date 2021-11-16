function displayList() {
    document.getElementById("container").hidden=false;
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
             let myobj=JSON.parse(this.responseText);

            setTable(myobj);

        }
    };
    xhr.open("GET", "grocery.json",true);
    xhr.send();
}

//table format
function setTable(obj){
    document.getElementById("things").style.display="none";
    let item=obj.item;
    let table ="<thead><tr><th>Sl.No</th><th>ItemName</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th><th>Status</th></tr></thead>";
    for(let i=0;i<item.length;i++)
    {       
        table+="<tr>";
        table+="<td>"+item[i].SlNo+"</td><td>"+item[i].ItemName+"</td><td>"+item[i].Quantity+"</td><td>"+item[i].Unit+"</td><td>"+item[i].Department+"</td><td>"+item[i].Notes+"</td><td><input type=checkbox></td>";
        table+="</tr>";
    }
    table+="</table>";
    document.getElementById("list").innerHTML=table;
}

    
                

                



              
