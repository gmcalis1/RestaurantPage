const makeContact = function(cnt){
    const managerDiv = document.createElement('div');

    const managerLine = document.createElement('h2');
    managerLine.textContent = 'Email manager: '
    managerDiv.appendChild(managerLine);
    const managerInput = document.createElement('input');
    managerDiv.appendChild(managerInput)

    const fanDiv = document.createElement('div');
    const freddLine = document.createElement('h2');
    freddLine.textContent = 'Freddy Email';
    const fanInput = document.createElement('input');
    fanDiv.appendChild(freddLine);
    fanDiv.appendChild(fanInput);


    cnt.appendChild(managerDiv);
    cnt.appendChild(fanDiv);
}


export default makeContact