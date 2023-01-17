const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        window.alert(response.statusText)
    }
}

document.querySelector('#logout-button').addEventListener('click', logout);