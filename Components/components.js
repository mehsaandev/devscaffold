

const navbar = (data) => {
  return (
    `<>
    <nav style="background-color": "${data.properties.color}">
    <div>
    <a href="${data.logo.href}"><img src="${data.logo.source}" alt="${data.logo.alt}"/></a>
  </div>
  <div>
   ${data.nav_links.links.map(item => {
      return `<li>
       <a href="${item.url}/">${item.label}</a>
     </li>`
    }).join('')}
   <div>
   ${data.actions.map(item => {
      return ` <button >${item.label}</button>`
    }).join('')}
   </div>
  </div>
  </nav>
  <>`
  );
}

module.exports = { navbar }