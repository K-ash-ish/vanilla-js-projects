class GroceryList{
    static getItem(){
        return JSON.parse(localStorage.getItem("items") || "[]");
    }
    static addItems(item){
        const items = GroceryList.getItem();
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
    }
    static removeItem(target){
        const items = GroceryList.getItem();
        target = target.trim();
        items.forEach ((item, index)=>{
            if(item == target){
                items.splice(index, 1);
            }
        })
        localStorage.setItem("items", JSON.stringify(items));
    }
    static removeAllItems(){
        const items = GroceryList.getItem();
        items.splice(0);
        localStorage.setItem("items", JSON.stringify(items))
        
    }
    static editItems(target){
        const items = GroceryList.getItem();
        document.querySelector("#edit-items").addEventListener('click', (e)=>{
            e.preventDefault();
            const newVal = document.querySelector("#edit-grocery-items").value;
            items.forEach ( (item, index)=>{
               if(item == target){
                   items.splice(index,1,newVal)
               }
            })
            localStorage.setItem("items", JSON.stringify(items))
            ListItem.renderItem(GroceryList.getItem());
            if(document.querySelector("#edit-form-show")){
                document.querySelector("#edit-form-show").setAttribute('id', 'edit-form')
            }
        })
    }
}
class ListItem{

    static addItem(){
        const add = document.querySelector("#add-items");
        add.addEventListener('click', (e)=>{
            e.preventDefault();
           if(add.value != "Edit Item"){
            const groceryItem = document.querySelector("#grocery-items").value;
            if(ListItem.checkInput(groceryItem)){
              GroceryList.addItems(groceryItem);
              ListItem.renderItem(GroceryList.getItem());
            }
           } 
           
            ListItem.resetField()
        });
    }
    static resetField(){
        document.querySelector('form').reset();
    }
    static renderItem(list){
        const listItem = document.querySelector('.list-items');
        const newItems= list.map((item) =>{
            return`
            <li class="item">
            <p class="items">${item}</p>
            <div class="button-container">
                <i class="fa-solid fa-pen-to-square edit edit-btn"></i>
                <i class="fa-solid fa-trash-can delete delete-btn"></i>
            </div>
        </li>
            `
        }).join("")
        listItem.innerHTML = newItems;
    }

    static checkInput(item){
        const banner = document.querySelector('.banner');
        if(item == "" || item == " "){
            banner.textContent = "Please enter a value"
            banner.classList.add('error-banner-show')
            setTimeout(() => {
                banner.classList.remove('error-banner-show')
            }, 1500);
            return false;
        }
        else{
            banner.textContent = "Added successfully"
            banner.classList.add('success-banner-show')
            setTimeout(() => {
                banner.classList.remove('success-banner-show')
            }, 1500);
            return true;
        }
    }
    static removeItem(target){
        target.parentElement.parentElement.remove();
    }
}
//delting all items
document.querySelector('.clear-all').addEventListener('click', ()=>{
    const list = GroceryList.getItem();
    list.splice(0)
    GroceryList.removeAllItems();
    ListItem.renderItem(GroceryList.getItem())
})
//deleting editing sinlge item
document.querySelector('.list-items').addEventListener('click', (e)=>{
    const currentBtn = e.target;
    if(currentBtn.classList.contains('edit')){
        const newField = document.getElementById("edit-form");
        if(newField.getAttribute("id","edit-form")){
            newField.setAttribute('id',"edit-form-show");
        }
        
        GroceryList.editItems(currentBtn.parentElement.parentElement.textContent.trim())
    }
    if(currentBtn.classList.contains('delete')){
        ListItem.removeItem(currentBtn)
        GroceryList.removeItem(currentBtn.parentElement.parentElement.textContent)
    }
})

//rednering list items
function renderList(){
    ListItem.renderItem(GroceryList.getItem())
    ListItem.addItem();
    
}
renderList();


