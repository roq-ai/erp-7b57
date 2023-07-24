import { InvoiceInterface } from 'interfaces/invoice';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  description?: string;
  organization_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  invoice?: InvoiceInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    invoice?: number;
  };
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  organization_id?: string;
  user_id?: string;
}
