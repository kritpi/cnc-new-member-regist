export async function getMember() {
    const res = await fetch('https://script.google.com/macros/s/AKfycbyw7ok4ek555zickoc1gYvhVbL6tHxzwCaK9Vt0e9jFYWvze4xqOYIjRXuy3tx1EbG7/exec?action=getUsers');
    if(!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }