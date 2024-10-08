"use client"

// components
import AccountForm from "@/app/(admin)/account/_components/account-form"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

// hooks
// import { useRouter } from "next/navigation"

// types
import type { User } from "@/app/(admin)/users/constants"
import type { Row } from "@tanstack/react-table"

interface UsersClientProps {
  data?: User[]
}

const AccountClient = ({ data }: UsersClientProps) => {
  // init delete handler
  const handleDelete = async (rows: Row<User>[]) => {
    // const ids = rows.map((r) => r.original.id)
    // await toast.promise(deleteAccounts.mutateAsync({ ids }), {
    //   loading: <span className="animate-pulse">Deleting users...</span>,
    //   success: "Users deleted",
    //   error: (error: unknown) => clientErrorHandler(error),
    // })
    console.log(rows.map((r) => r.original.id))
  }

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title="Current Account"
          description="Manage your account information"
        />
      </div>
      <Separator className="mt-2" />

      <div className="container flex flex-col justify-center items-center lg:w-[400px] sm:w-[300px] h-auto p-5 mt-5">
        <AccountForm />
      </div>
    </>
  )
}

export default AccountClient
