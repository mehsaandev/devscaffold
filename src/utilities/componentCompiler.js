

const elementsTree = [{
    name: "h1",
    children: [
        {
            name: "p",
            properties: {
                text: "Hello",
            },
        },
    ],
    classes: "bg-black text-white",

}]



export function generateHTML(element) {
    let html = `<${element.name} ${element.id ? `id="${element.id}"` : ''}  ${element.classes ? `class="${element.classes}"` : ''}>`;

    if (element.children) {
        element.children.forEach(child => {
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
    console.log(elementsTree)

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
    if (element.children)
    {
        console.log("moving to child")
        updateElementClasses(element.children, id, newClasses);
    }

    return element;
}



export const updateElementClasses = (elementsTree, elementId, updatedClasses) => {
    const response = elementsTree.map(element => {
        return searchAndUpdateClass(element, elementId, updatedClasses);
    });
    return response;
}



function searchAndUpdateElement(element, id, updatedElement) {
    if (element.id === id) {
        console.log("found")
        element.classes = updatedElement.classes;
        if(updatedElement?.properties){
            element.properties = updatedElement.properties;
        }
        return element;
    }
    if (element.children )
    {
        console.log("moving to child")
        updateElement(element.children, id, updatedElement);
    }
    

    return element;
}



export const updateElement = (elementsTree, elementId, updatedElement) => {
    
    const response = elementsTree.map(element => {
        return searchAndUpdateElement(element, elementId, updatedElement);
    });
    return response;
}








function searchAndAddNewElement(element, id, newElement) {
    if (element.id === id) {
        console.log("found")
        console.log(element)
        if(element?.children){
            console.log(newElement)
            element.children =  [...element.children,newElement] //updatedElement.properties;
        }
        else{
            // element = {...element,children:[newElement]}
            console.log(element)
            
            return {...element,children:[newElement]}
        }
        return element;
    }
    if (element.children )
    {
        console.log("moving to child")
        addNewElement(element.children, id, newElement);
    }
    

    return element;
}


export const addNewElement = (elementsTree, elementId, newElement) => {
    
    const response = elementsTree.map(element => {
        return searchAndAddNewElement(element, elementId, newElement);
    });

    console.log(response)
    return response;
}




function searchAndDeleteElement(element, id) {
    if (element.id === id) {
        console.log(element.properties.text)
        return;
    }
    if (element.children )
    {
        deleteElement(element.children, id);
    }
    
    return element;
}


export const deleteElement = (elementsTree, elementId) => {
    
    const response = elementsTree.map(element => {
        return searchAndDeleteElement(element, elementId);
    });

    console.log(response)
    return response;
}



const htmlToJSON = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const body = doc.body;
    const children = body.children;
    const response = [];
    for (let i = 0; i < children.length; i++) {
        const element = children[i];
        const elementObject = {
            name: element.tagName.toLowerCase(),
            classes: element.className,
            id: element.id,
            properties: {
                text: element.innerText,
            },
        };
        response.push(elementObject);
    }
    return response;
}