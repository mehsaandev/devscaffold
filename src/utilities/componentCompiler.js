const elementsTree = [{
    name: "h1",
    chilldren: [
        {
            name: "p",
            properties: {
                text: "Hello",
            },
        },
    ],
    classes: "bg-black text-white",

}]



function generateHTML(element) {
    let html = `<${element.name} ${element.classes ? `class="${element.classes}"` : ''}>`;

    if (element.chilldren) {
        element.chilldren.forEach(child => {
            html += generateHTML(child);
        });
    }

    if (element.properties && element.properties.text) {
        html += element.properties.text;
    }

    html += `</${element.name}>`;

    return html;
}




export const compileTree = (elementsTree) => {

    let combinedElement = "";
    elementsTree.forEach(element => {
        combinedElement += generateHTML(element);
    });

    return combinedElement;
}

