import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
}

export function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      <Button variant="outline" size="icon" asChild disabled={currentPage <= 1}>
        <Link href={currentPage > 1 ? `${basePath}?page=${currentPage - 1}` : `${basePath}`}>
          <ChevronLeft className="h-4 w-4" />
        </Link>
      </Button>

      <div className="text-sm">
        Page {currentPage} of {totalPages}
      </div>

      <Button variant="outline" size="icon" asChild disabled={currentPage >= totalPages}>
        <Link href={`${basePath}?page=${currentPage + 1}`}>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}
