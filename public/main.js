getJS.onclick =()=>{
    const request = new XMLHttpRequest() //第一步创建请求
    request.open('GET','/2.js') //第二步open方法
    request.onload = () =>{
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }// 成功
    request.onerror = () =>{
    }// 失败
    request.send() // 发送
}


onst { request } = require("http");

console.log("我是main.js");

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onload = () => {
    console.log("request.response");
    console.log(request.response);

    const style = document.createElement("style"); // 创建一个style标签
    style.innerHTML = request.response; //填写style内容
    document.head.appendChild(style); //插入head
  };
};
