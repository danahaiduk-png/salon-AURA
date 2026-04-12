const form = document.getElementById("bookingForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    await fetch("/booking", {
        method: "POST",
        body: data
    });

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

    form.reset();
});