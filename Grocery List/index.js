//use classes
class Item{
    constructor(item){
        this.item = item;
    }
}

class GroceryList{
    static list  = ["eggs"];
}
class ListItem{
    addItem(){
        const add = document.querySelector("#add-items");
        add.addEventListener('click', (e)=>{
            e.preventDefault();
           const groceryItem = document.querySelector("#grocery-items").value;
           if(this.checkInput(groceryItem)){
             GroceryList.list.push(groceryItem);
             this.renderItem(GroceryList.list);
        }
        });
    }
    renderItem(list){
        const listItem = document.querySelector('.list-items');
        const newItems= list.map((item) =>{
            return`
            <li class="item">
            <p class="items">${item}</p>
            <div class="button-container">
                <button type="button" class="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
                <button type="button" class="delete-btn"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </li>
            `
        }).join("")
        listItem.innerHTML = newItems;
    }
    checkInput(item){
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
            console.log("asldfkj")
            banner.textContent = "Added successfully"
            banner.classList.add('success-banner-show')
            setTimeout(() => {
                banner.classList.remove('success-banner-show')
            }, 1500);
            return true;
        }
    }
}
//delting all items
document.querySelector('.clear-all').addEventListener('click', ()=>{
    console.log(GroceryList.list)
})
function renderList(){
    const item1 = new ListItem ;
    item1.renderItem(GroceryList.list)
    item1.addItem();
}
renderList();

