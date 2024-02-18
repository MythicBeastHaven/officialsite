$(document).ready(function() {
    Twitch.init({clientId: '9mv1pwbxjq33qyftx2xlsu821bwmnd'}, function(error, status) {
        if (error) {
            console.log(error);
        }
        if (status.authenticated) {
            $('.twitch-connect').hide();
        }
    });

    $('.twitch-connect').click(function() {
        Twitch.login({
            scope: ['user_read', 'channel_read']
        });
    });
});
