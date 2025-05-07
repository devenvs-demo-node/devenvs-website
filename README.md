## DevEnvs

### Run the project

Install the project
`npm install (use node version greater than 22)`

Run the project
`npm run dev` OR `npm start`

Done. Access the project on port 3000

### For Windows, if you are on node version less than 20

Run the following set of commands to run things sm
```
Invoke-Expression ((fnm env --use-on-cd) -join "`n")
fnm use 22
npm run dev
```
