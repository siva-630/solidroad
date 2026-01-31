import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/career')({
    component: Career,
})

function Career() {
    return (
        <div className="p-2 flex justify-center items-center min-h-screen bg-green">
            <h1 className="text-4xl font-bold">Career Page</h1>
        </div>
    )
}
