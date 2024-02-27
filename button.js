const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.Nao-btn');
const wrapperReact = wrapper.getBoundingClientReact();
const noBtnReact = noBtn.getBoundingClientReact();
yesBtn.addEventListener('click', () =>{
    question.innerHTML = 'Eu tbm t amo';
});
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() *
    (wrapperReact.width - noBtnReact.width)) + 1;
    const j = Math.floor(Math.random() *
    (wrapperReact.height - noBtnReact.height)) + 1;
    noBtn.style.left =  i + 'px';
    noBtn.style.top =j+'px';
});
