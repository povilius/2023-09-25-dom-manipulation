let content = document.querySelector('#content')

let container = document.createElement('div')
container.classList.add('container')
content.append(container)

let contentWrapper = document.createElement('div')
contentWrapper.classList.add('content-wrapper')
container.append(contentWrapper)

let shopsWrapper = document.createElement('div')
shopsWrapper.classList.add('shops-wrapper')
contentWrapper.append(shopsWrapper)

let sectionTitle = document.createElement('h2')
sectionTitle.classList.add('section-title')
sectionTitle.textContent = 'Find us'
shopsWrapper.append(sectionTitle)

let shopsList = document.createElement('div')
shopsList.classList.add('shops-list')
shopsWrapper.append(shopsList)

let shopItem = document.createElement('div')
shopItem.classList.add('shop-item')
shopsList.append(shopItem)

let shopTitle = document.createElement('h3')
shopTitle.textContent = 'Parduotuvė 1'
shopTitle.classList.add('shop-title')
shopItem.append(shopTitle)

let shopContactsList = document.createElement('ul')
shopContactsList.classList.add('shop-contacts-list')
shopItem.append(shopContactsList)

let shopContactsItem1 = document.createElement('li')
shopContactsItem1.classList.add('shop-contacts-item')
shopContactsList.append(shopContactsItem1)

let shopContactsItemTitle1 = document.createElement('span')
shopContactsItemTitle1.classList.add('shop-contacts-item-title')
shopContactsItemTitle1.textContent = 'Phone: '
shopContactsItem1.append(shopContactsItemTitle1)

let phoneNumber = document.createElement('a')
phoneNumber.href = 'tel:+37056456464'
phoneNumber.textContent = '+37056456464'
shopContactsItem1.append(phoneNumber)

let shopContactsItem2 = document.createElement('li')
shopContactsItem2.classList.add('shop-contacts-item')
shopContactsList.append(shopContactsItem2)

let shopContactsItemTitle2 = document.createElement('span')
shopContactsItemTitle2.classList.add('shop-contacts-item-title')
shopContactsItemTitle2.textContent = 'Email: '
shopContactsItem2.append(shopContactsItemTitle2)

let mail = document.createElement('a')
mail.href = 'mailto:info@parduotuve1.lt'
mail.textContent = 'info@parduotuve1.lt'
shopContactsItem2.append(mail)

let shopContactsItem3 = document.createElement('li')
shopContactsItem3.classList.add('shop-contacts-item')
shopContactsList.append(shopContactsItem3)

let shopContactsItemTitle3 = document.createElement('span')
shopContactsItemTitle3.classList.add('shop-contacts-item-title')
shopContactsItemTitle3.textContent = 'Address: '
shopContactsItem3.append(shopContactsItemTitle3)

let address = document.createElement('a')
address.href = 'https://goo.gl/maps/A8Ab54baVhs8wHxA7'
address.target = '_blank'
address.textContent = 'Palangos g., 44260 Kaunas'
shopContactsItem3.append(address)

shopItem = document.createElement('div')
shopItem.classList.add('shop-item')
shopsList.append(shopItem)

shopTitle = document.createElement('h3')
shopTitle.textContent = 'Parduotuvė 1'
shopTitle.classList.add('shop-title')
shopItem.append(shopTitle)

shopContactsList = document.createElement('ul')
shopContactsList.classList.add('shop-contacts-list')
shopItem.append(shopContactsList)

shopContactsItem1 = document.createElement('li')
shopContactsItem1.classList.add('shop-contacts-item')
shopContactsList.append(shopContactsItem1)

shopContactsItemTitle1 = document.createElement('span')
shopContactsItemTitle1.classList.add('shop-contacts-item-title')
shopContactsItemTitle1.textContent = 'Phone: '
shopContactsItem1.append(shopContactsItemTitle1)

phoneNumber = document.createElement('a')
phoneNumber.href = 'tel:+37056456464'
phoneNumber.textContent = '+37056456464'
shopContactsItem1.append(phoneNumber)

shopContactsItem2 = document.createElement('li')
shopContactsItem2.classList.add('shop-contacts-item')
shopContactsList.append(shopContactsItem2)

shopContactsItemTitle2 = document.createElement('span')
shopContactsItemTitle2.classList.add('shop-contacts-item-title')
shopContactsItemTitle2.textContent = 'Email: '
shopContactsItem2.append(shopContactsItemTitle2)

mail = document.createElement('a')
mail.href = 'mailto:info@parduotuve1.lt'
mail.textContent = 'info@parduotuve1.lt'
shopContactsItem2.append(mail)

shopContactsItem3 = document.createElement('li')
shopContactsItem3.classList.add('shop-contacts-item')
shopContactsList.append(shopContactsItem3)

shopContactsItemTitle3 = document.createElement('span')
shopContactsItemTitle3.classList.add('shop-contacts-item-title')
shopContactsItemTitle3.textContent = 'Address: '
shopContactsItem3.append(shopContactsItemTitle3)

