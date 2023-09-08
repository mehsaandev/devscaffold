

 const navbar= (data) =>{
  return (
  `<div>
   ${data.nav_links.map(item=>{
    return `<li>
       <a href="${item.url}/">${item.label}</a>
     </li>`
   }).join('')}
   <div>
   ${data.actions.map(item=>{
    return ` <button >${item.label}</button>`
   }).join('')}
  
   </div>
  </div>`
  );
}

module.exports = {navbar}