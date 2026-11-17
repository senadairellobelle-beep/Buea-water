console.log("Buea Water Connect JavaScript is working!");

// ========================================
// BUEA WATER CONNECT
// DASHBOARD SEARCH AND FILTER
// ========================================

const areaSearch = document.getElementById("areaSearch");
const statusFilter = document.getElementById("statusFilter");
const areaCards = document.querySelectorAll(".area-card");

function filterAreas() {

    if (!areaSearch || !statusFilter) {
        return;
    }

    const searchValue = areaSearch.value.toLowerCase().trim();
    const selectedStatus = statusFilter.value;

    areaCards.forEach(function (card) {

        const areaName =
            (card.dataset.area || "").toLowerCase();

        const areaStatus =
            card.dataset.status || "";

        const matchesSearch =
            areaName.includes(searchValue);

        const matchesStatus =
            selectedStatus === "all" ||
            areaStatus === selectedStatus;

        if (matchesSearch && matchesStatus) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}

if (areaSearch) {
    areaSearch.addEventListener("input", filterAreas);
}

if (statusFilter) {
    statusFilter.addEventListener("change", filterAreas);
}


// ========================================
// SUPPLIER AVAILABILITY
// ========================================

const availabilityToggle =
    document.getElementById("availabilityToggle");

const availabilityText =
    document.querySelector(".availability-text");

const onlineDot =
    document.querySelector(".online-dot");

if (availabilityToggle) {

    availabilityToggle.addEventListener("click", function () {

        if (
            availabilityToggle.textContent.trim() === "ON"
        ) {

            availabilityToggle.textContent = "OFF";

            if (availabilityText) {
                availabilityText.textContent =
                    "Currently Unavailable";
            }

            if (onlineDot) {
                onlineDot.style.background = "#999999";
            }

        } else {

            availabilityToggle.textContent = "ON";

            if (availabilityText) {
                availabilityText.textContent =
                    "Currently Available";
            }

            if (onlineDot) {
                onlineDot.style.background = "#2ab673";
            }

        }

    });

}


// ========================================
// SUPPLIER REQUEST ACTIONS
// ========================================

const acceptButtons =
    document.querySelectorAll(".request-accept");

const rejectButtons =
    document.querySelectorAll(".request-reject");


acceptButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const row = button.closest("tr");

        if (!row) {
            return;
        }

        const status =
            row.querySelector(".request-status");

        if (status) {

            status.textContent = "Accepted";

            status.className =
                "status accepted request-status";

        }

        if (button.parentElement) {

            button.parentElement.innerHTML = `
                <button class="details-btn">
                    View Details
                </button>
            `;

        }

    });

});


rejectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const row = button.closest("tr");

        if (!row) {
            return;
        }

        const status =
            row.querySelector(".request-status");

        if (status) {

            status.textContent = "Rejected";

            status.className =
                "status rejected request-status";

        }

        if (button.parentElement) {

            button.parentElement.innerHTML = `
                <button class="details-btn">
                    View Details
                </button>
            `;

        }

    });

});


// ========================================
// EARNINGS
// ========================================

const viewEarnings =
    document.getElementById("viewEarnings");

if (viewEarnings) {

    viewEarnings.addEventListener("click", function () {

        alert(
            "Total Earnings: 12,000 FCFA\n" +
            "Completed Deliveries: 8\n" +
            "This Month: 24,000 FCFA"
        );

    });

}


// ========================================
// REQUEST DETAILS MODAL
// ========================================

const viewDetailsButtons =
    document.querySelectorAll(".view-details-btn");

const requestModal =
    document.getElementById("requestModal");

const closeModal =
    document.getElementById("closeModal");

const modalCancel =
    document.getElementById("modalCancel");

const modalCustomer =
    document.getElementById("modalCustomer");

const modalPhone =
    document.getElementById("modalPhone");

const modalArea =
    document.getElementById("modalArea");

const modalQuantity =
    document.getElementById("modalQuantity");

const modalTime =
    document.getElementById("modalTime");

const modalLocation =
    document.getElementById("modalLocation");


viewDetailsButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const row = button.closest("tr");

        if (!row || !requestModal) {
            return;
        }

        const customerName =
            row.querySelector(".customer strong");

        const customerPhone =
            row.querySelector(".customer span");

        const cells =
            row.querySelectorAll("td");


        if (customerName && modalCustomer) {
            modalCustomer.textContent =
                customerName.textContent;
        }

        if (customerPhone && modalPhone) {
            modalPhone.textContent =
                customerPhone.textContent;
        }

        if (modalArea && cells[1]) {
            modalArea.textContent =
                cells[1].textContent.trim();
        }

        if (modalQuantity && cells[2]) {
            modalQuantity.textContent =
                cells[2].textContent.trim();
        }

        if (modalTime && cells[3]) {
            modalTime.textContent =
                cells[3].textContent.trim();
        }

        if (modalLocation && cells[1]) {
            modalLocation.textContent =
                cells[1].textContent.trim() +
                ", Buea";
        }

        requestModal.classList.add("active");

    });

});


