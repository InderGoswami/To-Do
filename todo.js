const input = document.querySelector("input");
const list = document.querySelector("ol");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // This prevents the form from submitting
 
    console.log("Form submission prevented.");
});


input.addEventListener("change",()=>{
    let val=input.value;
    let li=document.createElement("li");
    li.innerText=val;
    list.appendChild(li);
    console.log(val);
    input.value="";
    let delBtn=document.createElement("button");
    delBtn.classList.add("button");
    delBtn.innerText="Delete";
    delBtn.style.display="inline";
    li.insertAdjacentElement("afterend",delBtn);
    delBtn.addEventListener("click",()=>{
    list.removeChild(delBtn.previousElementSibling);
    list.removeChild(delBtn);
})

});

  






