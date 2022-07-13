# tech-blog

## Description

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

 please use the link [here]().


## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Questions](#questions)
4. [License](#license)

## Installation

In order to use this application after cloning it down, you would need to run the following code block,

```
npm i
```

You will need to install the following npm packages.

1. bcrypt
2. express
3. express-handlebars
4. express-sessions
5. connect-session-sequelize
6. sequelize
7. mysql2
8. handlebars
9. dotenv

In order to fully get this working on your local machine, please take the .env.EXAMPLE file and rename the file to .env and fill out the file with your user and password for your machine.

```
DB_USER="input your user here"
DB_PW="input your password here"
DB_NAME='ecommerce_db'
SESSION_SECRET="input something here"

```

You would have to create the db by running the schema.sql file in mysql through:

```
source schema.sql
```

Then run your seeds through the script:

```
npm run seed
```

With this you are ready to run this application.

## Usage

Once you have fully set up the repository, you will be able to view the tech blog and use it!

Please see the link below to see a video demonstrating the live site currently deployed on heroku.

### [Click here]() to see the video.

## Contributing
Please refer to eslintrc.json

## Credits

Copyright © Saad Mian All rights reserved.