if (closeModal && requestModal) {

    closeModal.addEventListener("click", function () {

        requestModal.classList.remove("active");

    });

}


if (modalCancel && requestModal) {

    modalCancel.addEventListener("click", function () {

        requestModal.classList.remove("active");

    });

}


if (requestModal) {

    requestModal.addEventListener("click", function (event) {

        if (event.target === requestModal) {

            requestModal.classList.remove("active");

        }

    });

}


// ========================================
// SUPPLIER CHAT
// ========================================

const openChat =
    document.getElementById("openChat");

const closeChat =
    document.getElementById("closeChat");

const chatWindow =
    document.getElementById("chatWindow");

const chatInput =
    document.getElementById("chatInput");

const sendMessage =
    document.getElementById("sendMessage");

const chatMessages =
    document.getElementById("chatMessages");


if (openChat) {

    openChat.addEventListener("click", function () {

        if (chatWindow) {
            chatWindow.classList.add("active");
        }

        if (chatInput) {
            chatInput.focus();
        }

    });

}


if (closeChat) {

    closeChat.addEventListener("click", function () {

        if (chatWindow) {
            chatWindow.classList.remove("active");
        }

    });

}


function sendChatMessage() {

    if (!chatInput || !chatMessages) {
        return;
    }

    const messageText =
        chatInput.value.trim();

    if (messageText === "") {
        return;
    }

    const message =
        document.createElement("div");

    message.className =
        "message supplier-message";

    const messageContent =
        document.createElement("p");

    messageContent.textContent =
        messageText;

    const messageTime =
        document.createElement("span");

    const now = new Date();

    messageTime.textContent =
        now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });

    message.appendChild(messageContent);
    message.appendChild(messageTime);

    chatMessages.appendChild(message);

    chatInput.value = "";

    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}


if (sendMessage) {

    sendMessage.addEventListener(
        "click",
        sendChatMessage
    );

}


if (chatInput) {

    chatInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {
                sendChatMessage();
            }

        }
    );

}


// ========================================
// SERVICE AREAS
// ========================================

const editAreasBtn =
    document.getElementById("editAreasBtn");

const areasModal =
    document.getElementById("areasModal");

const closeAreas =
    document.getElementById("closeAreas");

const saveAreas =
    document.getElementById("saveAreas");


if (editAreasBtn && areasModal) {

    editAreasBtn.addEventListener(
        "click",
        function () {

            areasModal.classList.add("active");

        }
    );

}


if (closeAreas && areasModal) {

    closeAreas.addEventListener(
        "click",
        function () {

            areasModal.classList.remove("active");

        }
    );

}


if (saveAreas && areasModal) {

    saveAreas.addEventListener(
        "click",
        function () {

            areasModal.classList.remove("active");

            alert(
                "Service areas updated successfully."
            );

        }
    );

}


// ========================================
// SUPPLIER LOGOUT
// ========================================

const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function () {

            const confirmLogout =
                confirm(
                    "Are you sure you want to logout?"
                );

            if (confirmLogout) {

                window.location.href =
                    "supplier-login.html";

            }

        }
    );

}


// ========================================
// SUPPLIER REGISTRATION
// ========================================

const registrationForm =
    document.getElementById(
        "supplierRegistrationForm"
    );

if (registrationForm) {

    registrationForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const fullName =
                document.getElementById("fullName").value.trim();

            const businessName =
                document.getElementById("businessName").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const serviceArea =
                document.getElementById("serviceArea").value;

            const password =
                document.getElementById("password").value;

            const confirmPassword =
                document.getElementById("confirmPassword").value;

            const terms =
                document.getElementById("terms");


            if (
                fullName === "" ||
                businessName === "" ||
                phone === "" ||
                email === "" ||
                serviceArea === "" ||
                password === "" ||
                confirmPassword === ""
            ) {

                alert(
                    "Please complete all required fields."
                );

                return;
            }


            if (password.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;
            }


            if (password !== confirmPassword) {

                alert(
                    "Passwords do not match. Please enter the same password."
                );

                return;
            }


            if (terms && !terms.checked) {

                alert(
                    "Please agree to the supplier guidelines."
                );

                return;
            }


            const supplierAccount = {

                fullName: fullName,

                businessName: businessName,

                phone: phone,

                email: email,

                serviceArea: serviceArea,

                password: password

            };


            localStorage.setItem(
                "bueaWaterSupplier",
                JSON.stringify(supplierAccount)
            );


            alert(
                "Supplier account created successfully!"
            );


            window.location.href =
                "supplier-login.html";

        }
    );

}


// ========================================
// WATER REQUEST FORM
// ========================================

