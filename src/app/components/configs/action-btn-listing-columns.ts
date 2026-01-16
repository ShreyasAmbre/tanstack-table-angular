import { ColumnDef, flexRenderComponent } from "@tanstack/angular-table";
import { Person } from "../models/persons.model";
import { ActionCell } from "../../shared/action-cell/action-cell";
import { EntityCell } from "../../shared/entity-cell/entity-cell";


export const actionBtnsColumns: ColumnDef<Person>[] = [
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
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: (info) =>
    flexRenderComponent(ActionCell, {
      inputs: {
        row: info.row.original
      },
      outputs: {
        view: (row) => console.log('View:', row),
        edit: (row) => console.log('Edit:', row),
        delete: (row) => console.log('Delete:', row),
      }
    })
  }
]
