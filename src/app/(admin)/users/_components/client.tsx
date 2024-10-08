"use client"

// components
import { columns } from "@/app/(admin)/users/_components/columns"
import DataTable from "@/components/ui/data-table"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

// hooks
import { useRouter } from "next/navigation"

// types
import type { User } from "@/app/(admin)/users/constants"
import type { Row } from "@tanstack/react-table"

interface UsersClientProps {
  data: User[]
}

const UsersClient = ({ data }: UsersClientProps) => {
  // init delete handler
  const handleDelete = async (rows: Row<User>[]) => {
    // const ids = rows.map((r) => r.original.id)
    // await toast.promise(deleteAccounts.mutateAsync({ ids }), {
    //   loading: <span className="animate-pulse">Deleting users...</span>,
    //   success: "Users deleted",
    //   error: (error: unknown) => clientErrorHandler(error),
    // })
  }

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading title={`Users (${data.length})`} description="Manage users" />
      </div>
      <Separator className="mt-2" />
      <DataTable
        filterKey="name"
        placeholder="John Doe"
        columns={columns}
        isOnUsers
        data={data || []}
        onDelete={handleDelete}
      />
    </>
  )
}

export default UsersClient
