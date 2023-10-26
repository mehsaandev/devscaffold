

export const createComponent = (componentName,content) =>{
    return `
    import react from 'react'\n
    const ${componentName} = () => {
        return (${content})
    }

    export default ${componentName}
    `
}