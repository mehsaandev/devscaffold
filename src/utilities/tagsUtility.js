export const tagMapHandler = (tag) => {
    if (tag === "div") {
        return "Section";
    }
    else if (tag === "h1") {
        return "Heading1";
    }
    else if (tag === "h2") {
        return "Heading2";
    }
    else if (tag === "h3") {
        return "Heading3";
    }
    else if (tag === "h4") {
        return "Heading4";
    }
    else if (tag === "h5") {
        return "Heading5";
    }
    else if (tag === "h6") {
        return "Heading6";
    }
    else if (tag === "p") {
        return "Paragraph";
    }
    else if (tag === "img") {
        return "Image";
    }
    else if (tag === "a") {
        return "Link";
    }
    else if (tag === "ul") {
        return "List";
    }
    else if (tag === "li") {
        return "List Item";
    }
    else if (tag === "span") {
        return "Span";
    }
    else if (tag === "button") {
        return "Button";
    }
    else if (tag === "input") {
        return "Input";
    }
    else if (tag === "label") {
        return "Label";
    }
    else if (tag === "form") {
        return "Form";
    }
    else if (tag === "textarea") {
        return "Textarea";
    }
    else if (tag === "select") {
        return "Select";
    }
    else if (tag === "option") {
        return "Option";
    }
    else if (tag === "nav") {
        return "Navbar";
    }
    else if (tag === "header") {
        return "Header";
    }
    else if (tag === "footer") {
        return "Footer";
    }
    else if (tag === "main") {
        return "Main";
    }
    else if (tag === "aside") {
        return "Aside";
    }
    else if (tag === "section") {
        return "Section";
    }
    else if (tag === "article") {
        return "Article";
    }
    else if (tag === "i") {
        return "Icon";
    }
    else if (tag === "svg") {
        return "SVG";
    }
    else if (tag === "path") {
        return "Path";
    }
    else if (tag === "video") {
        return "Video";
    }
    else if (tag === "audio") {
        return "Audio";
    }
    else if (tag === "iframe") {
        return "Iframe";
    }
    else if (tag === "canvas") {
        return "Canvas";
    }
    else if (tag === "table") {
        return "Table";
    }
    else if (tag === "thead") {
        return "Table Head";
    }
    else if (tag === "tbody") {
        return "Table Body";
    }
    else if (tag === "th") {
        return "Table Header";
    }
    else if (tag === "tr") {
        return "Table Row";
    }
    else if (tag === "td") {
        return "Table Data";
    }
    else if (tag === "caption") {
        return "Table Caption";
    }
    else if (tag === "figure") {
        return "Figure";
    }
    else if (tag === "figcaption") {
        return "Figcaption";
    }
    else if (tag === "blockquote") {
        return "Blockquote";
    }
    else if (tag === "cite") {
        return "Cite";
    }
    else if (tag === "q") {
        return "Quote";
    }
    else if (tag === "time") {
        return "Time";
    }
    else if (tag === "small") {
        return "Small";
    }
    else {
        return tag;
    }


}



