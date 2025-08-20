-- Script de inicialização do banco de dados AgroSys
-- Este script é executado automaticamente quando o container PostgreSQL é criado pela primeira vez

-- Criar extensões necessárias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Configurar timezone
SET timezone = 'America/Sao_Paulo';

-- Criar usuário específico para a aplicação (opcional)
-- CREATE USER agrosys_user WITH PASSWORD 'agrosys_password';
-- GRANT ALL PRIVILEGES ON DATABASE gestao_agropecuaria TO agrosys_user;

-- Log de inicialização
DO $$
BEGIN
    RAISE NOTICE 'Banco de dados AgroSys inicializado com sucesso!';
    RAISE NOTICE 'Database: %', current_database();
    RAISE NOTICE 'User: %', current_user;
    RAISE NOTICE 'Timezone: %', current_setting('timezone');
END $$;
