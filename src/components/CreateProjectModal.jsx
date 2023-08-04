import React, { useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const CreateProjectModal = ({ isOpen, setIsOpen }) => {
	const [title, setTitle] = useState("");
	const [level, setLevel] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [link, setLink] = useState("");

	return (
		<div>
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
									<div className="flex justify-start min-h-full flex-1 flex-col px-4 bg-[#19242D] lg:px-5 ">
										{/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
											<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
												Sign in to your account
											</h2>
										</div> */}

										<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
											<form className="space-y-6">
												<div>
													<div className="flex items-center justify-between">
														<label
															htmlFor="title"
															className="block text-sm font-medium leading-6 text-gray-400"
														>
															Title (e.g. File
															Sharing App)
														</label>
													</div>
													<div className="mt-2">
														<input
															value={title}
															onChange={(e) =>
																setTitle(
																	e.target
																		.value
																)
															}
															id="title"
															name="title"
															type="text"
															autoComplete="title"
															className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
														/>
													</div>
												</div>

												<div>
													<div className="flex items-center justify-between">
														<label
															htmlFor="level"
															className="block text-sm font-medium leading-6 text-gray-400"
														>
															Project Level (e.g.
															Beginner)
														</label>
													</div>
													<div className="mt-2">
														<input
															value={level}
															onChange={(e) =>
																setLevel(
																	e.target
																		.value
																)
															}
															id="level"
															name="level"
															type="text"
															autoComplete="level"
															className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
														/>
													</div>
												</div>
												<div>
													<div className="flex items-center justify-between">
														<label
															htmlFor="description"
															className="block text-sm font-medium leading-6 text-gray-400"
														>
															Description
														</label>
													</div>
													<div className="mt-2">
														<textarea
															value={description}
															onChange={(e) =>
																setDescription(
																	e.target
																		.value
																)
															}
															rows={4}
															id="description"
															name="description"
															className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
														></textarea>
													</div>
												</div>
												<div className="col-span-full">
													<label
														htmlFor="cover-photo"
														className="block text-sm font-medium leading-6 text-gray-400"
													>
														Project Image
													</label>
													<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-400 px-6 py-10">
														<div className="text-center">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 24 24"
																fill="currentColor"
																className="mx-auto h-12 w-12 text-gray-300"
															>
																<path
																	fillRule="evenodd"
																	d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
																	clipRule="evenodd"
																/>
															</svg>

															<div className="mt-4 flex text-sm leading-6 text-gray-600">
																<label
																	htmlFor="file-upload"
																	className="relative cursor-pointer rounded-md font-semibold text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-600 focus-within:ring-offset-2 hover:text-red-500"
																>
																	<span>
																		Upload a
																		file
																	</span>
																	<input
																		id="file-upload"
																		name="file-upload"
																		type="file"
																		className="sr-only"
																	/>
																</label>
																<p className="pl-1">
																	or drag and
																	drop
																</p>
															</div>
															<p className="text-xs leading-5 text-gray-600">
																PNG, JPG, GIF up
																to 10MB
															</p>
														</div>
													</div>
												</div>

												<div>
													<div className="flex items-center justify-between">
														<label
															htmlFor="projectlink"
															className="block text-sm font-medium leading-6 text-gray-400"
														>
															Link to project
															(optional)
														</label>
													</div>
													<div className="mt-2">
														<input
															value={link}
															onChange={(e) =>
																setLink(
																	e.target
																		.value
																)
															}
															id="projectlink"
															name="projectlink"
															className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-600 sm:text-sm sm:leading-6"
														/>
													</div>
												</div>
												<div className="flex justify-end pb-6">
													<button
														onClick={() =>
															setIsOpen(false)
														}
														className="flex mr-4 justify-center rounded-md bg-slate-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
													>
														Cancel
													</button>
													<button className="flex justify-center rounded-md bg-rose-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">
														Post
													</button>
												</div>
											</form>
										</div>
									</div>
									{/* <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
										<div className="sm:flex sm:items-start">
											<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
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
														deactivate your account?
														All of your data will be
														permanently removed.
														This action cannot be
														undone.
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
										<button
											type="button"
											className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
											onClick={() => false}
										>
											Deactivate
										</button>
										<button
											type="button"
											className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
											onClick={() => false}
										>
											Cancel
										</button>
									</div> */}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	);
};

export default CreateProjectModal;
