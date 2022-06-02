const { create } = require('domain');
const fs = require('fs');
const inquirer = require('inquirer');
const totalMembers = 0
var htmlBuild = false
var memberDone = false


function Member(Name, Role, Github, Email, Phone) {
	this.Name = Name
	this.Role = Role
	this.Github = Github
	this.Email = Email
	this.Phone = Phone
}

addAnother()

function addAnother () {
	inquirer
		.prompt([
			{
				type: 'input',
				message: 'Whats the name of this member?',
				name: 'memberName',
			},
		])
		.then((response) => {
			Member.Name = response.memberName
			inquirer.prompt([
				{
					type: 'list',
					message: 'What role does this member fill?',
					name: 'memberRole',
					choices: ['Manager', 'Senior Dev', 'Junior Dev', 'Intern'],
				},
			])
				.then((response) => {
					Member.Role = response.memberRole
					inquirer.prompt([
						{
							type: 'input',
							message: 'Enter GitHub link of member.',
							name: 'memberGithub',
						},
					])
						.then((response) => {
							Member.Github = response.memberGithub
							inquirer.prompt([
								{
									type: 'input',
									message: 'Enter email of member.',
									name: 'memberEmail',
								},
							])
								.then((response) => {
									Member.Email = response.memberEmail
									inquirer.prompt([
										{
											type: 'input',
											message: 'Enter phone number of this member.',
											name: 'memberPhone',
										},
									])
										.then((response) => {
											Member.Phone = response.memberPhone
											createHTML()
											addAnother()
										})
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
	let htmlText = `\n	<div class="container">
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">${Member.Name}</h5>
				<p class="card-text">${Member.Role}</p>
				<p class="card-text">${Member.Email}</p>
				<p class="card-text">${Member.Phone}</p>
				<p class="card-text">${Member.Github}</p>
			</div>
		</div>
	</div>`
	fs.appendFile('index.html', htmlText, (err) =>
		err ? console.error(err) : console.log('File written'))
}