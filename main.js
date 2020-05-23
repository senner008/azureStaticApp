;(async () => {
    const message = await fetch('/api/HttpTrigger?name=Buller').then(res => res.text());

    document.querySelector('p').innerHTML = message;
})();