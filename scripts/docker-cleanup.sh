#!/bin/bash

# Script para limpeza completa dos containers e volumes Docker
# AgroSys - Sistema de Gestão Agropecuária

echo "🧹 Iniciando limpeza dos containers Docker..."

# Parar e remover containers
echo "🛑 Parando containers..."
docker-compose down

# Remover volumes
echo "🗑️ Removendo volumes..."
docker-compose down -v

# Remover imagens não utilizadas
echo "🖼️ Removendo imagens não utilizadas..."
docker image prune -f

# Remover redes não utilizadas
echo "🌐 Removendo redes não utilizadas..."
docker network prune -f

# Remover volumes não utilizados
echo "💾 Removendo volumes não utilizados..."
docker volume prune -f

echo "✅ Limpeza concluída!"
echo ""
echo "📝 Para recriar o ambiente:"
echo "   ./scripts/docker-setup.sh"
