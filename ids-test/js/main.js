//require('./map.js');

//require('../css/style.scss')

$(document).ready(function() {
	$('#fullpage').fullpage({
        autoScrolling: false,
        fitToSection: false,
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: [
            "Title",
            "John T. Williams' Story",
            "John T. Williams' Story Result",
            "Does the Government Track These Deaths?",
            "Does Ethnicity Make a Difference?",
            "Commentary",
            "Who are the Victims?",
            "What Can We Do to Make a Difference?",
            "Credits"
        ],
        anchors: [
            "aTitle",
            "aStory1",
            "aStory2",
            "aFbi",
            "aEthnicity",
            "aCommentary",
            "aVictims",
            "aNextSteps",
            "aCredits"
        ],
        menu: '#menu'
    });
});