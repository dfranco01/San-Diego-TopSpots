$(document).ready(function () {
    // write your code here
    $.getJSON("data.json", function(data) {
            let tableBody = $("#usertable-tbody");
            $.each(data, function(index, user) {
                let [lat, lon] = user.location;
                let mapsLink = `https://www.google.com/maps?q=${lat},${lon}`;
                let row = `<tr>
                    <td>${user.name}</td>
                    <td>${user.description}</td>
                    <td><a href="${mapsLink}" target="_blank">Open In Maps</a></td>
                </tr>`;
                tableBody.append(row);
            });
        });
});