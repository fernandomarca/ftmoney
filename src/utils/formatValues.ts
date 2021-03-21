export function formatValues(value: number, type: string): string {
  const formatValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  if (type === "withdraw") {
    return `- ${formatValue}`;
  }

  return formatValue;
}
