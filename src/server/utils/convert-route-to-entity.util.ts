const mapping: Record<string, string> = {
  invoices: 'invoice',
  organizations: 'organization',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
