document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Capture the form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        pickupLocation: document.getElementById("pickupLocation").value,
        dropLocation: document.getElementById("dropLocation").value,
        pickupTime: document.getElementById("pickupTime").value,
        date: document.getElementById("Date").value,
        carOption: document.getElementById("carOption").value
    };

    // Validate that the car selection is made
    if (formData.carOption === "") {
        alert("Please select a car option.");
        return;
    }

    // Use SMTP.js to send the email
    Email.send({
        Host: "smtp.elasticemail.com",
        Port: 2525,
        Username: "komalsingh552718@gmail.com", // Replace with your Elastic Email username
        Password: "E1A0EA6134F4FBAA3A2D1B351ABD97EA6B8A", // Replace with your Elastic Email SMTP password
        To: 'komalsingh552718@gmail.com', // Replace with the recipient's email
        From: "komalsingh552718@gmail.com", // Replace with your verified sender email
        Subject: `Booking Details for ${formData.name}`,
        Body: `
            <b>Name:</b> ${formData.name}<br/>
            <b>Email:</b> ${formData.email}<br/>
            <b>Mobile:</b> ${formData.mobile}<br/>
            <b>Pickup Location:</b> ${formData.pickupLocation}<br/>
            <b>Drop Location:</b> ${formData.dropLocation}<br/>
            <b>Pickup Time:</b> ${formData.pickupTime}<br/>
            <b>Date:</b> ${formData.date}<br/>
            <b>Car Option:</b> ${formData.carOption}
        `
    }).then(
        message => {
            alert("Email sent successfully!");
            // Reset the form fields after successful submission
            document.getElementById("myForm").reset();
        }
    ).catch(error => {
        console.error("Email sending error: ", error);
        alert("There was an error sending the email.");
    });
});
