/**
 * Utilitários de Ordenação para o Sistema de Gestão Agropecuária
 *
 * Este módulo implementa diferentes algoritmos de ordenação e funções utilitárias
 * para ordenar dados em todo o sistema.
 */

// Tipos para ordenação
export type SortDirection = "asc" | "desc";
export type SortField<T> = keyof T;

export interface SortOptions<T> {
  field: SortField<T>;
  direction: SortDirection;
}

export interface SortableItem {
  id: string | number;
  [key: string]: any;
}

/**
 * Algoritmo de Ordenação Bubble Sort
 * Complexidade: O(n²)
 * Estável: Sim
 * In-place: Sim
 */
export function bubbleSort<T extends SortableItem>(
  array: T[],
  options: SortOptions<T>
): T[] {
  const { field, direction } = options;
  const result = [...array];
  const n = result.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      const current = result[j][field];
      const next = result[j + 1][field];

      const shouldSwap = direction === "asc" ? current > next : current < next;

      if (shouldSwap) {
        // Trocar elementos
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }

  return result;
}

/**
 * Algoritmo de Ordenação Quick Sort
 * Complexidade: O(n log n) média, O(n²) pior caso
 * Estável: Não
 * In-place: Sim
 */
export function quickSort<T extends SortableItem>(
  array: T[],
  options: SortOptions<T>
): T[] {
  const { field, direction } = options;
  const result = [...array];

  function partition(low: number, high: number): number {
    const pivot = result[high][field];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      const current = result[j][field];
      const shouldSwap =
        direction === "asc" ? current <= pivot : current >= pivot;

      if (shouldSwap) {
        i++;
        [result[i], result[j]] = [result[j], result[i]];
      }
    }

    [result[i + 1], result[high]] = [result[high], result[i + 1]];
    return i + 1;
  }

  function sort(low: number, high: number): void {
    if (low < high) {
      const pi = partition(low, high);
      sort(low, pi - 1);
      sort(pi + 1, high);
    }
  }

  sort(0, result.length - 1);
  return result;
}

/**
 * Algoritmo de Ordenação Merge Sort
 * Complexidade: O(n log n)
 * Estável: Sim
 * In-place: Não
 */
export function mergeSort<T extends SortableItem>(
  array: T[],
  options: SortOptions<T>
): T[] {
  const { field, direction } = options;

  function merge(left: T[], right: T[]): T[] {
    const result: T[] = [];
    let i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      const leftValue = left[i][field];
      const rightValue = right[j][field];

      const shouldTakeLeft =
        direction === "asc" ? leftValue <= rightValue : leftValue >= rightValue;

      if (shouldTakeLeft) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    // Adicionar elementos restantes
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }

    while (j < right.length) {
      result.push(right[j]);
      j++;
    }

    return result;
  }

  function sort(arr: T[]): T[] {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = sort(arr.slice(0, mid));
    const right = sort(arr.slice(mid));

    return merge(left, right);
  }

  return sort([...array]);
}

/**
 * Algoritmo de Ordenação Heap Sort
 * Complexidade: O(n log n)
 * Estável: Não
 * In-place: Sim
 */
export function heapSort<T extends SortableItem>(
  array: T[],
  options: SortOptions<T>
): T[] {
  const { field, direction } = options;
  const result = [...array];
  const n = result.length;

  function heapify(n: number, i: number): void {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n) {
      const leftValue = result[left][field];
      const largestValue = result[largest][field];
      const shouldUpdate =
        direction === "asc"
          ? leftValue > largestValue
          : leftValue < largestValue;

      if (shouldUpdate) {
        largest = left;
      }
    }

    if (right < n) {
      const rightValue = result[right][field];
      const largestValue = result[largest][field];
      const shouldUpdate =
        direction === "asc"
          ? rightValue > largestValue
          : rightValue < largestValue;

      if (shouldUpdate) {
        largest = right;
      }
    }

    if (largest !== i) {
      [result[i], result[largest]] = [result[largest], result[i]];
      heapify(n, largest);
    }
  }

  // Construir heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(n, i);
  }

  // Extrair elementos do heap
  for (let i = n - 1; i > 0; i--) {
    [result[0], result[i]] = [result[i], result[0]];
    heapify(i, 0);
  }

  return result;
}

/**
 * Função de ordenação inteligente que escolhe o melhor algoritmo
 * baseado no tamanho do array e tipo de dados
 */
export function smartSort<T extends SortableItem>(
  array: T[],
  options: SortOptions<T>
): T[] {
  const { field, direction } = options;
  const n = array.length;

  // Para arrays pequenos, usar bubble sort (simples e estável)
  if (n <= 10) {
    return bubbleSort(array, options);
  }

  // Para arrays médios, usar merge sort (estável e eficiente)
  if (n <= 1000) {
    return mergeSort(array, options);
  }

  // Para arrays grandes, usar quick sort (mais eficiente)
  return quickSort(array, options);
}

