const func=()=>{
    
    setInterval(()=>{
        const date = new Date()
        
        const sec = date.getSeconds()*6
        const hour = (date.getHours()%12)*30
        const min = date.getMinutes()*6

        document.querySelector('.second').style.transform = `rotate(${sec}deg)`
        document.querySelector('.minute').style.transform = `rotate(${min}deg)`
        document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
    },1000)
}
func()