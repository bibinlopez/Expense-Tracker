export function dateValues(date, months) {
  const d = new Date(date);
  const originalDay = d.getDate();

  d.setMonth(d.getMonth() + months);

  if (d.getDate() !== originalDay) {
    d.setDate(0);
  }

  const monthStr = d.toLocaleString("default", { month: "long" });
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  return { monthStr, month, year };
}
