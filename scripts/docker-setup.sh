#!/bin/bash

# Script para configurar e executar o banco de dados PostgreSQL em Docker
# AgroSys - Sistema de Gestão Agropecuária

set -e

echo "🚀 Configurando banco de dados PostgreSQL para AgroSys..."

# Verificar se o Docker está instalado
if ! command -v docker &> /dev/null; then
    echo "❌ Docker não está instalado. Por favor, instale o Docker primeiro."
    exit 1
fi

# Verificar se o Docker Compose está disponível
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose não está disponível. Por favor, instale o Docker Compose primeiro."
    exit 1
fi

# Criar diretório para dados do PostgreSQL se não existir
mkdir -p docker/postgres/data

# Parar containers existentes se houver
echo "🛑 Parando containers existentes..."
docker-compose down

# Remover volumes antigos se solicitado
if [ "$1" = "--clean" ]; then
    echo "🧹 Removendo volumes antigos..."
    docker-compose down -v
fi

# Construir e iniciar os containers
echo "🔨 Iniciando containers..."
docker-compose up -d

# Aguardar o PostgreSQL estar pronto
echo "⏳ Aguardando PostgreSQL estar pronto..."
until docker-compose exec -T postgres pg_isready -U postgres -d gestao_agropecuaria; do
    echo "Aguardando PostgreSQL..."
    sleep 2
done

echo "✅ PostgreSQL está pronto!"

# Executar migrações do Prisma
echo "🔄 Executando migrações do Prisma..."
cd apps/backend
npm run prisma:migrate:deploy

# Gerar cliente Prisma
echo "🔧 Gerando cliente Prisma..."
npm run prisma:generate

echo "🎉 Configuração concluída!"
echo ""
echo "📊 Informações de acesso:"
echo "   PostgreSQL: localhost:5432"
echo "   Database: gestao_agropecuaria"
echo "   Usuário: postgres"
echo "   Senha: postgres"
echo ""
echo "🌐 pgAdmin (opcional):"
echo "   URL: http://localhost:8080"
echo "   Email: admin@agrosys.com"
echo "   Senha: admin123"
echo ""
echo "🔗 DATABASE_URL para .env:"
echo "   postgresql://postgres:postgres@localhost:5432/gestao_agropecuaria?schema=public"
echo ""
echo "📝 Comandos úteis:"
echo "   docker-compose up -d          # Iniciar containers"
echo "   docker-compose down           # Parar containers"
echo "   docker-compose logs postgres  # Ver logs do PostgreSQL"
echo "   docker-compose exec postgres psql -U postgres -d gestao_agropecuaria  # Acessar banco"
