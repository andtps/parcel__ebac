const e=new Date("March 28, 2025 00:00:00").getTime(),t=setInterval(function(){let n=e-new Date().getTime(),o=Math.floor(n/864e5),a=Math.floor(n%864e5/36e5),r=Math.floor(n%36e5/6e4),l=Math.floor(n%6e4/1e3);document.getElementById("contador").innerHTML=`${o}d : ${a}h : ${r}m : ${l}s`,n<0&&(clearInterval(t),document.getElementById("contador").innerHTML="Evento iniciado!")},1e3);
//# sourceMappingURL=index.27e66e59.js.map
