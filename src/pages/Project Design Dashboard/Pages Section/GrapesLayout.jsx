import React, { useEffect } from 'react'
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-blocks-basic';

import { useSelector } from 'react-redux';
import { compileTree } from '../../../utilities/componentCompiler';
import { getPage } from '../../../actions/pages';


const GrapesLayout = (loading) => {
    const pageObj = useSelector(state => state.pageDesign.page)

    useEffect(() => {
        getPage()
    }, [])


    console.log(pageObj)


    useEffect(() => {
        const editor = grapesjs.init({
            // Indicate where to init the editor. You can also pass an HTMLElement
            container: '#gjs',
            // Get the content for the canvas directly from the element
            // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
            components: `${compileTree(pageObj)}`,
            // components: `<h1>Hello World sdfsdfsd!</h1>`,
            fromElement: false,
            // Size of the editor
            // height: '100vh',
            width: 'auto',
            // Disable the storage manager for the moment
            storageManager: true,
            // Avoid any default panel
            // panels: { defaults: [] },
            plugins: [plugin],
            // pluginsOpts: {
            //     [plugin]: { /* options */ }

            // },


            blockManager: {
                appendTo: '#blocks',
                blocks: [
                    //     {
                    //         id: 'image',
                    //         label: 'Image',
                    //         media: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    //     <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
                    // </svg>`,
                    //         // Use `image` component
                    //         content: { type: 'image' },
                    //         // The component `image` is activatable (shows the Asset Manager).
                    //         // We want to activate it once dropped in the canvas.
                    //         activate: true,
                    //         // select: true, // Default with `activate: true`
                    //     }

                    {
                        id: 'section', // id is mandatory
                        label: '<b>Section</b>', // You can use HTML/SVG inside labels
                        attributes: { class: 'gjs-block-section' },
                        content: `<section>
                      <h1>This is a simple title</h1>
                      <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
                    </section>`,
                    }, {
                        id: 'text',
                        label: 'Text',
                        content: '<div data-gjs-type="text">Insert your text here</div>',
                    }, {
                        id: 'image',
                        label: 'Image',
                        // Select the component once it's dropped
                        select: true,
                        // You can pass components as a JSON instead of a simple HTML string,
                        // in this case we also use a defined component type `image`
                        content: { type: 'image' },
                        // This triggers `active` event on dropped components and the `image`
                        // reacts by opening the AssetManager
                        activate: true,
                    }
                    , {
                        id: 'button',
                        label: 'Button',
                        // Select the component once it's dropped
                        select: true,
                        // You can pass components as a JSON instead of a simple HTML string,
                        // in this case we also use a defined component type `image`
                        content: { type: 'button' },
                        // This triggers `active` event on dropped components and the `image`
                        // reacts by opening the AssetManager
                        activate: true,
                    },
                    
                ],
            },

            styleManager: {
                appendTo: '#styles-container',
                sectors: [{
                    name: 'Dimension',
                    open: false,
                    // Use built-in properties
                    buildProps: ['width', 'min-height', 'padding','font-size','background-color','color','border-radius','border','box-shadow','text-align','font-family','font-weight','line-height','letter-spacing','text-transform','text-decoration','text-shadow','word-spacing','white-space','overflow','text-overflow','text-indent','vertical-align','text-align','text-justify'],
                    // Use `properties` to define/override single property
                    properties: [
                        {
                            // Type of the input,
                            // options: integer | radio | select | color | slider | file | composite | stack
                            type: 'integer',
                            name: 'The width', // Label for the property
                            property: 'width', // CSS property (if buildProps contains it will be extended)
                            units: ['px', '%'], // Units, available only for 'integer' types
                            defaults: 'auto', // Default value
                            min: 0, // Min value, available only for 'integer' types
                        }
                    ]
                }, {
                    name: 'Extra',
                    open: false,
                    buildProps: ['background-color', 'box-shadow', 'custom-prop'],
                    properties: [
                        {
                            id: 'custom-prop',
                            name: 'Custom Label',
                            property: 'font-size',
                            type: 'select',
                            defaults: '32px',
                            // List of options, available only for 'select' and 'radio'  types
                            options: [
                                { value: '12px', name: 'Tiny' },
                                { value: '18px', name: 'Medium' },
                                { value: '32px', name: 'Big' },
                            ],
                        }
                    ]
                }]
            },

            deviceManager: {
                devices: [{
                    name: 'Desktop',
                    width: '', // default size
                }, {
                    name: 'Mobile',
                    width: '320px', // this value will be used on canvas width
                    widthMedia: '480px', // this value will be used in CSS @media
                }]
            },
            panels: {
                defaults: [
                    // ...
                    {
                        id: 'panel-devices',
                        el: '.panel__devices',
                        buttons: [{
                            id: 'device-desktop',
                            label: 'D',
                            command: 'set-device-desktop',
                            active: true,
                            togglable: false,
                        }, {
                            id: 'device-mobile',
                            label: 'M',
                            command: 'set-device-mobile',
                            togglable: false,
                        }],
                    }
                ]
            },
        


    });
    

    // Define commands
    editor.Commands.add('show-layers', {
        getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
        getLayersEl(row) { return row.querySelector('#layers-container') },

        run(editor, sender) {
            const lmEl = this.getLayersEl(this.getRowEl(editor));
            lmEl.style.display = '';
        },
        stop(editor, sender) {
            const lmEl = this.getLayersEl(this.getRowEl(editor));
            lmEl.style.display = 'none';
        },
    });
    
    editor.Commands.add('show-styles', {
        getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
        getStyleEl(row) { return row.querySelector('#styles-container') },

        run(editor, sender) {
            const smEl = this.getStyleEl(this.getRowEl(editor));
            smEl.style.display = '';
        },
        stop(editor, sender) {
            const smEl = this.getStyleEl(this.getRowEl(editor));
            smEl.style.display = 'none';
        },
    });
    // Commands
    editor.Commands.add('set-device-desktop', {
        run: editor => editor.setDevice('Desktop')
    });
    editor.Commands.add('set-device-mobile', {
        run: editor => editor.setDevice('Mobile')
    });

    // const panelManager = editor.Panels.addPanel({});
}, [loading])




return (
    <>
        {/* {loading ?  (<h1>Loading...</h1>) : ( */}

        <div id="gjs" className='w-full '>

        </div>
        {/* )} */}
    </>
)
}

export default GrapesLayout