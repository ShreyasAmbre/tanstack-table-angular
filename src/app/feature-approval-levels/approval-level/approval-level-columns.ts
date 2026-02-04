import { createColumnHelper } from "@tanstack/table-core";
import { ApprovalLevelType, dummyEmployeeData, EmployeeType } from "../data-access/approval-level.model";
import { ApprovalLevel } from "./approval-level";
import { ActionCell } from "../shared/action-cell/action-cell";
import { flexRenderComponent } from "@tanstack/angular-table";
import { DragHandleCell } from "../shared/drag-handle-cell/drag-handle-cell";
import { InputText } from "../shared/input-text/input-text";
import { SelectInput } from "../shared/select-input/select-input";


const columnHelper = createColumnHelper<ApprovalLevelType>();

export const createApprovalLevelListingColumns = (component: ApprovalLevel) => [
  columnHelper.display({
    id: 'dragHandle',
    header: 'Move',
    cell: () => flexRenderComponent(DragHandleCell, {}),
    size: 60,
  }),

  columnHelper.accessor('id', {
    header: 'ID',
  }),

  // columnHelper.display({
  //   id: 'name',
  //   header: 'Employee Name',
  //   cell: (info) =>
  //   flexRenderComponent(SelectInput, {
  //     inputs: {
  //       optionList: dummyEmployeeData,
  //       inputControl: component.formArray()
  //         .at(info.row.index)
  //         .get('name') as any,
  //     },
  //   }),
  // }),

  columnHelper.display({
    id: 'name',
    header: 'Employee Name',
    cell: (info) =>
      flexRenderComponent(SelectInput, {
        inputs: {
          optionList: dummyEmployeeData,
          inputControl:
            component.formArray()
              .at(info.row.index)
              .get('name') ?? undefined,
        },
      }),
  }),

  columnHelper.display({
    id: 'pfNo',
    header: 'PF No.',
    cell: (info) =>
      flexRenderComponent(InputText, {
        inputs: {
          inputControl: component.formArray()
            .at(info.row.index)
            .get('pfNo') ?? undefined,
        },
      }),
  }),

  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    enableSorting: false,
    cell: (info) =>
      flexRenderComponent(ActionCell, {
        inputs: {
          row: info.row.original,
          isDeleteVisible: true,
        },
        outputs: {
          delete: (row: ApprovalLevelType) => component.onDelete(row),
        }
      })
  })
]
