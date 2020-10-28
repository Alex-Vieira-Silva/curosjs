function msk_date(){
    var n_char = document.getElementById("txtData").value.length;

    if(n_char == 2){
        document.getElementById("txtData").value = document.getElementById("txtData").value + "/";
    } else if(n_char == 5){
        document.getElementById("txtData").value = document.getElementById("txtData"). value + "/";
    }

}

function msk_cep(){
    var n_char = document.getElementById("txtCep").value.length;

    if(n_char == 5){

        document.getElementById("txtCep").value = document.getElementById("txtCep").value + "-"

    }
}

function msk_tel(){
    var n_char = document.getElementById("txtTel").value.length;

    if(n_char == 2){

        document.getElementById("txtTel").value = "(" + document.getElementById("txtTel").value + ") ";

    } else if(n_char == 10){
        document.getElementById("txtTel").value = document.getElementById("txtTel").value + "-"
    }


}

