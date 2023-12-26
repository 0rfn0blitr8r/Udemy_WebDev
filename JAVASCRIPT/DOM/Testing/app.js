let lis = document.querySelectorAll('li');

for(let i = 0; i < lis.length; i++){
    if(lis[i].classList.length === 0){
        lis[i].setAttribute('class', 'highlight');
    }
	else{
		lis[i].setAttribute('class', '');
	}
}