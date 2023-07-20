// create a class
class Grocery {
    // declare properties and corresponding data type
    name: string;
    quantity: number;
    price: number;

    // add a constructor
    constructor(n: string, q: number, p: number){
        this.name = n;
        this.quantity = q;
        this.price = p;
    }
}

// create a list of grocery items
// new keyword is used to inititalise objects
let list_of_items = [
    new Grocery("milk", 3, 10),
    new Grocery("bread", 6, 25),
    new Grocery("egg", 11, 10)
]

removeItem(item, index) {
    console.log("Removing Item - ", item);
    const toast = this.toastCrtl.create({
        message: 'Removing item' + item.name + "...",
        duration: 3000
    });
toast.present();
this.items.splice(index, 1);

}
addItem() {
    console.log("Adding item");
}

showPrompt() {
    const prompt = this.alertCrtl.create(){
    title: 'Add item',
    message: 'Please enter item',
    inputs: [
    {
        name: 'Name',
        placeholder: 'Name',
    },
    {
        name: 'Quantity',
        placeholder: 'Quantity',
    }
    ],
    buttons: [
        {
            test: 'Cancel',
            handler: data => {
                console.log('Cancel clicked');
            }
        },
    {
            text: 'Save',
            handler: data => {
                console.log('Save clicked', item);
                this.items.push(item);
            }

    }
    ]
    }
    });
    prompt.present();


// access the html element with id app
const ele = document.getElementById("app");

// create a <p> element for each item in the grocery list and
// append it to the html page
list_of_items.forEach(e => {
    const p = document.createElement("p");
    p.textContent = `${e.name} ${e.quantity} -> $${e.price}`;
    ele.appendChild(p);
});

