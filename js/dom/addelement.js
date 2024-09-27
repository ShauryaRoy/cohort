// Modify and add elements using DOM


let newline = document.createElement('li');
newline.innerHTML = 'Third line';
document.getElementById('list').appendChild(newline);


// Explanation:
// 1. let newline = document.createElement('li');
// This create a new variable of type 'li'

// 2. newline.innerHTML = 'Third line';
// This assigns content to the variable 'newline'

// 3. document.getElementById('list').appendChild(newline);
// This appends the child newline to the original id - 'list'