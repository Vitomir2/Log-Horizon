function logIn() {
    let userName = $('#usernameInput').val();
    let loginBtnTxt = $('#loginBtn').text();

    if (loginBtnTxt === 'Logout') {
        $('#loginBtn').text('Set Username');
    }
    else {
        $('#loginBtn').text('Logout');
        $('#usernameInput').addClass("border-0 text-center font-weight-bold");
    }
}

function attachEvents() {
    let username = 'Anonymous';
    let archiveMsg = 'Archive';
    let typeMsg = '';
    let counter = 0;

    $('#logBtn').click(attachMsg());

    function attachMsg() {
        let logs = $('#logs');
        let message = $('#messageInput').val();
        let container;

        if ($('#success').is(':checked')) {
            typeMsg = 'Success';
            container = successMsg();
        }
        else if ($('#info').is(':checked')) {
            typeMsg = 'Info';
            container = infoMsg();
        }
        else if ($('#error').is(':checked')) {
            typeMsg = 'Error';
            container = errorMsg();
        }

        let messageBox = ($("<div class='col-6 h3'>" + typeMsg + ": " + message + "</div>"));
        let usernameBox = ($("<div class='col-3 h3'>" + username + "</div>"));
        let archiveBox = ($("<div class='col-3 h3' id='archive'>" + archiveMsg + "</div>"));

        container.append(messageBox , usernameBox , archiveBox);
        logs.append(container);
        $('#messageInput').val('');
        counter++;
    }

    function successMsg() {
        return $('<div class="row text-white bg-success py-3"></div>');
    }
    
    function infoMsg() {
        return $('<div class="row text-white bg-info py-3"></div>');
    }
    
    function errorMsg() {
        return $('<div class="row text-white bg-danger py-3"></div>');
    }
}
