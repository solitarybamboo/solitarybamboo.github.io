var posts=["2025/03/27/hello-world/","2025/03/28/算法模板/","2025/03/28/算法-算法基础/","2025/03/31/算法-搜索与图论/","2025/04/01/后悔/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };