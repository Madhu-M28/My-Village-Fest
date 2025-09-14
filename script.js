<script>
function Sendmail(event) {
    event.preventDefault();
    
    emailjs.sendForm('service_tf9wgm7', 'template_u2lw79n', '#contactForm')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
    });
}
</script>
