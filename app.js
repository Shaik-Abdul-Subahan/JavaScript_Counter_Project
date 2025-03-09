let count = 0
function increment(){
    let title = document.getElementById('title')
    title.innerText = 'Now, The JavaScript count is increasing!'
    count = count + 1;
    document.getElementById('counter').innerText = count;
}
function decrement(){
    if(count > 0){
        let title = document.getElementById('title')
        title.innerText = 'Now, The JavaScript count is decreasing!'
        count = count - 1;
        document.getElementById('counter').innerText = count;
        if(count == 0)
        {
            let title = document.getElementById('title')
            title.innerHTML = 'is your JavaScript <br> Count as of now!' 
        }
    }
}

