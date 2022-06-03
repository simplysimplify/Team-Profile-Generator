const { create } = require('domain');
const fs = require('fs');
const inquirer = require('inquirer');
const totalMembers = 0
var htmlBuild = false
var memberDone = false


function Member(Name, Role, Iden, Misc) {
	this.Name = Name
	this.Role = Role
	this.Iden = Iden
	this.Misc = Misc
}

addAnother()

function addAnother() {
	inquirer
		.prompt([
			{
				type: 'input',
				message: 'Enter employee name:',
				name: 'memberName',
			},
		])
		.then((response) => {
			Member.Name = response.memberName
			inquirer.prompt([
				{
					type: 'list',
					message: 'Select employee role:',
					name: 'memberRole',
					choices: ['Manager', 'Engineer', 'Employee', 'Intern'],
				},
			])
				.then((response) => {
					Member.Role = response.memberRole
					inquirer.prompt([
						{
							type: 'input',
							message: 'Enter employee email:',
							name: 'memberEmail',
						}
					])
						.then((response) => {
							Member.Email = response.memberEmail
							inquirer.prompt([
								{
									type: 'input',
									message: 'Enter employee id:',
									name: 'memberIden',
								}
							])
								.then((response) => {
									Member.Iden = response.memberIden
									if (Member.Role === "Engineer") {
										inquirer.prompt([
											{
												type: 'input',
												message: 'Enter employee Github:',
												name: 'memberMisc',
											}
										])
										.then((response) => {
											Member.Misc = `<a href="https://github.com/${response.memberMisc}">Github</a>` 
											Member.Email = response.memberEmail
											createHTML()
											addAnother()
											})
									}
									if (Member.Role === "Manager") {
										inquirer.prompt([
											{
												type: 'input',
												message: 'Enter employee office number:',
												name: 'memberMisc',
											}
										])
										.then((response) => {
											Member.Misc = "Office Number: " + response.memberMisc
											Member.Email = response.memberEmail
											createHTML()
											addAnother()
											})
									}
									if (Member.Role === "Intern") {
										inquirer.prompt([
											{
												type: 'input',
												message: 'Enter employee school:',
												name: 'memberMisc',
											}
										])
										.then((response) => {
											Member.Misc = "Intern School: " + response.memberMisc
											Member.Email = response.memberEmail
											createHTML()
											addAnother()
											})
									}
									if (Member.Role === "Employee") {
										inquirer.prompt([
											{
												type: 'input',
												message: 'Enter employee years:',
												name: 'memberMisc',
											}
										])
										.then((response) => {
											Member.Misc = "Years of employment: " + response.memberMisc
											Member.Email = response.memberEmail
											createHTML()
											addAnother()
											})
									}
								})
						})
				})
		})
}



function createHTML() {
	// Creates HTML boilerplate for the employee cards to be put on (provided there isnt already one).
	if (htmlBuild === false) {
		console.log("Building Boilerplate")
		let htmlText = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- CSS only -->
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
	<title>Document</title>
</head>
<body>
	<div class="jumbotron jumbotron-fluid">
		<h1 class="display-4">
			Team Profiles!
		</h1>
			`
		fs.appendFile('index.html', htmlText, (err) =>
		err ? console.error(err) : console.log('File written'))
		htmlBuild = true
	}
	// Creates employee cards.
	let htmlText = `\n<div class="container">
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">Name: ${Member.Name}</h5>
				<p class="card-text">Role: ${Member.Role}</p>
				<p class="card-text">Email: ${Member.Email}</p>
				<p class="card-text">Identification #: ${Member.Iden}</p>
				<p class="card-text">${Member.Misc}</p>
			</div>
		</div>
	</div>	`
	fs.appendFile('index.html', htmlText, (err) =>
		err ? console.error(err) : console.log('File written'))
}