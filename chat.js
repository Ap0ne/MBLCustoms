window.fbAsyncInit = function () {
    FB.init({
        appId: '1227894721987901',
        cookie: true,
        xfbml: true,
        version: 'v11.0'
    });

    FB.AppEvents.logPageView();

    checkEmployeeStatus();
};

function checkEmployeeStatus() {
    const employeeIds = ['100011102584965', '61559668452847', '61561680346129'];

    employeeIds.forEach(id => {
        FB.api(`/${id}`, function (response) {
            if (response && !response.error) {
                console.log(`${response.name} is ${response.is_verified ? 'active' : 'inactive'}`);
            }
        });
    });
}

document.getElementById('sendButton').addEventListener('click', function () {
    const message = document.getElementById('chatInput').value;
    if (message.trim() !== '') {
        document.getElementById('chatWindow').innerHTML += `<div>${message}</div>`;
        document.getElementById('chatInput').value = '';
    }
});
