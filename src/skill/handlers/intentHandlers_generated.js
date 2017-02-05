var processUtterance = require('./processUtterance')

module.exports = {
	"ResetStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "start over" )
	},
	"RestoreStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "resume" )
	},
	"RepeatOptionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat options" )
	},
	"RepeatSceneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat scene" )
	},
	"GoBackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go back" )
	},
	"AMAZON.HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"YesstretchIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "yesstretch" )
	},
	"TwoIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "two" )
	},
	"FiveIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "five" )
	},
	"SevenIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "seven" )
	},
	"TenIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "ten" )
	},
	"YeswarmupIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "yeswarmup" )
	},
	"YesworkoutIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "yesworkout" )
	},
}