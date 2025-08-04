import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando seed do banco de dados...");

  // Criar UAPs de exemplo
  const uap1 = await prisma.uAP.create({
    data: {
      name: "UAP Norte",
      location: "Setor Norte",
      area: 25.5,
      cropType: "Soja",
      responsible: "João Silva",
      observations: "Área principal de produção",
    },
  });

  const uap2 = await prisma.uAP.create({
    data: {
      name: "UAP Sul",
      location: "Setor Sul",
      area: 18.2,
      cropType: "Milho",
      responsible: "Maria Santos",
      observations: "Área de rotação de culturas",
    },
  });

  // Criar produtos
  const produto1 = await prisma.product.create({
    data: {
      name: "Soja Grão",
      description: "Soja para comercialização",
      price: 180.5,
      quantity: 1000,
      status: "AVAILABLE",
      category: "Grãos",
    },
  });

  const produto2 = await prisma.product.create({
    data: {
      name: "Milho Grão",
      description: "Milho para comercialização",
      price: 85.3,
      quantity: 500,
      status: "AVAILABLE",
      category: "Grãos",
    },
  });

  const produto3 = await prisma.product.create({
    data: {
      name: "Fertilizante NPK",
      description: "Fertilizante NPK 10-20-20",
      price: 120.0,
      quantity: 5, // Estoque baixo para gerar alerta
      status: "AVAILABLE",
      category: "Fertilizantes",
    },
  });

  // Criar ferramentas
  const tool1 = await prisma.tool.create({
    data: {
      toolName: "Trator Massey Ferguson",
      status: "Ativo",
    },
  });

  const tool2 = await prisma.tool.create({
    data: {
      toolName: "Colheitadeira John Deere",
      status: "Ativo",
    },
  });

  // Criar vendas
  const venda1 = await prisma.sale.create({
    data: {
      uapId: uap1.id,
      totalAmount: 45000.0,
      status: "COMPLETED",
      saleDate: new Date("2024-01-15"),
    },
  });

  const venda2 = await prisma.sale.create({
    data: {
      uapId: uap2.id,
      totalAmount: 32000.0,
      status: "COMPLETED",
      saleDate: new Date("2024-01-20"),
    },
  });

  // Criar itens de venda
  await prisma.saleItem.create({
    data: {
      saleId: venda1.id,
      productId: produto1.id,
      quantity: 250,
      unitPrice: 180.5,
      totalPrice: 45125.0,
    },
  });

  await prisma.saleItem.create({
    data: {
      saleId: venda2.id,
      productId: produto2.id,
      quantity: 375,
      unitPrice: 85.3,
      totalPrice: 31987.5,
    },
  });

  // Criar colheitas
  await prisma.harvest.create({
    data: {
      harvestDate: new Date("2024-01-10"),
      product: "Soja",
      quantity: 250.0,
      unit: "SACA",
      uap: uap1.name,
      responsible: "João Silva",
      cycle: "2023/2024",
      status: "COMPLETED",
      equipment: "Colheitadeira John Deere",
      observations: "Colheita realizada com sucesso",
    },
  });

  await prisma.harvest.create({
    data: {
      harvestDate: new Date("2024-01-25"),
      product: "Milho",
      quantity: 375.0,
      unit: "SACA",
      uap: uap2.name,
      responsible: "Maria Santos",
      cycle: "2023/2024",
      status: "COMPLETED",
      equipment: "Colheitadeira John Deere",
      observations: "Colheita realizada com sucesso",
    },
  });

  // Criar entradas de insumos
  await prisma.inputMaterialEntry.create({
    data: {
      date: new Date("2024-01-05"),
      amount: 50.0,
      unit: "SACA",
      productId: produto1.id,
    },
  });

  await prisma.inputMaterialEntry.create({
    data: {
      date: new Date("2024-01-12"),
      amount: 30.0,
      unit: "SACA",
      productId: produto2.id,
    },
  });

  // Criar faturas
  await prisma.invoice.create({
    data: {
      saleId: venda1.id,
      uapId: uap1.id,
      invoiceNumber: "INV-2024-001",
      totalAmount: 45000.0,
      status: "PAID",
      issueDate: new Date("2024-01-15"),
      dueDate: new Date("2024-02-15"),
      paidDate: new Date("2024-01-20"),
    },
  });

  await prisma.invoice.create({
    data: {
      saleId: venda2.id,
      uapId: uap2.id,
      invoiceNumber: "INV-2024-002",
      totalAmount: 32000.0,
      status: "ISSUED",
      issueDate: new Date("2024-01-20"),
      dueDate: new Date("2024-02-20"),
    },
  });

  // Criar alertas
  await prisma.alert.create({
    data: {
      title: "Estoque Crítico",
      description: "Fertilizante NPK: Restam apenas 5 sacas",
      priority: "URGENT",
      status: "ACTIVE",
      type: "inventory",
      entityId: produto3.id,
      entityType: "product",
    },
  });

  await prisma.alert.create({
    data: {
      title: "Manutenção Pendente",
      description: "Trator John Deere: Manutenção agendada para amanhã",
      priority: "WARNING",
      status: "ACTIVE",
      type: "maintenance",
      entityId: tool2.id,
      entityType: "tool",
    },
  });

  await prisma.alert.create({
    data: {
      title: "Colheita Programada",
      description: "Soja: Colheita programada para próxima semana",
      priority: "INFO",
      status: "ACTIVE",
      type: "harvest",
      entityId: uap1.id,
      entityType: "uap",
    },
  });

  // Criar atividades
  await prisma.activity.create({
    data: {
      title: "Colheita da Soja",
      description: "Colheita da soja na UAP Norte",
      type: "HARVEST",
      status: "SCHEDULED",
      scheduledDate: new Date("2024-02-15"),
      location: "UAP Norte",
      responsible: "João Silva",
      uapId: uap1.id,
      quantity: 250.0,
      unit: "SACA",
    },
  });

  await prisma.activity.create({
    data: {
      title: "Aplicação de Fertilizante",
      description: "Aplicação de fertilizante NPK na UAP Sul",
      type: "FERTILIZER",
      status: "SCHEDULED",
      scheduledDate: new Date("2024-02-12"),
      location: "UAP Sul",
      responsible: "Maria Santos",
      uapId: uap2.id,
      productId: produto3.id,
      quantity: 20.0,
      unit: "SACA",
    },
  });

  await prisma.activity.create({
    data: {
      title: "Manutenção do Trator",
      description: "Manutenção preventiva do trator",
      type: "MAINTENANCE",
      status: "SCHEDULED",
      scheduledDate: new Date("2024-02-18"),
      location: "Garagem",
      responsible: "Pedro Mecânico",
      toolId: tool1.id,
    },
  });

  // Criar atividades recentes (completadas)
  await prisma.activity.create({
    data: {
      title: "Aplicação de fertilizante concluída",
      description: "Aplicação de fertilizante NPK concluída",
      type: "FERTILIZER",
      status: "COMPLETED",
      scheduledDate: new Date("2024-01-28"),
      completedDate: new Date("2024-01-28"),
      location: "UAP Norte",
      responsible: "João Silva",
      uapId: uap1.id,
      productId: produto3.id,
      quantity: 15.0,
      unit: "SACA",
    },
  });

  await prisma.activity.create({
    data: {
      title: "Nova colheita registrada",
      description: "Colheita de milho registrada",
      type: "HARVEST",
      status: "COMPLETED",
      scheduledDate: new Date("2024-01-25"),
      completedDate: new Date("2024-01-25"),
      location: "UAP Sul",
      responsible: "Maria Santos",
      uapId: uap2.id,
      quantity: 375.0,
      unit: "SACA",
    },
  });

  await prisma.activity.create({
    data: {
      title: "Manutenção do trator realizada",
      description: "Manutenção preventiva do trator concluída",
      type: "MAINTENANCE",
      status: "COMPLETED",
      scheduledDate: new Date("2024-01-27"),
      completedDate: new Date("2024-01-27"),
      location: "Garagem",
      responsible: "Pedro Mecânico",
      toolId: tool1.id,
    },
  });

  await prisma.activity.create({
    data: {
      title: "Estoque de insumos atualizado",
      description: "Entrada de fertilizantes registrada",
      type: "INVENTORY",
      status: "COMPLETED",
      scheduledDate: new Date("2024-01-26"),
      completedDate: new Date("2024-01-26"),
      location: "Depósito",
      responsible: "João Silva",
    },
  });

  // Criar manutenções
  await prisma.maintenance.create({
    data: {
      title: "Manutenção Preventiva - Trator",
      description: "Manutenção preventiva do trator Massey Ferguson",
      type: "PREVENTIVE",
      status: "SCHEDULED",
      scheduledDate: new Date("2024-02-18"),
      toolId: tool1.id,
      responsible: "Pedro Mecânico",
      cost: 1500.0,
    },
  });

  await prisma.maintenance.create({
    data: {
      title: "Manutenção Corretiva - Colheitadeira",
      description: "Reparo na colheitadeira John Deere",
      type: "CORRECTIVE",
      status: "COMPLETED",
      scheduledDate: new Date("2024-01-20"),
      completedDate: new Date("2024-01-22"),
      toolId: tool2.id,
      responsible: "Pedro Mecânico",
      cost: 3000.0,
    },
  });

  // Criar aplicações de fertilizantes
  await prisma.fertilizerApplication.create({
    data: {
      title: "Aplicação NPK - UAP Norte",
      description: "Aplicação de fertilizante NPK na UAP Norte",
      applicationDate: new Date("2024-01-28"),
      uapId: uap1.id,
      productId: produto3.id,
      quantity: 15.0,
      unit: "SACA",
      responsible: "João Silva",
      method: "Aplicação no solo",
    },
  });

  await prisma.fertilizerApplication.create({
    data: {
      title: "Aplicação NPK - UAP Sul",
      description: "Aplicação de fertilizante NPK na UAP Sul",
      applicationDate: new Date("2024-02-12"),
      uapId: uap2.id,
      productId: produto3.id,
      quantity: 20.0,
      unit: "SACA",
      responsible: "Maria Santos",
      method: "Aplicação no solo",
    },
  });

  // Criar custos
  await prisma.cost.create({
    data: {
      title: "Compra de Fertilizantes",
      description: "Compra de fertilizante NPK",
      amount: 6000.0,
      category: "INPUTS",
      date: new Date("2024-01-15"),
    },
  });

  await prisma.cost.create({
    data: {
      title: "Salário - João Silva",
      description: "Salário do funcionário João Silva",
      amount: 2500.0,
      category: "LABOR",
      date: new Date("2024-01-31"),
    },
  });

  await prisma.cost.create({
    data: {
      title: "Manutenção Colheitadeira",
      description: "Reparo na colheitadeira",
      amount: 3000.0,
      category: "MAINTENANCE",
      date: new Date("2024-01-22"),
      maintenanceId: "maintenance-2", // Referência à manutenção criada
    },
  });

  await prisma.cost.create({
    data: {
      title: "Combustível - Trator",
      description: "Combustível para trator",
      amount: 800.0,
      category: "FUEL",
      date: new Date("2024-01-20"),
    },
  });

  await prisma.cost.create({
    data: {
      title: "Outros Gastos",
      description: "Gastos diversos",
      amount: 500.0,
      category: "OTHER",
      date: new Date("2024-01-25"),
    },
  });

  // Criar logs de atividades
  await prisma.activityLog.create({
    data: {
      title: "Colheita registrada",
      description: "Nova colheita de soja registrada",
      type: "HARVEST",
      entityId: uap1.id,
      entityType: "uap",
      metadata: {
        quantity: 250,
        unit: "SACA",
        product: "Soja",
      },
    },
  });

  await prisma.activityLog.create({
    data: {
      title: "Fertilizante aplicado",
      description: "Aplicação de fertilizante NPK",
      type: "FERTILIZER",
      entityId: uap1.id,
      entityType: "uap",
      metadata: {
        quantity: 15,
        unit: "SACA",
        product: "NPK",
      },
    },
  });

  await prisma.activityLog.create({
    data: {
      title: "Manutenção realizada",
      description: "Manutenção do trator concluída",
      type: "MAINTENANCE",
      entityId: tool1.id,
      entityType: "tool",
      metadata: {
        type: "PREVENTIVE",
        cost: 1500,
      },
    },
  });

  console.log("Seed concluído com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
