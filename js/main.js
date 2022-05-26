

//Operaciones + - * /
var ops = {
	sumar: function sumarNumeros(n1, n2) {
		return (parseFloat(n1) + parseFloat(n2));
	},

	restar: function restarNumeros(n1, n2) {
		return (parseFloat(n1) - parseFloat(n2));
	},
	
	multiplicar: function multiplicarNumeros(n1, n2) {
		return (parseFloat(n1) * parseFloat(n2));
	},

	dividir: function dividirNumeros(n1, n2) {
		return (parseFloat(n1) / parseFloat(n2));
	},

	potencia: function elevarNumeros(n1, n2) {
		return (Math.pow(n1, n2)); // n1 a la potencia n2
	}
};

//Convertir a números flotantes;
function floats(r) {
	return parseFloat(r);
  }

//Funciones para limpiar
function cleaning(c) {
	setTimeout(function(){
		document.getElementById(c).innerHTML = "";
	}, 500);
}
function cleaning2(v) {
	setTimeout(function(){
		document.getElementById(v).classList.remove('formulario__grupo-incorrecto', 'formulario__grupo-incorrecto2');
	}, 500);
}

//Expresiones regulares para "filtrar" datos de inputs.
const expresiones = {
	magnitudes: /^\d+(\.\d)?\d*$/, //Exp. regular de magnitudes. Acepta núms. enteros y decimales
	decimal: /^[0-9]{1,10}$/, //Acepta solo números enteros con hasta 10 dígitos (no acepta punto flotante).
	binario: /^[0-1]{1,16}$/, //Acepta solo 0 y 1 hasta 16 veces
	hexadecimal: /^[0-9a-fA-F]+$/ //Acepta todos los números enteros del 0-9 y letras minusculas y mayusculas de la a-f, al menos una de una de estas dos.
}

//Conversiones Físicas- tarjeta 1. Código validación de campos
const getValueInput1 = () =>{
	let Xo = document.getElementById("Xo").value; 
	let Vo = document.getElementById("Vo").value; 
	let t = document.getElementById("t").value; 
	let to = document.getElementById("to").value;

	
	if (expresiones.magnitudes.test(Xo) && expresiones.magnitudes.test(Vo) && expresiones.magnitudes.test(t) && expresiones.magnitudes.test(to)){
		let tiempo = ops.restar(t, to);
		let txVo = ops.multiplicar(tiempo, Vo);
		let xFinal = ops.sumar(Xo, txVo);
		document.getElementById("xf_res").innerHTML = xFinal;
		cleaning("Xotxt");
		cleaning2("Xo");
		cleaning("Votxt");
		cleaning2("Vo");
		cleaning("ttxt");
		cleaning2("t");
		cleaning("totxt");
		cleaning2("to");
	} 
	else{
		cleaning("xf_res");
		if (!(expresiones.magnitudes.test(Xo))){
			document.getElementById("Xo").classList.add('formulario__grupo-incorrecto');
			document.getElementById("Xotxt").innerHTML = "Solo digíte números";
			if (Xo === ''){
				document.getElementById("Xotxt").innerHTML = "Llene el campo";
			}
		}
		if (!(expresiones.magnitudes.test(Vo))){
			document.getElementById("Vo").classList.add('formulario__grupo-incorrecto');
			document.getElementById("Votxt").innerHTML = "Solo digíte números";
			if (Vo === ''){
				document.getElementById("Votxt").innerHTML = "Llene el campo";
			}
		}
		if (!(expresiones.magnitudes.test(t))){
			document.getElementById("t").classList.add('formulario__grupo-incorrecto');
			document.getElementById("ttxt").innerHTML = "Solo digíte números";
			if (t === ''){
				document.getElementById("ttxt").innerHTML = "Llene el campo";
			}
		}
		if (!(expresiones.magnitudes.test(to))){
			document.getElementById("to").classList.add('formulario__grupo-incorrecto');
			document.getElementById("totxt").innerHTML = "Solo digíte números";
			if (to === ''){
				document.getElementById("totxt").innerHTML = "Llene el campo";
			}
		}
		if (expresiones.magnitudes.test(Xo)){
			cleaning("Xotxt");
			cleaning2("Xo");
		}
		if (expresiones.magnitudes.test(Vo)){
			cleaning("Votxt");
			cleaning2("Vo");
		}
		if (expresiones.magnitudes.test(t)){
			cleaning("ttxt");
			cleaning2("t");
		}
		if (expresiones.magnitudes.test(to)){
			cleaning("totxt");
			cleaning2("to");
		}
	}
}

