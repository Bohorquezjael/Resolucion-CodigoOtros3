// Tenemos un li de productos

const productos = [
	{
		nombre: "Zapato negro",
		tipo: "zapato",
		color: "negro",
		img: "./taco-negro.jpg",
	},
	{
		nombre: "Zapato azul",
		tipo: "zapato",
		color: "azul",
		img: "./taco-azul.jpg",
	},
	{
		nombre: "Bota negra",
		tipo: "bota",
		color: "negro",
		img: "./bota-negra.jpg",
	},
	{ nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
	{
		nombre: "Zapato rojo",
		tipo: "zapato",
		color: "rojo",
		img: "./zapato-rojo.jpg",
	},
];
// cambie a nombres mas descriptivos y a selectores mas adecuados
//coloque ; a las lineas que no lo tenian por buenas practicas
const productList = document.getElementById("lista-de-productos");
const input = document.getElementById("textInput");

// esta linea llamaba a un metodo que no existia por lo que encapsule su logica en el metodo al que hacia referencia
displayProductos(productos);
const botonDeFiltro = document.querySelector("button");

// cambie el ambito de las variables globales a const y que fuesen solo locales

// ademas separe la logica en un metodos y cambie la indentacion generel del documento
function displayProductos(productos) {
	for (let i = 0; i < productos.length; i++) {
		// coloque nombres mas descriptivos a las variables
		const container = document.createElement("div");
		container.classList.add("producto");

		const title = document.createElement("p");
		title.classList.add("titulo");
		title.textContent = productos[i].nombre;

		const image = document.createElement("img");
		image.setAttribute("src", productos[i].img);

		container.appendChild(title);
		container.appendChild(image);

		productList.appendChild(container);
	}
}

botonDeFiltro.onclick = function () {
	while (productList.firstChild) {
		productList.removeChild(productList.firstChild);
	}

	const texto = input.value;
	console.log(texto);
	const productosFiltrados = filtrado(productos, texto);

	for (let i = 0; i < productosFiltrados.length; i++) {
		const container = document.createElement("div");
		container.classList.add("producto");

		const ti = document.createElement("p");
		ti.classList.add("titulo");
		ti.textContent = productosFiltrados[i].nombre;

		const imagen = document.createElement("img");
		imagen.setAttribute("src", productosFiltrados[i].img);

		container.appendChild(ti);
		container.appendChild(imagen);

		productList.appendChild(container);
	}
};

const filtrado = (productos = [], texto) => {
	return productos.filter(
		(item) => item.tipo.includes(texto) || item.color.includes(texto)
	);
};


