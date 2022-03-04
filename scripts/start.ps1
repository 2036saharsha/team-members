if ($DEPLOY -eq "develop") {
  Write-Host "Starting in "$DEPLOY" mode"
  npx nest dev
} elseif ($DEPLOY -eq "develop-db") {
  Write-Host "Starting in "$DEPLOY" mode"
  prisma migrate dev
  npx nest dev 
} else {
  . $PSScriptRoot/build.ps1
  Write-Host "Starting in "production" mode"
  npx nest start
}
