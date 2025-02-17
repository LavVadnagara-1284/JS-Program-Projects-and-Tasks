let result = document.getElementById('result');
for(let i = 0; i <= 20; i++) {
    if(i % 2 == 0) {
        result.innerHTML +=`${i} is even<br>`;
        console.log(`${i} is even`);
    }
}