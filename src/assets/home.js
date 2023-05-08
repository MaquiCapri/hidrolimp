
src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"


emailjs.init('TRsRJDfLqrM9uIa7n')




document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_pll4g44';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar mensaje';
      alert('Mensaje enviado exitosamente');
    }, (err) => {
      btn.value = 'Enviar mensaje';
      alert(JSON.stringify(err));
    });
});


