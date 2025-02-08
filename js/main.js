document.addEventListener("DOMContentLoaded", function () {
    // تحميل الإعدادات المحفوظة
    document.getElementById("username").value = localStorage.getItem("username") || "";
    document.getElementById("language").value = localStorage.getItem("language") || "nl";

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        document.getElementById("darkModeToggle").checked = true;
    }
});

// 🌙 تبديل الوضع الداكن
document.getElementById("darkModeToggle").addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", this.checked);
});

// 💾 حفظ الإعدادات
function saveSettings() {
    const username = document.getElementById("username").value;
    const language = document.getElementById("language").value;
    
    localStorage.setItem("username", username);
    localStorage.setItem("language", language);

    alert("Instellingen opgeslagen! ✅");
}

// 🔄 تغيير اللغة في الوقت الفعلي
document.getElementById("language").addEventListener("change", function () {
    alert("Taal gewijzigd naar " + this.value);
});

document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) {
        window.location.href = "login.html";
    } else {
        document.getElementById("username").textContent = user.name;
    }

    document.getElementById("logoutBtn").addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
    showReminder();
    renderCharts();
});

// حفظ المهام في LocalStorage
function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#task-list input").forEach((task, index) => {
        tasks[index] = task.checked;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Taken opgeslagen!");
}

// تحميل المهام المحفوظة
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    document.querySelectorAll("#task-list input").forEach((task, index) => {
        task.checked = tasks[index] || false;
    });
}

// تذكير المستخدم إذا لم يكمل المهام
function showReminder() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let pendingTasks = tasks.includes(false);
    if (pendingTasks) {
        document.getElementById("reminderAlert").style.display = "block";
    }
}

// رسم الرسوم البيانية
function renderCharts() {
    const ctx1 = document.getElementById('glucoseChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
            datasets: [{
                label: 'Bloedglucose',
                data: [5.4, 5.6, 5.7, 6.1, 5.8, 5.9, 6.0],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2
            }]
        }
    });

    const ctx2 = document.getElementById('fev1Chart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [{
                label: 'FEV1 (%)',
                data: [80, 82, 81, 83],
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                borderWidth: 1
            }]
        }
    });
}
