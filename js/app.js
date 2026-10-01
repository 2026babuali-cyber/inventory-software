// ==============================
// PAGE NAVIGATION
// ==============================

function showPage(pageId) {

    document.querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active-page");
        });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }

    const titles = {
        dashboard: "Dashboard",
        party: "Party Master",
        product: "Product / Stock",
        purchase: "Purchase",
        sales: "Sales",
        payment: "Payment",
        receipt: "Receipt",
        stock: "Stock Register",
        ledger: "Party Ledger",
        reports: "Reports"
    };

    document.getElementById("pageTitle").textContent =
        titles[pageId] || "Dashboard";

    document.querySelectorAll("nav a")
        .forEach(link => link.classList.remove("active"));

    if (window.innerWidth <= 768) {
        document.getElementById("sidebar")
            .classList.remove("open");
    }
}


// ==============================
// MOBILE SIDEBAR
// ==============================

function toggleSidebar() {

    document
        .getElementById("sidebar")
        .classList.toggle("open");

}


// ==============================
// MODAL
// ==============================

function openModal(id) {

    document
        .getElementById(id)
        .classList.add("show");

}


function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("show");

}


// ==============================
// PARTY DATA
// ==============================

let parties = [];

function addParty() {

    const name =
        document.getElementById("partyName").value.trim();

    const mobile =
        document.getElementById("partyMobile").value.trim();

    const gst =
        document.getElementById("partyGST").value.trim();

    const address =
        document.getElementById("partyAddress").value.trim();

    const balance =
        Number(document.getElementById("partyBalance").value) || 0;


    if (!name) {

        alert("Please enter party name.");

        return;
    }


    const party = {

        id: Date.now(),

        name: name,

        mobile: mobile,

        gstin: gst,

        address: address,

        balance: balance

    };


    parties.push(party);

    renderParties();

    closeModal("partyModal");

    clearPartyForm();

}


function renderParties() {

    const table =
        document.getElementById("partyTable");

    if (parties.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="5" class="empty">
                    No parties added
                </td>
            </tr>
        `;

        return;
    }


    table.innerHTML = parties.map(party => `

        <tr>

            <td>${escapeHTML(party.name)}</td>

            <td>${escapeHTML(party.mobile)}</td>

            <td>${escapeHTML(party.gstin)}</td>

            <td>${escapeHTML(party.address)}</td>

            <td>₹ ${party.balance.toFixed(2)}</td>

        </tr>

    `).join("");

}


function clearPartyForm() {

    document.getElementById("partyName").value = "";

    document.getElementById("partyMobile").value = "";

    document.getElementById("partyGST").value = "";

    document.getElementById("partyAddress").value = "";

    document.getElementById("partyBalance").value = "0";

}


// ==============================
// SECURITY HELPER
// ==============================

function escapeHTML(value) {

    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}