address = document.createElement('a')
address.href = 'https://goo.gl/maps/A8Ab54baVhs8wHxA7'
address.target = '_blank'
address.textContent = 'Palangos g., 44260 Kaunas'
shopContactsItem3.append(address)

shopItem = document.createElement('div')
shopItem.classList.add('shop-item')
shopsList.append(shopItem)

shopTitle = document.createElement('h3')
shopTitle.textContent = 'Parduotuvė 1'
shopTitle.classList.add('shop-title')
shopItem.append(shopTitle)

shopContactsList = document.createElement('ul')
shopContactsList.classList.add('shop-contacts-list')
shopItem.append(shopContactsList)

shopContactsItem1 = document.createElement('li')
shopContactsItem1.classList.add('shop-contacts-item')
shopContactsList.append(shopContactsItem1)

shopContactsItemTitle1 = document.createElement('span')
shopContactsItemTitle1.classList.add('shop-contacts-item-title')
shopContactsItemTitle1.textContent = 'Phone: '
shopContactsItem1.append(shopContactsItemTitle1)

phoneNumber = document.createElement('a')
phoneNumber.href = 'tel:+37056456464'
phoneNumber.textContent = '+37056456464'
shopContactsItem1.append(phoneNumber)

shopContactsItem2 = document.createElement('li')
shopContactsItem2.classList.add('shop-contacts-item')
shopContactsList.append(shopContactsItem2)

shopContactsItemTitle2 = document.createElement('span')
shopContactsItemTitle2.classList.add('shop-contacts-item-title')
shopContactsItemTitle2.textContent = 'Email: '
shopContactsItem2.append(shopContactsItemTitle2)

mail = document.createElement('a')
mail.href = 'mailto:info@parduotuve1.lt'
mail.textContent = 'info@parduotuve1.lt'
shopContactsItem2.append(mail)

shopContactsItem3 = document.createElement('li')
shopContactsItem3.classList.add('shop-contacts-item')
shopContactsList.append(shopContactsItem3)

shopContactsItemTitle3 = document.createElement('span')
shopContactsItemTitle3.classList.add('shop-contacts-item-title')
shopContactsItemTitle3.textContent = 'Address: '
shopContactsItem3.append(shopContactsItemTitle3)

address = document.createElement('a')
address.href = 'https://goo.gl/maps/A8Ab54baVhs8wHxA7'
address.target = '_blank'
address.textContent = 'Palangos g., 44260 Kaunas'
shopContactsItem3.append(address)

shopItem = document.createElement('div')
shopItem.classList.add('shop-item')
shopsList.append(shopItem)

shopTitle = document.createElement('h3')
shopTitle.textContent = 'Parduotuvė 1'
shopTitle.classList.add('shop-title')
shopItem.append(shopTitle)

shopContactsList = document.createElement('ul')
shopContactsList.classList.add('shop-contacts-list')
shopItem.append(shopContactsList)

shopContactsItem1 = document.createElement('li')
shopContactsItem1.classList.add('shop-contacts-item')
shopContactsList.append(shopContactsItem1)

shopContactsItemTitle1 = document.createElement('span')
shopContactsItemTitle1.classList.add('shop-contacts-item-title')
shopContactsItemTitle1.textContent = 'Phone: '
shopContactsItem1.append(shopContactsItemTitle1)

phoneNumber = document.createElement('a')
phoneNumber.href = 'tel:+37056456464'
phoneNumber.textContent = '+37056456464'
shopContactsItem1.append(phoneNumber)

shopContactsItem2 = document.createElement('li')
shopContactsItem2.classList.add('shop-contacts-item')
shopContactsList.append(shopContactsItem2)

shopContactsItemTitle2 = document.createElement('span')
shopContactsItemTitle2.classList.add('shop-contacts-item-title')
shopContactsItemTitle2.textContent = 'Email: '
shopContactsItem2.append(shopContactsItemTitle2)

mail = document.createElement('a')
mail.href = 'mailto:info@parduotuve1.lt'
mail.textContent = 'info@parduotuve1.lt'
shopContactsItem2.append(mail)

shopContactsItem3 = document.createElement('li')
shopContactsItem3.classList.add('shop-contacts-item')
shopContactsList.append(shopContactsItem3)

shopContactsItemTitle3 = document.createElement('span')
shopContactsItemTitle3.classList.add('shop-contacts-item-title')
shopContactsItemTitle3.textContent = 'Address: '
shopContactsItem3.append(shopContactsItemTitle3)

address = document.createElement('a')
address.href = 'https://goo.gl/maps/A8Ab54baVhs8wHxA7'
address.target = '_blank'
address.textContent = 'Palangos g., 44260 Kaunas'
shopContactsItem3.append(address)

let mapWrapper = document.createElement('div')
mapWrapper.classList.add('map-wrapper')
contentWrapper.append(mapWrapper)

let map = document.createElement ('iframe')
map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.2571139955185!2d25.275993977057606!3d54.687502973536034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd941026577939%3A0x89d4e2969a37fe31!2sGedimino%20pr.%2015%2C%2001103%20Vilnius!5e0!3m2!1slt!2slt!4v1695666454881!5m2!1slt!2slt'
mapWrapper.append(map)