function updatePrice(itemId, price) {
    document.getElementById(itemId).addEventListener("click", function() {

        const memoryCost = document.getElementById('memory-cost');
        memoryCost.innerText = price;

        const bestPrice = document.getElementById('best-price').innerText;
        const memoryPrice = document.getElementById('memory-cost').innerText;
        const storagePrice = document.getElementById('storage-cost').innerText;
        const delieryPrice = document.getElementById('delivery-cost').innerText;

        const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(delieryPrice);

        const totalPriceText = document.getElementById('total-price');
        totalPriceText.innerText = totalPrice.innerText;
        console.log(totalPrice)
    });
}

///--------------- ---------------///
document.getElementById('sixteen-memory').addEventListener("click", function() {

    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 200;

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const delieryPrice = document.getElementById('delivery-cost').innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(delieryPrice);

    const totalPriceText = document.getElementById('total-price');
    totalPriceText.innerText = totalPrice.innerText;
    console.log(totalPrice)
});

///------------  ------------///
document.getElementById('two-fifty-six-storage').addEventListener("click", function() {

    const storageCost = document.getElementById('storage-cost');
    storageCost.innerHTML = 200;
});