import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/edit-form";
import {fetchCustomers} from "@/app/lib/data";

export default async function Page({params}: { params: { id: string } }) {
    const id = params.id;
    return (
        <main>
            <Breadcrumbs breadcrumbs={[
                {label: 'Invoices', href: '/dashboard/invoices'},
                {label: 'Edit Invoice', href: '/dashboard/invoices/edit', active: true},
            ]}/>
            <Form invoice={invoice} customers={customers}/>
        </main>
    );
}