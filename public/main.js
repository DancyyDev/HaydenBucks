const finish = document.getElementsByClassName("fa-thumbs-up");
const trash = document.getElementsByClassName("fa-trash-o");

Array.from(finish).forEach(function(element) {
  element.addEventListener('click', function(){
      
    const orderId = this.parentNode.parentNode.id

    fetch('order-finish', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'orderId' : orderId
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true) // when console.log() comment out this line
    })
  });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){

        const orderId = this.parentNode.parentNode.id

        fetch('order-delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            '_id' : orderId
          })
        }).then(function (response) {
          window.location.reload() // when console.log() comment out this line
        })
      });
});
