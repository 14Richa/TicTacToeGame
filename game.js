
let sign = "X";
let disp = document.getElementById("player");

function printx(number) 
{
    let isko = document.getElementById("r" + number);
    console.log(isko);
    if(isko.innerText=="")
    { 
        isko.innerText = sign;
        console.log(isko.innerHTML);
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

function checkmove(a,b,c,m) 
{
	if(getbox(a)== m && getbox(b)== m && getbox(c)== m)
	return true;
	else return false;
}

function winner() {
    if( checkmove(1,2,3,"X") || checkmove(4,5,6,"X") || checkmove(7,8,9,"X") ||
    checkmove(1,4,7,"X") || checkmove(2,5,8,"X") || checkmove(3,6,9,"X") ||
    checkmove(1,5,9,"X") || checkmove(7,5,3,"X") )
    {
        disp.innerHTML = "<center>" + sign + " Wins " + "</center>";
        for(let i = 1; i <= 9; i++)
        {
           document.getElementById("r" + i).innerHTML = "";
        }
    }   
}
