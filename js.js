function enviar() {
    let ubic = document.getElementById('ubicacion').value;
    let clien = document.getElementById('cliente').value;
    let dni = document.getElementById('dni').value;
    let tip= document.getElementById("tipocuarto").value;
    let per= document.getElementById("personas").value;

    if(nam===''){
        alert('porfavor llena el campo producto');
    }if(pric===''){
        alert('porfavor llena el campo precio');  
    }if(qanty===''){
        alert('porfavor llena el campo cantidad');  
    }else{
        console.log(nam);
        console.log(pric);
        console.log(qanty);
        let p = parseFloat(pric);
        let qty = parseInt(qanty);
        let sub = p*qty;
        console.log(p);
        console.log(qty);
        console.log(sub);
    
        var objProduct = {
            name : nam,
            price : p,
            Quantity : qty,
            subtotal : sub
        }
    
        productos.push(objProduct);
    }