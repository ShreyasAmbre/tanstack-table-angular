import { ColumnDef } from "@tanstack/angular-table";
import { Person } from "../models/persons.model";


export const filterTableColumns: ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
    enableColumnFilter: true,
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
    enableColumnFilter: true,
  },
  {
    accessorKey: 'age',
    header: 'Age',
    enableColumnFilter: true,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    enableColumnFilter: true,
  },
  {
    accessorKey: 'progress',
    header: 'Progress',
    enableColumnFilter: true,
  }
]
