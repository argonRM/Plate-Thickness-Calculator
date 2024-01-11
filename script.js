// Input thickness
var thickness = 20;

// Valid plate thicknesses
var validPlateThicknessesResult = [2, 3, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 22, 24, 26, 28];

function findValidPlate(forThickness) {
    var equalThickness = validPlateThicknessesResult.find(function (plateThickness) {
        return forThickness <= plateThickness;
    });

    return equalThickness || 0;
}

function calculateThickness() {
    var inputElement = document.getElementById("thicknessInput");
    var thickness = parseInt(inputElement.value);

    if (isNaN(thickness) || thickness < 1 || thickness > 20) {
        alert("Invalid input. Please enter a thickness between 1 and 20 mm.");
        return;
    } else if (thickness == 11 || thickness == 19) {
        alert("Invalid input. This program doesn't deal with the thickness that equal to 11 or 19 mm");
        return;
    }

    var oneTwo = thickness * 1.2;
    var oneFour = thickness * 1.4;

    var plateForOneTwo = findValidPlate(oneTwo);
    var plateForOneFour = findValidPlate(oneFour);

    var resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "The valid plate thickness for 1.2 multiplier is " + plateForOneTwo + "<br>" +
        "The valid plate thickness for 1.4 multiplier is " + plateForOneFour;
}