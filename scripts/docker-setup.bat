@echo off
REM Script para configurar e executar o banco de dados PostgreSQL em Docker
REM AgroSys - Sistema de Gestão Agropecuária

echo 🚀 Configurando banco de dados PostgreSQL para AgroSys...

REM Verificar se o Docker está instalado
docker --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker não está instalado. Por favor, instale o Docker primeiro.
    pause
    exit /b 1
)

REM Verificar se o Docker Compose está disponível
docker-compose --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker Compose não está disponível. Por favor, instale o Docker Compose primeiro.
    pause
    exit /b 1
)

REM Criar diretório para dados do PostgreSQL se não existir
if not exist "docker\postgres\data" mkdir "docker\postgres\data"

REM Parar containers existentes se houver
echo 🛑 Parando containers existentes...
docker-compose down

REM Remover volumes antigos se solicitado
if "%1"=="--clean" (
    echo 🧹 Removendo volumes antigos...
    docker-compose down -v
)

REM Construir e iniciar os containers
echo 🔨 Iniciando containers...
docker-compose up -d

REM Aguardar o PostgreSQL estar pronto
echo ⏳ Aguardando PostgreSQL estar pronto...
:wait_loop
docker-compose exec -T postgres pg_isready -U postgres -d gestao_agropecuaria >nul 2>&1
if errorlevel 1 (
    echo Aguardando PostgreSQL...
    timeout /t 2 /nobreak >nul
    goto wait_loop
)

echo ✅ PostgreSQL está pronto!

REM Executar migrações do Prisma
echo 🔄 Executando migrações do Prisma...
cd apps\backend
call npm run prisma:migrate:deploy

REM Gerar cliente Prisma
echo 🔧 Gerando cliente Prisma...
call npm run prisma:generate

cd ..\..

echo 🎉 Configuração concluída!
echo.
echo 📊 Informações de acesso:
echo    PostgreSQL: localhost:5432
echo    Database: gestao_agropecuaria
echo    Usuário: postgres
echo    Senha: postgres
echo.
echo 🌐 pgAdmin (opcional):
echo    URL: http://localhost:8080
echo    Email: admin@agrosys.com
echo    Senha: admin123
echo.
echo 🔗 DATABASE_URL para .env:
echo    postgresql://postgres:postgres@localhost:5432/gestao_agropecuaria?schema=public
echo.
echo 📝 Comandos úteis:
echo    docker-compose up -d          # Iniciar containers
echo    docker-compose down           # Parar containers
echo    docker-compose logs postgres  # Ver logs do PostgreSQL
echo    docker-compose exec postgres psql -U postgres -d gestao_agropecuaria  # Acessar banco
echo.
pause
