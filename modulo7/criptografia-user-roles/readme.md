<h1 align='center'><b>Cryptographyand user roles.</b></h1>
<p>:rocket: This API was developed to practice Cryptography, Hash, and User Roles.</p>
<hr>
<br/>

<h2>:electron: Technologies:</h2>
<ul>
    <li>💡 Express and Cors</li>
    <li>💡 Knex</li>
    <li>💡 JWT</li>
    <li>💡 Dotenv</li>
    <li>💡 Uuid</li>
    <li>💡 Typescript</li>
    <li>💡 BCryptjs</li>
</ul>
<hr>
<br/>

<h2>💻 What to install after cloning:</h2>
    <ul>
        <li>💽 Run a regular 'npm i' OR,</li>
        <li>💽 'npm i  typescipt express cors uuid ts-node dotenv mysql knex jsonwebtoken bcryptjs'</li>
        <li>💽 all of them need 'npm i @types/dependecy -D' and ts-node needs 'npm i ts-node-dev -D'</li>
    </ul>
<hr>
<br/>

<h2>👁️‍🗨️ Quiz section:</h2>
    <ol>
        <li>
            <ul>
                <li>What is 'round' and 'salt' when it comes to hash? What is the recommended amount of rounds? Why?
                <br/>
                Round, or count, is how many times the input will go through the hash manager's salt, whilst salt is the component which prevents two or more users with the same password to end up with the same hash, for example, also it avoids rainbow table attacks to password databases by creating unique strings. Usually, ten rounds are enough, since less rounds can bem less effective and more than tha can really slow the application.
                </li>
                <li>When implementing hash on this project, should you start hashing the signup or login enpoint first?
                <br/>
                It makes more sense to alter the signup portion first since its the primary source of information given by the user, therefore it structures the rest of the application.
                </li>
                <li>Is it necessary to alter the getActiveUser endpoint for hash?
                <br/>
                No. The getActiveUser endpoint works around authentication tokens that have key elements for identification and optional features, such as expiration times/dates, therefore they are already encrypted and supplied enough not to be hashed whilst serving their purpose.
                </li>
            </ul>
        </li>
    </ol>

<h2>👩‍💻 Author</h2>
<a href="https://github.com/giojulio">Giovanna Julio</a>