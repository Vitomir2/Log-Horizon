function login() {
    let userName = $('#user').val();
    let logout = document.getElementById("login").value;

    if (userName == "") {
        $('#login').attr('value', 'Set Username');
    } else {
        $('#login').attr('value', 'Logout');
        $('#user').css('border', 'none');
    }

    if (logout == 'Logout') {
        $('#user').val('');
        $('#login').attr('value', 'Set Username');
        $('#user').css('border', '1px solid grey');
    }
}

function log() {
    let userName = $('#user').val();
    let button = $('input:radio[name=radio]:checked').val();
    let message = $('#message').val();
    if (userName == "") {

        let div = $(<div>${button}:${message} | Anonymous | Archive</div>);
        div.appendTo('#database');
        $("#delete").css('display', 'none');
        if ($('#success').is(':checked')) {
            div.css('background', 'green');
            div.css('padding', '5px');
            div.css('width', '60%');
            div.css('color', 'white');
            div.css('margin', 'auto');
            div.css('font-size', '22px');
        } else if ($('#info').is(':checked')) {
            div.css('background', 'blue');
        } else if ($('#error').is(':checked')) {
            div.css('background', 'red');
        }
    } else {
        let div = $(<div>${button}:${message} | ${userName} | Archive</div>);

        div.appendTo('#database');
        $("#delete").css('display', 'none');
        if ($('#success').is(':checked')) {
            div.css('background', 'green');
        } else if ($('#info').is(':checked')) {
            div.css('background', 'blue');
        } else if ($('#error').is(':checked')) {
            div.css('background', 'red');
        }
    }
}