//Conversiones Físicas- tarjeta 2. Código validación de campos
const getValueInput2 = () =>{
	let a = document.getElementById("a").value; 
	let t2 = document.getElementById("t2").value; 

	if (expresiones.magnitudes.test(a) && expresiones.magnitudes.test(t2)){
		let velFinal = ops.multiplicar(a, t2);
		document.getElementById("vf_res").innerHTML = velFinal;
		cleaning("atxt");
		cleaning2("a");
		cleaning("t2txt");
		cleaning2("t2");
	} 
	else{
		cleaning("vf_res");
		if (!(expresiones.magnitudes.test(a))){
			document.getElementById("a").classList.add('formulario__grupo-incorrecto');
			document.getElementById("atxt").innerHTML = "Solo digíte números";
			if (a === ''){
				document.getElementById("atxt").innerHTML = "Llene el campo";
			}
		}
		if (!(expresiones.magnitudes.test(t2))){
			document.getElementById("t2").classList.add('formulario__grupo-incorrecto');
			document.getElementById("t2txt").innerHTML = "Solo digíte números";
			if (t2 === ''){
				document.getElementById("t2txt").innerHTML = "Llene el campo";
			}
		}
		if (expresiones.magnitudes.test(a)){
			cleaning("atxt");
			cleaning2("a");
		}
		if (expresiones.magnitudes.test(t2)){
			cleaning("t2txt");
			cleaning2("t2");
		}
	}
}

//Conversiones Físicas- tarjeta 3. Código validación de campos
const getValueInput3 = () =>{
	let Vf = document.getElementById("Vf").value;
	let a2 = document.getElementById("a2").value; 
	let t3 = document.getElementById("t3").value; 

	if (expresiones.magnitudes.test(Vf) && expresiones.magnitudes.test(a2) && expresiones.magnitudes.test(t3)){
		let acXt = ops.multiplicar(a2, t3);
		let velInicial = ops.restar(Vf, acXt);
		document.getElementById("vo_res").innerHTML = velInicial;
		cleaning("Vftxt");
		cleaning2("Vf");
		cleaning("a2txt");
		cleaning2("a2");
		cleaning("t3txt");
		cleaning2("t3");
	} 
	else{
		cleaning("vo_res");
		if (!(expresiones.magnitudes.test(Vf))){
			document.getElementById("Vf").classList.add('formulario__grupo-incorrecto');
			document.getElementById("Vftxt").innerHTML = "Solo digíte números";
			if (Vf === ''){
				document.getElementById("Vftxt").innerHTML = "Llene el campo";
			}
		}
		if (!(expresiones.magnitudes.test(a2))){
			document.getElementById("a2").classList.add('formulario__grupo-incorrecto');
			document.getElementById("a2txt").innerHTML = "Solo digíte números";
			if (a2 === ''){
				document.getElementById("a2txt").innerHTML = "Llene el campo";
			}
		}
		if (!(expresiones.magnitudes.test(t3))){
			document.getElementById("t3").classList.add('formulario__grupo-incorrecto');
			document.getElementById("t3txt").innerHTML = "Solo digíte números";
			if (t3 === ''){
				document.getElementById("t3txt").innerHTML = "Llene el campo";
			}
		}
		if (expresiones.magnitudes.test(Vf)){
			cleaning("Vftxt");
			cleaning2("Vf");
		}
		if (expresiones.magnitudes.test(a2)){
			cleaning("a2txt");
			cleaning2("a2");
		}
		if (expresiones.magnitudes.test(t3)){
			cleaning("t3txt");
			cleaning2("t3");
		}
	}
}

