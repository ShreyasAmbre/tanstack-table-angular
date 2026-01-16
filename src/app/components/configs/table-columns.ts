import { ColumnDef } from "@tanstack/angular-table";
import { Person } from "../models/persons.model";



export const defaultColumns: ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
    /* Note: Those two steps of "cell" & "footer" are handle by Tanstack by its own only use cell when you want to
    modify the value or do some operation on it */

    // cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  },
  {
    id: 'fullName', // id required when using accessorFn()
    accessorFn: (row) => `${row.firstName} ${row.lastName}`, // accessorFn() is used when the data exists in pieces, but you want a combined field.
    header: () => 'Full Name',
    // cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  },
  {
    accessorKey: 'age',
    header: () => 'Age',
    // cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  },
  {
    accessorKey: 'visits',
    header: () => 'Visits',
    // cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    // cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  },
  {
    accessorKey: 'progress',
    header: 'Profile Progress',
    // cell: (info) => info.getValue(),
    // footer: (info) => info.column.id,
  },

]
