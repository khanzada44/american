/** Joins class names, skipping empty values. */
export function cx(...parts) {
  return parts.filter(Boolean).join(' ');
}
