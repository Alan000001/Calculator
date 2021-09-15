function calculate(){
    var input = document.Calc.Input.value;
    var result;

    if(input.indexOf("^")!=-1 || input.indexOf("sqrt")!=-1 ){
        if(input.indexOf("+")>0 || input.indexOf("-")>0 || input.indexOf("*")>0  || input.indexOf("/")>0 ){
        document.Calc.Input.value="";
        return;
        }

    if(input.indexOf("^")!=-1 ){
        input = input.split("^");
        if(input.length>2){
            document.Calc.Input.value="";
            return;
        }

        result= Math.pow(input[0],input[1]);
    }    

    else
    {
        input=input.replace(/[a-z\(\)]/g,'');
        result = Math.sqrt(input);
        console.log(result)
    }

    }

    else{
        result = eval(input);
    }

    capt = result
    listo = capt.toFixed(2)
    document.Calc.Input.value=listo
        

}


function del(){
    const n = document.querySelector('textarea');

    const d = n.value;
    const p = d.slice(0,-1);
    n.value=p
}