const waterRequestForm =
    document.getElementById(
        "waterRequestForm"
    );

if (waterRequestForm) {

    waterRequestForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const fullName =
                document.getElementById("fullName").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const area =
                document.getElementById("area").value;

            const quantity =
                document.getElementById("quantity").value;

            const address =
                document.getElementById("address").value.trim();

            const supplier =
                document.getElementById("supplier").value;


            if (
                fullName === "" ||
                phone === "" ||
                area === "" ||
                quantity === "" ||
                address === ""
            ) {

                alert(
                    "Please fill in all required fields."
                );

                return;
            }


            const areaSelect =
                document.getElementById("area");

            const quantitySelect =
                document.getElementById("quantity");

            const supplierSelect =
                document.getElementById("supplier");


            const areaName =
                areaSelect.options[
                    areaSelect.selectedIndex
                ].text;


            const quantityName =
                quantitySelect.options[
                    quantitySelect.selectedIndex
                ].text;


            const now = new Date();

            const requestTime =
                now.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                });


            let supplierName =
                "Any Available Supplier";


            if (
                supplierSelect &&
                supplier !== "any"
            ) {

                supplierName =
                    supplierSelect.options[
                        supplierSelect.selectedIndex
                    ].text;

            }


            alert(
                "Water Request Submitted Successfully! 💧\n\n" +
                "Customer: " + fullName + "\n" +
                "Area: " + areaName + "\n" +
                "Quantity: " + quantityName + "\n" +
                "Phone: " + phone + "\n" +
                "Supplier: " + supplierName + "\n" +
                "Request Time: " + requestTime
            );


            waterRequestForm.reset();

        }
    );

}


// ========================================
// WATER STATUS + MAP
// ========================================

// Map
let bueaMap = null;

// Store map markers
const waterMarkers = {};


// ========================================
// INITIAL WATER LOCATIONS
// ========================================

const waterLocations = [

    {
        name: "Molyko",
        coordinates: [4.152, 9.293],
        status: "Water Available",
        icon: "🟢"
    },

    {
        name: "Bonduma",
        coordinates: [4.157, 9.284],
        status: "No Water",
        icon: "🔴"
    },

    {
        name: "Great Soppo",
        coordinates: [4.145, 9.248],
        status: "Irregular",
        icon: "🟡"
    },

    {
        name: "Muea",
        coordinates: [4.134, 9.267],
        status: "Water Available",
        icon: "🟢"
    },

    {
        name: "Mile 16",
        coordinates: [4.125, 9.291],
        status: "Irregular",
        icon: "🟡"
    },

    {
        name: "Buea Town",
        coordinates: [4.155, 9.238],
        status: "Water Available",
        icon: "🟢"
    }

];


// ========================================
// GET MARKER COLOR
// ========================================

function getMarkerColor(status) {

    if (status === "Irregular") {
        return "orange";
    }

    if (status === "No Water") {
        return "red";
    }

    return "green";
}


// ========================================
// GET STATUS ICON
// ========================================

function getStatusIcon(status) {

    if (status === "Irregular") {
        return "🟡";
    }

    if (status === "No Water") {
        return "🔴";
    }

    return "🟢";
}


// ========================================
// CONVERT SAVED STATUS
// ========================================

function getReadableStatus(status) {

    if (status === "irregular") {
        return "Irregular";
    }

    if (status === "unavailable") {
        return "No Water";
    }

    return "Water Available";
}


// ========================================
// CREATE MAP
// ========================================

const waterMapElement =
    document.getElementById("waterMap");


if (
    waterMapElement &&
    typeof L !== "undefined"
) {

    bueaMap =
        L.map("waterMap").setView(
            [4.155, 9.231],
            13
        );


    // IMPORTANT:
    // Correct OpenStreetMap URL
    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
                "&copy; OpenStreetMap contributors",

            maxZoom: 19
        }
    ).addTo(bueaMap);


    // ========================================
    // CREATE WATER MARKERS
    // ========================================

    waterLocations.forEach(
        function (location) {

            // Check if there is a saved
            // community report
            const savedReport =
                localStorage.getItem(
                    "bueaWater_" + location.name
                );


            let currentStatus =
                location.status;


            if (savedReport) {

                try {

                    const report =
                        JSON.parse(savedReport);

                    if (report.status) {
                        currentStatus =
                            report.status;
                    }

                } catch (error) {

                    console.warn(
                        "Could not read saved report for " +
                        location.name
                    );

                }

            }


            const markerColor =
                getMarkerColor(currentStatus);


            const markerIcon =
                L.divIcon({

                    className:
                        "water-map-marker",

                    html: `
                        <div class="map-marker ${markerColor}">
                            💧
                        </div>
                    `,

                    iconSize: [40, 40],

                    iconAnchor: [20, 40],

                    popupAnchor: [0, -40]

                });


            const marker =
                L.marker(
                    location.coordinates,
                    {
                        icon: markerIcon
                    }
                ).addTo(bueaMap);


            // Save marker
            waterMarkers[
                location.name
            ] = marker;


            // Popup
            marker.bindPopup(

                "<strong>" +

                getStatusIcon(
                    currentStatus
                ) +

                " " +

                location.name +

                "</strong><br>" +

                currentStatus +

                "<br>" +

                "<small>" +

                (
                    savedReport
                        ? "Updated by community report"
                        : "Water status location"
                ) +

                "</small>"

            );

        }
    );

} else {

    console.warn(
        "Map cannot be loaded. Make sure #waterMap exists and Leaflet is included."
    );

}


