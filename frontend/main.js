//console.log('Hello World!');
// console.log(document.getElementsByName('field1'));
link = "http://localhost:9000"

let loginForm = document.getElementById("loginForm")

const getData = async () => {
	try {
        const res = await axios.get(`${link}/stockinfo`)
        console.log(res.data);
        for (let i =0; i<res.data.allItems.length; i++){
            addItem(res.data.allItems[i])
        }
    } catch (error) {
        console.log(error)
    }
};

const postData = async (item_details) => {
	try{
        const res = await axios.post(`${link}/stockinfo`, item_details)
        addItem(res.data.newItemDetail)
    } catch(error) {
        console.log(error)
    }
};

const putData = async (item_details_s, item_details_c) => {
    try {
        const res = await axios.put(`${link}/stockinfo/${item_details_s.id}`, item_details_c);
        addItem(item_details_s)
    } catch(error){
        console.log(error)
    }
};

const onClick = async (num,item_details) => {
    try {
        let item_details_update = {
            item_name: item_details.item_name,
            item_description : item_details.item_description,
            price : item_details.price,
            quantity: item_details.quantity - num
        }

        item_details.quantity = item_details.quantity - num

        putData(item_details, item_details_update)
        
    } catch(error) {
        console.log(error)
    }
};

window.addEventListener("DOMContentLoaded", () => {
    getData()
})

function save(event) {
    
    event.preventDefault()

    candyName = event.target.field1.value
    description = event.target.field2.value
    price = event.target.field3.value
    quantity = event.target.field4.value

    let item_details = {
        Candy: candyName,
        Description : description,
        Price : price,
        Quantity: quantity
    };

    postData(item_details)
  }

function addItem(item_details) {
    
    const parentElem = document.getElementById('items')
    const childElem = document.createElement('li')
    childElem.textContent = item_details.item_name + ' - ' + item_details.item_description + ' - ' + item_details.price + ' - ' + item_details.quantity;

    const Buy1 = document.createElement('input')
    Buy1.type = 'button'
    Buy1.value = 'Buy 1'
    Buy1.onclick = () => {
        parentElem.removeChild(childElem)
        onClick(1, item_details) 
    }

    const Buy2 = document.createElement('input')
    Buy2.type = 'button'
    Buy2.value = 'Buy 2'
    Buy2.onclick = () => {
        parentElem.removeChild(childElem)
        onClick(2, item_details)
    }

    const Buy3 = document.createElement('input')
    Buy3.type = 'button'
    Buy3.value = 'Buy 3'
    Buy3.onclick = () => {
        parentElem.removeChild(childElem)
        onClick(3, item_details)
    }
    
    childElem.appendChild(Buy1)
    childElem.appendChild(Buy2)
    childElem.appendChild(Buy3)
    parentElem.appendChild(childElem)
  
}

