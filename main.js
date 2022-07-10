function checkboxesOnChange() {
  let multiSelect = document.getElementById('selectOption');
  let multiSelectOption = multiSelect.getElementsByTagName('option')[0];

  let value = [];
  let checkboxes = document.getElementById('checkboxes');
  let selectedCheckboxes = checkboxes.querySelectorAll(
    'input[type=checkbox]:checked'
  );

  for (const item of selectedCheckboxes) {
    let checkboxValue = item.getAttribute('value');
    value.push(checkboxValue);
  }

  let dropdownValue = 'Please select your favorite languages';
  if (value.length > 0) {
    dropdownValue = value.join(', ');
  }

  multiSelectOption.innerText = dropdownValue;
}

let expanded = false;

function toggleCheckboxes() {
  let checkboxes = document.getElementById('checkboxes');

  if (!expanded) {
    checkboxes.style.display = 'block';
    expanded = true;
  } else {
    checkboxes.style.display = 'none';
    expanded = false;
  }
}