// ========================================
// WATER STATUS REPORTING
// ========================================

const reportButtons =
    document.querySelectorAll(
        ".report-link"
    );

const reportModal =
    document.getElementById(
        "reportModal"
    );

const closeReport =
    document.getElementById(
        "closeReport"
    );

const reportArea =
    document.getElementById(
        "reportArea"
    );

const submitReport =
    document.getElementById(
        "submitReport"
    );

const reportOptions =
    document.querySelectorAll(
        ".report-option"
    );

let selectedStatus = "";


// ========================================
// OPEN REPORT MODAL
// ========================================

reportButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const card =
                    button.closest(
                        ".area-card"
                    );

                if (
                    !card ||
                    !reportModal ||
                    !reportArea
                ) {
                    return;
                }


                const areaName =
                    card.dataset.area;


                reportArea.textContent =
                    areaName;


                selectedStatus = "";


                reportOptions.forEach(
                    function (option) {

                        option.classList.remove(
                            "selected"
                        );

                    }
                );


                if (submitReport) {
                    submitReport.disabled = true;
                }


                reportModal.classList.add(
                    "active"
                );

            }
        );

    }
);


// ========================================
// SELECT WATER STATUS
// ========================================

reportOptions.forEach(
    function (option) {

        option.addEventListener(
            "click",
            function () {

                selectedStatus =
                    option.dataset.status;


                reportOptions.forEach(
                    function (item) {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


                option.classList.add(
                    "selected"
                );


                if (submitReport) {
                    submitReport.disabled = false;
                }

            }
        );

    }
);


// ========================================
// UPDATE WATER STATUS AREA CARD
// ========================================

function updateAreaCard(areaName, selectedStatus) {

    const cards =
        document.querySelectorAll(".area-card");


    cards.forEach(function (card) {

        const cardArea =
            (card.dataset.area || "").trim();


        // Make sure we update the correct area
        if (
            cardArea.toLowerCase() !==
            areaName.toLowerCase()
        ) {
            return;
        }


        // ========================================
        // UPDATE DATA STATUS
        // ========================================

        card.dataset.status =
            selectedStatus;


        // ========================================
        // FIND STATUS ELEMENT
        // ========================================

        const statusElement =
            card.querySelector(".status");


        const statusDot =
            card.querySelector(".status-dot");


        const updatedText =
            card.querySelector(".updated");


        // ========================================
        // REMOVE OLD STATUS CLASSES
        // ========================================

        if (statusElement) {

            statusElement.classList.remove(
                "available-status",
                "irregular-status",
                "unavailable-status",
                "available",
                "intermittent",
                "unavailable"
            );

        }


        if (statusDot) {

            statusDot.classList.remove(
                "green",
                "yellow",
                "red"
            );

        }


        // ========================================
        // WATER AVAILABLE
        // ========================================

        if (
            selectedStatus ===
            "available"
        ) {

            if (statusElement) {

                statusElement.textContent =
                    "Water Available";

                statusElement.classList.add(
                    "available-status"
                );

            }


            if (statusDot) {

                statusDot.classList.add(
                    "green"
                );

            }

        }


        // ========================================
        // IRREGULAR
        // ========================================

        else if (
            selectedStatus ===
            "irregular"
        ) {

            if (statusElement) {

                statusElement.textContent =
                    "Irregular";

                statusElement.classList.add(
                    "irregular-status"
                );

            }


            if (statusDot) {

                statusDot.classList.add(
                    "yellow"
                );

            }

        }


        // ========================================
        // NO WATER
        // ========================================

        else if (
            selectedStatus ===
            "unavailable"
        ) {

            if (statusElement) {

                statusElement.textContent =
                    "No Water";

                statusElement.classList.add(
                    "unavailable-status"
                );

            }


            if (statusDot) {

                statusDot.classList.add(
                    "red"
                );

            }

        }


        // ========================================
        // UPDATE TIME
        // ========================================

        if (updatedText) {

            updatedText.textContent =
                "Updated just now";

        }


        // ========================================
        // UPDATE REPORT INFORMATION
        // ========================================

        const reportFooter =
            card.querySelector(
                ".area-card-footer span"
            );


        if (reportFooter) {

            reportFooter.textContent =
                "👥0 Community report";

        }

    });

}


// ========================================
// UPDATE MAP MARKER
// ========================================

function updateMapMarker(
    areaName,
    selectedStatus
) {

    const marker =
        waterMarkers[areaName];


    if (
        !marker ||
        typeof L === "undefined"
    ) {
        return;
    }


    const newStatus =
        getReadableStatus(
            selectedStatus
        );


    const markerColor =
        getMarkerColor(
            newStatus
        );


    const statusIcon =
        getStatusIcon(
            newStatus
        );


    const newIcon =
        L.divIcon({

            className:
                "water-map-marker",

            html: `
                <div class="map-marker ${markerColor}">
                    💧
                </div>
            `,

            iconSize: [40, 40],

            iconAnchor: [20, 40],

            popupAnchor: [0, -40]

        });


    // Change marker
    marker.setIcon(
        newIcon
    );


    // Change popup
    marker.setPopupContent(

        "<strong>" +

        statusIcon +

        " " +

        areaName +

        "</strong><br>" +

        newStatus +

        "<br>" +

        "<small>" +

        "Updated by community report" +

        "</small>"

    );

}


// ========================================
// SUBMIT COMMUNITY REPORT
// ========================================

if (submitReport) {

    submitReport.addEventListener(
        "click",
        function () {

            if (
                selectedStatus === "" ||
                !reportArea
            ) {
                return;
            }


            const areaName =
                reportArea.textContent.trim();


            const newStatus =
                getReadableStatus(
                    selectedStatus
                );


            // ========================================
            // SAVE COMMUNITY REPORT
            // ========================================

            const reportData = {

                area: areaName,

                status: newStatus,

                selectedStatus:
                    selectedStatus,

                reportedAt:
                    new Date().toISOString()

            };


            localStorage.setItem(
                "bueaWater_" + areaName,
                JSON.stringify(reportData)
            );


            // ========================================
            // UPDATE CARD
            // ========================================

            updateAreaCard(
                areaName,
                selectedStatus
            );


            // ========================================
            // UPDATE MAP
            // ========================================

            updateMapMarker(
                areaName,
                selectedStatus
            );


            // ========================================
            // CONFIRMATION
            // ========================================

            alert(

                "Water Status Report Submitted! 💧\n\n" +

                "Area: " +
                areaName +

                "\n" +

                "Status: " +
                newStatus +

                "\n\n" +

                "The map and water status have been updated."

            );


            // Close modal
            if (reportModal) {

                reportModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


// ========================================
// LOAD SAVED COMMUNITY REPORTS
// ========================================

function loadSavedCommunityReports() {

    const cards =
        document.querySelectorAll(
            ".area-card"
        );


    cards.forEach(function (card) {

        const areaName =
            card.dataset.area;


        if (!areaName) {
            return;
        }


        const savedReport =
            localStorage.getItem(
                "bueaWater_" + areaName
            );


        if (!savedReport) {
            return;
        }


        try {

            const report =
                JSON.parse(savedReport);


            if (!report) {
                return;
            }


            let status =
                report.selectedStatus;


            // If selectedStatus is missing,
            // use the saved readable status.
            if (!status && report.status) {

                if (
                    report.status ===
                    "Water Available"
                ) {

                    status = "available";

                }

                else if (
                    report.status ===
                    "Irregular"
                ) {

                    status = "irregular";

                }

                else if (
                    report.status ===
                    "No Water"
                ) {

                    status = "unavailable";

                }

            }


            if (!status) {
                return;
            }


            // Update the card
            updateAreaCard(
                areaName,
                status
            );


        } catch (error) {

            console.error(
                "Could not load saved report for " +
                areaName,
                error
            );

        }

    });

}


// ========================================
// CLOSE REPORT MODAL
// ========================================

if (
    closeReport &&
    reportModal
) {

    closeReport.addEventListener(
        "click",
        function () {

            reportModal.classList.remove(
                "active"
            );

        }
    );

}


// ========================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ========================================

if (reportModal) {

    reportModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                reportModal
            ) {

                reportModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


// ========================================
// LOAD SAVED REPORTS AFTER PAGE LOAD
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadSavedCommunityReports();

    }
);


// ========================================
// FINAL MESSAGE
// ========================================

console.log(
    "Buea Water Connect JavaScript loaded successfully."
);
// ========================================
// BUEA WATER CONNECT
// SUPPLIER PAGE JAVASCRIPT
// ========================================

console.log("Supplier page JavaScript loaded.");


// ========================================
// SUPPLIER SEARCH AND AREA FILTER
// ========================================

const supplierSearch =
    document.getElementById("supplierSearch");

const supplierArea =
    document.getElementById("supplierArea");

const supplierCards =
    document.querySelectorAll(".supplier-card");



function filterSuppliers() {

    // If this is not the supplier page,
    // do nothing.
    if (!supplierSearch || !supplierArea) {
        return;
    }

    const searchValue =
        supplierSearch.value
            .toLowerCase()
            .trim();

    const selectedArea =
        supplierArea.value
            .toLowerCase()
            .trim();



    supplierCards.forEach(function (card) {

        const supplierName =
            card.querySelector("h2")
                ?.textContent
                .toLowerCase() || "";

        const supplierLocation =
            card.querySelector(".supplier-location")
                ?.textContent
                .toLowerCase() || "";



        // Check supplier name
        const matchesSearch =
            supplierName.includes(searchValue) ||
            supplierLocation.includes(searchValue);



        // Check selected area
        let matchesArea = true;



        if (selectedArea !== "all") {

            const areaName =
                selectedArea
                    .replace("-", " ")
                    .toLowerCase();



            matchesArea =
                supplierLocation.includes(areaName);

        }



        // Show / hide card
        if (matchesSearch && matchesArea) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });



    updateSupplierCount();

}



// ========================================
// UPDATE SUPPLIER COUNT
// ========================================

function updateSupplierCount() {

    if (!supplierSearch || !supplierArea) {
        return;
    }



    let visibleCount = 0;



    supplierCards.forEach(function (card) {

        if (card.style.display !== "none") {

            visibleCount++;

        }

    });



    const supplierInfo =
        document.querySelector(".supplier-info span");



    if (supplierInfo) {

        supplierInfo.textContent =
            visibleCount +
            (visibleCount === 1
                ? " supplier found in Buea"
                : " suppliers found in Buea");

    }

}



// Search while typing
if (supplierSearch) {

    supplierSearch.addEventListener(
        "input",
        filterSuppliers
    );

}



// Filter when area changes
if (supplierArea) {

    supplierArea.addEventListener(
        "change",
        filterSuppliers
    );

}



// ========================================
// REQUEST WATER BUTTONS
// ========================================

const requestButtons =
    document.querySelectorAll(".request-btn:not(.disabled)");



requestButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const card =
                button.closest(".supplier-card");



            if (!card) {
                return;
            }



            const supplierName =
                card.querySelector("h2")
                    ?.textContent
                    .trim() || "Water Supplier";



            const supplierLocation =
                card.querySelector(".supplier-location")
                    ?.textContent
                    .trim() || "Buea";



            const startingPrice =
                card.querySelector(
                    ".supplier-services div:last-child strong"
                )
                    ?.textContent
                    .trim() || "";



            // Save selected supplier
            localStorage.setItem(
                "selectedWaterSupplier",
                JSON.stringify({

                    name: supplierName,

                    location: supplierLocation,

                    price: startingPrice

                })
            );



            // Go to request page
            window.location.href =
                "request-water.html";

        }
    );

});



// ========================================
// BECOME A SUPPLIER BUTTON
// ========================================

const becomeSupplierButton =
    document.querySelector(
        ".become-supplier-btn"
    );



if (becomeSupplierButton) {

    becomeSupplierButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "supplier-register.html";

        }
    );

}



