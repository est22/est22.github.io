// main.js

document.addEventListener('DOMContentLoaded', function () {
    var eventButton = document.getElementById('eventButton');

    // Add event handling logic
    eventButton.addEventListener('click', function () {
        // Trigger the event or perform any action 
        console.log('Button clicked! You can implement your event logic here.');
        
        // Load Latest Data
        branch.data(function(err, data) {
            console.log(err, data);
          });

        // Journey CTA button link
        branch.setBranchViewData({data: {'$journeys_cta': 'https://www.naver.com',}});
        
        // branch.openURL('$journeys_cta'); -> in case if ...
    });
});
