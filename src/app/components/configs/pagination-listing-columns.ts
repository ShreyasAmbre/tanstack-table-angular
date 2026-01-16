import { ColumnDef } from "@tanstack/angular-table";
import { Person } from "../models/persons.model";


export const paginationColumns: ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name'
  },
  {
    accessorKey: 'progress',
    header: 'Progress'
  },
  {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    accessorKey: 'visits',
    header: 'visits'
  }
]