// ========================================
// REGISTER AS SUPPLIER CTA
// ========================================

const registerSupplierButton =
    document.querySelector(
        ".cta-button"
    );



if (registerSupplierButton) {

    registerSupplierButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "supplier-register.html";

        }
    );

}



// ========================================
// LOAD SELECTED SUPPLIER
// ON REQUEST WATER PAGE
// ========================================

const requestPageSupplier =
    document.getElementById("supplier");



if (requestPageSupplier) {

    const savedSupplier =
        localStorage.getItem(
            "selectedWaterSupplier"
        );



    if (savedSupplier) {

        try {

            const supplierData =
                JSON.parse(savedSupplier);



            const options =
                requestPageSupplier.options;



            for (
                let i = 0;
                i < options.length;
                i++
            ) {

                const optionText =
                    options[i]
                        .text
                        .toLowerCase();



                if (
                    optionText.includes(
                        supplierData.name
                            .toLowerCase()
                    )
                ) {

                    requestPageSupplier.selectedIndex =
                        i;

                    break;

                }

            }

        } catch (error) {

            console.error(
                "Could not load selected supplier:",
                error
            );

        }

    }

}



// ========================================
// CLEAR SELECTED SUPPLIER AFTER REQUEST
// ========================================

if (window.location.pathname.includes(
    "request-water.html"
)) {

    const waterRequestForm =
        document.getElementById(
            "waterRequestForm"
        );



    if (waterRequestForm) {

        waterRequestForm.addEventListener(
            "submit",
            function () {

                localStorage.removeItem(
                    "selectedWaterSupplier"
                );

            }
        );

    }

}



