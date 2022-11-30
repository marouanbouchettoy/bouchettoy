const copyButtonLabel = "Copy Code";

// use a class selector if available
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {

    // only add button if browser supports Clipboard API
    if (navigator.clipboard) {
        let button = document.createElement("button");
        button.idName += "btn1";

        button.innerText = copyButtonLabel;
        block.appendChild(button);

        button.addEventListener("click", async () => {
            await copyCode(block, button);
        });

    }
    
});

async function copyCode(block, button) {
    let code = block.querySelector("code");
    let text = code.innerText;

    await navigator.clipboard.writeText(text);

    // visual feedback that task is completed
    button.innerText = "Code Copied";

    setTimeout(() => {
        button.innerText = copyButtonLabel;
    }, 700);
}
function moveToCarte(el) {
    var clone = el.cloneNode(true);
    total += parseFloat(el.children[3].textContent);
    clone.id = clone.id + "" + iddd;
    clone.children[5].id = clone.children[5].id + "" + iddd;
    iddd++;
    document.getElementById("order").appendChild(clone);
    document.getElementById("total-price").textContent = total;
}