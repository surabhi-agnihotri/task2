const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const totalPriceDisplay = document.getElementById('total-price');
const notification = document.getElementById('notification');

let totalPrice = 0;
let selectedChocolates = 0;
const maxChocolates = 8; // Maximum allowed chocolates

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            if (selectedChocolates < maxChocolates) {
                totalPrice += 2.50; // Assuming each chocolate costs $2.50
                selectedChocolates++;
            } else {
                checkbox.checked = false; // Uncheck the checkbox if the limit is reached
                notification.textContent = "You can only select a maximum of 8 chocolates.";
                setTimeout(() => {
                    notification.textContent = '';
                }, 3000); // Hide notification after 3 seconds
            }
        } else {
            totalPrice -= 2.50;
            selectedChocolates--;
        }
        totalPriceDisplay.textContent = totalPrice.toFixed(2);
    });
});
