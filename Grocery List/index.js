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
}
class ListItem{

    static addItem(){
        const add = document.querySelector("#add-items");
        add.addEventListener('click', (e)=>{
            e.preventDefault();
           const groceryItem = document.querySelector("#grocery-items").value;
           if(ListItem.checkInput(groceryItem)){
             GroceryList.addItems(groceryItem);
             ListItem.renderItem(GroceryList.getItem());
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
    GroceryList.list.splice(0)
    renderList();
})
//deleting editing sinlge item
document.querySelector('.list-items').addEventListener('click', (e)=>{
    const currentBtn = e.target;
    if(currentBtn.classList.contains('edit')){
        
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

