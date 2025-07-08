document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(msg => {
        msg.classList.add('hidden');
    });
    document.querySelectorAll('input, textarea').forEach(input => {
        input.classList.remove('border-red-500', 'ring-red-200');
    });

    // Validate form
    let isValid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name) {
        showError('name', 'Please enter your name');
        isValid = false;
    }

    if (!email || !isValidEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }

    if (!message) {
        showError('message', 'Please enter your message');
        isValid = false;
    }

    if (isValid) {
        // Simulate form submission
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            document.getElementById('successMessage').classList.remove('hidden');
            document.getElementById('successMessage').classList.add('block');
            document.getElementById('contactForm').reset();
            submitBtn.textContent = 'Submit';
            submitBtn.disabled = false;
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                document.getElementById('successMessage').classList.add('hidden');
                document.getElementById('successMessage').classList.remove('block');
            }, 5000);
        }, 1500);
    }
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorMessage = field.parentElement.querySelector('.error-message');
    
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    field.classList.add('border-red-500', 'ring-red-200');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add smooth focus effects
// (Tailwind handles focus styles, but we can optionally highlight label)
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.querySelector('label').classList.add('text-indigo-500');
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.querySelector('label').classList.remove('text-indigo-500');
    });
});

// Navbar active state (underline)
const menuItems = document.querySelectorAll('nav ul li a');
menuItems.forEach(item => {
  item.addEventListener('click', function (e) {
    menuItems.forEach(i => i.classList.remove('text-[#5E44FF]', 'underline', 'decoration-2', 'underline-offset-4'));
    this.classList.add('text-[#5E44FF]', 'underline', 'decoration-2', 'underline-offset-4');
  });
}); 