function Main {
  Write-Host "Setting up Windows dev environment"
  npm i
  npx prisma generate
}

Main
