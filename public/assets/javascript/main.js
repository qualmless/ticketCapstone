const ticketTitle = document.getElementById("ticketTitle");

deleteTicket = (id) => {
    fetch('/tickets', {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                _id: id
            })
        })
        .then(response => {
            window.location.reload();
        })
        .catch(error => console.error(error))
}

createTicket = () => {
    fetch('/tickets', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ticketTitle: ticketTitle.value
        })
    })
    .then(response => {
        window.open("/tickets", "_self");
    })
    .catch(error => console.error(error))    
}

doUpdate = () => {
    let ticketId = document.getElementById("showId").innerHTML;
    let ticketTitle = document.getElementById("ticketTitle").value;
    fetch('/tickets', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: ticketId,
                ticketTitle: ticketTitle
            })
        })
        .then(response => {
            window.open("/tickets", "_self");
            
        })
        .catch(error => console.error(error))  
}
showUpdate = (id,title) => {
        var inputPrompt = prompt("Ticket Title:", title);
        if (inputPrompt == null || inputPrompt == "") {
        } else {
        }
}