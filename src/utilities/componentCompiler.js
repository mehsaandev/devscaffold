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
    let html = `<${element.name} ${element.id ? `id="${element.id}"` : ''}  ${element.classes ? `class="${element.classes}"` : ''}>`;

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



function searchAndUpdateClass(element, id, newClasses) {
    if (element.id === id) {
        console.log("found")
        element.classes = newClasses;
        return element;
    }
    if (element.chilldren)
    {
        console.log("moving to child")
        updateElementClasses(element.chilldren, id, newClasses);
    }

    return element;
}



export const updateElementClasses = (elementsTree, elementId, updatedClasses) => {
    const response = elementsTree.map(element => {
        return searchAndUpdateClass(element, elementId, updatedClasses);
    });
    return response;
}