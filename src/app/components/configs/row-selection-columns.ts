import { ColumnDef, flexRenderComponent } from "@tanstack/angular-table";
import { Person } from "../models/persons.model";
import { CheckboxCell } from "../../shared/checkbox-cell/checkbox-cell";


export const rowSelectionColumns: ColumnDef<Person>[] = [
  {
    id: 'select',
    header: ( {table} ) =>
    flexRenderComponent(CheckboxCell, {
      inputs: {
        checked: table.getIsAllRowsSelected(),
        indeterminate: table.getIsSomeRowsSelected(),
      },
      outputs: {
        toggle: (value: boolean) => table.toggleAllRowsSelected(value),
      },
    }),
    cell: ({ row }) =>
    flexRenderComponent(CheckboxCell, {
      inputs: {
        checked: row.getIsSelected(),
      },
      outputs: {
        toggle: (value: boolean) => row.toggleSelected(value),
      },
    }),

  },
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
