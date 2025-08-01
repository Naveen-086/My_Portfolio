// SHOW MENU

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    if(toggle && nav){
          toggle.addEventListener('click', () =>{
                nav.classList.toggle('show')
          });
    }
}

showMenu('nav_toggle','nav_menu')

//active and remove active


const navLink=document.querySelectorAll('.nav_link')

navLink.forEach(n=>n.classList.remove('active'))
function linkAction(){
      navLink.forEach(n=>n.classList.remove('active'))
      this.classList.add('active')

      const navMenu=document.getElementById('nav_menu').classList.remove('show')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();  // Prevent the form from submitting in the usual way
  
      // Prepare the form data to send using fetch API
      var formData = new FormData(this);
  
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
         
          alert('The Details has been sent Successfully!');
        
          this.reset();
        } else {
          alert('!oops there was an error. Please try again.');
        }
      })
      .catch(error => {
        alert('Error: ' + error.message);
      });
    });