//Conversiones Físicas- tarjeta 4. Código validación de campos
const getValueInput4 = () =>{
	let Vf2 = document.getElementById("Vf2").value;
	let Vo2 = document.getElementById("Vo2").value; 
	let a3 = document.getElementById("a3").value; 

	if (expresiones.magnitudes.test(Vf2) && expresiones.magnitudes.test(Vo2) && expresiones.magnitudes.test(a3)){
		let VfMVo = ops.restar(Vf2, Vo2);
		let tiempo = ops.dividir(VfMVo, a3);
		document.getElementById("t_res").innerHTML = tiempo;
		cleaning("Vf2txt");
		cleaning2("Vf2");
		cleaning("Vo2txt");
		cleaning2("Vo2");
		cleaning("a3txt");
		cleaning2("a3");
	} 
	else{
		cleaning("t_res");
		if (!(expresiones.magnitudes.test(Vf2))){
			document.getElementById("Vf2").classList.add('formulario__grupo-incorrecto');
			document.getElementById("Vf2txt").innerHTML = "Solo digíte números";
			if (Vf2 === ''){
				document.getElementById("Vf2txt").innerHTML = "Llene el campo";
			}
		}
		if (!(expresiones.magnitudes.test(Vo2))){
			document.getElementById("Vo2").classList.add('formulario__grupo-incorrecto');
			document.getElementById("Vo2txt").innerHTML = "Solo digíte números";
			if (Vo2 === ''){
				document.getElementById("Vo2txt").innerHTML = "Llene el campo";
			}
		}
		if (!(expresiones.magnitudes.test(a3))){
			document.getElementById("a3").classList.add('formulario__grupo-incorrecto');
			document.getElementById("a3txt").innerHTML = "Solo digíte números";
			if (a3 === ''){
				document.getElementById("a3txt").innerHTML = "Llene el campo";
			}
		}
		if (expresiones.magnitudes.test(Vf2)){
			cleaning("Vf2txt");
			cleaning2("Vf2");
		}
		if (expresiones.magnitudes.test(Vo2)){
			cleaning("Vo2txt");
			cleaning2("Vo2");
		}
		if (expresiones.magnitudes.test(a3)){
			cleaning("a3txt");
			cleaning2("a3");
		}
	}
}

//Operaciones geométricas- tarjeta 1. Código validación de campos
const getValueInput5 = () =>{
	let b = document.getElementById("b").value;
	let h = document.getElementById("h").value;

	if (expresiones.magnitudes.test(b) && expresiones.magnitudes.test(h)){
		let bXh = ops.multiplicar(b, h);
		let areaTrian = ops.dividir(bXh, 2);
		document.getElementById("aTrian_res").innerHTML = areaTrian;
		cleaning("btxt");
		cleaning2("b");
		cleaning("htxt");
		cleaning2("h");
	} 
	else{
		cleaning("aTrian_res");
		if (!(expresiones.magnitudes.test(b))){
			document.getElementById("b").classList.add('formulario__grupo-incorrecto2');
			document.getElementById("btxt").innerHTML = "Solo digíte números";
			if (b === ''){
				document.getElementById("btxt").innerHTML = "Llene el campo";
			}
		}
		if (!(expresiones.magnitudes.test(h))){
			document.getElementById("h").classList.add('formulario__grupo-incorrecto2');
			document.getElementById("htxt").innerHTML = "Solo digíte números";
			if (h === ''){
				document.getElementById("htxt").innerHTML = "Llene el campo";
			}
		}
		if (expresiones.magnitudes.test(b)){
			cleaning("btxt");
			cleaning2("b");
		}
		if (expresiones.magnitudes.test(h)){
			cleaning("htxt");
			cleaning2("h");
		}
	}
}