// ========================================
// SUPPLIER PAGE INITIALIZATION
// ========================================

if (
    supplierSearch &&
    supplierArea
) {

    filterSuppliers();

}



console.log(
    "Supplier page functionality ready."
);
// ========================================
// BUEA WATER CONNECT
// HOME PAGE JAVASCRIPT
// ========================================

console.log("Home page JavaScript loaded.");


// ========================================
// ANIMATED STATISTICS
// ========================================

const stats = document.querySelectorAll(".stat h2");

function animateCounter(element, target) {

    let current = 0;

    const duration = 1500;
    const steps = 60;
    const increment = target / steps;

    const counter = setInterval(function () {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(counter);

        }

        element.textContent =
            Math.floor(current) + "+";

    }, duration / steps);
}


// Only run on the home page
if (stats.length > 0) {

    animateCounter(stats[0], 6);
    animateCounter(stats[1], 25);
    animateCounter(stats[2], 6);

}


// ========================================
// HOME PAGE WATER STATUS
// ========================================

const homeStatusItems =
    document.querySelectorAll(".hero-card .status-item");


function getHomeWaterStatus(areaName) {

    const savedReport =
        localStorage.getItem(
            "bueaWater_" + areaName
        );

    if (!savedReport) {
        return null;
    }

    try {

        const report =
            JSON.parse(savedReport);

        return report.status || null;

    } catch (error) {

        console.warn(
            "Could not load water status for " +
            areaName
        );

        return null;
    }
}


