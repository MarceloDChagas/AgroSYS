#!/bin/sh

COMMIT_MSG_FILE="$1"
MIN_LENGTH=15

MSG=$(cat "$COMMIT_MSG_FILE")

if [ ${#MSG} -lt $MIN_LENGTH ]; then
  echo "❌ A mensagem do commit deve ter pelo menos $MIN_LENGTH caracteres."
  exit 1
fi 