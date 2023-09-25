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