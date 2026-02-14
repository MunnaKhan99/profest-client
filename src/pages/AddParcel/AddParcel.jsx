import React from 'react';
import { useForm } from 'react-hook-form';
const AddParcel = () => {
    const { register } = useForm({ defaultValues: { type: "document" } });
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
                        <label className="text-xs text-gray-600">Parcel Name</label>
                        <input
                            {...register("parcelName", { required: true })}
                            placeholder='Parcel Name'
                            className='mt-1 w-full rounded-lg border px-3 py-2 text-sm'
                        />
                    </div>
                    <div >
                        <label className="text-xs text-gray-600">Parcel Weight(kg)</label>
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
               
            </form>
        </section>
    );
};

export default AddParcel;