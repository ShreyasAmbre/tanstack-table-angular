export type ApprovalLevelType = {
  id: number,
  name: string,
  pfNo?: string
}

export type EmployeeType = {
  id: number,
  name: string,
  code: string,
  pfNo: string,
}

export const dummyEmployeeData: EmployeeType[] = [
  { id: 1, name: 'Emp 1', code: 'emp1', pfNo: "EMP001" },
  { id: 2, name: 'Emp 2', code: 'emp2', pfNo: "EMP002" },
  { id: 3, name: 'Emp 3', code: 'emp3', pfNo: "EMP003" },
]
