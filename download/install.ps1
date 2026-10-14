# Install Nave on Windows with one line, in PowerShell:
#   irm https://nave.infinitxai.com/download/install.ps1 | iex
# It asks for the email you joined the community with, checks it is on the member list, downloads Nave and runs its
# installer. Downloaded this way, Windows has nothing to warn about: no "Windows protected your PC".
$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
$CheckUrl = 'https://xadknhmtkgsdeyaaeamz.supabase.co/functions/v1/nave-download'
$PublicKey = 'sb_publishable_oVQzfl2Rk30GfCrMUfdmEg_pI6XLQkW'

function Stop-Install($Message) { Write-Host ''; Write-Host "  $Message" -ForegroundColor Yellow; Write-Host ''; return }

Write-Host ''
Write-Host '  Nave · for members of Agentic AI Content'
$Email = $env:NAVE_EMAIL
if (-not $Email) { Write-Host ''; $Email = Read-Host '  The email you joined the community with' }
$Email = ($Email.Trim()).ToLowerInvariant()
if ($Email -notmatch '^[^\s@]+@[^\s@]+\.[^\s@]+$') { Stop-Install "That doesn't look like an email. Run the line again."; return }

Write-Host ''; Write-Host '  Checking the member list...'
try {
  $Answer = Invoke-RestMethod -Method Post -Uri $CheckUrl -Headers @{ apikey = $PublicKey } -ContentType 'application/json' -Body (@{ email = $Email } | ConvertTo-Json)
} catch {
  $Reason = $null
  try { $Reason = ($_.ErrorDetails.Message | ConvertFrom-Json).reason } catch {}
  if ($Reason -eq 'not_member') { Stop-Install "That email isn't on the member list. Use the email you joined with, or ask in the community if you just joined."; return }
  if ($Reason -eq 'no_installers') { Stop-Install "You're on the list, but the installers are being uploaded right now. Try again in a little while."; return }
  Stop-Install "Couldn't reach Nave. Check your connection and try again."; return
}
if (-not $Answer.ok -or -not $Answer.windows.url) { Stop-Install "The Windows download isn't available yet. Try again later."; return }

$Work = Join-Path $env:TEMP ('nave-install-' + [guid]::NewGuid().ToString('N').Substring(0, 8))
New-Item -ItemType Directory -Path $Work | Out-Null
$Installer = Join-Path $Work 'Nave-Setup.exe'
try {
  Write-Host ''; Write-Host '  Downloading Nave (about 450 MB)...'
  Invoke-WebRequest -Uri $Answer.windows.url -OutFile $Installer -UseBasicParsing
  Unblock-File -Path $Installer
  Write-Host ''; Write-Host '  Installing...'
  Start-Process -FilePath $Installer -Wait
  Write-Host ''; Write-Host "  Nave is installed. Open it from the Start menu and sign in with $Email." -ForegroundColor Green
  Write-Host ''
} catch {
  Stop-Install 'The download or the installer stopped. Run the line again.'
} finally {
  Remove-Item -Recurse -Force $Work -ErrorAction SilentlyContinue
}
