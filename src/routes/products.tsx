import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products')({
    component: Products,
})

function Products() {
    return (
        <div className="p-2 flex justify-center items-center min-h-screen">
            <h1 className="text-4xl font-bold">Products Page</h1>
        </div>
    )
}
