// src/components/common/Pagination.jsx

import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

function Pagination({
    currentPage = 1,
    lastPage = 1,
    total = 0,
    perPage = 10,
    onPageChange,
}) {
    if (lastPage <= 1) return null;

    const start = total === 0 ? 0 : (currentPage - 1) * perPage + 1;
    const end = Math.min(currentPage * perPage, total);

    return (
        <div className="flex flex-col gap-3 border-t border-border px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{start}</span> to{" "}
                <span className="font-medium text-foreground">{end}</span> of{" "}
                <span className="font-medium text-foreground">{total}</span> records
            </p>

            <div className="flex items-center gap-2">
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled={currentPage <= 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className="rounded-md"
                >
                    <ChevronLeft className="mr-1 h-4 w-4" />
                    Previous
                </Button>

                <div className="flex items-center gap-1">
                    {Array.from({ length: lastPage }).map((_, index) => {
                        const page = index + 1;

                        return (
                            <Button
                                key={page}
                                type="button"
                                variant={page === currentPage ? "default" : "outline"}
                                size="sm"
                                onClick={() => onPageChange(page)}
                                className="h-9 w-9 rounded-md p-0"
                            >
                                {page}
                            </Button>
                        );
                    })}
                </div>

                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    disabled={currentPage >= lastPage}
                    onClick={() => onPageChange(currentPage + 1)}
                    className="rounded-md"
                >
                    Next
                    <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}

export default Pagination;