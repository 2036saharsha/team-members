if ($DEPLOY -eq "develop") {
  Write-Host "Starting in "$DEPLOY" mode"
  npx nest dev
} elseif ($DEPLOY -eq "develop-db") {
  Write-Host "Starting in "$DEPLOY" mode"
  prisma db push
  npx nest dev 
} else {
  Write-Host "Starting in "production" mode"
  prisma db push
  npx nest start
}
