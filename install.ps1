# Nave Content OS - one-line installer (Windows / PowerShell)
#   irm https://nave.infinitxai.com/install.ps1 | iex
$ErrorActionPreference = 'Stop'

$zip  = "https://github.com/infinitx-hq/nave-site/releases/download/content-os-v1/nave-content-os.zip"
$dest = Join-Path $HOME "nave"

Write-Host ""
Write-Host "  Nave Content OS"
Write-Host "  Installing to: $dest"
Write-Host ""

$tmp = Join-Path ([System.IO.Path]::GetTempPath()) ("nave-" + [guid]::NewGuid().ToString())
New-Item -ItemType Directory -Path $tmp -Force | Out-Null
$zipPath = Join-Path $tmp "nave.zip"

Write-Host "  -> Downloading the Content OS..."
Invoke-WebRequest -Uri $zip -OutFile $zipPath

Write-Host "  -> Unpacking to $dest ..."
Expand-Archive -Path $zipPath -DestinationPath $HOME -Force
Remove-Item $tmp -Recurse -Force

Set-Location $dest
Write-Host ""
Write-Host "  -> Running the Nave installer (system tools, engines, verify render)..."
Write-Host ""
& .\install.ps1
