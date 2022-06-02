const fs = require('fs');
const inquirer = require('inquirer');
const totalMembers = 0

function Member(Name, Role, Github, Email, Phone) {
	this.name = Name
	this.Role = Role
	this.Github = Github
	this.Email = Email
	this.Phone = Phone
}

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
		console.log(Member.Name)
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
				console.log(Member.Role)
				inquirer.prompt([
					{
						type: 'input',
						message: 'Enter GitHub link of member.',
						name: 'memberGithub',
					},
				])
					.then((response) => {
						Member.Github = response.memberGithub
						console.log(Member.Github)
						inquirer.prompt([
							{
								type: 'input',
								message: 'Enter email of member.',
								name: 'memberEmail',
							},
						])
							.then((response) => {
								Member.Email = response.memberEmail
								console.log(Member.Email)
								inquirer.prompt([
									{
										type: 'input',
										message: 'Enter phone number of this member.',
										name: 'memberPhone',
									},
								])
									.then((response) => {
										Member.Phone = response.memberPhone
										console.log(Member.Phone)
									})
									.then((response) => {
										inquirer.prompt([
											{
												type: 'confirm',
												message: 'Enter phone number of this member.',
												name: 'memberPhone',
											},
									])
							})
					})
			})
	}) 

function createHTML() {
	console.log(Member)
}

const htmlText = `<!DOCTYPE html>
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
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				<h5 class="card-title">Card title</h5>
				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
					content.</p>
				<a href="#" class="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	</div>
</body>
</html>`

									// .then(() => {
									// 	fs.appendFile('index.html', htmlText, (err) =>
									// 	err ? console.error(err) : console.log('File written'))
									// })