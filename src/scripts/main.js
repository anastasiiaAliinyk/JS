'use strict';

import list from '../list.json';

function createRandomArray() {
  const randomString = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  const randomListLetters = randomString.split('');

  return randomListLetters;
}

function createSelect (letterList) {
  const select = document.createElement('select');
  select.className = 'select';

  const defaultOption = document.createElement('option');
  defaultOption.textContent = "Choose a letter";
  defaultOption.selected = true;
  defaultOption.disabled = true;

  select.append(defaultOption);

  letterList.map(letter => {
    const option = document.createElement('option');
    option.textContent = letter;

    select.append(option);
  })

  return select;
}

const namesList = document.createElement('ul');
namesList.className = 'list';

const select = createSelect(createRandomArray());
select.addEventListener('change', (event) => {
  namesList.textContent = '';

  list.forEach((item) => {
    if (item.name[0].toLowerCase() === event.target.value) {
      const li = document.createElement('li');
      li.textContent = item.name;

      namesList.append(li);
    }
  });
});

document.body.append(select);
document.body.append(namesList);
