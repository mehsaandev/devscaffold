import React, { useEffect } from 'react'
import grapesjs from 'grapesjs';
import { useSelector } from 'react-redux';
import { compileTree } from '../../../utilities/componentCompiler';


const GrapesLayout = () => {
    const pageObj = useSelector(state => state.pageDesign.page)



useEffect(() => {
    const editor = grapesjs.init({
        // Indicate where to init the editor. You can also pass an HTMLElement
        container: '#gjs',
        // Get the content for the canvas directly from the element
        // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
        components: `${compileTree(pageObj)}`,
        fromElement: false,
        // Size of the editor
        height: '100vh',
        width: 'auto',
        // Disable the storage manager for the moment
        storageManager: false,
        // Avoid any default panel
        panels: { defaults: [] },
        deviceManager: {
            default: 'Desktop',
        },
        
        blockManager: {
            appendTo: '.myblocks',
            blocks: [
              {
                id: 'image',
                label: 'Image',
                media: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
                </svg>`,
                // Use `image` component
                content: { type: 'image' },
                // The component `image` is activatable (shows the Asset Manager).
                // We want to activate it once dropped in the canvas.
                activate: true,
                // select: true, // Default with `activate: true`
              }
            ],
          }
      });


      const panelManager = editor.Panels.addPanel({});
}, [])




    return (
        <div id="gjs" className='w-full '>
            <h1>Hello World Component!</h1>
        </div>
    )
}

export default GrapesLayout