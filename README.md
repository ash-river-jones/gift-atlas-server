# Gift Atlas - API Server 🎁 

Is holiday shopping stressful? Not knowing what gifts to get people? That's the best part of of Gift Atlas. The application is a dashboard where you can add those important to you, track their birthday and upcoming holiday, and track which gifts they'd like and have them send you gift ideas when you aren't sure!

## Related

Here are some related projects

[Gift Atlas - React Front End](https://github.com/ash-river-jones/gift-atlas-client)


## Technology & Dependancies 

This project was created using the following. 

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" />

Make sure to run `npm i`!
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.  
You will need to provide a JWT Secret. You cangenerate this with the following terminal command:
`openssl rand -base64 48`


`DB_LOCAL_DBNAME`=`{YOUR MySQL DB NAME HERE}` <br />
`DB_LOCAL_USER`=`{YOUR MySQL LOCAL USERNAME HERE}` <br />
`DB_LOCAL_PASSWORD`=`{YOUR MySQL LOCAL PASSWORD HERE}` <br />
`PORT`=`{SERVER PORT HERE}` <br />
`JWT_SECRET`=`{YOUR JWT SECRET KEY}`

## MySQL Database

To run this project, you will need to setup a MySQL Database to manage all data. 
Create a mySQL Database and add the name to the .env file, as stated above. 
To get the database setup you will need to do the folllowing commands:

`npx knex migrate:latest` <br />
`npx knex seed:run`


## Author

- [@ash-river-jones](https://github.com/ash-river-jones)
