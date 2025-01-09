document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    const data = `البريد الإلكتروني: ${email}\nكلمة المرور: ${password}\n\n`;
    
    saveDataToFile(data);
    document.getElementById("message").textContent = "تم حفظ البيانات بنجاح!";
    document.getElementById("registerForm").reset();
  }
});

function saveDataToFile(data) {
  const blob = new Blob([data], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "user_data.txt";
  a.click();

  URL.revokeObjectURL(url);
}