document.addEventListener("DOMContentLoaded", () => {
    // Handle Insert Actions
    document.getElementById("hotelForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData); // Convert FormData to JSON-like object
        console.log(formDataObj);

        fetch("http://localhost:3000/insert/hotel", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataObj), // Send the data as JSON
        })
            .then((response) => response.text())
            .then((message) => alert(message))
            .catch((error) => console.error("Error:", error));
    });

    document.getElementById("employeeForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData);

        console.log(formDataObj);
        fetch("http://localhost:3000/insert/employee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataObj),
        })
            .then((response) => response.text())
            .then((message) => alert(message))
            .catch((error) => console.error("Error:", error));
    });

    document.getElementById("customerForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData);

        console.log(formDataObj);
        fetch("http://localhost:3000/insert/customer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataObj),
        })
            .then((response) => response.text())
            .then((message) => alert(message))
            .catch((error) => console.error("Error:", error));
    });

    // Handle Delete Actions
    document.getElementById("deleteHotelForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData);
        console.log(formDataObj);

        fetch("http://localhost:3000/delete/hotel", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataObj),
        })
            .then((response) => response.text())
            .then((message) => alert(message))
            .catch((error) => console.error("Error:", error));
    });

    document.getElementById("deleteEmployeeForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData);
        console.log(formDataObj);

        fetch("http://localhost:3000/delete/employee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataObj),
        })
            .then((response) => response.text())
            .then((message) => alert(message))
            .catch((error) => console.error("Error:", error));
    });

    document.getElementById("deleteCustomerForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData);
        console.log(formDataObj);

        fetch("http://localhost:3000/delete/customer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataObj),
        })
            .then((response) => response.text())
            .then((message) => alert(message))
            .catch((error) => console.error("Error:", error));
    });
});
