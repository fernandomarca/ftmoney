export function formatDates(date: string): string {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
}
