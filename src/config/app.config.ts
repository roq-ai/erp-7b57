interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Lawyer', 'Accountant', 'Owner'],
  tenantName: 'Organization',
  applicationName: 'erp',
  addOns: ['chat', 'notifications', 'file'],
};
