//console.log('Hello World!');
// console.log(document.getElementsByName('field1'));
link = "https://crudcrud.com/api/c9e11ddc98c94c14afa8b02cbcfcf4f7"

let loginForm = document.getElementById("loginForm")

const getData = async () => {
	try {
        const res = await axios.get(`${link}/stockinfo`)
        for (let i =0; i<res.data.length; i++){
            addUser(res.data[i])
        }
    } catch (error) {
        console.log(error)
    }
};

const postData = async (user_details) => {
	try{
        const res = await axios.post(`${link}/stockinfo`, user_details)
        addUser(res.data)
    } catch(error) {
        console.log(error)
    }
};

const putData = async (user_details_s, user_details_c) => {
    try {
        const res = await axios.put(`${link}/stockinfo/${user_details_s._id}`, user_details_c)
        addUser(user_details_s)
    } catch(error){
        console.log(error)
    }
};

const onClick = async (num,user_details) => {
    try {
        let user_details_update = {
            Candy: user_details.Candy,
            Description : user_details.Description,
            Price : user_details.Price,
            Quantity: user_details.Quantity - num
        }

        user_details.Quantity = user_details.Quantity - num

        putData(user_details, user_details_update)
        
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

    let user_details = {
        Candy: candyName,
        Description : description,
        Price : price,
        Quantity: quantity
    };

    postData(user_details)
  }

function addUser(user_details) {
    
    const parentElem = document.getElementById('users')
    const childElem = document.createElement('li')
    childElem.textContent = user_details.Candy + ' - ' + user_details.Description + ' - ' + user_details.Price + ' - ' + user_details.Quantity

    const Buy1 = document.createElement('input')
    Buy1.type = 'button'
    Buy1.value = 'Buy 1'
    Buy1.onclick = () => {
        parentElem.removeChild(childElem)
        onClick(1, user_details) 
    }

    const Buy2 = document.createElement('input')
    Buy2.type = 'button'
    Buy2.value = 'Buy 2'
    Buy2.onclick = () => {
        parentElem.removeChild(childElem)
        onClick(2, user_details)
    }

    const Buy3 = document.createElement('input')
    Buy3.type = 'button'
    Buy3.value = 'Buy 3'
    Buy3.onclick = () => {
        parentElem.removeChild(childElem)
        onClick(3, user_details)
    }
    
    childElem.appendChild(Buy1)
    childElem.appendChild(Buy2)
    childElem.appendChild(Buy3)
    parentElem.appendChild(childElem)
  
}

