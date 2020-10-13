## Install
 run command at root directory 'yarn install' or 'npm install'
## run app
 use command at root directory 'yarn dev' or 'npm run dev'
## check
### endpoints 
   - localhost:3000/api/v1/parse
   - localhost:3000/api/v2/parse
### requst body
 { data: 'JHON0000MICHAEL0009994567' }
### response 
- v1/parse
 
  {
    statusCode: 200,
    data: {
     firstName: 'JHON0000',
     lastName: 'MICHAEL000',
     clientId: '9994567'
    }
  }
- v2/parse 
  {
    statusCode: 200,
    data: {
      firstName: 'JHON',
      lastName: 'MICHAEL',
      clientId: '999-4567'
    }
  }