/**
 * Ordenação por múltiplos campos
 */
export function multiFieldSort<T extends SortableItem>(
  array: T[],
  options: SortOptions<T>[]
): T[] {
  return [...array].sort((a, b) => {
    for (const { field, direction } of options) {
      const aValue = a[field];
      const bValue = b[field];

      if (aValue < bValue) {
        return direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return direction === "asc" ? 1 : -1;
      }
    }
    return 0;
  });
}

/**
 * Ordenação natural para strings (considera números)
 */
export function naturalSort<T extends SortableItem>(
  array: T[],
  options: SortOptions<T>
): T[] {
  const { field, direction } = options;

  function naturalCompare(a: string, b: string): number {
    const aParts = a.match(/(\d+|\D+)/g) || [];
    const bParts = b.match(/(\d+|\D+)/g) || [];

    const maxLength = Math.max(aParts.length, bParts.length);

    for (let i = 0; i < maxLength; i++) {
      const aPart = aParts[i] || "";
      const bPart = bParts[i] || "";

      const aNum = parseInt(aPart, 10);
      const bNum = parseInt(bPart, 10);

      if (!isNaN(aNum) && !isNaN(bNum)) {
        if (aNum !== bNum) {
          return aNum - bNum;
        }
      } else {
        const comparison = aPart.localeCompare(bPart);
        if (comparison !== 0) {
          return comparison;
        }
      }
    }

    return 0;
  }

  return [...array].sort((a, b) => {
    const aValue = String(a[field]);
    const bValue = String(b[field]);
    const comparison = naturalCompare(aValue, bValue);
    return direction === "asc" ? comparison : -comparison;
  });
}

/**
 * Ordenação por data
 */
export function dateSort<T extends SortableItem>(
  array: T[],
  options: SortOptions<T>
): T[] {
  const { field, direction } = options;

  return [...array].sort((a, b) => {
    const aDate = new Date(a[field]);
    const bDate = new Date(b[field]);

    if (aDate < bDate) {
      return direction === "asc" ? -1 : 1;
    }
    if (aDate > bDate) {
      return direction === "asc" ? 1 : -1;
    }
    return 0;
  });
}

/**
 * Ordenação por valores monetários
 */
export function currencySort<T extends SortableItem>(
  array: T[],
  options: SortOptions<T>
): T[] {
  const { field, direction } = options;

  function parseCurrency(value: any): number {
    if (typeof value === "number") return value;
    if (typeof value === "string") {
      // Remove R$, espaços e converte vírgula para ponto
      return parseFloat(value.replace(/[R$\s]/g, "").replace(",", "."));
    }
    return 0;
  }

  return [...array].sort((a, b) => {
    const aValue = parseCurrency(a[field]);
    const bValue = parseCurrency(b[field]);

    if (aValue < bValue) {
      return direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return direction === "asc" ? 1 : -1;
    }
    return 0;
  });
}

/**
 * Função utilitária para ordenar dados do sistema agropecuário
 */
export function agroSort<T extends SortableItem>(
  array: T[],
  field: SortField<T>,
  direction: SortDirection = "asc",
  type: "default" | "date" | "currency" | "natural" = "default"
): T[] {
  const options: SortOptions<T> = { field, direction };

  switch (type) {
    case "date":
      return dateSort(array, options);
    case "currency":
      return currencySort(array, options);
    case "natural":
      return naturalSort(array, options);
    default:
      return smartSort(array, options);
  }
}

/**
 * Função para ordenar dados específicos do sistema
 */
export const agroSorting = {
  // Ordenar vendas por data
  salesByDate: <T extends SortableItem>(sales: T[]) =>
    dateSort(sales, { field: "data" as SortField<T>, direction: "desc" }),

  // Ordenar vendas por valor
  salesByValue: <T extends SortableItem>(sales: T[]) =>
    currencySort(sales, { field: "valor" as SortField<T>, direction: "desc" }),

  // Ordenar ferramentas por nome
  toolsByName: <T extends SortableItem>(tools: T[]) =>
    naturalSort(tools, { field: "toolName" as SortField<T>, direction: "asc" }),

  // Ordenar produtos por quantidade
  productsByQuantity: <T extends SortableItem>(products: T[]) =>
    smartSort(products, {
      field: "quantidade" as SortField<T>,
      direction: "desc",
    }),

  // Ordenar insumos por validade
  inputsByExpiry: <T extends SortableItem>(inputs: T[]) =>
    dateSort(inputs, { field: "validade" as SortField<T>, direction: "asc" }),

  // Ordenar colheitas por data
  harvestsByDate: <T extends SortableItem>(harvests: T[]) =>
    dateSort(harvests, { field: "data" as SortField<T>, direction: "desc" }),
};
