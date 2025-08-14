@echo off
REM Script para limpeza completa dos containers e volumes Docker
REM AgroSys - Sistema de Gestão Agropecuária

echo 🧹 Iniciando limpeza dos containers Docker...

REM Parar e remover containers
echo 🛑 Parando containers...
docker-compose down

REM Remover volumes
echo 🗑️ Removendo volumes...
docker-compose down -v

REM Remover imagens não utilizadas
echo 🖼️ Removendo imagens não utilizadas...
docker image prune -f

REM Remover redes não utilizadas
echo 🌐 Removendo redes não utilizadas...
docker network prune -f

REM Remover volumes não utilizados
echo 💾 Removendo volumes não utilizados...
docker volume prune -f

echo ✅ Limpeza concluída!
echo.
echo 📝 Para recriar o ambiente:
echo    scripts\docker-setup.bat
echo.
pause
