const emailStep=document.getElementById("emailStep");
const passwordStep=document.getElementById("passwordStep");
const email=document.getElementById("email");
const password=document.getElementById("password");
const account=document.getElementById("account");
const status=document.getElementById("status");
const progress=document.getElementById("progress");
const loadingDots = document.getElementById("loadingDots");

function msg(text,type=""){status.textContent=text;status.className="status "+type}

function transition(from,to,leave,enter){
  from.classList.remove("enter-next","enter-back");
  from.classList.add(leave);
  setTimeout(()=>{
    from.classList.remove("active",leave);
    to.classList.add("active",enter);
    setTimeout(()=>to.classList.remove(enter),480);
  },280);
}




document.getElementById("next").onclick = () => {
    msg("");

    const username = document.getElementById("email").value.trim();

    if (username === "") {
        alert("Please enter your Student ID.");
        return;
    }

    // إنشاء الحساب تلقائيًا
    const account = username ;

    // حفظ المعلومات في المتصفح
    localStorage.setItem("studentName", username);
    localStorage.setItem("studentAccount", account);

    // تشغيل النقاط
    loadingDots.classList.add("active");
    progress.style.width = "100%";

    // الانتظار القصير ثم الانتقال
    setTimeout(() => {
        loadingDots.classList.remove("active");
        window.location.href = "portal.html";
    }, 1000);
};




email.addEventListener("keydown",e=>{if(e.key==="Enter")document.getElementById("next").click()});