// ========================================
// UPDATE HOME STATUS CARD
// ========================================

homeStatusItems.forEach(function (item) {

    const nameElement =
        item.querySelector("strong");

    const statusElement =
        item.querySelector(".status");

    if (!nameElement || !statusElement) {
        return;
    }

    const areaName =
        nameElement.textContent.trim();

    const savedStatus =
        getHomeWaterStatus(areaName);

    if (!savedStatus) {
        return;
    }


    // Remove old classes
    statusElement.classList.remove(
        "available",
        "unavailable",
        "intermittent"
    );


    // Available
    if (savedStatus === "Water Available") {

        statusElement.textContent =
            "Available";

        statusElement.classList.add(
            "available"
        );

    }


    // No Water
    else if (savedStatus === "No Water") {

        statusElement.textContent =
            "No Water";

        statusElement.classList.add(
            "unavailable"
        );

    }


    // Irregular
    else if (savedStatus === "Irregular") {

        statusElement.textContent =
            "Irregular";

        statusElement.classList.add(
            "intermittent"
        );

    }

});


// ========================================
// REPORT WATER PROBLEM
// ========================================

const reportProblemLink =
    document.querySelector(
        '.feature-card a[href="#"]'
    );

if (reportProblemLink) {

    reportProblemLink.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            window.location.href =
                "dashboard.html";

        }
    );

}


// ========================================
// HOME PAGE SUPPLIER CTA
// ========================================

const requestWaterButtons =
    document.querySelectorAll(
        'a[href="request-water.html"]'
    );


requestWaterButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            console.log(
                "Opening water request page..."
            );

        }
    );

});


// ========================================
// FINAL MESSAGE
// ========================================

console.log(
    "Home page functionality ready."
);
// ========================================
// BUEA WATER CONNECT
// HOME PAGE JAVASCRIPT
// ========================================

console.log("Buea Water Connect Home Page JavaScript loaded.");


// ========================================
// HOME PAGE STATISTICS
// ========================================

const homeStats =
    document.querySelectorAll(".stats .stat h2");


// Default project statistics
const defaultStatistics = {
    areas: 6,
    reports: 0,
    suppliers: 6
};


// Get saved water reports
function getHomeReportCount() {

    let reportCount = 0;

    const waterAreas = [
        "Molyko",
        "Bonduma",
        "Great Soppo",
        "Muea",
        "Mile 16",
        "Buea Town"
    ];

    waterAreas.forEach(function (area) {

        const savedReport =
            localStorage.getItem(
                "bueaWater_" + area
            );

        if (savedReport) {
            reportCount++;
        }

    });

    return reportCount;
}


// Update statistics
function updateHomeStatistics() {

    if (homeStats.length < 4) {
        return;
    }

    const reportCount =
        getHomeReportCount();


    // Areas Covered
    homeStats[0].textContent =
        defaultStatistics.areas + "+";


    // Water Reports
    homeStats[1].textContent =
        reportCount + "+";


    // Suppliers
    homeStats[2].textContent =
        defaultStatistics.suppliers + "+";


    // Platform Access
    homeStats[3].textContent =
        "24/7";

}


// Run statistics
updateHomeStatistics();



// ========================================
// HOME PAGE WATER AREAS
// ========================================

const homeWaterAreas = [
    "Molyko",
    "Bonduma",
    "Great Soppo",
    "Muea"
];


// ========================================
// GET HOME WATER STATUS
// ========================================

