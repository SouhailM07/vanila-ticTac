/*=======================================================================================*/
/*                              <!-- Variables -->                                       */
/*=======================================================================================*/
window.localStorage.setItem('xp',0)
window.localStorage.setItem('op',0)
window.localStorage.setItem('draw',0)



/*                             <!-- control panel -->                                    */

let container = document.querySelector('#container');

let reset_btn=document.querySelector('#reset')

/*                                <!-- board -->                                         */
let button = document.querySelectorAll('#n1');

let green='<i class="fa-solid fa-xmark"></i>',
    yellow='<i class="fa-solid fa-o"></i>'

let c=[]
for(let i=0;i<container.children.length;i++){
    c.push(container.children[i]);
}

let win1=[c[0],c[1],c[2]],
    win2=[c[3],c[4],c[5]],
    win3=[c[6],c[7],c[8]],
    win4=[c[0],c[3],c[6]],
    win5=[c[1],c[4],c[7]],
    win6=[c[2],c[5],c[8]],
    win7=[c[0],c[4],c[8]],
    win8=[c[2],c[4],c[6]]
    
    /*                               <!-- win panel -->                                      */
    
    let win_panel=document.querySelector('#win_panel');
    let quit_btn=document.querySelector('#win_panel-btn-quit')
    let win_panel_winner=document.querySelector('#win_panel-title');
    let next_round_btn=document.querySelector('#win_panel-btn-next_round');


    let x_wins=document.querySelector('#x_wins p:nth-of-type(2)')
    let o_wins=document.querySelector('#o_wins p:nth-of-type(2)')
    let Draw=document.querySelector('#Draw p:nth-of-type(2)')
    
    x_wins.innerHTML=window.localStorage.getItem('xp')
    o_wins.innerHTML=window.localStorage.getItem('op')
    Draw.innerHTML=window.localStorage.getItem('draw')

    /*                                 <!-- others -->                                       */
    
    let header = document.querySelector('#turn');
    var turn = 'x';
    var letter;
    let color='rgb(30 54 64)';
    
    
    
    
next_round_btn.addEventListener('click',e=>{
    win_panel.style.display='none';
    for(let i of c){
        i.innerHTML=''
        i.style.cssText='background-color:;'
    }
    turn='x'
    header.textContent = `X turn`;
    winner=false;
})    
    

quit_btn.addEventListener('click',e=>{
    window.close()
})





    reset_btn.addEventListener('click',_=>{

        for(let i of c){
            i.innerHTML=''
        }
        turn='x'
        
        header.textContent = `${turn.toUpperCase()} turn`;

        // x counter
        let x=window.localStorage.getItem('xp');
        x=0;
        window.localStorage.setItem('xp',0);
        x_wins.innerHTML=window.localStorage.getItem('xp')
        // o counter
        let o=window.localStorage.getItem('op');
        o=0;
        window.localStorage.setItem('op',0)
        o_wins.innerHTML=window.localStorage.getItem('op')
        // draw counter
        let draw=window.localStorage.getItem('draw');
        draw=0;
        window.localStorage.setItem('draw',0)
        Draw.innerHTML=window.localStorage.getItem('draw')
        winner=false;
    })


/*=======================================================================================*/
/*                              <!-- board function -->                               */
/*=======================================================================================*/



function win(){
    
    win_panel.style.display='flex';
    winner=true;

}


function testWin(e){
    let x=e.every(e=>e.innerHTML==green?true:false)
    let o=e.every(e=>e.innerHTML==yellow?true:false)
    if(x){
        
        win_panel_winner.innerHTML=`${green}  take the round`
        let xp=window.localStorage.getItem('xp')
        xp++
        window.localStorage.setItem('xp',xp)
        x_wins.innerHTML=window.localStorage.getItem('xp')
        return x
    }
    else if(o){
        win_panel_winner.innerHTML=`${yellow }  take the round`
        let op=window.localStorage.getItem('op')
        op++
        window.localStorage.setItem('op',op)
        o_wins.innerHTML=window.localStorage.getItem('op')
        return o;
    }
    else if(c.every(e=>{
        return e.innerHTML.length!=0;
    })&&winner==false){
        win_panel_winner.innerHTML='Draw !!!'
        setTimeout(win,700)
        let draw=window.localStorage.getItem('draw')
        draw++
        window.localStorage.setItem('draw',draw)
        Draw.innerHTML=window.localStorage.getItem('draw')
    }
}


var winner=false;


button.forEach(function (e) {
    
    
    e.addEventListener('click', function () {
        
        turn=='x'?letter=green:turn=='o'?letter=yellow:null

        
/*=======================================================================================*/
/*                              <!-- turn style -->                               */
/*=======================================================================================*/
        
        
        if (e.innerHTML.length === 0 &&winner==false) {
            e.innerHTML = letter;
            
            // style
            if(e.innerHTML==green){
                e.style.cssText='color:rgb(48 196 190)';
                
            }else if(e.innerHTML==yellow){
                e.style.cssText='color:rgb(241 178 58)';
            }
                       
            // this is the right place for condition
            
/*=======================================================================================*/
/*                              <!-- timing function -->                               */
/*=======================================================================================*/
var bgc;
            
if(turn=='x'){
    bgc='#30c5be';
}else if(turn=='o'){
    bgc='#f0b336';
} 

function styling(e){
    e.forEach(e=>{
        e.style.color=color;
        e.style.backgroundColor=bgc;
    })
}


/*=======================================================================================*/
/*                              <!-- condition section -->                               */
/*=======================================================================================*/
            

if(testWin(win1)){
    styling(win1)
    setTimeout(win,700)

}

else if(testWin(win2)){
    styling(win2)
    setTimeout(win,700)
}

else if(testWin(win3)){
    styling(win3)
    setTimeout(win,700)
    
}
else if(testWin(win4)){
    
    styling(win4)
    setTimeout(win,700)
}
else if(testWin(win5)){
    
    
    styling(win5)
    setTimeout(win,700)
}
else if(testWin(win6)){
    
    
    styling(win6)
    setTimeout(win,700)
}

else if(testWin(win7)){
    
    
    styling(win7)
    setTimeout(win,700)
}
else if(testWin(win8)){
    
    styling(win8)
    setTimeout(win,700)
}

/*=======================================================================================*/
/*                              <!-- turn switch section -->                               */
/*=======================================================================================*/

// turn switcher

turn=='x'?turn='o':turn=='o'?turn='x':null;

// draw checker


winner?header.textContent='Done':header.textContent = `${turn.toUpperCase()} turn`;


}
    });
});

/* my note : in my theory i see that the condition work inside addingListener because
            it reload every time i click and where i used conditions out eventListener 
            they worked only one time , it mean when i opened the page if the condition is wrong
            then it,s still wrong forever ; {there is no reloading } ;
*/