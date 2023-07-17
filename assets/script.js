const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const arrowLeft = document.getElementById("fleche_gauche");
const arrowRight = document.getElementById("fleche_droite");

arrowLeft.addEventListener('click', previousImg);
arrowRight.addEventListener('click', nextImg);


let actualImg = 0;
const imgBanner = document.querySelector(".banner-img");
let imgBannerIndex = imgBanner.dataset.index;

const imgBannerLength = slides.length;

function previousImg(){
	if(parseInt(imgBannerIndex) === actualImg){
		let actualIndex = imgBannerLength - 1;
		document.querySelector('.banner-img').src=slides[imgBannerLength-1].image;
		imgBannerIndex = actualIndex.toString();
		selectedDots(actualIndex);
		/*resetDots(actualImg);*/
	}else{
		imgBannerIndex--;
		document.querySelector('.banner-img').src=slides[imgBannerIndex].image;
		selectedDots(imgBannerIndex);
		// resetDots(imgBannerIndex + 1);
	}
	
	console.log("On recule d'une image");
}

function nextImg(){
	
	if(parseInt(imgBannerIndex) == slides.length-1){
		let actualIndex = actualImg;
		document.querySelector(".banner-img").src=slides[0].image;
		imgBannerIndex = actualIndex.toString();
		selectedDots(actualIndex);
		//resetDots(imgBannerLength - 1);
	}else{
		imgBannerIndex++;
		document.querySelector('.banner-img').src=slides[imgBannerIndex].image;
		selectedDots(imgBannerIndex);
		//resetDots(imgBannerIndex - 1);
	}
	console.log("On avance d'une image");
}
	
	
function createDots(){
	let dotnumb = document.querySelector('.dots');
	let ul = document.createElement('ul');
	ul.id = "liste-dot";
	ul.className = "dots-flex";
	dotnumb.append(ul);	
	for(let index of slides.keys()){
		let li = document.createElement("li");	
		li.innerHTML = "";
		if(index === 0){
			li.className = "dot dot_selected";	
		}else{
			li.className = "dot";
		}	
		ul.appendChild(li);
		console.log(index);
	}
	// selectedDots(actualImg);
}

function selectedDots(index){
	let listDot = document.querySelectorAll('#liste-dot li'),
		listDotActive = document.querySelector('#liste-dot li.dot_selected');
		console.log(listDotActive);
	listDotActive.classList.remove("dot_selected");
	listDot[index].classList.add("dot_selected");
}

/*function resetDots(index){
	let listDot = document.querySelectorAll('#liste-dot li');
	listDot[index].classList.remove("dot_selected");
}*/
createDots();


