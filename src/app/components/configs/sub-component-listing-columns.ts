import { ColumnDef, flexRenderComponent } from "@tanstack/angular-table";
import { Person } from "../models/persons.model";
import { EntityCell } from "../../shared/entity-cell/entity-cell";


export const subCompListingColumns: ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
    cell: (info) =>
    flexRenderComponent(EntityCell, {
      inputs: {
        avatarImgUrl: info.row.original.avatarUrl,
        cellTitle: info.row.original.firstName,
        cellSubTitle: info.row.original.lastName
      },
    }),
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'progress',
    header: 'Progress',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'visits',
    header: 'visits',
    cell: (info) => info.getValue(),
  }
]
