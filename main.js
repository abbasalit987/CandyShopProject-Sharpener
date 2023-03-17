//console.log('Hello World!');
// console.log(document.getElementsByName('field1'));
link = "https://crudcrud.com/api/b77bc415263e48dd8451c3661de3893e"

let loginForm = document.getElementById("loginForm");

window.addEventListener("DOMContentLoaded", () => {
    axios.get(`${link}/stockinfo`)
        .then((resp) => {
            console.log(resp)
            for (let i =0; i<resp.data.length; i++){
                addUser(resp.data[i])
            }
        })
        .catch((err) => console.log(err))
})

function save(event) {
    
    event.preventDefault();

    candyName = event.target.field1.value;
    description = event.target.field2.value;
    price = event.target.field3.value;
    quantity = event.target.field4.value;

    let user_details = {
        Candy: candyName,
        Description : description,
        Price : price,
        Quantity: quantity
    };

    //user_details_serialized = JSON.stringify(user_details);
    post_function(user_details);
  }

  function post_function(user_details){
    axios.post(`${link}/stockinfo`, user_details)
    .then((response) => {
        console.log(response);
        addUser(response.data);
    })
    .catch((err) => {
        console.log(err);
    })
  }

  function addUser(user_details) {
    
    const parentElem = document.getElementById('users');
    const childElem = document.createElement('li');
    childElem.textContent = user_details.Candy + ' - ' + user_details.Description + ' - ' + user_details.Price + ' - ' + user_details.Quantity;

    const Buy1 = document.createElement('input');
    Buy1.type = 'button'
    Buy1.value = 'Buy 1'
    Buy1.onclick = () => {
         let user_details_update = {
             //_id : user_details._id,
             Candy: user_details.Candy,
             Description : user_details.Description,
             Price : user_details.Price,
             Quantity: user_details.Quantity -1
         };
        console.log(user_details._id)
        console.log(user_details_update._id)
        user_details.Quantity = user_details.Quantity-1;
        console.log(user_details.Quantity);
        axios.put(`${link}/stockinfo/${user_details._id}`,user_details_update)
            .then((resp) => {
                parentElem.removeChild(childElem);
                console.log(resp.data);
                axios.get(`${link}/stockinfo`)
                    .then((resp) => {
                    console.log(resp)
                    //for (let i =0; i<resp.data.length; i++){
                    //addUser(resp.data[i])
                 //}
                })
                addUser(user_details);
            })
        }

    const Buy2 = document.createElement('input');
    Buy2.type = 'button'
    Buy2.value = 'Buy 2'
    Buy2.onclick = () => {
        let user_details_update = {
            //_id : user_details._id,
            Candy: user_details.Candy,
            Description : user_details.Description,
            Price : user_details.Price,
            Quantity: user_details.Quantity -2
        };
       console.log(user_details._id)
       console.log(user_details_update._id)
       user_details.Quantity = user_details.Quantity-2;
       console.log(user_details.Quantity);
       axios.put(`${link}/stockinfo/${user_details._id}`,user_details_update)
           .then((resp) => {
               parentElem.removeChild(childElem);
               console.log(resp.data);
               axios.get(`${link}/stockinfo`)
                   .then((resp) => {
                   console.log(resp)
                   //for (let i =0; i<resp.data.length; i++){
                   //addUser(resp.data[i])
                //}
               })
               addUser(user_details);
           })
        }

        const Buy3 = document.createElement('input');
        Buy3.type = 'button'
        Buy3.value = 'Buy 3'
        Buy3.onclick = () => {
            let user_details_update = {
                //_id : user_details._id,
                Candy: user_details.Candy,
                Description : user_details.Description,
                Price : user_details.Price,
                Quantity: user_details.Quantity -3
            };
           console.log(user_details._id)
           console.log(user_details_update._id)
           user_details.Quantity = user_details.Quantity-3;
           console.log(user_details.Quantity);
           axios.put(`${link}/stockinfo/${user_details._id}`,user_details_update)
               .then((resp) => {
                   parentElem.removeChild(childElem);
                   console.log(resp.data);
                   axios.get(`${link}/stockinfo`)
                       .then((resp) => {
                       console.log(resp)
                       //for (let i =0; i<resp.data.length; i++){
                       //addUser(resp.data[i])
                    //}
                   })
                   addUser(user_details);
               })
            }
    
    childElem.appendChild(Buy1);
    childElem.appendChild(Buy2);
    childElem.appendChild(Buy3);
    parentElem.appendChild(childElem);
  
}

