// 1. Define the async function
async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // 2. Clear the "Loading..." message using innerHTML
    dataContainer.innerHTML = '';

    // 3. Create and append user list
    const userList = document.createElement('ul');

    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });

    dataContainer.appendChild(userList);

  } catch (error) {
    // 4. Error handling with innerHTML
    dataContainer.innerHTML = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

// 5. Run after DOM is ready
document.addEventListener('DOMContentLoaded', fetchUserData);