const createElem = (t, p, html, cla)=>{
	const elem = document.createElement(t);
	elem.innerHTML = html;
	elem.classList.add(cla);
	return p.appendChild(elem);
}

export default createElem