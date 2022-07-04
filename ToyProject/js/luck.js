function readTextFile(file){
    let result
    let rawFile = new XMLHttpRequest();
      rawFile.open("GET", file, false);
      rawFile.onreadystatechange = function ()
      {
          if(rawFile.readyState === 4)
          {
              if(rawFile.status === 200 || rawFile.status == 0)
              {
                  let allText = rawFile.responseText;
                  result = allText.replace(/\n/g, ",");
                  
              }
          }
      }
      rawFile.send(result);
      return result;
  }
  
  let text = readTextFile("saying.txt");
  let arr = text.split(',');

  let result = arr.filter(i =>  i.length != 0);
  let luck = result.filter(i => i.length != 1);
    
   
  let input = document.querySelector("#todayLuck");
  let btn = document.querySelector("#todayLuckBtn");
  let imgCount = ["flower","fox","lightning","moon","nature","space"];
  btn.addEventListener("click", action);
  function action(){
    $("#luckImg").attr('src','images/luck/'+imgCount[Math.floor(Math.random()*imgCount.length)]+'.jpg'); 
    input.textContent = luck[Math.floor(Math.random()*luck.length)];
  }
  
  
  