// ### First Project JavaScript:

// ## 1 - Instructions:
// - Create a folder named: first_project_js_firstName_lastName
// - Create a repository with the same name as the folder
// - Adhere to the folder structure
// - Individual work
// - Minimum of 10 commits
// - Deadline: One day
// - Use of object classes, arrays, functions, prompts, etc.



// ## 2 - Project Objective:
// - Create a JavaScript program that simulates logging into a bank account using only the console to interact with the user.



// ## 3 - Instructions:
// - Account Creation and Management:
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
//     + If the user only writes "exit," they exit the current process, and the choice question is asked again.
//         * If the user chooses to sign up, here are the details they must enter:
//             # Name (Full):
//             - Check for leading or trailing spaces.
//             - The first letter should be capitalized.
//             - After each space, the first letter should remain capitalized.
//             - Check that all other characters are in lowercase.
//             - Do not save the Name if it has less than 5 characters (excluding spaces).
//             - Do not save the Name if it contains numbers, "@", or similar special characters.

//             # Email:
//             - Check for leading or trailing spaces.
//             - Convert all letters to lowercase.
//             - Do not save the Email if it has spaces in the middle.
//             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
//             - Do not save the Email if it does not contain exactly one "@" symbol.
//             - Ensure the email is unique.


//             # Age:
//             - Check for leading, trailing, or middle spaces.
//             - Verify that only digits are entered.
//             - Do not save the Age if it has 0 characters, or if it has 3 characters or more.



//             # Password:
//             - Check for leading or trailing spaces.
//             - Do not save the Password if it has spaces in the middle.
//             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
//             - Require at least 7 characters to confirm the password.

//             # Password_confirmed:
//             - The user must re-enter their exact password; otherwise, they are blocked.
let ask = prompt("login, signup ou change password ?").trim().toLowerCase();

class Person {
  constructor(email, name, password, age) {
    this.email = email
    this.name = name
    this.password = password
    this.age = age
  }
}

let person = new Person("", "", "", null);

if (ask === "login") {
  let email = prompt("Entrez votre email ").trim().toLowerCase();

  if (email.length <= 10 || !email.includes("@")) {
    alert(" Email invalide (moins de 10 caractères ou pas de '@')");
  } else {
    person.email = email;

    let name = prompt("Entrez votre nom complet (ex: Dounia Hajjaji)").trim();
    let nameParts = name.split(" ");
    let formattedName = "";

    for (let part of nameParts) {
      formattedName += part.charAt(0).toUpperCase() + part.slice(1).toLowerCase() + " ";
    }

    formattedName = formattedName.trim();

    if (formattedName.replace(/\s+/g, "").length <= 5) {
      alert(" Le nom est trop court (au moins 6 lettres hors espaces).");
    } else {
      person.name = formattedName;

      
      let rawAge = prompt("Entrez votre âge :");
      let cleanedAge = rawAge.replace(/\s+/g, ""); 

      if (!/^\d+$/.test(cleanedAge) || cleanedAge.length === 0 || cleanedAge.length >= 3) {
        alert(" Âge invalide (doit être uniquement des chiffres et max 2 chiffres).");
      } else {
        person.age = parseInt(cleanedAge);

        
        let password = prompt("Entrez votre mot de passe ");
        let confirmPassword = prompt("Confirmez votre mot de passe ");

        if (password === confirmPassword) {
          person.password = password;
          alert(` Bienvenue ${person.name}, âge ${person.age} ans !`);
        } else {
          alert(" Le mot de passe ne correspond pas.");
        }
      }
    }
  }
} else {
  alert(" Choix invalide ou fonctionnalité non encore développée.");
}

console.log("Compte créé ", person);

//         * If the user chooses to log in, here are the details they must enter:
//             # Email:
//             - Check if the email exists in our Database.
            
//             # Password:
//             - Check if the entered password is associated with the previously entered email.
let database = [
  new Person("Dounia Hajjaji", "dounia@example.com", "Pass@123", 22),
  new Person("Nouhaila Bouchra", "nouhaila@example.com", "Nana@456", 23),
];