function getHomeWaterStatus(areaName) {

    const savedReport =
        localStorage.getItem(
            "bueaWater_" + areaName
        );


    // No saved report
    if (!savedReport) {

        return null;

    }


    try {

        return JSON.parse(savedReport);

    } catch (error) {

        console.warn(
            "Could not read water status for " +
            areaName,
            error
        );

        return null;

    }

}



// ========================================
// UPDATE HOME WATER STATUS
// ========================================

function updateHomeWaterStatus() {

    const statusItems =
        document.querySelectorAll(
            ".hero-card .status-item"
        );


    if (statusItems.length === 0) {
        return;
    }


    statusItems.forEach(function (item, index) {

        const areaName =
            homeWaterAreas[index];


        if (!areaName) {
            return;
        }


        const report =
            getHomeWaterStatus(areaName);


        // No community report
        if (!report) {
            return;
        }


        const statusElement =
            item.querySelector(".status");


        const timeElement =
            item.querySelector("small");


        if (!statusElement) {
            return;
        }


        // ========================================
        // WATER AVAILABLE
        // ========================================

        if (
            report.selectedStatus ===
            "available"
        ) {

            statusElement.textContent =
                "Available";


            statusElement.className =
                "status available";

        }


        // ========================================
        // IRREGULAR
        // ========================================

        else if (
            report.selectedStatus ===
            "irregular"
        ) {

            statusElement.textContent =
                "Irregular";


            // Keep existing CSS class
            // from your index.css
            statusElement.className =
                "status intermittent";

        }


        // ========================================
        // NO WATER
        // ========================================

        else if (
            report.selectedStatus ===
            "unavailable"
        ) {

            statusElement.textContent =
                "No Water";


            statusElement.className =
                "status unavailable";

        }


        // ========================================
        // UPDATE TIME
        // ========================================

        if (timeElement) {

            if (report.reportedAt) {

                const reportDate =
                    new Date(
                        report.reportedAt
                    );


                const currentTime =
                    new Date();


                const difference =
                    Math.floor(
                        (
                            currentTime -
                            reportDate
                        ) / 60000
                    );


                if (difference <= 0) {

                    timeElement.textContent =
                        "Updated just now";

                }

                else if (difference === 1) {

                    timeElement.textContent =
                        "Updated 1 min ago";

                }

                else {

                    timeElement.textContent =
                        "Updated " +
                        difference +
                        " mins ago";

                }

            }

            else {

                timeElement.textContent =
                    "Updated just now";

            }

        }

    });

}



// Run water status update
updateHomeWaterStatus();



// ========================================
// LIVE STATUS INDICATOR
// ========================================

const liveIndicator =
    document.querySelector(
        ".hero-card .live"
    );


if (liveIndicator) {

    setInterval(function () {

        liveIndicator.classList.toggle(
            "live-active"
        );

    }, 1000);

}



// ========================================
// REPORT WATER PROBLEM
// ========================================

const ReportProblemLink =
    document.querySelector(
        '.feature-card:nth-child(2) a'
    );


if (reportProblemLink) {

    reportProblemLink.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            window.location.href =
                "dashboard.html";

        }
    );

}



// ========================================
// CHECK WATER STATUS BUTTON
// ========================================

const checkWaterButton =
    document.querySelector(
        '.hero-buttons a[href="dashboard.html"]'
    );


if (checkWaterButton) {

    checkWaterButton.addEventListener(
        "click",
        function () {

            console.log(
                "Opening Water Status Dashboard..."
            );

        }
    );

}



// ========================================
// REQUEST WATER BUTTON
// ========================================

const heroRequestButton =
    document.querySelector(
        '.hero-buttons a[href="request-water.html"]'
    );


if (heroRequestButton) {

    heroRequestButton.addEventListener(
        "click",
        function () {

            console.log(
                "Opening Water Request page..."
            );

        }
    );

}



// ========================================
// CTA REQUEST WATER BUTTON
// ========================================

const ctaRequestButton =
    document.querySelector(
        '.cta a[href="request-water.html"]'
    );


if (ctaRequestButton) {

    ctaRequestButton.addEventListener(
        "click",
        function () {

            console.log(
                "Opening Water Request page..."
            );

        }
    );

}



// ========================================
// REFRESH HOME PAGE STATUS
// WHEN USER RETURNS TO TAB
// ========================================

document.addEventListener(
    "visibilitychange",
    function () {

        if (!document.hidden) {

            updateHomeWaterStatus();

            updateHomeStatistics();

        }

    }
);



// ========================================
// REFRESH HOME PAGE STATUS
// EVERY 30 SECONDS
// ========================================

setInterval(function () {

    updateHomeWaterStatus();

    updateHomeStatistics();

}, 30000);



// ========================================
// HOME PAGE LOADED
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateHomeWaterStatus();

        updateHomeStatistics();

        console.log(
            "Home page initialized successfully."
        );

    }
);