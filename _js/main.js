	
	// Toggle Menu
	const showmenu = (toggler,navId)=>{
		const toggle = document.querySelector(`${toggler}`),
		nav = document.querySelector(`${navId}`)

		if (toggle && nav) {
			toggle.addEventListener('click',()=>{
				nav.classList.toggle('show')
			})
		}
	}

	// Galeria
	
	// Transition event in button

	const btncontainer = document.querySelectorAll('.mybtncontainer > .btn')

	const clickBtn = ()=>{
		
		btncontainer.forEach(n=>{
			n.addEventListener('click', event=>{
				event.preventDefault()
				if(n.classList.has)
				n.classList.remove('active')
				n.classList.add('active')
			})
		})	

	}

	const carouselSlide = () =>{
		$('.owl-carousel').owlCarousel()

	}

	window.addEventListener('load',()=>{
		showmenu('.nav-icon','#sidebar')	
		clickBtn()
		carouselSlide()
	})	

	

	