//Operaciones geométricas- tarjeta 2. Código validación de campos
const getValueInput6 = () =>{
	let h2 = document.getElementById("h2").value;
	let b2 = document.getElementById("b2").value;
	let BGrande = document.getElementById("BGrande").value;

	if (expresiones.magnitudes.test(BGrande) && expresiones.magnitudes.test(b2) && expresiones.magnitudes.test(h2)){
		let BMb = ops.sumar(BGrande, b2);
		let BbXh = ops.multiplicar(BMb, h2);
		let areaTrap = ops.dividir(BbXh, 2);
		document.getElementById("aTrap_res").innerHTML = areaTrap;
		cleaning("h2txt");
		cleaning2("h2");
		cleaning("b2txt");
		cleaning2("b2");
		cleaning("BGrandetxt");
		cleaning2("BGrande");
	} 
	else{
		cleaning("aTrap_res");
		if (!(expresiones.magnitudes.test(b2))){
			document.getElementById("b2").classList.add('formulario__grupo-incorrecto2');
			document.getElementById("b2txt").innerHTML = "Solo digíte números";
			if (b2 === ''){
				document.getElementById("b2txt").innerHTML = "Llene el campo";
			}
		}
		if (!(expresiones.magnitudes.test(h2))){
			document.getElementById("h2").classList.add('formulario__grupo-incorrecto2');
			document.getElementById("h2txt").innerHTML = "Solo digíte números";
			if (h2 === ''){
				document.getElementById("h2txt").innerHTML = "Llene el campo";
			}
		}
		if (!(expresiones.magnitudes.test(BGrande))){
			document.getElementById("BGrande").classList.add('formulario__grupo-incorrecto2');
			document.getElementById("BGrandetxt").innerHTML = "Solo digíte números";
			if (BGrande === ''){
				document.getElementById("BGrandetxt").innerHTML = "Llene el campo";
			}
		}
		if (expresiones.magnitudes.test(b2)){
			cleaning("b2txt");
			cleaning2("b2");
		}
		if (expresiones.magnitudes.test(h2)){
			cleaning("h2txt");
			cleaning2("h2");
		}
		if (expresiones.magnitudes.test(BGrande)){
			cleaning("BGrandetxt");
			cleaning2("BGrande");
		}
	}
}

//Operaciones geométricas- tarjeta 3. Código validación de campos
const getValueInput7 = () =>{
	let r = document.getElementById("r").value;

	if (expresiones.magnitudes.test(r)){
		let potR = ops.potencia(r, 2);
		let areaCir = ops.multiplicar(3.14159265359, potR);
		document.getElementById("aCir_res").innerHTML = areaCir;
		cleaning("rtxt");
		cleaning2("r");
	} 
	else{
		cleaning("aCir_res");
		if (!(expresiones.magnitudes.test(r))){
			document.getElementById("r").classList.add('formulario__grupo-incorrecto2');
			document.getElementById("rtxt").innerHTML = "Solo digíte números";
			if (r === ''){
				document.getElementById("rtxt").innerHTML = "Llene el campo";
			}
		}
		if (expresiones.magnitudes.test(r)){
			cleaning("rtxt");
			cleaning2("r");
		}
	}
}

//Operaciones de unidades de masa- tarjeta 1. Código validación de campos
const getValueInput8 = () =>{
	let unOrigunal = document.getElementById("unidadOriginal").value;
	let unConversion = document.getElementById("unidadConversion").value;
	let inpt = document.getElementById("cantidad").value;

	if (expresiones.magnitudes.test(inpt)){
		if (unOrigunal === 't'){
			if (unConversion === 't'){
				document.getElementById("calcular_res").innerHTML = inpt;
			}
			if (unConversion === 'kg'){
				let TtoKG = ops.multiplicar(inpt, 1000);
				document.getElementById("calcular_res").innerHTML = TtoKG;
			}
			if (unConversion === 'gr'){
				let TtoGR = ops.multiplicar(inpt, 1000000);
				document.getElementById("calcular_res").innerHTML = TtoGR;
			}
		}
		if (unOrigunal === 'kg'){
			if (unConversion === 't'){
				let KGtoT = ops.dividir(inpt, 1000);
				document.getElementById("calcular_res").innerHTML = KGtoT;
			}
			if (unConversion === 'kg'){
				document.getElementById("calcular_res").innerHTML = inpt;
			}
			if (unConversion === 'gr'){
				let KGtoGR = ops.multiplicar(inpt, 1000);
				document.getElementById("calcular_res").innerHTML = KGtoGR;
			}
		}
		if (unOrigunal === 'gr'){
			if (unConversion === 't'){
				let GRtoT = ops.multiplicar(inpt, 0.000001);
				document.getElementById("calcular_res").innerHTML = GRtoT;
			}
			if (unConversion === 'kg'){
				let GRtoKG = ops.multiplicar(inpt, 0.001);
				document.getElementById("calcular_res").innerHTML = GRtoKG;
			}
			if (unConversion === 'gr'){
				document.getElementById("calcular_res").innerHTML = inpt;
			}
		}
		cleaning("cantidadTxt");
		cleaning2("cantidad");
	}else{
		cleaning("calcular_res");
		if (!(expresiones.magnitudes.test(inpt))){
			document.getElementById("cantidad").classList.add('formulario__grupo-incorrecto2');
			document.getElementById("cantidadTxt").innerHTML = "Solo digíte números";
			if (inpt === ''){
				document.getElementById("cantidadTxt").innerHTML = "Llene el campo";
			}
		}
		if (expresiones.magnitudes.test(inpt)){
			cleaning("cantidadTxt");
			cleaning2("cantidad");
		}
	}
}

