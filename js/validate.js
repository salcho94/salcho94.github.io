 validateForm = () => {
    const form = document.querySelectorAll('input[type=text]');
    const text = $('#text').val();
    let result = true;
    form.forEach(i =>{
        if(i.value == ''){
            i.nextElementSibling.innerHTML = '<div>값을 입력해 주세요</div>'
            i.focus();
            result = false;
        }else{
            i.nextElementSibling.innerHTML = '<div></div>'
        }
    });
    if(text == ''){
        alert("내용을 입력해 주세요");
        result = false;
    }
    return result;
  }