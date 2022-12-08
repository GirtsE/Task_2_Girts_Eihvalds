function MobileMenu() {
		var links = document.getElementById("links");
		var navbar = document.getElementById("main_nav")
		var menuIcon = document.getElementById("MENU")


		if(window.screen.width>1200){
			if (links.style.display === "flex") {
				navbar.style.height ="92.51px"
				links.style.display = "none";
				document.body.style.overflow = "scroll";
				menuIcon.src="assets/img/MenuOpen.svg";
			  }		
			else {
				navbar.style.height = "100vh"
				links.style.display = "flex";
				document.body.style.overflow = "hidden";
				menuIcon.src="assets/img/MenuX.svg";
			}

		}	
}

