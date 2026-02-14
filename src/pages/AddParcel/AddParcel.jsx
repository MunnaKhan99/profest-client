import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from "sweetalert2";

const AddParcel = () => {
    const data = useLoaderData();
    const { register, watch, handleSubmit } = useForm({ defaultValues: { type: "document" } });

    const [showModal, setShowModal] = useState(false);
    const [priceInfo, setPriceInfo] = useState({ rows: [], total: 0 });


    const watchSenderRegion = watch('senderRegion');
    const watchSenderDistrict = watch('senderDistrict');

    const uniqueRegions = [...new Set(data?.map(d => d.region))];
    const senderDistricts = data?.filter(d => d.region === watchSenderRegion);
    const senderDistrictData = data?.find(d => d.district === watchSenderDistrict);

    const watchReceiverRegion = watch("receiverRegion");
    const watchReceiverDistrict = watch("receiverDistrict");

    const receiverDistricts = data?.filter(d => d.region === watchReceiverRegion);
    const receiverDistrictData = data?.find(d => d.district === watchReceiverDistrict);


    const onSubmit = (formData) => {
        const type = formData.type;
        const weight = Number(formData.parcelWeight || 0);

        const sameDistrict =
            formData.senderDistrict?.toLowerCase() ===
            formData.receiverDistrict?.toLowerCase();

        let rows = [];
        let total = 0;

        if (type === "document") {
            total = sameDistrict ? 60 : 80;
            rows.push({
                label: sameDistrict
                    ? "Document (Within District)"
                    : "Document (Outside District)",
                amount: total,
            });
        } else {
            if (weight <= 3) {
                total = sameDistrict ? 110 : 150;
                rows.push({
                    label: sameDistrict
                        ? "Non-Document up to 3kg (Within District)"
                        : "Non-Document up to 3kg (Outside District)",
                    amount: total,
                });
            } else {
                const extraKg = Math.ceil(weight - 3);
                const base = sameDistrict ? 110 : 150;
                const extra = extraKg * 40;
                const outsideExtra = sameDistrict ? 0 : 40;

                rows.push({ label: "Base price (up to 3kg)", amount: base });
                rows.push({ label: `Extra weight (${extraKg}kg × ৳40)`, amount: extra });
                if (!sameDistrict) {
                    rows.push({ label: "Outside district surcharge", amount: 40 });
                }

                total = base + extra + outsideExtra;
            }
        }

        setPriceInfo({ rows, total });
        setShowModal(true);
    };


    return (
        <section className='min-h-screen mb-10'>
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-6xl rounded-3xl bg-white p-6 sm:p-8 shadow">
                <div className='  '>
                    <h1 className='text-3xl sm:text-2xl text-teal-900 font-bold'>Add Parcel</h1>
                    <div className='my-6 h-px bg-gray-200'></div>
                    <h2 className='mb-4 text-sm font-semibold text-teal-900'>Enter your parcel details</h2>
                </div>

                {/* radio select */}
                <div className='flex mb-5 gap-6 '>
                    <label className='flex items-center gap-2 text-sm'>
                        <input type='radio' value='document' {...register("type")} />
                        Document
                    </label>

                    <label className='flex items-center gap-2 text-sm'>
                        <input type='radio' value='non-document' {...register("type")} />
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
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* sender */}
                    <div>
                        <h3 className="mb-3 text-sm sm:text-base font-semibold text-teal-900">
                            Sender Details
                        </h3>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="text-xs sm:text-sm text-black font-semibold">
                                    Sender Name
                                </label>
                                <input
                                    {...register("senderName", { required: true })}
                                    placeholder="Sender Name"
                                    className="mt-1 w-full rounded-lg border px-3 py-2 text-sm sm:text-base"
                                />
                            </div>

                            <div>
                                <label className="text-xs sm:text-sm text-black font-semibold">
                                    Sender Contact
                                </label>
                                <input
                                    {...register("senderContact", { required: true })}
                                    placeholder="Sender Contact No"
                                    className="mt-1 w-full rounded-lg border px-3 py-2 text-sm sm:text-base"
                                />
                            </div>

                            {/* Region */}
                            <div className="sm:col-span-2">
                                <label className="text-xs sm:text-sm text-black font-semibold">
                                    Select your region
                                </label>
                                <select
                                    {...register("senderRegion", { required: true })}
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2"
                                >
                                    <option value="">Select a region</option>
                                    {uniqueRegions.map((region) => (
                                        <option key={region} value={region}>
                                            {region}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* District */}
                            <div>
                                <label className="text-xs sm:text-sm text-black font-semibold">
                                    Select your District
                                </label>
                                <select
                                    {...register("senderDistrict", { required: true })}
                                    disabled={!watchSenderRegion}
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2"
                                >
                                    <option value="">Select a district</option>
                                    {senderDistricts?.map((d) => (
                                        <option key={d.district} value={d.district}>
                                            {d.district}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Warehouse */}
                            <div>
                                <label className="text-xs sm:text-sm text-black font-semibold">
                                    Select your Warehouse
                                </label>
                                <select
                                    {...register("senderWarehouse", { required: true })}
                                    disabled={!watchSenderDistrict}
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2"
                                >
                                    <option value="">Select a Wire House</option>
                                    {senderDistrictData?.covered_area?.map((area) => (
                                        <option key={area} value={area}>
                                            {area}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Pickup Instruction */}
                            <div className="sm:col-span-2">
                                <label className="text-xs sm:text-sm text-black font-semibold">
                                    Pickup instruction
                                </label>
                                <textarea
                                    {...register("pickupInstruction")}
                                    placeholder="Pickup Instruction"
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2"
                                    rows={3}
                                />
                            </div>
                        </div>
                    </div>

                    {/* receiver */}
                    <div>
                        <h3 className="mb-3 text-sm sm:text-base font-semibold text-teal-900">
                            Receiver Details
                        </h3>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="text-xs sm:text-sm text-black font-semibold">
                                    Receiver Name
                                </label>
                                <input
                                    {...register("receiverName", { required: true })}
                                    placeholder="Receiver Name"
                                    className="mt-1 w-full rounded-lg border px-3 py-2 text-sm sm:text-base"
                                />
                            </div>

                            <div>
                                <label className="text-xs sm:text-sm text-black font-semibold">
                                    Receiver Contact
                                </label>
                                <input
                                    {...register("receiverContact", { required: true })}
                                    placeholder="Receiver Contact No"
                                    className="mt-1 w-full rounded-lg border px-3 py-2 text-sm sm:text-base"
                                />
                            </div>

                            {/* Receiver Region */}
                            <div className="sm:col-span-2">
                                <label className="text-xs sm:text-sm text-black font-semibold">
                                    Select Receiver region
                                </label>
                                <select
                                    {...register("receiverRegion", { required: true })}
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2"
                                >
                                    <option value="">Select a region</option>
                                    {uniqueRegions.map((region) => (
                                        <option key={region} value={region}>
                                            {region}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Receiver District */}
                            <div>
                                <label className="text-xs sm:text-sm text-black font-semibold">
                                    Select Receiver District
                                </label>
                                <select
                                    {...register("receiverDistrict", { required: true })}
                                    disabled={!watchReceiverRegion}
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2"
                                >
                                    <option value="">Select a district</option>
                                    {receiverDistricts?.map((d) => (
                                        <option key={d.district} value={d.district}>
                                            {d.district}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Receiver Warehouse */}
                            <div>
                                <label className="text-xs sm:text-sm text-black font-semibold">
                                    Select Receiver Warehouse
                                </label>
                                <select
                                    {...register("receiverWarehouse", { required: true })}
                                    disabled={!watchReceiverDistrict}
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2"
                                >
                                    <option value="">Select a Wire House</option>
                                    {receiverDistrictData?.covered_area?.map((area) => (
                                        <option key={area} value={area}>
                                            {area}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Delivery Instruction */}
                            <div className="sm:col-span-2">
                                <label className="text-xs sm:text-sm text-black font-semibold">
                                    Delivery instruction
                                </label>
                                <textarea
                                    {...register("deliveryInstruction")}
                                    placeholder="Delivery Instruction"
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2"
                                    rows={3}
                                />
                            </div>
                        </div>
                    </div>
                </div>



                <p className="mt-6 text-xs text-gray-500">
                    * PickUp Time 4pm–7pm Approx.
                </p>

                <button
                    type="submit"
                    className="mt-4 rounded-lg bg-lime-400 px-6 py-2 text-sm font-medium hover:bg-lime-500"
                >
                    Proceed to Confirm Booking
                </button>
            </form>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-[fadeIn_.2s_ease-out]">
                        {/* Header */}
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Price Details
                            </h3>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Price Breakdown */}
                        <div className="space-y-2 text-sm text-gray-700">
                            {priceInfo.rows.map((r, i) => (
                                <div key={i} className="flex justify-between">
                                    <span>{r.label}</span>
                                    <span className="font-medium">৳{r.amount}</span>
                                </div>
                            ))}

                            <div className="mt-3 flex justify-between border-t pt-3 text-base font-semibold text-gray-900">
                                <span>Total</span>
                                <span>৳{priceInfo.total}</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-6 flex items-center justify-end gap-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Edit
                            </button>

                            <button
                                onClick={async () => {
                                    // Close modal first (single modal experience)
                                    setShowModal(false);

                                    const res = await Swal.fire({
                                        title: "Proceed to payment?",
                                        html: `<b>Total payable:</b> ৳${priceInfo.total}`,
                                        icon: "question",
                                        showCancelButton: true,
                                        confirmButtonText: "Pay Now",
                                        cancelButtonText: "Go Back",
                                        confirmButtonColor: "#84cc16", // lime-400
                                    });

                                    if (res.isConfirmed) {
                                        Swal.fire("Success", "Redirecting to payment...", "success");
                                        // navigate("/payment");
                                    }
                                }}
                                className="rounded-lg bg-lime-400 px-4 py-2 text-sm font-semibold text-black hover:bg-lime-500 transition"
                            >
                                Proceed to Payment
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </section>
    );
};

export default AddParcel;