//Convertidor numérico- tarjeta 1. Código validación de campos
const getValueInput9 = () =>{
	//let dec = parseFloat(document.getElementById("dec").value);
	let dec = document.getElementById("dec").value;
	if (expresiones.decimal.test(dec)){
		let decFloat = parseFloat(dec);
		let decTObin = decFloat.toString(2);
		document.getElementById("dec_res").innerHTML = decTObin;
		cleaning("dectxt");
		cleaning2("dec");
	} 
	else{
		cleaning("dec_res");
		if (!(expresiones.decimal.test(dec))){
			document.getElementById("dec").classList.add('formulario__grupo-incorrecto2');
			document.getElementById("dectxt").innerHTML = "Solo digíte números";
			if (dec === ''){
				document.getElementById("dectxt").innerHTML = "Llene el campo";
			}
		}
		if (expresiones.decimal.test(dec)){
			cleaning("dectxt");
			cleaning2("dec");
		}
	}
}

//Convertidor numérico- tarjeta 2. Código validación de campos
const getValueInput10 = () =>{
	let bin = document.getElementById("bin").value;

	if (expresiones.binario.test(bin)){
		let binTOdec = Number.parseInt(bin, 2);
		document.getElementById("bin_res").innerHTML = binTOdec;
		cleaning("bintxt");
		cleaning2("bin");
	} 
	else{
		cleaning("bin_res");
		if (!(expresiones.binario.test(bin))){
			document.getElementById("bin").classList.add('formulario__grupo-incorrecto2');
			document.getElementById("bintxt").innerHTML = "Solo digíte números binarios";
			if (bin === ''){
				document.getElementById("bintxt").innerHTML = "Llene el campo";
			}
		}
		if (expresiones.binario.test(bin)){
			cleaning("bintxt");
			cleaning2("bin");
		}
	}
}

//Convertidor numérico- tarjeta 3. Código validación de campos
const getValueInput11 = () =>{
	let hex = document.getElementById("hex").value;

	if (expresiones.hexadecimal.test(hex)){
		let hexTOdec = Number.parseInt(hex, 16);
		document.getElementById("hex_res").innerHTML = hexTOdec;
		cleaning("hextxt");
		cleaning2("hex");
	} 
	else{
		cleaning("hex_res");
		if (!(expresiones.hexadecimal.test(hex))){
			document.getElementById("hex").classList.add('formulario__grupo-incorrecto2');
			document.getElementById("hextxt").innerHTML = "Solo digíte números hexadecimales enteros";
			if (hex === ''){
				document.getElementById("hextxt").innerHTML = "Llene el campo";
			}
		}
		if (expresiones.hexadecimal.test(hex)){
			cleaning("hextxt");
			cleaning2("hex");
		}
	}
}

// de normal a morse 
const mapping = {
	"A":".-","B":"-...","C":"-.-.","D":"-..",
	"E":".","F":"..-.","G":"--.","H":"....",
	"I":"..","J":".---","K":"-.-","L":".-..",
	"M":"--","N":"-.","O":"---","P":".--.",
	"Q":"--.-","R":".-.","S":"...","T":"-",
	"U":"..-","V":"...-","W":".--","X":"-..-",
	"Y":"-.--","Z":"--..",

	"0":"-----","1":".----","2":"..---","3":"...--",
	"4":"....-","5":".....","6":"-....","7":"--...",
	"8":"---..","9":"-----"
}
function text2morse(){
	 let input = document.getElementById("input").value;
	 input= input.toUpperCase();
	 let arr1 = input.split("");
	 let arr2 =  arr1.map(x => {
		if(mapping[x])
		{
			return mapping[x]
		}
		else{
				return x;
		}
	 });
	 let code = arr2.join("");
	 document.getElementById("output").value = code
}


//Códogo para FLECHA "ir arriba"
$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});