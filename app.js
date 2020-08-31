
//agregar fecha en cada tarea creada 
// mostrar marcado como hecho y si esta hecho desmarcar  
// boton marcar como hecho verde y desmarcar como hecho amarrillo  
// 

let  tareas = [];

class Tarea{


constructor(tarea, completado){

this.tarea = tarea;
this.completado = completado;

}



cambiarEstado(){

	this.completado = !this.completado;

   

}



}



function imprimir(){
//debugger;
let html = "";

for(let i = 0; i < tareas.length; i++ ){

html += "<tr>" + 
	"<td>"+tareas[i].tarea +"</td>"+
	"<td>"+getAnio()+"</td>"+
	"<td>"+createButton(i) + "</td>" +
	"<td>"+createBorrar(i) + "</td>" +
	"</tr>" ;

}


let resultado = document.getElementById("resultado")
resultado.innerHTML = html;

resetInput();

}

const input = document.getElementById("principal");

input.addEventListener("change", function(){



let task = new Tarea(input.value, false) ;

tareas.push(task);

for(let i = 0; i < tareas.length; i++ ){

      
imprimir()

}

});

 
function completar(index) {
	const tarea = tareas[index];
	tarea.cambiarEstado();
	imprimir();
}

function borrar(index) {
	tareas.splice(index, 1);
	imprimir();
}

function resetInput() {
	const principal = document.getElementById("principal");
	principal.value = "";
}

function createButton(index) {
	const tarea = tareas[index];
	let buttonHtml = "";
	if(tarea.completado) {
		return '<button class="btn btn-warning" onclick="completar('+index+')">Desmarcar</button>';
	} else {
		return '<button class="btn btn-success" onclick="completar('+index+')">Completar</button>';
	}

	
}


function createBorrar(index){
const work = tareas[index];
	let buttonHTML = "";

		return '<button class="btn btn-danger" onclick="borrar('+index+')">Borrar</button>';
	

    }



function getAnio(){

return new Date().toDateString()

}