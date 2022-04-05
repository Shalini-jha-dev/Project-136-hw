function change(){
    user_name = document.getElementById("name").value;
    localStorage.setItem("heading_div1", user_name);
    window.location = "index2.html";
}
