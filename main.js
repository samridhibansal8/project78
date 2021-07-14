


var images =
    ["1.png", "cake.png", "2.png", "3.png", "4.png", "5.png"];

var names =
    ["loucous", "chelse", "annablle", "trinity", "chris", "lilly"];

var i = 0;
function update() {
    i++;
    var number_of_family_members_in_array = 5
    if (i > number_of_family_members_in_array) {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_Name").innerHTML = updatedName;
}