if (ask === "login") {
  let email = prompt("Entrez votre email").trim().toLowerCase();

  // 1. Vérifier si l'email existe dans notre base de données
  let user = database.find(u => u.email === email);

  if (!user) {
    alert(" Aucun compte trouvé avec cet email.");
  } else {
    let password = prompt("Entrez votre mot de passe").trim();

    // 2. Vérifier si le mot de passe correspond à cet email
    if (password === user.password) {
      alert(`Bienvenue ${user.name} !`);
    } else {
      alert(" Mot de passe incorrect !");
    }
  }
} else {
  alert(" Choix non pris en charge dans ce code.");
}

//         * If the user chooses to change the password:
//             - They must enter their existing Email in the Database.

let databas = [
    new Person("Dounia Hajjaji", "dounia@example.com", "Pass@123", 22),
    new Person("Nouhaila Bouchra", "nouhaila@example.com", "Nana@456", 23),
  ];
  
  if (ask === "login") {
    let email = prompt("Entrez votre email").trim().toLowerCase()

    let user = database.find(u => u.email === email)

  if (!user) {
    alert(" Aucun compte trouvé avec cet email.")
  } else {
    let password = prompt("Entrez votre mot de passe").trim()

    if (password === user.password) {
        alert(`Bienvenue ${user.name} !`)
      } else {
        alert(" Mot de passe incorrect !")
      }
    }
  } else {
    alert(" Choix non pris en charge dans ce code.")
  }
 

//         * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
//             # Logout:
//             - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.
            
//             # Withdraw Money:
//             - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
            
//             # Deposit Money:
//             - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
            
//             # Take a Loan:
//             - If the user chooses this option, they can take a loan up to 20% of what they already have.
//             - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
            
//             # Invest:
//             - If the user chooses this option, they can invest any amount in the bank.
//             - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
            
//             # History:
//             - Ability to view the entire transaction history.


function startApp() {
    let choice = prompt("login, signup ou change password ?").trim().toLowerCase();
  
    if (choice === "login") {
      login();
    } else {
      alert("Option non encore disponible. Essaie 'login' !");
      startApp(); 
    }
  }
  
  function login() {
    let email = prompt("Entrez votre email").trim().toLowerCase();
    let user = database.find(u => u.email === email);
  
    if (!user) {
      alert(" Aucun utilisateur trouvé avec cet email.");
      return startApp();
    }
  
    let password = prompt("Entrez votre mot de passe").trim();
    if (password !== user.password) {
      alert(" Mot de passe incorrect !");
      return startApp();
    }
  
    alert(` Bienvenue ${user.name} ! Votre solde est : ${user.balance} dhs.`);
    bankingServices(user);
  }
  
  function bankingServices(user) {
    let action = prompt("Que voulez-vous faire ? (withdraw / deposit / logout)").trim().toLowerCase();
  
    if (action === "withdraw") {
      let amount = Number(prompt("Montant à retirer :").trim());
  
      if (isNaN(amount) || amount <= 0) {
        alert(" Montant invalide.");
      } else if (amount > user.balance) {
        alert(" Vous ne pouvez pas retirer plus que votre solde.");
      } else {
        user.balance -= amount;
        alert(` Retrait effectué. Nouveau solde : ${user.balance} dhs.`);
      }
      bankingServices(user); 
    }
  
    else if (action === "deposit") {
      let amount = Number(prompt("Montant à déposer (max 1000 dhs) :").trim());
  
      if (isNaN(amount) || amount <= 0 || amount > 1000) {
        alert(" Montant invalide ou supérieur à 1000 dhs.");
      } else {
        user.balance += amount;
        alert(` Dépôt effectué. Nouveau solde : ${user.balance} dhs.`);
      }
      bankingServices(user); 
    }
  
    else if (action === "logout") {
      alert(" Vous êtes maintenant déconnecté.");
      startApp(); 
    }
  
    else {
      alert(" Action non reconnue.");
      bankingServices(user);
    }
  }
  
 
  startApp();