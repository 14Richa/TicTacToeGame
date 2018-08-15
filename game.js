
let sign = "X";
let disp = document.getElementById("player");

function printx(number) 
{
    let isko = document.getElementById("r" + number);
    if(isko.innerText=="")
    { 
        isko.innerText = sign;
        checksign();
        disp.innerHTML= "<center>" + sign + " Turn " + "</center>" ;
        winner();
    }
}


function checksign()
{
     if (sign == "X") sign = "O";
     else sign = "X";
}

function getbox(no)
{
	return document.getElementById("r" + no).innerHTML;
}

function checkmove(a,b,c) 
{
	if(getbox(a)== getbox(b) && getbox(b) == getbox(c) && getbox(a)!= "")
	return true;
	else return false;
}

function winner() {
    if( checkmove(1,2,3) || checkmove(4,5,6) || checkmove(7,8,9) ||
    checkmove(1,4,7) || checkmove(2,5,8) || checkmove(3,6,9) ||
    checkmove(1,5,9) || checkmove(7,5,3) )
    {
        if(sign == "X") sign = "O";
        else sign = "X";
        disp.innerHTML = "<center>" + sign + " Wins " + "</center>";
        for(let i = 1; i <= 9; i++)
        {
           document.getElementById("r" + i).innerHTML = "";
        }
    }   
}
