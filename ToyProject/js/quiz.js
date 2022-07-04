const quizData = JSON.parse(JSON.stringify(data));
console.log(quizData);

const quizDisplay = document.getElementById('quiz');
const submitBtn = document.getElementById('submitQuiz');
const resultDisplay = document.getElementById('result');
const page = document.getElementById('page');




function buildQuiz(){
    const output = [ ]; //퀴즈 문제와 선택지가 저장된 배열
    const paging = [ ]; // 페이지 
    let total;
    let totalCount;
     
    quizData.forEach(  //quizData배열값 불러오기 
        (currentQuestion, questionNum) => { 
            const answers = [ ]; //퀴즈 선택지 배열
             for(item in currentQuestion.answers){  
                 //퀴즈 선택지 DOM구조 생성
                 
                  answers.push(`<label>  
                                <input type="radio" name="question${questionNum}"  value="${item}">
                                   ${item} : ${currentQuestion.answers[item]}
                                </label>`);                            
                    
                 }                
                  //output배열에 퀴즈와 선택지 DOM 추가하기
                  output.push(`<div class="question hide quiz${(questionNum+1)}"> ${currentQuestion.question}</div>
                               <div class="answer hide quiz${(questionNum+1)}">${answers.join('')}</div>`);
   
                        total = Math.ceil((questionNum+1) / 3);
                        totalCount = questionNum+1
                  
             });
             
 
         quizDisplay.innerHTML = output.join(' '); //join메서드, 퀴즈 사이에 공백 넣기


             for(i = 0 ; i < total ; i++){
                paging.push(`<span class="page_btn" onclick="pagingGo(${i+1},${totalCount})">${i+1}</span>` );
                page.innerHTML = paging.join(' ');
             }
             pagingGo(1,totalCount);
 }

    function pagingGo(page,total){
        let limit = (page * 3);
        let between = limit - 2;
        
        for(let i = 0 ; i  <= total; i ++){
            if((between <= i) && (i <= limit)){
                $('.quiz'+i).addClass('show');
                $('.quiz'+i).removeClass('hide');
            }else{
                $('.quiz'+i).addClass('hide');
            }
            
        }
        if(total <= limit){
            $('#submitQuiz').addClass('show');
            $('#submitQuiz').removeClass('hide');
        }else{
            $('#submitQuiz').addClass('hide');
            $('#submitQuiz').removeClass('show');
        }
  
    }

 function showResult(){

    //'answer'이름의 클래스를 배열로 저장하기
     const answerDisplays = quizDisplay.querySelectorAll('.answer');  
     let numCorrect = 0; //퀴즈 정답률 기록
     
     

     //답안 검증하기
     quizData.forEach( (currentQuestion, questionNum)=>{   


        const answerDisplay = answerDisplays[questionNum]; //answerDisplays배열을 index별로 불러오기
        const selector = `input[name=question${questionNum}]:checked`; //input태그의 속성값 지정하기
        const userAnswer = (answerDisplay.querySelector(selector) || {}).value; //input check값 저장


                    if(userAnswer === currentQuestion.correct){  //user가 선택한 값과 정답 검증
                            numCorrect++;
                            answerDisplays[questionNum].style.color = 'lightgreen';
                    }else{
                            answerDisplays[questionNum].style.color = 'red';
                    }
                    
       });
       
       
             //resultDisplay DOM에 결과값 삽입하기
              resultDisplay.innerHTML = `${numCorrect} out of ${quizData.length}`; 
       
       
}

submitBtn.addEventListener('click',showResult);   //사용자 '퀴즈시작' 이벤트 



buildQuiz();