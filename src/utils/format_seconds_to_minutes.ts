export function format_seconds_to_minutes(seconds?: number): string {
  // Validar que sea un número finito (evita NaN, Infinity)
  if (!Number.isFinite(seconds) || !seconds) {
    return "0:00";
  }

  // Asegurar que sea un entero (opcional, según necesidad)
  const sec_num: number = Math.floor(seconds);

  // Calcular minutos y segundos
  const total_minutes: number = Math.floor(sec_num / 60);
  const remaining_seconds: number = sec_num % 60;

  // Formatear segundos a 2 dígitos (ej: 5 → "05")
  const formatted_seconds: string = remaining_seconds.toString().padStart(2, "0");

  return `${total_minutes}:${formatted_seconds}`;
}
