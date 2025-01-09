function submit(){
    let y=document.getElementById("name").value
    let x=document.getElementById("password").value
    if(y=="karthik" &&x=="Kar@1234"){
        window.location.href="dashboard.html"
    }
    console.log(x,y)
}
function logout(){
    sessionStorage.clear()
    localStorage.clear()
    window.location.replace("index.html")
    console.log("loggig out")
}
let a=fetch("https://goweather.herokuapp.com/weather/Ny")
a.then((value)=>{
console.log(value.log)
return value.json
}).then((value)=>{
    console.log(value)
})
// document.getElementsByTagName("li")[0].style.background="red"
// let a=[1,2,3]
// while(y=prompt("play")){
    
// let x = Math.floor(Math.random()*3)
// console.log(x,y)
// if(x==y){
//     alert("yahoo")
// }}
// //console.log(x)
// window.location.href="https://erp.vce.ac.in/sinfo/ShowSemWiseAttendanceForWeb/ShowSemWiseAttendanceForWeb.aspx?clsstid=WUSk21dNe2FJflxPUyvtmw%3d%3d&clssd=rkA%2b%2bI6FGrNe2BliYogVLA%3d%3d&clsed=0%2bURBlcl15irIdyegLN5hA%3d%3d#:~:text=0-,100,-This%20information%20is"