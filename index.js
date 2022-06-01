const fs = require('fs');
const inquirer = require('inquirer');
const totalMembers = 0

// Member Array is organized such that lower numbers are lower level employee's
const memberArray = []

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
								.then(() => {
										console.log(Member)
									})
							})
					})
			})
	})

