document.getElementById('sixteen-memory').addEventListener("click", function() {

    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 200;

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const delieryCost = document.getElementById('delivery-cost').innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(delieryCost);
});