export const tagsWithProperties = [
    {
        id: 1,
        tag: "a",
        properties: [
            {
                name: "href",
                type: "text",
                value: ""
            },
            {
                name: "target",
                type: "text",
                value: ""
            },
            {
                name: "rel",
                type: "text",
                value: ""
            },
            {
                name: "download",
                type: "text",
                value: ""
            }
        ],
    },
    {
        id: 2,
        tag: "img",
        properties: [
            {
                name: "src",
                type: "text",
                value: ""
            },
            {
                name: "alt",
                type: "text",
                value: ""
            },
            {
                name: "width",
                type: "number",
                value: ""
            },
            {
                name: "height",
                type: "number",
                value: ""
            }
        ]
    },
    {
        id: 3,
        tag: "input",
        properties: [
            {
                name: "type",
                type: "text",
                value: ""
            },
            {
                name: "name",
                type: "text",
                value: ""
            },
            {
                name: "value",
                type: "text",
                value: ""
            },
            {
                name: "placeholder",
                type: "text",
                value: ""
            },
            {
                name: "required",
                type: "text",
                value: ""
            },
            {
                name: "disabled",
                type: "text",
                value: ""
            },
            {
                name: "readonly",
                type: "text",
                value: ""
            },
            {
                name: "checked",
                type: "text",
                value: ""
            },
            {
                name: "multiple",
                type: "text",
                value: ""
            },
            {
                name: "min",
                type: "text",
                value: ""
            },
            {
                name: "max",
                type: "text",
                value: ""
            },
            {
                name: "step",
                type: "text",
                value: ""
            },
            {
                name: "minlength",
                type: "text",
                value: ""
            },
            {
                name: "maxlength",
                type: "text",
                value: ""
            },
            {
                name: "size",
                type: "text",
                value: ""
            },]
    },
    {
        id: 4,
        tag: "label",
        properties: [
            {
                name: "for",
                type: "text",
                value: ""
            },
        ]
    },
    {
        id: 5,
        tag: "textarea",
        properties: [
            {
                name: "name",
                type: "text",
                value: ""
            },
            {
                name: "placeholder",
                type: "text",
                value: ""
            },
            {
                name: "required",
                type: "text",
                value: ""
            },
            {
                name: "disabled",
                type: "text",
                value: ""
            },
            {
                name: "readonly",
                type: "text",
                value: ""
            },
            {
                name: "minlength",
                type: "text",
                value: ""
            },
            {
                name: "maxlength",
                type: "text",
                value: ""
            },
            {
                name: "rows",
                type: "text",
                value: ""
            },
            {
                name: "cols",
                type: "text",
                value: ""
            },
        ]
    },
    {
        id: 6,
        tag: "select",
        properties: [
            {
                name: "name",
                type: "text",
                value: ""
            },
            {
                name: "required",
                type: "text",
                value: ""
            },
            {
                name: "disabled",
                type: "text",
                value: ""
            },
            {
                name: "multiple",
                type: "text",
                value: ""
            },
            {
                name: "size",
                type: "text",
                value: ""
            },
        ]
    },
    {
        id: 7,
        tag: "option",
        properties: [
            {
                name: "value",
                type: "text",
                value: ""
            },
            {
                name: "selected",
                type: "text",
                value: ""
            },
            {
                name: "disabled",
                type: "text",
                value: ""
            },
        ]
    },
    {
        id: 8,
        tag: "video",
        properties: [
            {
                name: "src",
                type: "text",
                value: ""
            },
            {
                name: "autoplay",
                type: "text",
                value: ""
            },
            {
                name: "controls",
                type: "text",
                value: ""
            },
        ]
    },
    {
        id: 9,
        tag: 'div',
        properties: [
           
        ]
    },
    {
        id: 10,
        tag: 'h1',
        properties: [
        ]
    },
    {
        id: 11,
        tag: 'h2',
        properties: [
           
        ]
    },
    {
        id: 12,
        tag: 'h3',
        properties: [
        ]
    },
    {
        id: 13,
        tag: 'h4',
        properties: [
           
        ]
    },
    {
        id: 14,
        tag: 'h5',
        properties: [
           
        ]
    },
    {
        id: 15,
        tag: 'h6',
        properties: [
           
        ]
    },

    {
        id: 16,
        tag: 'p',
        properties: [
           
        ]
    },
    {
        id: 17,
        tag: 'span',
        properties: [
           
        ]
    },
    {
        id: 18,
        tag: 'button',
        properties: [
            {
                name: "type",
                type: "text",
                value: ""
            },
            {
                name: "name",
                type: "text",
                value: ""
            },
            {
                name: "value",
                type: "text",
                value: ""
            },
            {
                name: "disabled",
                type: "text",
                value: ""
            },
        ],
    },
    {
        id: 19,
        tag: 'ul',
        properties: [
           
        ]
    },
    {
        id: 20,
        tag: 'li',
        properties: [
            {
                name: "value",
                type: "text",
                value: ""
            },
        ]
    },
    {
        id: 21,
        tag: 'form',
        properties: [
            {
                name: "action",
                type: "text",
                value: ""
            },
            {
                name: "method",
                type: "text",
                value: ""
            },
            {
                name: "target",
                type: "text",
                value: ""
            },
            {
                name: "enctype",
                type: "text",
                value: ""
            },
            {
                name: "name",
                type: "text",
                value: ""
            },
            {
                name: "novalidate",
                type: "text",
                value: ""
            },
            {
                name: "autocomplete",
                type: "text",
                value: ""
            },
        ]
    },
    {
        id: 22,
        tag: 'nav',
        properties: [
           
        ]
    },
    {
        id: 23,
        tag: 'header',
        properties: [
           
        ]
    },
    {
        id: 24,
        tag: 'footer',
        properties: [
           
        ]
    },
    {
        id: 25,
        tag: 'main',
        properties: [
           
        ]
    },
    {
        id: 26,
        tag: 'aside',
        properties: [
           
        ]
    },
    {
        id: 27,
        tag: 'section',
        properties: [
           
        ]
    },

]



export const textBasedTags = [
    "p",
    "span",
    "button",
    "a",
    "label",
    "option",
    "li",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
]