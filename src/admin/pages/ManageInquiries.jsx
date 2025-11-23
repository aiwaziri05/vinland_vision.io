import { useState } from 'react';
import { inquiriesColumns } from '../config/inquiries.columns.jsx';
import ReusableTable from '../components/ui/Table.jsx';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal.jsx';
import { mobileCardFields } from '../config/mobileCardsFields.jsx';

export default function ManageInquiries() {
	const initialInquiries = [
		{ id: 1, sender: 'Elena Petrov', email: 'elena.p@email.com', subject: 'Inquiry about commercial build-out', date: 'Oct 26, 2023', active: true },
		{ id: 2, sender: 'Marcus Thorne', email: 'm.thorne@corp.net', subject: 'Request for quote - residential remodel', date: 'Oct 25, 2023', active: true },
		{ id: 3, sender: 'Anya Sharma', email: 'anya.s@webmail.com', subject: 'Follow-up on project proposal #1124', date: 'Oct 24, 2023', active: false },
		{ id: 4, sender: 'Chen Wei', email: 'chen.wei@techsolutions.io', subject: 'Architectural consultation services', date: 'Oct 23, 2023', active: false },
		{ id: 5, sender: 'Sofia Rossi', email: 'sofia.rossi@designs.it', subject: 'Partnership opportunities', date: 'Oct 22, 2023', active: true },
	];

	const [inquiries, setInquiries] = useState(initialInquiries);
	const [deleteTarget, setDeleteTarget] = useState(null);

	const handleDelete = (id) => {
		setInquiries((prev) => prev.filter((i) => i.id !== id));
		setDeleteTarget(null);
	};

	return (
		<div className='ps-1 flex flex-col gap-6 w-full overflow-x-hidden'>
			{/* Header */}
			<div className='flex flex-col gap-2 mb-8'>
				<h1 className='text-3xl font-bold text-gray-800'>Manage Inquiries</h1>
				<p className='text-gray-500 text-sm'>View or remove inquiries submitted by clients.</p>
			</div>

			{/* Reusable Table Component */}
			<ReusableTable
				data={inquiries}
				columns={inquiriesColumns}
				mobileCardFields={mobileCardFields}
				actions={[
					{
						title: 'Delete Inquiry',
						icon: <span className='material-symbols-outlined text-[20px]'>delete</span>,
						color: 'text-red-600 hover:text-red-800',
						onClick: (row) => setDeleteTarget(row),
					},
				]}
				keyField='id'
			/>

			{/* Confirm Delete Modal */}
			{deleteTarget && <ConfirmDeleteModal projectTitle={deleteTarget.subject} onCancel={() => setDeleteTarget(null)} onConfirm={() => handleDelete(deleteTarget.id)} />}
		</div>
	);
}
