export default callback => {
	// connect to a database if needed, then pass it to `callback`:
	callback();
}

export const configDb ={
    'secret': 'toilahoi',
    url:'mongodb://vkhoi:Thatvuhai7595@ds053449.mlab.com:53449/portfilio'
}
