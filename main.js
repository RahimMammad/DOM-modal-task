const fullBody = document.querySelector("body")
const mainModal = document.createElement("div")
const mainBtn = document.createElement("button")
const cancel = document.createElement("button")
const h1 = document.createElement("h1")
const p = document.createElement("p")


mainBtn.classList.add("btn")
mainModal.classList.add("modal-main-container")
cancel.classList.add("cancelButton")
mainModal.style.display = "none"


mainBtn.textContent = "Click Here"
mainBtn.style.cssText= "margin-left: 50px; margin-top: 50px; width: 100px; height: 30px;" 
cancel.textContent = "Cancel"
cancel.style.display = "none"
h1.textContent = "Modal Task"
p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel eaque fugit, excepturi necessitatibus consectetur hic facere est nam architecto consequuntur nihil maxime expedita sit dolorem doloremque accusamus saepe minima numquam ut enim cumque accusantium asperiores! Pariatur rem libero magni non, id provident consequatur iusto, eveniet alias hic vel maxime, dolores ipsum accusantium tenetur perspiciatis? Reiciendis quas totam nobis illo obcaecati ratione suscipit inventore similique nihil, porro, sunt, voluptatibus amet unde?"

mainBtn.addEventListener("click", () => {
    mainModal.style.cssText = " display: block; max-width: 600px; margin-left: auto; margin-right: auto; margin-top: 200px; height: 300px; border: none; box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; border-radius: 24px; padding: 20px;";
    cancel.style.display = "block"
});

cancel.addEventListener("click", () => {
    mainModal.style.display = "none"
});


fullBody.append(mainBtn)
fullBody.append(mainModal)
mainModal.append(cancel)
mainModal.append(h1)
mainModal.append(p)