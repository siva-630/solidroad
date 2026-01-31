import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/customer')({
    component: Customer,
})

function Customer() {
    return (
        <div className="p-2 flex justify-center items-center min-h-screen">
            <h1 className="text-4xl font-bold">Customer Page</h1>
        </div>
    )
}
