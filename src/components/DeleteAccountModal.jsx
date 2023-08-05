import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDeleteUserMutation } from "../features/auth/authApiSlice";
import { toast } from "react-toastify";
import { logOut } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const DeleteAccountModal = ({ isOpen, setIsOpen }) => {
	const dispatch = useDispatch();
	const [deleteUser, { isLoading: isDeleteLoading }] =
		useDeleteUserMutation();

	const handleDeleteAccount = async () => {
		await deleteUser()
			.unwrap()
			.then((result) => {
				dispatch(logOut());
				toast.success(result.message, {
					position: "top-right", // You can adjust the position of the toast
					autoClose: 3000, // The toast will auto-close after 3 seconds
					hideProgressBar: true,
				});
				setTimeout(() => {
					setIsOpen(false);
					window.location.href = "/login";
				}, 3000);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<Transition.Root show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={setIsOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
								<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
									<div className="sm:flex sm:items-start">
										<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="currentColor"
												className="w-6 h-6 text-red-600"
											>
												<path
													fillRule="evenodd"
													d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
											<Dialog.Title
												as="h3"
												className="text-base font-semibold leading-6 text-gray-900"
											>
												Deactivate account
											</Dialog.Title>
											<div className="mt-2">
												<p className="text-sm text-gray-500">
													Are you sure you want to
													deactivate your account? All
													of your data will be
													permanently removed. This
													action cannot be undone.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
									<button
										type="button"
										className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 sm:ml-3 sm:w-auto"
										onClick={handleDeleteAccount}
									>
										{isDeleteLoading
											? "Deactivating..."
											: "Deactivate"}
									</button>
									<button
										type="button"
										className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
										onClick={() => setIsOpen(false)}
									>
										Cancel
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default DeleteAccountModal;
