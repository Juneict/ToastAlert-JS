const buttonTag = document.querySelector('.btn');
const ParentTag = document.querySelector('.parent');
const openToastAlert = ()=>{
    ParentTag.innerHTML = "";
    const ToastAlertTag = document.createElement('div');
    ToastAlertTag.append("Product Successfully Created!");
    ToastAlertTag.classList.add("ToastAlert");
    ParentTag.append(ToastAlertTag);
    ToastAlertTag.style.bottom =`-${ToastAlertTag.offsetHeight}px`;
    setTimeout(() => {
            ToastAlertTag.style.bottom = `0px`;
    }, 100);
    setTimeout(() => {
        ToastAlertTag.style.bottom =`-${ToastAlertTag.offsetHeight}px`;
}, 2000);
}
buttonTag.addEventListener("click",()=>{
    openToastAlert();
})
