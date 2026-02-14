import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';
const AddParcel = () => {
    const data = useLoaderData();
    const { register, watch, handleSubmit } = useForm({ defaultValues: { type: "document" } });

    const watchSenderRegion = watch('senderRegion');
    const watchSenderDistrict = watch('senderDistrict');

    const uniqueRegions = [...new Set(data?.map(d => d.region))];
    const senderDistricts = data?.filter(d => d.region === watchSenderRegion);
    const senderDistrictData = data?.find(d => d.district === watchSenderDistrict);

    const watchReceiverRegion = watch("receiverRegion");
    const watchReceiverDistrict = watch("receiverDistrict");

    const receiverDistricts = data?.filter(d => d.region === watchReceiverRegion);
    const receiverDistrictData = data?.find(d => d.district === watchReceiverDistrict);

    return (
        <section className='min-h-screen'>
            <form className="mx-auto max-w-6xl rounded-3xl bg-white p-6 sm:p-8 shadow">
                <div className='  '>
                    <h1 className='text-3xl sm:text-2xl text-teal-900 font-bold'>Add Parcel</h1>
                    <div className='my-6 h-px bg-gray-200'></div>
                    <h2 className='mb-4 text-sm font-semibold text-teal-900'>Enter your parcel details</h2>
                </div>

                {/* radio select */}
                <div className='flex mb-5 gap-6 '>
                    <label className='flex items-center gap-2 text-sm'>
                        <input type='radio' value='document'{...register("type")} />
                        Document
                    </label>
                    <label className='flex items-center gap-2 text-sm'>
                        <input type='radio' value='document'{...register("type")} />
                        Not-Document
                    </label>
                </div>

                {/* name and weight */}
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                    <div >
                        <label className="text-xs text-black font-semibold">Parcel Name</label>
                        <input
                            {...register("parcelName", { required: true })}
                            placeholder='Parcel Name'
                            className='mt-1 w-full rounded-lg border px-3 py-2 text-sm'
                        />
                    </div>
                    <div >
                        <label className="text-xs text-black font-semibold">Parcel Weight(kg)</label>
                        <input
                            type='number'
                            step='0.1'
                            {...register("parcelWeight", { required: true })}
                            placeholder='Parcel Weight(KG)'
                            className='mt-1 w-full rounded-lg border px-3 py-2 text-sm'
                        />
                    </div>
                </div>
                <div className='my-6 h-px bg-gray-200'></div>
                {/* sender and receiver */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {/* sender */}
                    <div>
                        <h3 className="mb-3 text-sm font-semibold text-teal-900">
                            Sender Details
                        </h3>
                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                            <div>
                                <label className="text-xs  text-black font-semibold">sender Name</label>
                                <input
                                    {...register("senderName", { required: true })}
                                    placeholder='Sender Name'
                                    className='mt-1 w-full rounded-lg border px-3 py-2 text-sm'
                                />
                            </div>
                            <div >
                                <label className="text-xs  text-black font-semibold">Sender Contact</label>
                                <input
                                    {...register("senderContact", { required: true })}
                                    placeholder='Sender Contact No'
                                    className='mt-1 w-full rounded-lg border px-3 py-2 text-sm'
                                />
                            </div>

                            {/* Region */}
                            <div className='col-span-2'>
                                <label className="text-xs text-black font-semibold">Select your region</label>
                                <select
                                    {...register('senderRegion', { required: true })}
                                    className='mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2'
                                >
                                    <option value="">Select a region</option>
                                    {uniqueRegions.map((region) => (
                                        <option key={region} value={region}>{region}</option>
                                    ))}
                                </select>
                            </div>

                            {/* District */}
                            <div>
                                <label className="text-xs text-black font-semibold">Select your District</label>
                                <select
                                    {...register('senderDistrict', { required: true })}
                                    disabled={!watchSenderRegion}
                                    className='mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2'
                                >
                                    <option value="">Select a district</option>
                                    {senderDistricts?.map((d) => (
                                        <option key={d.district} value={d.district}>{d.district}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Warehouse (Covered Area) */}
                            <div>
                                <label className="text-xs text-black font-semibold">Select your Wear House</label>
                                <select
                                    {...register('senderWarehouse', { required: true })}
                                    disabled={!watchSenderDistrict}
                                    className='mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2'
                                >
                                    <option value="">Select a Wire House</option>
                                    {senderDistrictData?.covered_area.map((area) => (
                                        <option key={area} value={area}>{area}</option>
                                    ))}
                                </select>
                            </div>
                            {/* textArea */}
                            <div className='sm:col-span-2'> {/* গ্রিড লেআউট ঠিক রাখার জন্য এখানে থাকবে */}
                                <label className="text-xs text-black font-semibold">Pickup instruction</label>
                                <textarea
                                    {...register("pickupInstruction")}
                                    placeholder="Pickup Instruction"
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2"
                                    rows={3}
                                />
                            </div>
                        </div>
                    </div>
                    {/* receiver */}
                    <div>
                        <h3 className="mb-3 text-sm font-semibold text-teal-900">
                            Receiver Details
                        </h3>
                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                            <div>
                                <label className="text-xs  text-black font-semibold">Receiver Name</label>
                                <input
                                    {...register("receiverName", { required: true })}
                                    placeholder='Receiver Name'
                                    className='mt-1 w-full rounded-lg border px-3 py-2 text-sm'
                                />
                            </div>
                            <div >
                                <label className="text-xs  text-black font-semibold">Receiver contact</label>
                                <input
                                    {...register("receiverContact", { required: true })}
                                    placeholder='Receiver Contact No'
                                    className='mt-1 w-full rounded-lg border px-3 py-2 text-sm'
                                />
                            </div>

                            {/* Receiver Region */}
                            <div className='col-span-2'>
                                <label className="text-xs text-black font-semibold">Select Receiver region</label>
                                <select
                                    {...register('receiverRegion', { required: true })}
                                    className='mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2'
                                >
                                    <option value="">Select a region</option>
                                    {uniqueRegions.map((region) => (
                                        <option key={region} value={region}>{region}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Receiver District */}
                            <div>
                                <label className="text-xs text-black font-semibold">Select Receiver District</label>
                                <select
                                    {...register('receiverDistrict', { required: true })}
                                    disabled={!watchReceiverRegion} // এখানে watchReceiverRegion হবে
                                    className='mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2'
                                >
                                    <option value="">Select a district</option>
                                    {receiverDistricts?.map((d) => ( // এখানে receiverDistricts হবে
                                        <option key={d.district} value={d.district}>{d.district}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Receiver Warehouse */}
                            <div>
                                <label className="text-xs text-black font-semibold">Select Receiver Wear House</label>
                                <select
                                    {...register('receiverWarehouse', { required: true })}
                                    disabled={!watchReceiverDistrict} // এখানে watchReceiverDistrict হবে
                                    className='mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2'
                                >
                                    <option value="">Select a Wire House</option>
                                    {receiverDistrictData?.covered_area.map((area) => ( // এখানে receiverDistrictData হবে
                                        <option key={area} value={area}>{area}</option>
                                    ))}
                                </select>
                            </div>

                            {/* textArea */}
                            <div className='sm:col-span-2'>
                                <label className="text-xs text-black font-semibold">Delivery instruction</label>
                                <textarea
                                    {...register("deliveryInstruction")}
                                    placeholder="Delivery Instruction"
                                    // w-full নিশ্চিত করে এটি পুরো চওড়া হবে
                                    // rounded-lg আপনার অন্য ইনপুটগুলোর সাথে মিল রাখবে
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    rows={3}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default AddParcel;