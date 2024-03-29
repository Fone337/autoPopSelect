$(document).ready(function() {

var counties = {
'Please select one':'',
'-------- England --------':'',
'Avon':'Avon',
'Bedfordshire':'Bedfordshire',
'Berkshire':'Berkshire',
'Buckinghamshire':'Buckinghamshire',
'Cambridgeshire':'Cambridgeshire',
'Cheshire':'Cheshire',
'Cleveland':'Cleveland',
'Cornwall':'Cornwall',
'Cumbria':'Cumbria',
'Derbyshire':'Derbyshire',
'Devon':'Devon',
'Dorset':'Dorset',
'Durham':'Durham',
'East Sussex':'East Sussex',
'Essex':'Essex',
'Gloucestershire':'Gloucestershire',
'Hampshire':'Hampshire',
'Herefordshire':'Herefordshire',
'Hertfordshire':'Hertfordshire',
'Isle of Man':'Isle of Man',
'Isle of Wight':'Isle of Wight',
'Kent':'Kent',
'Lancashire':'Lancashire',
'Leicestershire':'Leicestershire',
'Lincolnshire':'Lincolnshire',
'London':'London',
'Merseyside':'Merseyside',
'Middlesex':'Middlesex',
'Norfolk':'Norfolk',
'Northamptonshire':'Northamptonshire',
'Northumberland':'Northumberland',
'North Humberside':'North Humberside',
'North Yorkshire':'North Yorkshire',
'Nottinghamshire':'Nottinghamshire',
'Oxfordshire':'Oxfordshire',
'Rutland':'Rutland',
'Shropshire':'Shropshire',
'Somerset':'Somerset',
'South Humberside':'South Humberside',
'South Yorkshire':'South Yorkshire',
'Staffordshire':'Staffordshire',
'Suffolk':'Suffolk',
'Surrey':'Surrey',
'Tyne and Wear':'Tyne and Wear',
'Warwickshire':'Warwickshire',
'West Midlands':'West Midlands',
'West Sussex':'West Sussex',
'West Yorkshire':'West Yorkshire',
'Wiltshire':'Wiltshire',
'Worcestershire':'Worcestershire',
'-------- Wales --------':'',
'Clwyd':'',
'Dyfed':'',
'Gwent':'',
'Gwynedd':'',
'Mid Glamorgan':'',
'Powys':'',
'South Glamorgan':'',
'West Glamorgan':'',
'-------- Scotland --------':'',
'Aberdeenshire':'Aberdeenshire',
'Angus':'Angus',
'Argyll':'Argyll',
'Ayrshire':'Ayrshire',
'Banffshire':'Banffshire',
'Berwickshire':'Berwickshire',
'Bute':'Bute',
'Caithness':'Caithness',
'Clackmannanshire':'Clackmannanshire',
'Dumfriesshire':'Dumfriesshire',
'Dunbartonshire':'Dunbartonshire',
'East Lothian':'East Lothian',
'Fife':'Fife',
'Inverness-shire':'Inverness-shire',
'Kincardineshire':'Kincardineshire',
'Kinross-shire':'Kinross-shire',
'Kirkcudbrightshire':'Kirkcudbrightshire',
'Lanarkshire':'Lanarkshire',
'Midlothian':'Midlothian',
'Moray':'Moray',
'Nairnshire':'Nairnshire',
'Orkney':'Orkney',
'Peeblesshire':'Peeblesshire',
'Perthshire':'Perthshire',
'Renfrewshire':'Renfrewshire',
'Ross-shire':'Ross-shire',
'Roxburghshire':'Roxburghshire',
'Selkirkshire':'Selkirkshire',
'Shetland':'Shetland',
'Stirlingshire':'Stirlingshire',
'Sutherland':'Sutherland',
'West Lothian':'West Lothian',
'Wigtownshire':'Wigtownshire',
'----- Northern Ireland -----':'',
'Antrim':'Antrim',
'Armagh':'Armagh',
'Down':'Down',
'Fermanagh':'Fermanagh',
'Londonderry':'Londonderry',
'Tyrone':'Tyrone'
};
var counties = $.map(counties, function(val, text){
	$('#county').append( $('<option></option>').val(val).html(text) )
});


var months = {
'Month': '0',
'January':'1',
'February':'2',
'March':'3',
'April':'4',
'May':'5',
'June':'6',
'July':'7',
'August':'8',
'September':'9',
'October':'10',
'November':'11',
'December':'12'
};
var months = $.map(months, function(val, text){
	$('#month').append( $('<option></option>').val(val).html(text) )
});


var date = new Date();
var year = date.getFullYear();
var future = year + 20;
$('#year').append( $('<option></option>').val(0).html('Year'));
$('#year').append( $('<option></option>').val(year).html(year));
do{
	year++;
	$('#year').append( $('<option></option>').val(year).html(year));
}
while (year < future);

});
