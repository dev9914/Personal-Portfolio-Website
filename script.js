console.log("Script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar'
    ).classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('.sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'inline'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'
        }, 350);
    }
})

const element = document.getElementById('5')
const cross = document.getElementById('7')

cross.addEventListener('o')

element.classList.add('adding9')



